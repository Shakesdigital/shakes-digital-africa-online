
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Briefcase, 
  Settings, 
  PenTool,
  MessageSquare,
  Users,
  TrendingUp,
  Eye
} from "lucide-react";

const AdminDashboard: React.FC = () => {
  // Fetch dashboard statistics
  const { data: stats } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [
        { count: landingPagesCount },
        { count: portfolioCount },
        { count: servicesCount },
        { count: blogPostsCount },
        { count: testimonialsCount },
        { count: publishedBlogPosts }
      ] = await Promise.all([
        supabase.from('landing_pages').select('*', { count: 'exact', head: true }),
        supabase.from('portfolio_projects').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('testimonials').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'published')
      ]);

      return {
        landingPages: landingPagesCount || 0,
        portfolio: portfolioCount || 0,
        services: servicesCount || 0,
        blogPosts: blogPostsCount || 0,
        testimonials: testimonialsCount || 0,
        publishedPosts: publishedBlogPosts || 0
      };
    }
  });

  // Fetch recent activity
  const { data: recentActivity } = useQuery({
    queryKey: ['recent-activity'],
    queryFn: async () => {
      const { data: recentPosts } = await supabase
        .from('blog_posts')
        .select('title, created_at, status')
        .order('created_at', { ascending: false })
        .limit(5);

      const { data: recentProjects } = await supabase
        .from('portfolio_projects')
        .select('title, created_at, status')
        .order('created_at', { ascending: false })
        .limit(5);

      return {
        posts: recentPosts || [],
        projects: recentProjects || []
      };
    }
  });

  const dashboardCards = [
    {
      title: "Landing Pages",
      value: stats?.landingPages || 0,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Portfolio Projects",
      value: stats?.portfolio || 0,
      icon: Briefcase,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Services",
      value: stats?.services || 0,
      icon: Settings,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Blog Posts",
      value: stats?.blogPosts || 0,
      icon: PenTool,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Published Posts",
      value: stats?.publishedPosts || 0,
      icon: Eye,
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      title: "Testimonials",
      value: stats?.testimonials || 0,
      icon: MessageSquare,
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-2">Welcome to your content management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${card.bgColor}`}>
                    <Icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity?.posts.map((post, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{post.title}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.status === 'published' 
                      ? 'bg-green-100 text-green-800'
                      : post.status === 'draft'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {post.status}
                  </span>
                </div>
              ))}
              {(!recentActivity?.posts || recentActivity.posts.length === 0) && (
                <p className="text-gray-500 text-center py-4">No blog posts yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Portfolio Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity?.projects.map((project, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{project.title}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(project.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'in_progress'
                      ? 'bg-blue-100 text-blue-800'
                      : project.status === 'planning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status?.replace('_', ' ')}
                  </span>
                </div>
              ))}
              {(!recentActivity?.projects || recentActivity.projects.length === 0) && (
                <p className="text-gray-500 text-center py-4">No portfolio projects yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-blue hover:bg-shakes-blue hover:text-white transition-colors">
              <FileText className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">New Landing Page</span>
            </button>
            <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-teal hover:bg-shakes-teal hover:text-white transition-colors">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Add Portfolio</span>
            </button>
            <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-blue-light hover:bg-shakes-blue-light hover:text-white transition-colors">
              <PenTool className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Write Blog Post</span>
            </button>
            <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-orange hover:bg-shakes-orange hover:text-white transition-colors">
              <Settings className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Add Service</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
