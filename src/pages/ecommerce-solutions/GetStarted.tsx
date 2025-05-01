
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with eCommerce</h1>
              <p className="text-xl opacity-90 mb-8">
                Begin your journey to online sales success with our tailored eCommerce solutions for African businesses
              </p>
              <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white px-8 py-3 text-lg">
                Start Your Store Now
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-shakes-blue-dark">Why Choose Shakes Digital for Your eCommerce Store?</h2>
                <p className="text-gray-600 mb-8">
                  We understand the unique challenges and opportunities of selling online in Africa. Our eCommerce solutions are specifically designed to help local businesses succeed in the digital marketplace with:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Africa-focused payment gateway integrations",
                    "Mobile-optimized shopping experiences",
                    "Multilingual store options",
                    "Local shipping and delivery integrations",
                    "Customized to your specific business needs",
                    "Ongoing support and maintenance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                    alt="eCommerce dashboard"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Options Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">eCommerce Platform Options</h2>
              <p className="section-subtitle mx-auto">
                Choose the right solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Built Store",
                  description: "A fully customized online store built from the ground up to match your exact business requirements and brand vision.",
                  bestFor: "Established businesses with specific workflows and integration needs",
                  features: ["Complete customization", "Unique functionality", "Seamless integration with existing systems", "Full ownership of code"],
                  timeframe: "8-12 weeks",
                  button: "Request Custom Quote"
                },
                {
                  title: "WooCommerce Solution",
                  description: "Built on WordPress, this flexible platform allows for extensive customization while leveraging the power of existing plugins.",
                  bestFor: "Small to medium businesses looking for flexibility and growth",
                  features: ["Easy content management", "Thousands of plugins", "Customizable design", "Scalable as you grow"],
                  timeframe: "4-6 weeks",
                  button: "Choose WooCommerce"
                },
                {
                  title: "Shopify Development",
                  description: "Get up and running quickly with a hosted solution that includes hosting, security, and payment processing out of the box.",
                  bestFor: "New businesses wanting a quick, reliable start with minimal technical overhead",
                  features: ["Fast setup", "Built-in payment processing", "Easy inventory management", "Mobile-ready themes"],
                  timeframe: "2-4 weeks",
                  button: "Choose Shopify"
                }
              ].map((platform, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark">{platform.title}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    
                    <div className="mb-4">
                      <p className="font-medium text-shakes-blue">Best for:</p>
                      <p className="text-gray-600">{platform.bestFor}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="font-medium text-shakes-blue mb-2">Key Features:</p>
                      <ul className="space-y-2">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-shakes-orange flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="h-4 w-4 text-shakes-blue-light" />
                      <span className="text-gray-600">Typical timeframe: {platform.timeframe}</span>
                    </div>
                    
                    <Button className="w-full bg-shakes-blue hover:bg-shakes-blue-light text-white">
                      {platform.button}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Process Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Our eCommerce Setup Process</h2>
              <p className="section-subtitle mx-auto">
                From concept to launch, we'll guide you through every step
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description: "We learn about your business, products, target audience, and goals to create a strategic plan for your online store.",
                    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                    align: "left"
                  },
                  {
                    step: "02",
                    title: "Store Design",
                    description: "Our designers create a visually appealing, branded, and user-friendly interface for your eCommerce store.",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                    align: "right"
                  },
                  {
                    step: "03",
                    title: "Development & Configuration",
                    description: "We build your store with all necessary features, payment gateways, shipping methods, and product catalog.",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                    align: "left"
                  },
                  {
                    step: "04",
                    title: "Testing & Launch",
                    description: "We thoroughly test all functions and prepare for a smooth launch of your new online store.",
                    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                    align: "right"
                  },
                  {
                    step: "05",
                    title: "Training & Support",
                    description: "We provide comprehensive training on store management and ongoing support to ensure your continued success.",
                    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                    align: "left"
                  }
                ].map((process, index) => (
                  <div key={index} className={`flex flex-col ${process.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-block px-3 py-1 bg-shakes-blue text-white rounded-full font-bold mb-3">Step {process.step}</div>
                      <h3 className="text-2xl font-bold mb-3 text-shakes-blue-dark">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                    
                    <div className="hidden lg:block relative z-10 w-12 h-12 rounded-full bg-shakes-orange flex items-center justify-center text-white font-bold">
                      {process.step}
                    </div>
                    
                    <div className="flex-1">
                      <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={process.image} 
                          alt={process.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Ready to Get Started?</h2>
              <p className="section-subtitle mx-auto">
                Fill out the form below to begin your eCommerce journey
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Tell Us About Your Project</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <Input 
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Business Name*</label>
                      <Input 
                        id="company"
                        type="text"
                        placeholder="Your business name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Business Industry*</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail/Fashion</SelectItem>
                          <SelectItem value="electronics">Electronics/Gadgets</SelectItem>
                          <SelectItem value="food">Food/Grocery</SelectItem>
                          <SelectItem value="beauty">Beauty/Health</SelectItem>
                          <SelectItem value="home">Home/Furniture</SelectItem>
                          <SelectItem value="art">Art/Crafts</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-1">Preferred Platform</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom">Custom Built</SelectItem>
                          <SelectItem value="woocommerce">WooCommerce</SelectItem>
                          <SelectItem value="shopify">Shopify</SelectItem>
                          <SelectItem value="undecided">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-1">Number of Products</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-500">101-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Launch Timeline</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1month">Within 1 month</SelectItem>
                          <SelectItem value="3months">Within 3 months</SelectItem>
                          <SelectItem value="6months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Project Requirements*</label>
                      <Textarea 
                        id="requirements"
                        placeholder="Tell us about your eCommerce store needs, specific features required, and any questions you have"
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="bg-shakes-orange hover:bg-shakes-orange-light text-white w-full py-3">
                    Submit and Get Started
                  </Button>
                </form>
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
                Common questions about getting started with eCommerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does it take to launch an eCommerce store?",
                  answer: "The timeline varies depending on the complexity and platform. Simple Shopify stores can be up in 2-4 weeks, while custom solutions may take 8-12 weeks. We'll provide you with a specific timeline during our initial consultation."
                },
                {
                  question: "What payment methods can you integrate?",
                  answer: "We integrate all major African payment gateways including M-Pesa, Flutterwave, Paystack, and international options like PayPal, Stripe, and credit cards to ensure your customers can pay with their preferred methods."
                },
                {
                  question: "Can I manage the store myself after launch?",
                  answer: "Yes! We provide comprehensive training and documentation so you can manage products, orders, and content. Our solutions are designed to be user-friendly while still offering powerful features."
                },
                {
                  question: "Do you offer ongoing support after launch?",
                  answer: "Absolutely. We offer various support packages to ensure your store remains secure, updated, and optimized. Our team is based in Uganda and available during business hours to assist with any issues."
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

export default GetStarted;
