import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Users, LayoutDashboard, ShoppingCart, Calendar } from "lucide-react";

const AppPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Application Portfolio</h1>
              <p className="text-xl opacity-90 mb-8">
                Discover how our custom web applications have transformed businesses across Africa
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16">
          <div className="container-custom">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-12">
                  <TabsTrigger value="all" className="px-6">All Applications</TabsTrigger>
                  <TabsTrigger value="business" className="px-6">Business Process</TabsTrigger>
                  <TabsTrigger value="customer" className="px-6">Customer Portals</TabsTrigger>
                  <TabsTrigger value="data" className="px-6">Data Solutions</TabsTrigger>
                </TabsList>
              </div>
              
              {/* All Applications */}
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {[
                    {
                      title: "Logistics Management System",
                      client: "Pan-African Transport Solutions",
                      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                      description: "A comprehensive logistics platform that streamlines operations, manages fleets, and provides real-time tracking for deliveries across five African countries.",
                      type: "Business Process",
                      icon: <LayoutDashboard className="h-8 w-8 text-shakes-blue" />,
                      features: ["Fleet management", "Real-time GPS tracking", "Delivery optimization", "Performance analytics"],
                      results: ["35% reduction in operational costs", "65% faster delivery time tracking", "95% improvement in route efficiency"]
                    },
                    {
                      title: "Healthcare Patient Portal",
                      client: "Kampala Medical Network",
                      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                      description: "A secure patient portal allowing appointment scheduling, medical record access, and telehealth consultations for a network of clinics across Uganda.",
                      type: "Customer Portal",
                      icon: <Users className="h-8 w-8 text-shakes-orange" />,
                      features: ["Appointment scheduling", "Medical records access", "Telehealth integration", "Prescription management"],
                      results: ["40% reduction in administrative work", "24/7 access to medical services", "85% patient satisfaction rate"]
                    },
                    {
                      title: "Agricultural Supply Chain Platform",
                      client: "East African Farmers Cooperative",
                      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                      description: "A platform connecting farmers directly to buyers, managing inventory, tracking produce from farm to market, and providing market price analytics.",
                      type: "Business Process",
                      icon: <ShoppingCart className="h-8 w-8 text-shakes-blue" />,
                      features: ["Supply chain visibility", "Marketplace integration", "Mobile accessibility", "Analytics dashboard"],
                      results: ["60% increase in farmer profits", "Reduced waste by 40%", "Connected 2,500+ farmers to markets"]
                    },
                    {
                      title: "Education Management System",
                      client: "Uganda National Education Board",
                      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
                      description: "A comprehensive system managing student data, curriculum planning, exam administration, and performance analytics for 250+ schools.",
                      type: "Data Solution",
                      icon: <Calendar className="h-8 w-8 text-shakes-blue-light" />,
                      features: ["Student information system", "Curriculum management", "Examination platform", "Performance analytics"],
                      results: ["75% reduction in administrative time", "Improved data accuracy by 95%", "Real-time access to educational metrics"]
                    }
                  ].map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg">
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        <div className="sm:col-span-1">
                          <AspectRatio ratio={1/1} className="h-full">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="object-cover w-full h-full"
                            />
                          </AspectRatio>
                        </div>
                        <div className="sm:col-span-2">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              {project.icon}
                              <Badge className="bg-shakes-blue-light text-white">
                                {project.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{project.title}</h3>
                            <p className="text-shakes-orange font-medium mb-3">Client: {project.client}</p>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            
                            <div className="mb-4">
                              <h4 className="font-bold text-gray-700 mb-2">Key Features:</h4>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.features.map((feature, idx) => (
                                  <Badge key={idx} variant="outline" className="border-shakes-blue text-shakes-blue">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <h4 className="font-bold text-gray-700 mb-2">Results:</h4>
                              <ul className="space-y-1">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                                    <span className="w-2 h-2 bg-shakes-orange rounded-full"></span>
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <a href="#" className="text-shakes-orange font-medium flex items-center gap-2 hover:gap-3 transition-all">
                              View Full Case Study <ArrowRight className="h-4 w-4" />
                            </a>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Other tabs would follow the same pattern */}
              <TabsContent value="business" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Business Process apps would be filtered here */}
                </div>
              </TabsContent>
              
              <TabsContent value="customer" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Customer Portal apps would be filtered here */}
                </div>
              </TabsContent>
              
              <TabsContent value="data" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Data Solution apps would be filtered here */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Technology Stack</h2>
              <p className="section-subtitle mx-auto">
                We use modern, reliable technologies to build robust and scalable web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: ["React", "Vue.js", "Angular", "Progressive Web Apps"]
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "Python", "PHP/Laravel", "Java"]
                },
                {
                  category: "Database",
                  technologies: ["MySQL/PostgreSQL", "MongoDB", "Redis", "Firebase"]
                },
                {
                  category: "DevOps",
                  technologies: ["AWS", "Google Cloud", "Docker", "CI/CD Pipelines"]
                }
              ].map((stack, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-shakes-blue-dark">{stack.category}</h3>
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-shakes-orange rounded-full"></span>
                          <span className="text-gray-700">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Client Testimonials</h2>
              <p className="section-subtitle mx-auto">
                What our clients say about their custom web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "The logistics system developed by Shakes Digital has revolutionized our operations. We now have real-time visibility across our entire fleet and have significantly reduced costs.",
                  name: "Robert Mwangi",
                  role: "Operations Director",
                  company: "Pan-African Transport Solutions",
                  image: "https://randomuser.me/api/portraits/men/76.jpg"
                },
                {
                  quote: "Our patient portal has transformed how we deliver healthcare. Patients love the convenience, and our staff can focus more on care rather than administrative tasks.",
                  name: "Dr. Sarah Odhiambo",
                  role: "Chief Medical Officer",
                  company: "Kampala Medical Network",
                  image: "https://randomuser.me/api/portraits/women/45.jpg"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with Custom Web Applications?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can develop a solution tailored to your specific needs and goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
                  Schedule a Demo
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

export default AppPortfolio;
