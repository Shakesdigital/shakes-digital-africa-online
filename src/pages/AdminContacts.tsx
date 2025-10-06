import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, Archive, Eye, AlertCircle, Clock, CheckCircle2, Send } from "lucide-react";
import { format } from "date-fns";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  project_type: string | null;
  budget_range: string | null;
  status: 'new' | 'read' | 'replied' | 'archived';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  admin_notes: string | null;
  replied_at: string | null;
  created_at: string;
  updated_at: string;
}

interface MessageResponse {
  subject: string;
  message: string;
  contact_submission_id: string;
}

const AdminContacts: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false);
  const [replySubject, setReplySubject] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");

  // Fetch contact submissions
  const { data: contacts, isLoading } = useQuery({
    queryKey: ['contact_submissions', statusFilter, priorityFilter],
    queryFn: async () => {
      let query = supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }
      if (priorityFilter !== 'all') {
        query = query.eq('priority', priorityFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as ContactSubmission[];
    }
  });

  // Fetch message responses for a contact
  const { data: responses } = useQuery({
    queryKey: ['message_responses', selectedContact?.id],
    queryFn: async () => {
      if (!selectedContact) return [];
      const { data, error } = await supabase
        .from('message_responses')
        .select('*')
        .eq('contact_submission_id', selectedContact.id)
        .order('sent_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!selectedContact
  });

  // Update contact status
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status, priority }: { id: string; status?: string; priority?: string }) => {
      const updates: any = {};
      if (status) updates.status = status;
      if (priority) updates.priority = priority;

      const { error } = await supabase
        .from('contact_submissions')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact_submissions'] });
      toast({ title: "Status updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update status", variant: "destructive" });
    }
  });

  // Save admin notes
  const saveNotesMutation = useMutation({
    mutationFn: async ({ id, notes }: { id: string; notes: string }) => {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ admin_notes: notes })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact_submissions'] });
      toast({ title: "Notes saved successfully" });
    }
  });

  // Send reply
  const sendReplyMutation = useMutation({
    mutationFn: async (response: MessageResponse) => {
      const { error } = await supabase
        .from('message_responses')
        .insert([{
          contact_submission_id: response.contact_submission_id,
          subject: response.subject,
          message: response.message,
          email_sent: true
        }]);

      if (error) throw error;

      // Update contact status to replied
      await supabase
        .from('contact_submissions')
        .update({
          status: 'replied',
          replied_at: new Date().toISOString()
        })
        .eq('id', response.contact_submission_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact_submissions'] });
      queryClient.invalidateQueries({ queryKey: ['message_responses'] });
      setIsReplyDialogOpen(false);
      setReplySubject("");
      setReplyMessage("");
      toast({ title: "Reply sent successfully" });
    },
    onError: () => {
      toast({ title: "Failed to send reply", variant: "destructive" });
    }
  });

  const handleViewContact = (contact: ContactSubmission) => {
    setSelectedContact(contact);
    setAdminNotes(contact.admin_notes || "");

    // Mark as read if it's new
    if (contact.status === 'new') {
      updateStatusMutation.mutate({ id: contact.id, status: 'read' });
    }
  };

  const handleSendReply = () => {
    if (!selectedContact || !replySubject || !replyMessage) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    sendReplyMutation.mutate({
      contact_submission_id: selectedContact.id,
      subject: replySubject,
      message: replyMessage
    });
  };

  const handleSaveNotes = () => {
    if (!selectedContact) return;
    saveNotesMutation.mutate({ id: selectedContact.id, notes: adminNotes });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <AlertCircle className="w-4 h-4" />;
      case 'read': return <Eye className="w-4 h-4" />;
      case 'replied': return <CheckCircle2 className="w-4 h-4" />;
      case 'archived': return <Archive className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'read': return 'bg-yellow-500';
      case 'replied': return 'bg-green-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'normal': return 'bg-blue-500';
      case 'low': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const stats = {
    new: contacts?.filter(c => c.status === 'new').length || 0,
    read: contacts?.filter(c => c.status === 'read').length || 0,
    replied: contacts?.filter(c => c.status === 'replied').length || 0,
    total: contacts?.length || 0
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Requests</h1>
          <p className="text-gray-600 mt-1">Manage and respond to client inquiries</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Read</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.read}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Replied</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.replied}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1">
            <Label>Status</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Label>Priority</Label>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Contact List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact List */}
        <Card className="lg:col-span-1 max-h-[600px] overflow-y-auto">
          <CardHeader>
            <CardTitle>Submissions ({contacts?.length || 0})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {isLoading ? (
              <p>Loading...</p>
            ) : contacts && contacts.length > 0 ? (
              contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                    selectedContact?.id === contact.id ? 'bg-blue-50 border-blue-300' : ''
                  }`}
                  onClick={() => handleViewContact(contact)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{contact.name}</h3>
                    <div className="flex gap-1">
                      <Badge className={`${getStatusColor(contact.status)} text-white text-xs`}>
                        {contact.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{contact.email}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{contact.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">
                      {format(new Date(contact.created_at), 'MMM d, yyyy')}
                    </span>
                    <Badge className={`${getPriorityColor(contact.priority)} text-white text-xs`}>
                      {contact.priority}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No contact submissions found</p>
            )}
          </CardContent>
        </Card>

        {/* Contact Details */}
        <Card className="lg:col-span-2">
          {selectedContact ? (
            <>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{selectedContact.name}</CardTitle>
                    <CardDescription>{selectedContact.email}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" onClick={() => {
                          setReplySubject(`Re: ${selectedContact.project_type || 'Your inquiry'}`);
                          setReplyMessage(`Hi ${selectedContact.name},\n\nThank you for reaching out to Shakes Digital.\n\n`);
                        }}>
                          <Send className="w-4 h-4 mr-2" />
                          Reply
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Send Reply</DialogTitle>
                          <DialogDescription>
                            Compose your response to {selectedContact.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Subject</Label>
                            <Input
                              value={replySubject}
                              onChange={(e) => setReplySubject(e.target.value)}
                              placeholder="Email subject"
                            />
                          </div>
                          <div>
                            <Label>Message</Label>
                            <Textarea
                              value={replyMessage}
                              onChange={(e) => setReplyMessage(e.target.value)}
                              className="min-h-[200px]"
                              placeholder="Your response..."
                            />
                          </div>
                          <Button onClick={handleSendReply} disabled={sendReplyMutation.isPending}>
                            {sendReplyMutation.isPending ? 'Sending...' : 'Send Reply'}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="responses">Responses ({responses?.length || 0})</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Status</Label>
                        <Select
                          value={selectedContact.status}
                          onValueChange={(value) => updateStatusMutation.mutate({ id: selectedContact.id, status: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="read">Read</SelectItem>
                            <SelectItem value="replied">Replied</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Priority</Label>
                        <Select
                          value={selectedContact.priority}
                          onValueChange={(value) => updateStatusMutation.mutate({ id: selectedContact.id, priority: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <Label className="text-gray-600">Company</Label>
                        <p>{selectedContact.company || 'N/A'}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Phone</Label>
                        <p>{selectedContact.phone || 'N/A'}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Project Type</Label>
                        <p>{selectedContact.project_type || 'N/A'}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Budget Range</Label>
                        <p>{selectedContact.budget_range || 'N/A'}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Message</Label>
                        <p className="whitespace-pre-wrap bg-gray-50 p-3 rounded-md">{selectedContact.message}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Submitted</Label>
                        <p>{format(new Date(selectedContact.created_at), 'PPpp')}</p>
                      </div>
                      {selectedContact.replied_at && (
                        <div>
                          <Label className="text-gray-600">Replied</Label>
                          <p>{format(new Date(selectedContact.replied_at), 'PPpp')}</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="responses" className="space-y-4">
                    {responses && responses.length > 0 ? (
                      responses.map((response: any) => (
                        <Card key={response.id}>
                          <CardHeader>
                            <CardTitle className="text-sm">{response.subject}</CardTitle>
                            <CardDescription>
                              {format(new Date(response.sent_at), 'PPpp')}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="whitespace-pre-wrap text-sm">{response.message}</p>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No responses yet</p>
                    )}
                  </TabsContent>

                  <TabsContent value="notes" className="space-y-4">
                    <Textarea
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      className="min-h-[200px]"
                      placeholder="Add internal notes about this contact..."
                    />
                    <Button onClick={handleSaveNotes} disabled={saveNotesMutation.isPending}>
                      {saveNotesMutation.isPending ? 'Saving...' : 'Save Notes'}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-[500px]">
              <div className="text-center text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a contact to view details</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminContacts;
