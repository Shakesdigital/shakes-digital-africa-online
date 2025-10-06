import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  published_at: string | null;
  read_time: number | null;
  is_featured: boolean | null;
  views_count: number | null;
  status: string;
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['published-blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    }
  });

  const filteredPosts = blogPosts?.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredPost = filteredPosts?.find(post => post.is_featured);
  const regularPosts = filteredPosts?.filter(post => !post.is_featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-shakes-blue-dark mb-4">
                Insights & Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our latest thoughts on digital transformation, sustainable development, and technology in Africa
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container-custom">
              <h2 className="text-2xl font-bold text-shakes-blue-dark mb-8">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  {featuredPost.featured_image && (
                    <div className="h-64 md:h-full">
                      <img
                        src={featuredPost.featured_image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <Badge className="mb-4">Featured</Badge>
                    <CardTitle className="text-3xl mb-4 text-shakes-blue-dark">
                      {featuredPost.title}
                    </CardTitle>
                    {featuredPost.excerpt && (
                      <CardDescription className="text-lg mb-6">
                        {featuredPost.excerpt}
                      </CardDescription>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      {featuredPost.published_at && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(featuredPost.published_at), 'MMM dd, yyyy')}
                        </span>
                      )}
                      {featuredPost.read_time && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.read_time} min read
                        </span>
                      )}
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="btn-primary">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-shakes-blue-dark mb-8">
              {featuredPost ? 'Latest Articles' : 'All Articles'}
            </h2>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading articles...</p>
              </div>
            ) : regularPosts && regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                    {post.featured_image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl mb-3 text-shakes-blue-dark hover:text-shakes-teal transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      {post.excerpt && (
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        {post.published_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {format(new Date(post.published_at), 'MMM dd, yyyy')}
                          </span>
                        )}
                        {post.read_time && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.read_time} min
                          </span>
                        )}
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full">
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-16">
                  <p className="text-gray-600 text-lg">
                    {searchQuery ? 'No articles found matching your search.' : 'No articles published yet. Check back soon!'}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-shakes-blue-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-gray-300">
              Subscribe to our newsletter for the latest insights on digital transformation in Africa
            </p>
            <Button size="lg" className="bg-shakes-teal hover:bg-shakes-teal-dark text-white">
              Subscribe Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
