
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
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
  Eye,
  Inbox,
  Mail,
  UserPlus
} from "lucide-react";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

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
        { count: publishedBlogPosts },
        { count: contactSubmissionsCount },
        { count: newContactsCount },
        { count: subscribersCount },
        { count: activeSubscribersCount }
      ] = await Promise.all([
        supabase.from('landing_pages').select('*', { count: 'exact', head: true }),
        supabase.from('portfolio_projects').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('testimonials').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
        supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('newsletter_subscriptions').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscriptions').select('*', { count: 'exact', head: true }).eq('status', 'active')
      ]);

      return {
        landingPages: landingPagesCount || 0,
        portfolio: portfolioCount || 0,
        services: servicesCount || 0,
        blogPosts: blogPostsCount || 0,
        testimonials: testimonialsCount || 0,
        publishedPosts: publishedBlogPosts || 0,
        contactSubmissions: contactSubmissionsCount || 0,
        newContacts: newContactsCount || 0,
        subscribers: subscribersCount || 0,
        activeSubscribers: activeSubscribersCount || 0
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
      title: "Contact Requests",
      value: stats?.contactSubmissions || 0,
      icon: Inbox,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      onClick: () => navigate('/admin/contacts')
    },
    {
      title: "New Contacts",
      value: stats?.newContacts || 0,
      icon: MessageSquare,
      color: "text-red-600",
      bgColor: "bg-red-100",
      onClick: () => navigate('/admin/contacts')
    },
    {
      title: "Newsletter Subscribers",
      value: stats?.subscribers || 0,
      icon: Mail,
      color: "text-green-600",
      bgColor: "bg-green-100",
      onClick: () => navigate('/admin/subscribers')
    },
    {
      title: "Active Subscribers",
      value: stats?.activeSubscribers || 0,
      icon: UserPlus,
      color: "text-teal-600",
      bgColor: "bg-teal-100",
      onClick: () => navigate('/admin/subscribers')
    },
    {
      title: "Blog Posts",
      value: stats?.blogPosts || 0,
      icon: PenTool,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      onClick: () => navigate('/admin/blog')
    },
    {
      title: "Published Posts",
      value: stats?.publishedPosts || 0,
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      onClick: () => navigate('/admin/blog')
    },
    {
      title: "Portfolio Projects",
      value: stats?.portfolio || 0,
      icon: Briefcase,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      onClick: () => navigate('/admin/portfolio')
    },
    {
      title: "Testimonials",
      value: stats?.testimonials || 0,
      icon: MessageSquare,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      onClick: () => navigate('/admin/testimonials')
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-2">Welcome to your content management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={card.onClick}
            >
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
            <button
              onClick={() => navigate('/admin/contacts')}
              className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-blue hover:bg-shakes-blue hover:text-white transition-colors"
            >
              <Inbox className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">View Contacts</span>
            </button>
            <button
              onClick={() => navigate('/admin/subscribers')}
              className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-teal hover:bg-shakes-teal hover:text-white transition-colors"
            >
              <Mail className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Manage Subscribers</span>
            </button>
            <button
              onClick={() => navigate('/admin/blog')}
              className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-shakes-blue-light hover:bg-shakes-blue-light hover:text-white transition-colors"
            >
              <PenTool className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Write Blog Post</span>
            </button>
            <button
              onClick={() => navigate('/admin/portfolio')}
              className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Add Portfolio</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
