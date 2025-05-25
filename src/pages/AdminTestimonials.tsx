
import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminTestimonials: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: session, isLoading: sessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    }
  });

  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      toast({
        title: "Success",
        description: "Testimonial deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete testimonial.",
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
            <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
            <p className="text-gray-600 mt-2">Manage client testimonials and reviews</p>
          </div>
          <Button className="bg-shakes-teal hover:bg-shakes-teal/90">
            <Plus className="h-4 w-4 mr-2" />
            New Testimonial
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-shakes-teal"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials?.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{testimonial.client_name}</CardTitle>
                      {testimonial.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <Badge className={getStatusColor(testimonial.status)}>
                      {testimonial.status}
                    </Badge>
                  </div>
                  {testimonial.client_title && testimonial.client_company && (
                    <p className="text-sm text-gray-600">
                      {testimonial.client_title} at {testimonial.client_company}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {testimonial.avatar_url && (
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.avatar_url} 
                            alt={testimonial.client_name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      {testimonial.rating && (
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                        </div>
                      )}
                    </div>

                    <blockquote className="text-gray-700 italic border-l-4 border-shakes-teal pl-4">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="text-sm text-gray-500">
                      Added: {new Date(testimonial.created_at).toLocaleDateString()}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => deleteMutation.mutate(testimonial.id)}
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

        {!isLoading && testimonials?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No testimonials yet</h3>
            <p className="text-gray-600 mb-4">Add your first client testimonial</p>
            <Button className="bg-shakes-teal hover:bg-shakes-teal/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Testimonial
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminTestimonials;
