
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, CheckCircle, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ScheduleDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule a Web Application Demo</h1>
              <p className="text-xl opacity-90 mb-8">
                Experience firsthand how our custom web applications can transform your business operations
              </p>
            </div>
          </div>
        </section>

        {/* Why Schedule a Demo Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-shakes-blue-dark">Why Schedule a Demo?</h2>
                <p className="text-gray-600 mb-8">
                  Our interactive demos give you a clear understanding of how our web applications work and how they can be customized to meet your specific business needs. During your personalized demo, you'll:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "See real working applications in action",
                    "Explore features relevant to your business",
                    "Ask questions and get expert insights",
                    "Understand implementation timelines and processes",
                    "Discover how other African businesses use our solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white">
                  Book Your Demo Now
                </Button>
              </div>
              <div>
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Demo session"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Web Applications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Web Applications We Offer</h2>
              <p className="section-subtitle mx-auto">
                Explore the types of solutions you can see in action during your demo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Process Applications",
                  description: "Custom solutions for inventory management, HR systems, CRM, and other core business processes.",
                  features: ["Workflow automation", "Data visualization", "Role-based access", "Mobile accessibility"]
                },
                {
                  title: "Customer Portals & Dashboards",
                  description: "Secure platforms for customer interaction, account management, and service delivery.",
                  features: ["User authentication", "Personalized dashboards", "Document sharing", "Communication tools"]
                },
                {
                  title: "Data Collection & Analysis Tools",
                  description: "Applications for gathering, processing, and visualizing data to drive business decisions.",
                  features: ["Custom forms", "Reporting dashboards", "Data export options", "API integrations"]
                }
              ].map((app, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark">{app.title}</h3>
                    <p className="text-gray-600 mb-6">{app.description}</p>
                    <Separator className="my-4" />
                    <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-shakes-orange flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Not seeing exactly what you need? During your demo, our experts can discuss how we can customize solutions for your specific requirements.
              </p>
              <Button className="bg-shakes-blue hover:bg-shakes-blue-light text-white">
                View All Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Demo Booking Form Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Schedule Your Demo</h2>
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
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization*</label>
                        <Input 
                          id="company"
                          type="text"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                        <Input 
                          id="position"
                          type="text"
                          placeholder="Your position"
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry*</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="retail">Retail/eCommerce</SelectItem>
                            <SelectItem value="finance">Finance/Banking</SelectItem>
                            <SelectItem value="logistics">Logistics/Transportation</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="nonprofit">Nonprofit/NGO</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 mb-1">Type of Demo*</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select demo type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">Business Process Applications</SelectItem>
                            <SelectItem value="customer">Customer Portals & Dashboards</SelectItem>
                            <SelectItem value="data">Data Collection & Analysis Tools</SelectItem>
                            <SelectItem value="general">General Overview</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="demoDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Demo Date*</label>
                        <div className="flex">
                          <Input
                            id="demoDate"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="demoTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time (EAT)*</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                            <SelectItem value="11-12">11:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="12-1">12:00 PM - 1:00 PM</SelectItem>
                            <SelectItem value="2-3">2:00 PM - 3:00 PM</SelectItem>
                            <SelectItem value="3-4">3:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="4-5">4:00 PM - 5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Specific Interests or Questions</label>
                        <Textarea 
                          id="requirements"
                          placeholder="Tell us about your specific requirements or questions you'd like addressed during the demo"
                          className="min-h-[120px]"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">Additional Participants (emails)</label>
                        <Textarea 
                          id="participants"
                          placeholder="Enter email addresses of additional participants (one per line)"
                          className="min-h-[60px]"
                        />
                      </div>
                    </div>
                    <Button type="submit" className="bg-shakes-orange hover:bg-shakes-orange-light text-white w-full py-3">
                      Schedule Demo
                    </Button>
                  </form>
                </div>
              </div>
              <div>
                <div className="bg-shakes-blue-dark text-white rounded-lg shadow-lg p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" /> What to Expect
                  </h3>
                  <p className="mb-6">
                    Your demo will be conducted by one of our solution experts and typically includes:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                      <span>30-45 minute personalized presentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                      <span>Live demonstration of relevant features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                      <span>Q&A session to address your specific needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                      <span>Discussion of next steps and implementation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-shakes-blue-dark">Contact Information</h3>
                  <p className="mb-6 text-gray-600">
                    Need to schedule urgently or have questions? Contact us directly:
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-medium text-shakes-blue">Phone:</p>
                      <p>+256 705 718 590</p>
                    </div>
                    <div>
                      <p className="font-medium text-shakes-blue">Email:</p>
                      <p>info@shakesdigital.com</p>
                    </div>
                    <div>
                      <p className="font-medium text-shakes-blue">Working Hours:</p>
                      <p>Monday to Saturday, 9:00 AM – 5:00 PM EAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleDemo;
