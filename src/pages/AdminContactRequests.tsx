import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, Building2, Calendar, Search, Filter } from "lucide-react";
import { format } from "date-fns";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string | null;
  message: string;
  status: 'new' | 'in_progress' | 'responded' | 'closed';
  response: string | null;
  responded_at: string | null;
  created_at: string;
  updated_at: string;
}

const AdminContactRequests: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [responseText, setResponseText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: requests, isLoading } = useQuery({
    queryKey: ['contact-requests', statusFilter],
    queryFn: async () => {
      let query = supabase
        .from('contact_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as ContactRequest[];
    }
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('contact_requests')
        .update({ status })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
      toast({
        title: "Status Updated",
        description: "Contact request status has been updated successfully.",
      });
    },
  });

  const sendResponseMutation = useMutation({
    mutationFn: async ({ id, response }: { id: string; response: string }) => {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase
        .from('contact_requests')
        .update({
          response,
          status: 'responded',
          responded_at: new Date().toISOString(),
          responded_by: user?.id
        })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
      setSelectedRequest(null);
      setResponseText("");
      toast({
        title: "Response Sent",
        description: "Your response has been saved successfully.",
      });
    },
  });

  const filteredRequests = requests?.filter(request =>
    request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (request.company?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      new: "default",
      in_progress: "secondary",
      responded: "outline",
      closed: "destructive"
    };
    return <Badge variant={variants[status] || "default"}>{status.replace('_', ' ').toUpperCase()}</Badge>;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-shakes-blue-dark">Contact Requests</h1>
          <p className="text-gray-600 mt-2">Manage and respond to contact form submissions</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by name, email, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Requests</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="responded">Responded</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="text-center py-12">Loading contact requests...</div>
        ) : filteredRequests && filteredRequests.length > 0 ? (
          <div className="grid gap-4">
            {filteredRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{request.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {request.email}
                          </span>
                          {request.company && (
                            <span className="flex items-center gap-1">
                              <Building2 className="h-4 w-4" />
                              {request.company}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {format(new Date(request.created_at), 'MMM dd, yyyy HH:mm')}
                          </span>
                        </div>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      {getStatusBadge(request.status)}
                      {request.service && (
                        <Badge variant="outline">{request.service}</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-semibold">Message:</Label>
                      <p className="text-gray-700 mt-1 whitespace-pre-wrap">{request.message}</p>
                    </div>

                    {request.response && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <Label className="text-sm font-semibold text-green-800">Your Response:</Label>
                        <p className="text-green-700 mt-1 whitespace-pre-wrap">{request.response}</p>
                        {request.responded_at && (
                          <p className="text-xs text-green-600 mt-2">
                            Responded on {format(new Date(request.responded_at), 'MMM dd, yyyy HH:mm')}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => {
                              setSelectedRequest(request);
                              setResponseText(request.response || "");
                            }}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            {request.response ? 'Update Response' : 'Send Response'}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Respond to {request.name}</DialogTitle>
                            <DialogDescription>
                              Send a response to this contact request
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>Original Message</Label>
                              <div className="bg-gray-50 p-3 rounded-md mt-1">
                                <p className="text-sm text-gray-700">{request.message}</p>
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="response">Your Response</Label>
                              <Textarea
                                id="response"
                                value={responseText}
                                onChange={(e) => setResponseText(e.target.value)}
                                rows={6}
                                placeholder="Type your response here..."
                                className="mt-1"
                              />
                            </div>
                            <Button
                              onClick={() => {
                                if (selectedRequest) {
                                  sendResponseMutation.mutate({
                                    id: selectedRequest.id,
                                    response: responseText
                                  });
                                }
                              }}
                              disabled={!responseText.trim()}
                              className="w-full"
                            >
                              Send Response
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Select
                        value={request.status}
                        onValueChange={(status) =>
                          updateStatusMutation.mutate({ id: request.id, status })
                        }
                      >
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="responded">Responded</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No contact requests found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminContactRequests;
