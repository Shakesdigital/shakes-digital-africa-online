
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Ready to start your digital journey? Contact us for a consultation and discover how we can help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                <Input 
                  id="company"
                  type="text"
                  placeholder="Your company or organization"
                  className="w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your project or inquiry"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="btn-primary w-full">Send Message</Button>
            </form>
          </div>
          
          <div>
            <div className="bg-shakes-blue-dark text-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3>
              <p className="mb-6">
                Schedule a free 30-minute consultation with our digital experts to discuss your project needs and how we can help.
              </p>
              <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white w-full">
                Book a Consultation
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-shakes-blue">Location</p>
                  <p className="text-gray-600">Nairobi, Kenya, East Africa</p>
                </div>
                <div>
                  <p className="font-medium text-shakes-blue">Email</p>
                  <p className="text-gray-600">info@shakesdigital.com</p>
                </div>
                <div>
                  <p className="font-medium text-shakes-blue">Phone</p>
                  <p className="text-gray-600">+254 700 000000</p>
                </div>
                <div>
                  <p className="font-medium text-shakes-blue">Working Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9AM to 5PM EAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
