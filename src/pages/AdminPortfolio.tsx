
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

const AdminPortfolio: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: session, isLoading: sessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    }
  });

  const { data: projects, isLoading } = useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-projects'] });
      toast({
        title: "Success",
        description: "Project deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete project.",
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
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'on_hold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Projects</h1>
            <p className="text-gray-600 mt-2">Manage your project showcase</p>
          </div>
          <Button className="bg-shakes-teal hover:bg-shakes-teal/90">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-shakes-teal"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {project.is_featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status?.replace('_', ' ')}
                    </Badge>
                  </div>
                  {project.client_name && (
                    <p className="text-sm text-gray-600">Client: {project.client_name}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.featured_image && (
                      <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={project.featured_image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="text-sm text-gray-500">
                      <div>Type: {project.project_type}</div>
                      <div>Category: {project.category}</div>
                      {project.completion_date && (
                        <div>Completed: {new Date(project.completion_date).toLocaleDateString()}</div>
                      )}
                    </div>

                    {project.technologies && Array.isArray(project.technologies) && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {(project.technologies as string[]).slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {(project.technologies as string[]).length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{(project.technologies as string[]).length - 3} more
                          </Badge>
                        )}
                      </div>
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
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => deleteMutation.mutate(project.id)}
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

        {!isLoading && projects?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600 mb-4">Add your first project to showcase your work</p>
            <Button className="bg-shakes-teal hover:bg-shakes-teal/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPortfolio;
