
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, ArrowRight, ShoppingCart } from "lucide-react";

const EcommerceSolutions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <Badge className="bg-shakes-orange text-white mb-4 px-3 py-1 text-sm">eCommerce Solutions</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sell Online Across Africa & Beyond</h1>
                <p className="text-xl opacity-90 mb-8">
                  Custom eCommerce solutions designed for the unique needs of African businesses, with local payment integration and optimized mobile experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
                    Get Started
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-shakes-orange/20 rounded-lg blur-xl"></div>
                  <AspectRatio ratio={16/9} className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                      alt="eCommerce Development" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Partners Section */}
        <section className="py-10 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <p className="text-gray-600 font-medium">Trusted by local businesses and integrated with:</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { name: "M-Pesa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/320px-M-PESA_LOGO-01.svg.png" },
                { name: "Airtel Money", logo: "https://placeholder.svg" },
                { name: "Pesapal", logo: "https://placeholder.svg" },
                { name: "Equity Bank", logo: "https://placeholder.svg" },
                { name: "DHL", logo: "https://placeholder.svg" }
              ].map((partner, index) => (
                <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-10 md:h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">eCommerce Solutions Tailored for African Markets</h2>
              <p className="section-subtitle mx-auto">
                Our eCommerce platforms are built to address unique regional challenges and opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Payment Integration",
                  description: "Seamlessly integrate with popular African payment methods like M-Pesa, Airtel Money, and local banking options.",
                  icon: <ShoppingCart className="h-12 w-12 text-shakes-blue" />,
                  features: ["Mobile money integration", "Bank transfers", "Payment notifications", "Secure transactions"]
                },
                {
                  title: "Mobile-Optimized Shopping",
                  description: "Create exceptional shopping experiences on smartphones, where the majority of African consumers browse and buy.",
                  icon: <ShoppingCart className="h-12 w-12 text-shakes-blue" />,
                  features: ["Fast loading on 3G/4G", "Low data consumption", "Touch-friendly interfaces", "Offline capabilities"]
                },
                {
                  title: "Delivery & Logistics",
                  description: "Integrate with local delivery services and implement location systems that work with Africa's unique addressing challenges.",
                  icon: <ShoppingCart className="h-12 w-12 text-shakes-blue" />,
                  features: ["Multiple delivery options", "Location mapping", "Delivery tracking", "Cash on delivery"]
                }
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <div className="mb-6 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">{feature.title}</h3>
                    <p className="text-gray-600 text-center mb-6">{feature.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-shakes-orange flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Types */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">eCommerce Solutions for Every Business</h2>
              <p className="section-subtitle mx-auto">
                Whether you're a small business or a large enterprise, we have the right solution for you
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Custom eCommerce Websites",
                  description: "Fully customized online stores built from the ground up to meet your unique business requirements.",
                  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600",
                  features: [
                    "Unique design aligned with your brand",
                    "Custom product catalog and categorization",
                    "Tailored checkout processes",
                    "Integration with existing business systems",
                    "Scalable architecture for growing businesses"
                  ],
                  align: "left"
                },
                {
                  title: "Platform-Based Solutions",
                  description: "Powerful online stores built on established eCommerce platforms, customized for your business needs.",
                  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=600",
                  features: [
                    "WooCommerce and WordPress integration",
                    "Shopify store development and customization",
                    "PrestaShop and Magento solutions",
                    "Faster time-to-market",
                    "Lower development costs with robust features"
                  ],
                  align: "right"
                },
                {
                  title: "Marketplace Development",
                  description: "Multi-vendor marketplace platforms that connect buyers and sellers across Africa.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
                  features: [
                    "Multiple seller accounts and management",
                    "Commission and fee structures",
                    "Vendor and product verification systems",
                    "Integrated messaging and dispute resolution",
                    "Rating and review functionalities"
                  ],
                  align: "left"
                }
              ].map((solution, index) => (
                <div key={index} className={`flex flex-col ${solution.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="flex-1">
                    <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-shakes-blue-dark">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-8 bg-shakes-blue hover:bg-shakes-blue-light text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">African eCommerce Success Stories</h2>
              <p className="section-subtitle mx-auto">
                See how businesses across the region have transformed their operations with our eCommerce solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: "Nairobi Handcrafts",
                  industry: "Retail / Artisanal Goods",
                  description: "A Kenyan artisanal marketplace connecting local craftspeople with global buyers, increasing exports by 200% in the first year.",
                  image: "https://picsum.photos/800/450?random=20",
                  stats: ["200% increase in sales", "65% international orders", "4.8/5 customer rating"]
                },
                {
                  company: "Tanzania Fresh",
                  industry: "Food & Agriculture",
                  description: "An online farmers' market that delivers fresh produce directly to consumers across Dar es Salaam, reducing food waste and increasing farmer profits.",
                  image: "https://picsum.photos/800/450?random=21",
                  stats: ["3,000+ monthly customers", "40% higher farmer earnings", "90% reduction in food waste"]
                },
                {
                  company: "Rwanda Electronics",
                  industry: "Consumer Electronics",
                  description: "Rwanda's first omni-channel electronics retailer, integrating physical stores with an online presence for a seamless customer experience.",
                  image: "https://picsum.photos/800/450?random=22",
                  stats: ["65% growth in online sales", "45% of sales via mobile", "30% increase in customer retention"]
                }
              ].map((story, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={story.image} 
                      alt={story.company}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <Badge className="bg-shakes-blue-light text-white mb-3">
                      {story.industry}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{story.company}</h3>
                    <p className="text-gray-600 mb-6">{story.description}</p>
                    <div className="space-y-2">
                      {story.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-shakes-orange flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{stat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a href="#" className="text-shakes-orange font-medium flex items-center gap-2 hover:gap-3 transition-all">
                        Read Full Case Study <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our eCommerce Clients Say</h2>
              <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto">
                Real feedback from businesses using our eCommerce solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Shakes Digital's eCommerce platform has completely transformed our business. Our sales have increased by 150% and we're now able to reach customers across Africa.",
                  name: "Amina Ibrahim",
                  role: "Founder, Nairobi Fashion House",
                  image: "https://randomuser.me/api/portraits/women/65.jpg"
                },
                {
                  quote: "The mobile optimization and M-Pesa integration made all the difference for our customers. The shopping experience is seamless and our conversion rates have doubled.",
                  name: "David Ochieng",
                  role: "CEO, Kenya Electronics Ltd",
                  image: "https://randomuser.me/api/portraits/men/42.jpg"
                },
                {
                  quote: "Working with Shakes Digital helped us expand from a local shop to serving customers across Tanzania, Uganda, and beyond. Their understanding of regional markets is invaluable.",
                  name: "Grace Mugisha",
                  role: "Operations Director, Tanzanian Spices",
                  image: "https://randomuser.me/api/portraits/women/38.jpg"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur border-none text-white h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-shakes-orange">★</span>
                      ))}
                    </div>
                    <p className="italic mb-8 flex-grow">{testimonial.quote}</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Table */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">eCommerce Features & Capabilities</h2>
              <p className="section-subtitle mx-auto">
                Comprehensive tools and features to power your online business
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 bg-gray-50">Feature</th>
                    <th className="text-center py-4 px-6 bg-gray-50">Standard</th>
                    <th className="text-center py-4 px-6 bg-gray-50">Professional</th>
                    <th className="text-center py-4 px-6 bg-gray-50">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Product Management",
                      standard: true,
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "Mobile Optimization",
                      standard: true,
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "Payment Gateway Integration",
                      standard: "Basic",
                      professional: "Advanced",
                      enterprise: "Custom"
                    },
                    {
                      feature: "Order Management",
                      standard: true,
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "Customer Accounts",
                      standard: true,
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "Inventory Management",
                      standard: "Basic",
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "Analytics & Reports",
                      standard: "Basic",
                      professional: "Advanced",
                      enterprise: "Enterprise-grade"
                    },
                    {
                      feature: "Marketing Tools",
                      standard: false,
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "Multi-currency Support",
                      standard: false,
                      professional: true,
                      enterprise: true
                    },
                    {
                      feature: "API Access",
                      standard: false,
                      professional: "Limited",
                      enterprise: "Full"
                    }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        {typeof row.standard === 'boolean' ? 
                          (row.standard ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : "—") :
                          row.standard}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        {typeof row.professional === 'boolean' ? 
                          (row.professional ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : "—") :
                          row.professional}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        {typeof row.enterprise === 'boolean' ? 
                          (row.enterprise ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : "—") :
                          row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-shakes-blue hover:bg-shakes-blue-light text-white py-3 px-8 text-lg">
                View Detailed Feature Comparison
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Selling Online?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's build an eCommerce solution tailored to your business needs and the unique requirements of African markets.
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
                  View Pricing Options
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
                Common questions about our eCommerce solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How quickly can I launch my online store?",
                  answer: "Depending on complexity, our eCommerce solutions can be launched in as little as 4-6 weeks for standard stores, while custom marketplaces may take 3-4 months to develop and test thoroughly."
                },
                {
                  question: "Which payment methods can you integrate?",
                  answer: "We integrate all major African payment methods including M-Pesa, Airtel Money, Tigo Pesa, bank transfers, credit/debit cards, and international payment options like PayPal for global sales."
                },
                {
                  question: "Can you help with product photography and content?",
                  answer: "Yes, we offer complementary services including professional product photography, content creation, and catalog management to ensure your products are presented optimally."
                },
                {
                  question: "How do you handle delivery and logistics?",
                  answer: "We integrate with local delivery services across Africa and implement location systems that work with the region's unique addressing challenges, including custom delivery zones and rates."
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

export default EcommerceSolutions;
