
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const RequestQuote: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Website Development Quote</h1>
              <p className="text-xl opacity-90 mb-8">
                Get a customized quote for your website project tailored to your specific business needs and goals
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Tell Us About Your Project</h2>
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <Input 
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                        <Input 
                          id="company"
                          type="text"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="websiteType" className="block text-sm font-medium text-gray-700 mb-1">Website Type*</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select website type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">Business Website</SelectItem>
                            <SelectItem value="ecommerce">eCommerce Website</SelectItem>
                            <SelectItem value="portfolio">Portfolio/Creative</SelectItem>
                            <SelectItem value="blog">Blog/Content</SelectItem>
                            <SelectItem value="nonprofit">Nonprofit/Organization</SelectItem>
                            <SelectItem value="education">Educational</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                            <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000plus">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Desired Timeline</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select desired timeline" />
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
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Project Description*</label>
                        <Textarea 
                          id="description"
                          placeholder="Tell us about your website needs, goals, and any specific features you're looking for"
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="event">Event/Conference</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="bg-shakes-orange hover:bg-shakes-orange-light text-white w-full py-3">
                      Submit Quote Request
                    </Button>
                  </form>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-shakes-blue-dark">Why Choose Shakes Digital?</h3>
                  <ul className="space-y-4">
                    {[
                      "African-focused web solutions",
                      "Experienced design & development team",
                      "Transparent pricing, no hidden costs",
                      "Fast turnaround times",
                      "Ongoing support & maintenance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-shakes-orange flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-shakes-blue-dark text-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="mb-6">
                    Not sure what you need or have questions? Contact us directly:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p>+256 705 718 590</p>
                    </div>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>info@shakesdigital.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Working Hours:</p>
                      <p>Monday to Saturday, 9:00 AM – 5:00 PM EAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Quote Process</h2>
              <p className="section-subtitle mx-auto">
                How we create your customized website proposal
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Request Submission",
                  description: "Complete the form with your project details and requirements."
                },
                {
                  step: "02",
                  title: "Needs Analysis",
                  description: "Our team reviews your request and analyzes your specific needs."
                },
                {
                  step: "03",
                  title: "Custom Proposal",
                  description: "We prepare a detailed proposal with timeline and pricing options."
                },
                {
                  step: "04",
                  title: "Consultation",
                  description: "We discuss the proposal, answer questions, and refine as needed."
                }
              ].map((process, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-shakes-orange mb-2">{process.step}</div>
                    <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestQuote;
