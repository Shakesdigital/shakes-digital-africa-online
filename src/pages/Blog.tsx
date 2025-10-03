import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      title: "Unlocking Efficiency: Custom Software for Sustainable Operations",
      excerpt: "Research and implementation case studies on bespoke applications designed for unique sustainable challenges...",
      date: "March 15, 2025",
      category: "Custom Software",
      imageUrl: "/placeholder.svg",
      author: {
        name: "Shakes Digital Team",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: "2",
      title: "Web Development Strategies for Resilient Businesses",
      excerpt: "Partnership and scaling tips for responsive platforms that optimize business and community efficiency...",
      date: "March 10, 2025",
      category: "Web Development",
      imageUrl: "/placeholder.svg",
      author: {
        name: "Shakes Digital Team",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: "3",
      title: "Mobile Apps: Empowering Communities on the Move",
      excerpt: "Evaluation and replication examples for user-centric apps enabling on-the-go access and engagement...",
      date: "March 5, 2025",
      category: "Mobile Apps",
      imageUrl: "/placeholder.svg",
      author: {
        name: "Shakes Digital Team",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: "4",
      title: "Harnessing Cloud Services for Environmental Impact",
      excerpt: "Resource mobilization strategies using scalable infrastructure for secure, eco-friendly operations...",
      date: "February 28, 2025",
      category: "Cloud & Database",
      imageUrl: "/placeholder.svg",
      author: {
        name: "Shakes Digital Team",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: "5",
      title: "Database Solutions: Data-Driven Decisions for Sustainability",
      excerpt: "Objective-aligned trends in robust data management for insightful decision-making and sustainability reporting...",
      date: "February 20, 2025",
      category: "Database Solutions",
      imageUrl: "/placeholder.svg",
      author: {
        name: "Shakes Digital Team",
        avatar: "/placeholder.svg"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shakes-blue-dark mb-6">
                Blog: Pioneering Digital Sustainability
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert insights on solutions for community and business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["All", "Custom Software", "Web Development", "Mobile Apps", "Cloud & Database", "Sustainable Challenges"].map((category) => (
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
          <h2 className="text-2xl font-bold mb-4">Subscribe for Cutting-Edge Updates</h2>
          <p className="mb-6">
            Stay informed on Custom Software, Web Development, Mobile Apps, Cloud Services, and Database Solutions for sustainable impact.
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;