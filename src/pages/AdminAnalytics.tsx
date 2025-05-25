
import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Eye, FileText, MessageSquare } from "lucide-react";

const AdminAnalytics: React.FC = () => {
  const { data: session, isLoading: sessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    }
  });

  const { data: analytics } = useQuery({
    queryKey: ['analytics-data'],
    queryFn: async () => {
      // Mock analytics data - you can replace with real data from content_analytics table
      const mockData = {
        totalViews: 12543,
        totalPosts: 25,
        totalComments: 142,
        avgReadTime: 4.2,
        monthlyViews: [
          { month: 'Jan', views: 1200 },
          { month: 'Feb', views: 1800 },
          { month: 'Mar', views: 2200 },
          { month: 'Apr', views: 1900 },
          { month: 'May', views: 2500 },
          { month: 'Jun', views: 2800 }
        ],
        contentTypes: [
          { name: 'Blog Posts', value: 45, color: '#1D70A2' },
          { name: 'Portfolio', value: 25, color: '#1DACA2' },
          { name: 'Services', value: 20, color: '#66B9DE' },
          { name: 'Landing Pages', value: 10, color: '#FF6B35' }
        ],
        topContent: [
          { title: 'Top Web Development Trends 2024', views: 1245, type: 'blog' },
          { title: 'Safari Tours Platform', views: 890, type: 'portfolio' },
          { title: 'E-commerce Solutions', views: 654, type: 'service' },
          { title: 'Mobile App Development Guide', views: 532, type: 'blog' }
        ]
      };
      return mockData;
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
          <p className="text-gray-600 mt-2">Track your content performance and engagement</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-3xl font-bold text-gray-900">{analytics?.totalViews.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published Content</p>
                  <p className="text-3xl font-bold text-gray-900">{analytics?.totalPosts}</p>
                </div>
                <div className="p-3 rounded-full bg-green-100">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Comments</p>
                  <p className="text-3xl font-bold text-gray-900">{analytics?.totalComments}</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Read Time</p>
                  <p className="text-3xl font-bold text-gray-900">{analytics?.avgReadTime}m</p>
                </div>
                <div className="p-3 rounded-full bg-orange-100">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Views Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analytics?.monthlyViews}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#1D70A2" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analytics?.contentTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analytics?.contentTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Content */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics?.topContent.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 capitalize">{item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{item.views}</p>
                    <p className="text-sm text-gray-600">views</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
