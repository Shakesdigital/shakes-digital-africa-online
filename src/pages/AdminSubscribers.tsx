import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Mail, UserPlus, Download, Trash2, Search } from "lucide-react";
import { format } from "date-fns";

interface NewsletterSubscription {
  id: string;
  email: string;
  name: string | null;
  status: 'active' | 'unsubscribed' | 'bounced';
  source: string;
  tags: string[];
  preferences: any;
  subscribed_at: string;
  unsubscribed_at: string | null;
  last_email_sent_at: string | null;
  email_count: number;
  created_at: string;
}

const AdminSubscribers: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");

  // Fetch newsletter subscriptions
  const { data: subscriptions, isLoading } = useQuery({
    queryKey: ['newsletter_subscriptions', statusFilter, searchQuery],
    queryFn: async () => {
      let query = supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      if (searchQuery) {
        query = query.or(`email.ilike.%${searchQuery}%,name.ilike.%${searchQuery}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as NewsletterSubscription[];
    }
  });

  // Add subscriber
  const addSubscriberMutation = useMutation({
    mutationFn: async ({ email, name }: { email: string; name?: string }) => {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{
          email,
          name: name || null,
          status: 'active',
          source: 'admin'
        }]);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter_subscriptions'] });
      setIsAddDialogOpen(false);
      setNewEmail("");
      setNewName("");
      toast({ title: "Subscriber added successfully" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to add subscriber",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  // Update subscriber status
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const updates: any = { status };
      if (status === 'unsubscribed') {
        updates.unsubscribed_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter_subscriptions'] });
      toast({ title: "Status updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update status", variant: "destructive" });
    }
  });

  // Delete subscriber
  const deleteSubscriberMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter_subscriptions'] });
      toast({ title: "Subscriber deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete subscriber", variant: "destructive" });
    }
  });

  const handleAddSubscriber = () => {
    if (!newEmail) {
      toast({ title: "Please enter an email address", variant: "destructive" });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    addSubscriberMutation.mutate({ email: newEmail, name: newName });
  };

  const handleExportSubscribers = () => {
    if (!subscriptions || subscriptions.length === 0) {
      toast({ title: "No subscribers to export", variant: "destructive" });
      return;
    }

    const activeSubscribers = subscriptions.filter(s => s.status === 'active');
    const csvContent = [
      ['Email', 'Name', 'Source', 'Subscribed Date'].join(','),
      ...activeSubscribers.map(s => [
        s.email,
        s.name || '',
        s.source,
        format(new Date(s.subscribed_at), 'yyyy-MM-dd')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscribers-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({ title: "Subscribers exported successfully" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'unsubscribed': return 'bg-gray-500';
      case 'bounced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const stats = {
    active: subscriptions?.filter(s => s.status === 'active').length || 0,
    unsubscribed: subscriptions?.filter(s => s.status === 'unsubscribed').length || 0,
    bounced: subscriptions?.filter(s => s.status === 'bounced').length || 0,
    total: subscriptions?.length || 0
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Newsletter Subscribers</h1>
          <p className="text-gray-600 mt-1">Manage your email newsletter subscribers</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="w-4 h-4 mr-2" />
                Add Subscriber
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Subscriber</DialogTitle>
                <DialogDescription>
                  Manually add a subscriber to your newsletter
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="subscriber@example.com"
                  />
                </div>
                <div>
                  <Label>Name (Optional)</Label>
                  <Input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                <Button
                  onClick={handleAddSubscriber}
                  disabled={addSubscriberMutation.isPending}
                  className="w-full"
                >
                  {addSubscriberMutation.isPending ? 'Adding...' : 'Add Subscriber'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={handleExportSubscribers}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Unsubscribed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{stats.unsubscribed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Bounced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.bounced}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1">
            <Label>Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by email or name..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-48">
            <Label>Status</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                <SelectItem value="bounced">Bounced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Subscribers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Subscribers ({subscriptions?.length || 0})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Source</th>
                  <th className="text-left py-3 px-4">Subscribed</th>
                  <th className="text-left py-3 px-4">Emails Sent</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : subscriptions && subscriptions.length > 0 ? (
                  subscriptions.map((subscription) => (
                    <tr key={subscription.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{subscription.email}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{subscription.name || '-'}</td>
                      <td className="py-3 px-4">
                        <Badge className={`${getStatusColor(subscription.status)} text-white`}>
                          {subscription.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 capitalize">{subscription.source}</td>
                      <td className="py-3 px-4">
                        {format(new Date(subscription.subscribed_at), 'MMM d, yyyy')}
                      </td>
                      <td className="py-3 px-4 text-center">{subscription.email_count}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          {subscription.status === 'active' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStatusMutation.mutate({
                                id: subscription.id,
                                status: 'unsubscribed'
                              })}
                            >
                              Unsubscribe
                            </Button>
                          )}
                          {subscription.status === 'unsubscribed' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStatusMutation.mutate({
                                id: subscription.id,
                                status: 'active'
                              })}
                            >
                              Reactivate
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => {
                              if (confirm('Are you sure you want to delete this subscriber?')) {
                                deleteSubscriberMutation.mutate(subscription.id);
                              }
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-500">
                      No subscribers found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSubscribers;
