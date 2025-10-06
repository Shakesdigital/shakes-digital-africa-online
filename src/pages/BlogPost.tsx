import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Eye } from "lucide-react";
import { format } from "date-fns";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug
  });

  const incrementViewsMutation = useMutation({
    mutationFn: async (postId: string) => {
      const { error } = await supabase
        .rpc('increment', { row_id: postId });

      if (error) {
        // Fallback if RPC doesn't exist
        const { data: currentPost } = await supabase
          .from('blog_posts')
          .select('views_count')
          .eq('id', postId)
          .single();

        if (currentPost) {
          await supabase
            .from('blog_posts')
            .update({ views_count: (currentPost.views_count || 0) + 1 })
            .eq('id', postId);
        }
      }
    }
  });

  useEffect(() => {
    if (post?.id) {
      incrementViewsMutation.mutate(post.id);
    }
  }, [post?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-gray-600 text-lg">Loading article...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-shakes-blue-dark mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog">
              <Button className="btn-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Back Button */}
        <section className="bg-gray-50 py-6">
          <div className="container-custom">
            <Link to="/blog">
              <Button variant="ghost" className="text-shakes-blue-dark">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        {post.featured_image && (
          <section className="bg-gray-900">
            <div className="container-custom">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full max-h-96 object-cover"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="py-16">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-shakes-blue-dark mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              {post.published_at && (
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-shakes-teal" />
                  {format(new Date(post.published_at), 'MMMM dd, yyyy')}
                </span>
              )}
              {post.read_time && (
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-shakes-teal" />
                  {post.read_time} min read
                </span>
              )}
              {post.views_count !== null && (
                <span className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-shakes-teal" />
                  {post.views_count} views
                </span>
              )}
            </div>

            {post.excerpt && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-shakes-teal">
                <p className="text-xl text-gray-700 italic">
                  {post.excerpt}
                </p>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Share this article</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    const url = window.location.href;
                    const text = `Check out this article: ${post.title}`;
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                  }}
                >
                  Share on Twitter
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                  }}
                >
                  Share on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                  }}
                >
                  Share on Facebook
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-shakes-blue-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our digital solutions can help address your challenges
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-shakes-teal hover:bg-shakes-teal-dark text-white">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
