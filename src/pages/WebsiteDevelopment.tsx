
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Code, ArrowRight, Globe, Database, Cloud, Smartphone, Zap, Lock, Monitor, Server, GitBranch, Square, HardDrive } from "lucide-react";

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
                <Badge className="bg-shakes-orange text-white mb-4 px-3 py-1 text-sm">Website Development for African Development</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Websites Addressing Africa's Business & Development Challenges</h1>
                <p className="text-xl opacity-90 mb-8">
                  We design responsive, high-performance websites specifically engineered to overcome Africa's business development barriers—from limited infrastructure and connectivity challenges to market access limitations and poverty alleviation needs across the continent.
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
              <h2 className="section-title">Website Solutions for Africa's Development Challenges</h2>
              <p className="section-subtitle mx-auto">
                We deliver websites engineered to overcome Africa's unique sustainable development and business challenges—driving poverty alleviation, community empowerment, and economic growth across the continent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Africa-Contextualized Design",
                  description: "Websites designed for Africa's realities—low bandwidth environments, limited infrastructure, and diverse community needs—representing your sustainable development or business mission authentically.",
                  icon: <Globe className="h-12 w-12 text-shakes-blue" />
                },
                {
                  title: "Mobile-First for African Markets",
                  description: "Responsive designs optimized for Africa's smartphone-dominant landscape, ensuring accessibility for communities with limited desktop access—critical for poverty alleviation and business inclusion initiatives.",
                  icon: <Code className="h-12 w-12 text-shakes-blue" />
                },
                {
                  title: "African Market Optimization",
                  description: "SEO and content structured for African search patterns, local languages, and regional business development contexts—maximizing visibility for sustainable development projects and African enterprises.",
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
              <h2 className="section-title">Our Africa-Focused Website Development Process</h2>
              <p className="section-subtitle mx-auto">
                A proven approach rooted in understanding Africa's sustainable development and business challenges, delivering websites that drive real impact across the continent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Africa Challenge Research",
                  description: "We research your specific African context—understanding your sustainable development or business challenges, target communities, infrastructure limitations, and development objectives."
                },
                {
                  step: "02",
                  title: "Contextual Design",
                  description: "Our designers create wireframes optimized for Africa's realities—low bandwidth, mobile-first access, and cultural contexts that align with your development or business mission."
                },
                {
                  step: "03",
                  title: "Africa-Optimized Development",
                  description: "We build your website with lightweight code, offline capabilities where needed, and thoroughly test across African connectivity scenarios for maximum accessibility."
                },
                {
                  step: "04",
                  title: "Launch & Impact Support",
                  description: "We deploy your website and provide ongoing support to ensure it continues addressing Africa's evolving sustainable development and business challenges effectively."
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Addressing Africa's Development Challenges</h2>
              <p className="text-xl font-medium mb-8 opacity-90 max-w-2xl mx-auto">
                Our websites come equipped with features specifically designed to overcome Africa's sustainable development and business barriers—from connectivity challenges to community accessibility needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
              {[
                { name: "Low-Bandwidth Optimization for African Infrastructure", icon: <Zap className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Multilingual Support for African Languages", icon: <Globe className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Mobile Money & Local Payment Integration", icon: <Zap className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Community Engagement & Reporting Tools", icon: <Code className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Offline Functionality for Rural Areas", icon: <Server className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Africa-Optimized Performance & Speed", icon: <Zap className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "African Market SEO & Visibility", icon: <Globe className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Impact Measurement & Analytics", icon: <Monitor className="h-5 w-5 text-shakes-blue flex-shrink-0" /> },
                { name: "Enhanced Security for African Contexts", icon: <Lock className="h-5 w-5 text-shakes-blue flex-shrink-0" /> }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {feature.icon}
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">African Development Impact Through Websites</h2>
              <p className="section-subtitle mx-auto">
                See how our websites are addressing sustainable development and business challenges across Africa—from poverty alleviation to community empowerment
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
              <h2 className="section-title">African Organizations Addressing Development Challenges</h2>
              <p className="section-subtitle mx-auto">
                Hear from African organizations and businesses using our websites to tackle sustainable development and business challenges across the continent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Shakes Digital created a website optimized for our African context—it loads quickly even in areas with limited connectivity, enabling us to reach communities we couldn't serve before. Our sustainable tourism initiative now empowers local guides and reduces poverty in rural areas.",
                  name: "Sarah Mwangi",
                  company: "Community Tourism Initiative, Kenya",
                  image: "https://randomuser.me/api/portraits/women/45.jpg"
                },
                {
                  quote: "Their understanding of Africa's infrastructure challenges was crucial. Our website works perfectly on mobile devices with low bandwidth, allowing small businesses across Tanzania to access our digital skills training platform—directly addressing unemployment and poverty alleviation.",
                  name: "John Ochieng",
                  company: "Digital Inclusion Project, Tanzania",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Address Africa's Development Challenges Through Your Website?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's create a website specifically designed to overcome Africa's sustainable development and business barriers—driving poverty alleviation, community empowerment, and economic growth across the continent.
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
                  question: "Do you provide website maintenance for African contexts?",
                  answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and optimized for Africa's evolving infrastructure. Our Africa-based support team understands regional challenges and provides quick response times across African time zones."
                },
                {
                  question: "Can I update the website myself?",
                  answer: "Absolutely! We build most websites on user-friendly content management systems like WordPress, allowing you to easily update content. We also provide training for your team."
                },
                {
                  question: "Will my website work in areas with limited connectivity across Africa?",
                  answer: "Yes, all our websites are built with Africa's realities in mind—mobile-first design for smartphone users, optimized for low bandwidth environments, and tested across various connectivity scenarios typical in African regions to ensure maximum accessibility."
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
