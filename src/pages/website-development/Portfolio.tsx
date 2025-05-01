
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink } from "lucide-react";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Website Portfolio</h1>
              <p className="text-xl opacity-90 mb-8">
                Explore our diverse collection of website projects delivered for clients across Africa
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Filter Section */}
        <section className="py-16">
          <div className="container-custom">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-12">
                  <TabsTrigger value="all" className="px-6">All Projects</TabsTrigger>
                  <TabsTrigger value="business" className="px-6">Business</TabsTrigger>
                  <TabsTrigger value="ecommerce" className="px-6">eCommerce</TabsTrigger>
                  <TabsTrigger value="education" className="px-6">Education</TabsTrigger>
                  <TabsTrigger value="nonprofit" className="px-6">Nonprofit</TabsTrigger>
                </TabsList>
              </div>
              
              {/* All Projects */}
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "African Safari Adventures",
                      industry: "Tourism",
                      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                      tags: ["Tourism", "Booking System"],
                      description: "A responsive tourism website with integrated booking features, interactive maps, and gallery showcases for a leading safari company.",
                      results: ["250% increase in online bookings", "Improved customer engagement"]
                    },
                    {
                      title: "Kampala Health Center",
                      industry: "Healthcare",
                      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                      tags: ["Healthcare", "Appointment System"],
                      description: "A patient-centered healthcare website with appointment scheduling, doctor profiles, and health resource library.",
                      results: ["40% reduction in phone inquiries", "75% of appointments now booked online"]
                    },
                    {
                      title: "Uganda Learning Portal",
                      industry: "Education",
                      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
                      tags: ["Education", "Portal"],
                      description: "An educational portal connecting students with learning resources, online courses, and academic support services.",
                      results: ["10,000+ registered students", "Expanded reach to rural areas"]
                    },
                    {
                      title: "Jinja Artisan Market",
                      industry: "eCommerce",
                      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                      tags: ["eCommerce", "Marketplace"],
                      description: "An online marketplace showcasing local artisans and their handcrafted products with secure payment integration.",
                      results: ["Connected 50+ local artisans to global markets", "150% sales growth in first year"]
                    },
                    {
                      title: "Sustainable Africa Initiative",
                      industry: "Nonprofit",
                      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                      tags: ["Nonprofit", "Donation Platform"],
                      description: "A nonprofit website with impact stories, donation capabilities, and volunteer management systems.",
                      results: ["35% increase in monthly donations", "Volunteer applications tripled"]
                    },
                    {
                      title: "African Tech Solutions",
                      industry: "Technology",
                      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                      tags: ["Business", "Corporate"],
                      description: "A corporate website showcasing IT services, case studies, and thought leadership content.",
                      results: ["45% increase in quality leads", "Established thought leadership in the industry"]
                    }
                  ].map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge className="bg-shakes-blue-light text-white">
                            {project.industry}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{project.title}</h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="font-bold text-sm text-gray-700 mb-1">Results:</h4>
                          <ul className="text-sm text-gray-600">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-shakes-orange rounded-full"></span>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="border-shakes-blue text-shakes-blue">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <a href="#" className="text-shakes-orange font-medium flex items-center gap-2 hover:gap-3 transition-all">
                          View Case Study <ArrowRight className="h-4 w-4" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Tab content for other categories - would follow same pattern */}
              <TabsContent value="business" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Business websites would be filtered here */}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* eCommerce websites would be filtered here */}
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Education websites would be filtered here */}
                </div>
              </TabsContent>

              <TabsContent value="nonprofit" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Nonprofit websites would be filtered here */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Client Success Stories</h2>
              <p className="section-subtitle mx-auto">
                Hear what our clients say about their websites
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Shakes Digital transformed our online presence with a beautiful website that truly captures our brand. The increase in inquiries and bookings has been remarkable.",
                  name: "Sarah Mwangi",
                  role: "Marketing Director",
                  company: "African Safari Adventures",
                  image: "https://randomuser.me/api/portraits/women/45.jpg"
                },
                {
                  quote: "Working with Shakes Digital was a game-changer for our healthcare center. Their team created an intuitive, accessible website that our patients love using.",
                  name: "Dr. John Ochieng",
                  role: "Medical Director",
                  company: "Kampala Health Center",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  quote: "The educational portal developed by Shakes Digital has completely revolutionized how we connect with students across Uganda and beyond.",
                  name: "Grace Achieng",
                  role: "Program Coordinator",
                  company: "Uganda Learning Initiative",
                  image: "https://randomuser.me/api/portraits/women/68.jpg"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-t-4 border-shakes-blue p-8">
                  <CardContent className="p-0">
                    <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-shakes-blue-dark">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's build a website that showcases your brand and drives results for your business across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
                  Request a Quote
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
