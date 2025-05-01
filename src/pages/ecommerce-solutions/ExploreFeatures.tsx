
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ShoppingCart, CreditCard, Truck, Smartphone, Search, Globe, ChartBar } from "lucide-react";

const ExploreFeatures: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">eCommerce Features & Capabilities</h1>
              <p className="text-xl opacity-90 mb-8">
                Discover the powerful features that drive successful online stores across Africa
              </p>
            </div>
          </div>
        </section>

        {/* Feature Categories Section */}
        <section className="py-16">
          <div className="container-custom">
            <Tabs defaultValue="core" className="w-full">
              <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                <TabsList className="h-12">
                  <TabsTrigger value="core" className="px-6">Core Features</TabsTrigger>
                  <TabsTrigger value="payments" className="px-6">Payment Solutions</TabsTrigger>
                  <TabsTrigger value="shipping" className="px-6">Shipping & Delivery</TabsTrigger>
                  <TabsTrigger value="mobile" className="px-6">Mobile Experience</TabsTrigger>
                  <TabsTrigger value="marketing" className="px-6">Marketing Tools</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Core Features Tab */}
              <TabsContent value="core" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-shakes-blue-dark">Core Store Functionality</h2>
                    <p className="text-gray-600 mb-8">
                      Our eCommerce solutions include all the essential features needed to run a successful online store, optimized for the African market:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "User-friendly product catalog with categories and filters",
                        "Secure customer accounts and order history",
                        "Powerful inventory management system",
                        "Flexible product options (sizes, colors, variations)",
                        "Product reviews and ratings",
                        "Abandoned cart recovery",
                        "Order management and processing tools",
                        "Discount and coupon code functionality"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="Core eCommerce features"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-blue/10 flex items-center justify-center">
                          <ShoppingCart className="w-8 h-8 text-shakes-blue" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Intuitive Shopping Experience</h3>
                      <p className="text-gray-600 text-center">
                        User-friendly navigation and shopping cart designed to maximize conversions and minimize abandonment.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-orange/10 flex items-center justify-center">
                          <Search className="w-8 h-8 text-shakes-orange" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Advanced Search & Filtering</h3>
                      <p className="text-gray-600 text-center">
                        Powerful search functionality with filters to help customers quickly find exactly what they're looking for.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-blue-light/10 flex items-center justify-center">
                          <ChartBar className="w-8 h-8 text-shakes-blue-light" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Sales & Performance Analytics</h3>
                      <p className="text-gray-600 text-center">
                        Comprehensive reporting tools to track sales, customer behavior, and store performance.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Payment Solutions Tab */}
              <TabsContent value="payments" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-shakes-blue-dark">Africa-Focused Payment Solutions</h2>
                    <p className="text-gray-600 mb-8">
                      We integrate payment gateways that work seamlessly across Africa, ensuring your customers can pay using their preferred methods:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Mobile money integration (M-Pesa, MTN MoMo, Airtel Money)",
                        "Local payment gateways (Flutterwave, Paystack, DPO)",
                        "International options (PayPal, Stripe, credit cards)",
                        "Secure payment processing with fraud protection",
                        "Multiple currency support",
                        "Flexible payment options (full payment, deposits)",
                        "Automatic tax calculation and VAT handling",
                        "Subscription and recurring payment options"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4"
                        alt="Payment solutions"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-blue/10 flex items-center justify-center">
                          <CreditCard className="w-8 h-8 text-shakes-blue" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Secure Transactions</h3>
                      <p className="text-gray-600 text-center">
                        PCI-compliant payment processing with advanced security features to protect customer data.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-orange/10 flex items-center justify-center">
                          <Globe className="w-8 h-8 text-shakes-orange" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Multi-Currency Support</h3>
                      <p className="text-gray-600 text-center">
                        Accept payments in multiple currencies with automatic exchange rate calculations.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-blue-light/10 flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-shakes-blue-light" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Mobile Money Integration</h3>
                      <p className="text-gray-600 text-center">
                        Seamless connections to popular mobile payment platforms used across Africa.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Shipping & Delivery Tab */}
              <TabsContent value="shipping" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-shakes-blue-dark">Shipping & Delivery Solutions</h2>
                    <p className="text-gray-600 mb-8">
                      Our eCommerce platforms include comprehensive shipping and delivery management tools designed for African logistics challenges:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Integration with local delivery services across Africa",
                        "Real-time shipping rate calculations",
                        "Multiple shipping methods and speed options",
                        "Address verification and validation",
                        "Automated shipping label generation",
                        "Order tracking and delivery notifications",
                        "Local pickup options for physical stores",
                        "Custom shipping rules based on weight, location, and value"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                        alt="Shipping and delivery"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-blue/10 flex items-center justify-center">
                          <Truck className="w-8 h-8 text-shakes-blue" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Local Logistics Integration</h3>
                      <p className="text-gray-600 text-center">
                        Connect with trusted delivery providers across Africa for reliable order fulfillment.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-orange/10 flex items-center justify-center">
                          <Globe className="w-8 h-8 text-shakes-orange" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Address Challenges Solved</h3>
                      <p className="text-gray-600 text-center">
                        Smart address handling for areas without formal addressing systems common in many African regions.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-shakes-blue-light/10 flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-shakes-blue-light" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">Delivery Notifications</h3>
                      <p className="text-gray-600 text-center">
                        Automated SMS and email updates to keep customers informed about their order status and delivery progress.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Mobile Experience Tab */}
              <TabsContent value="mobile" className="mt-0">
                {/* Content would follow similar pattern to above tabs */}
              </TabsContent>
              
              {/* Marketing Tools Tab */}
              <TabsContent value="marketing" className="mt-0">
                {/* Content would follow similar pattern to above tabs */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Platform Comparison</h2>
              <p className="section-subtitle mx-auto">
                Compare features across our different eCommerce platform options
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-shakes-blue text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Custom Solution</th>
                    <th className="p-4 text-center">WooCommerce</th>
                    <th className="p-4 text-center">Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Complete Customization",
                      custom: true,
                      woo: true,
                      shopify: false
                    },
                    {
                      feature: "Mobile Money Integration",
                      custom: true,
                      woo: true,
                      shopify: true
                    },
                    {
                      feature: "Local Payment Gateways",
                      custom: true,
                      woo: true,
                      shopify: true
                    },
                    {
                      feature: "Unlimited Products",
                      custom: true,
                      woo: true,
                      shopify: "Premium"
                    },
                    {
                      feature: "Multi-language Support",
                      custom: true,
                      woo: true,
                      shopify: "Premium"
                    },
                    {
                      feature: "Custom Checkout Flow",
                      custom: true,
                      woo: true,
                      shopify: "Limited"
                    },
                    {
                      feature: "Third-party Integrations",
                      custom: true,
                      woo: true,
                      shopify: true
                    },
                    {
                      feature: "Development Complexity",
                      custom: "High",
                      woo: "Medium",
                      shopify: "Low"
                    },
                    {
                      feature: "Implementation Time",
                      custom: "8-12 weeks",
                      woo: "4-6 weeks",
                      shopify: "2-4 weeks"
                    },
                    {
                      feature: "Hosting Requirements",
                      custom: "Custom",
                      woo: "Self-hosted",
                      shopify: "Included"
                    }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 border font-medium">{row.feature}</td>
                      <td className="p-4 border text-center">
                        {typeof row.custom === "boolean" ? 
                          (row.custom ? <CheckCircle className="h-5 w-5 text-shakes-green mx-auto" /> : "-") : 
                          row.custom
                        }
                      </td>
                      <td className="p-4 border text-center">
                        {typeof row.woo === "boolean" ? 
                          (row.woo ? <CheckCircle className="h-5 w-5 text-shakes-green mx-auto" /> : "-") : 
                          row.woo
                        }
                      </td>
                      <td className="p-4 border text-center">
                        {typeof row.shopify === "boolean" ? 
                          (row.shopify ? <CheckCircle className="h-5 w-5 text-shakes-green mx-auto" /> : "-") : 
                          row.shopify
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Feature Spotlight</h2>
              <p className="section-subtitle mx-auto">
                See how our eCommerce features drive real business results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="sm:col-span-1">
                    <AspectRatio ratio={1/1} className="h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4"
                        alt="Payment integration case study"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <div className="sm:col-span-2">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">Mobile Money Integration</h3>
                      <p className="mb-4 text-gray-600">
                        For a fashion retailer in Uganda, we implemented seamless mobile money payment processing, allowing customers to pay via M-Pesa, MTN MoMo, and Airtel Money.
                      </p>
                      <p className="text-gray-600 mb-4">
                        <strong className="text-shakes-blue">Result:</strong> 64% increase in completed purchases and 35% reduction in cart abandonment.
                      </p>
                      <Button className="bg-shakes-blue hover:bg-shakes-blue-light text-white w-full sm:w-auto">
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="sm:col-span-1">
                    <AspectRatio ratio={1/1} className="h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                        alt="Delivery integration case study"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <div className="sm:col-span-2">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">Local Delivery Integration</h3>
                      <p className="mb-4 text-gray-600">
                        We connected a Nairobi-based electronics store with five local delivery services, providing real-time rate calculations and tracking.
                      </p>
                      <p className="text-gray-600 mb-4">
                        <strong className="text-shakes-blue">Result:</strong> Delivery times reduced by 40% and customer satisfaction improved by 52%.
                      </p>
                      <Button className="bg-shakes-blue hover:bg-shakes-blue-light text-white w-full sm:w-auto">
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your eCommerce Store?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create a powerful online store with all the features you need to succeed in the African market.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
                  Get Started Now
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
                  Schedule a Consultation
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

export default ExploreFeatures;
