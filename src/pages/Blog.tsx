import React from "react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
}

const Blog: React.FC = () => {
  // Sample blog posts data - in production, this would come from your CMS or API
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of E-commerce in East Africa",
      excerpt: "Discover how digital transformation is reshaping the retail landscape across East Africa...",
      date: "May 1, 2025",
      category: "E-commerce",
      imageUrl: "/placeholder.svg",
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: "2",
      title: "Web Development Trends in 2025",
      excerpt: "Exploring the latest technologies and frameworks shaping modern web development...",
      date: "April 28, 2025",
      category: "Web Development",
      imageUrl: "/placeholder.svg",
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg"
      }
    },
    // Add more sample posts as needed
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-shakes-blue-dark mb-4">
            Shakes Digital Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and trends in digital technology, web development, 
            and innovation across Africa
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["All", "Web Development", "E-commerce", "Digital Innovation", "Technology"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-shakes-teal">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-shakes-blue-dark mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <Button variant="link" className="text-shakes-teal">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-shakes-blue-dark text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              required
            />
            <Button className="bg-shakes-teal hover:bg-shakes-teal-dark">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;