
import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, UserCheck, UserX, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminUsers: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: session, isLoading: sessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    }
  });

  const { data: adminUsers, isLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('admin_profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('admin_profiles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast({
        title: "Success",
        description: "User removed successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to remove user.",
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

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'editor': return 'bg-blue-100 text-blue-800';
      case 'author': return 'bg-green-100 text-green-800';
      case 'viewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-2">Manage admin users and their permissions</p>
          </div>
          <Button className="bg-shakes-blue hover:bg-shakes-blue-dark">
            <Plus className="h-4 w-4 mr-2" />
            Invite User
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-shakes-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminUsers?.map((user) => (
              <Card key={user.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-shakes-blue rounded-full flex items-center justify-center">
                      {user.avatar_url ? (
                        <img 
                          src={user.avatar_url} 
                          alt={user.full_name || 'User'}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-semibold">
                          {(user.full_name || 'U').charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{user.full_name || 'Unnamed User'}</CardTitle>
                      <Badge className={getRoleColor(user.role || 'viewer')}>
                        <Shield className="h-3 w-3 mr-1" />
                        {(user.role || 'viewer').charAt(0).toUpperCase() + (user.role || 'viewer').slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500">
                      <div>ID: {user.id.slice(0, 8)}...</div>
                      <div>Joined: {new Date(user.created_at).toLocaleDateString()}</div>
                      <div>Last updated: {new Date(user.updated_at).toLocaleDateString()}</div>
                    </div>

                    {user.permissions && Array.isArray(user.permissions) && user.permissions.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Permissions:</p>
                        <div className="flex flex-wrap gap-1">
                          {(user.permissions as string[]).slice(0, 3).map((permission, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                          {(user.permissions as string[]).length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{(user.permissions as string[]).length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <UserCheck className="h-4 w-4 mr-1" />
                        Permissions
                      </Button>
                      {user.id !== session.user.id && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => deleteMutation.mutate(user.id)}
                          disabled={deleteMutation.isPending}
                          className="text-red-600 hover:text-red-700"
                        >
                          <UserX className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!isLoading && adminUsers?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No admin users yet</h3>
            <p className="text-gray-600 mb-4">Invite your first admin user to get started</p>
            <Button className="bg-shakes-blue hover:bg-shakes-blue-dark">
              <Plus className="h-4 w-4 mr-2" />
              Invite First User
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
