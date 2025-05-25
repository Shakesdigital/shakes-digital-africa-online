
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLandingPages: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: session, isLoading: sessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    }
  });

  const { data: landingPages, isLoading } = useQuery({
    queryKey: ['landing-pages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('landing_pages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('landing_pages')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['landing-pages'] });
      toast({
        title: "Success",
        description: "Landing page deleted successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete landing page.",
        variant: "destructive",
      });
    }
  });

  if (sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-shakes-blue"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Landing Pages</h1>
            <p className="text-gray-600 mt-2">Manage your website landing pages</p>
          </div>
          <Button className="bg-shakes-blue hover:bg-shakes-blue-dark">
            <Plus className="h-4 w-4 mr-2" />
            New Landing Page
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-shakes-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingPages?.map((page) => (
              <Card key={page.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{page.title}</CardTitle>
                    <Badge className={getStatusColor(page.status)}>
                      {page.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">/{page.slug}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500">
                      Created: {new Date(page.created_at).toLocaleDateString()}
                      {page.published_at && (
                        <div>Published: {new Date(page.published_at).toLocaleDateString()}</div>
                      )}
                    </div>
                    
                    {page.is_ab_test && (
                      <Badge variant="outline" className="text-xs">
                        A/B Test: {page.ab_test_group}
                      </Badge>
                    )}

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      {page.status === 'published' && (
                        <Button variant="outline" size="sm">
                          <Globe className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => deleteMutation.mutate(page.id)}
                        disabled={deleteMutation.isPending}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!isLoading && landingPages?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No landing pages yet</h3>
            <p className="text-gray-600 mb-4">Create your first landing page to get started</p>
            <Button className="bg-shakes-blue hover:bg-shakes-blue-dark">
              <Plus className="h-4 w-4 mr-2" />
              Create Landing Page
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminLandingPages;
