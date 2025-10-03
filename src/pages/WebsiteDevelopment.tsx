
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Code, ArrowRight, Globe } from "lucide-react";

const WebsiteDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <Badge className="bg-shakes-orange text-white mb-4 px-3 py-1 text-sm">Website Development</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Custom Websites That Drive Results</h1>
                <p className="text-xl opacity-90 mb-8">
                  We design and develop responsive, high-performance websites tailored to your brand and business goals, helping African businesses establish a powerful online presence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
                    Request a Quote
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
                    See Our Work
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-shakes-orange/20 rounded-lg blur-xl"></div>
                  <AspectRatio ratio={16/9} className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Website Development" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Choose Our Website Development</h2>
              <p className="section-subtitle mx-auto">
                We deliver websites that not only look great but drive real business results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Design & Development",
                  description: "Unique, brand-aligned websites that stand out from templates and represent your business authentically.",
                  icon: <Globe className="h-12 w-12 text-shakes-blue" />
                },
                {
                  title: "Mobile-First Approach",
                  description: "Responsive designs that work flawlessly across all devices, ensuring you never lose a mobile visitor.",
                  icon: <Code className="h-12 w-12 text-shakes-blue" />
                },
                {
                  title: "Local Optimization",
                  description: "SEO-optimized code and content structured for African markets and search patterns.",
                  icon: <CheckCircle className="h-12 w-12 text-shakes-blue" />
                }
              ].map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="mb-6 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">{benefit.title}</h3>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Website Development Process</h2>
              <p className="section-subtitle mx-auto">
                A proven approach to creating websites that deliver value and exceed expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We learn about your business, goals, target audience, and competitors to create a strategic plan."
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description: "Our designers create wireframes and visual designs that align with your brand and business objectives."
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "Our developers build your website with clean code and thoroughly test it for quality assurance."
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "We deploy your website and provide ongoing support and maintenance to ensure continued success."
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold opacity-10 absolute -top-6 left-0">{process.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark mt-6">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-[-25%] transform -translate-y-1/2">
                      <ArrowRight className="text-shakes-orange h-8 w-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Features & Capabilities</h2>
              <p className="text-xl font-medium mb-8 opacity-90 max-w-2xl mx-auto">
                Modern websites need more than just good looks. Our websites come equipped with everything you need to succeed online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
              {[
                "Content Management Systems",
                "Multilingual Support",
                "Social Media Integration",
                "Contact Forms & Lead Capture",
                "Image & Video Galleries",
                "Performance Optimization",
                "Local SEO Implementation",
                "Analytics & Tracking",
                "Security Measures"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Recent Website Projects</h2>
              <p className="section-subtitle mx-auto">
                See how we've helped businesses across Africa establish a powerful online presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden border-none shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={`https://picsum.photos/800/450?random=${item}`} 
                      alt={`Website Project ${item}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <Badge className="bg-shakes-blue-light text-white mb-3">
                      {["Tourism", "Healthcare", "Education"][item - 1]}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">
                      {["Africa Tours", "Nairobi Health Center", "Kenya Education Portal"][item - 1]}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {[
                        "A responsive tourism website with booking features and interactive maps.",
                        "A patient-centered healthcare website with appointment scheduling.",
                        "An educational portal connecting students with learning resources."
                      ][item - 1]}
                    </p>
                    <a href="#" className="text-shakes-orange font-medium flex items-center gap-2 hover:gap-3 transition-all">
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-2 border-shakes-blue text-shakes-blue hover:bg-shakes-blue hover:text-white py-3 px-6 text-lg">
                View All Website Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle mx-auto">
                Hear from businesses that have transformed their online presence with our websites
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Shakes Digital transformed our business with a beautiful, functional website that has significantly increased our online inquiries and bookings.",
                  name: "Sarah Mwangi",
                  company: "Adventure Africa",
                  image: "https://randomuser.me/api/portraits/women/45.jpg"
                },
                {
                  quote: "Their team understood our unique needs and delivered a website that perfectly represents our brand and has helped us expand our customer base across Tanzania.",
                  name: "John Ochieng",
                  company: "Dar Tech Solutions",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
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
                        <p className="text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's create a website that represents your brand, engages your audience, and drives business growth across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg"
                >
                  Request a Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle mx-auto">
                Common questions about our website development services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does it take to build a website?",
                  answer: "Typical website projects take 4-8 weeks from concept to launch, depending on complexity and content requirements. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you provide website maintenance?",
                  answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our support team is based in Africa for quick response times."
                },
                {
                  question: "Can I update the website myself?",
                  answer: "Absolutely! We build most websites on user-friendly content management systems like WordPress, allowing you to easily update content. We also provide training for your team."
                },
                {
                  question: "Will my website work on mobile devices?",
                  answer: "Yes, all our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktop computers."
                }
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
