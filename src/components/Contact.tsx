import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/email-service";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsulting, setIsConsulting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string
    };

    try {
      await sendEmail(data);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultation = async () => {
    setIsConsulting(true);
    try {
      await sendEmail({
        name: "Consultation Request",
        email: "consultation@shakesdigital.com",
        message: "New consultation request received. Please schedule a consultation call.",
        company: ""
      });
      toast({
        title: "Consultation Requested!",
        description: "We'll contact you shortly to schedule your free consultation.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem requesting the consultation. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsConsulting(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    id="name"
                    name="name"
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
                    name="email"
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
                  name="company"
                  type="text"
                  placeholder="Your company or organization"
                  className="w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-shakes-blue-dark text-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3>
              <p className="mb-6">
                Schedule a free 30-minute consultation with our digital experts to discuss your project needs and how we can help.
              </p>
              <Button 
                className="bg-shakes-teal hover:bg-shakes-teal-dark text-white w-full"
                onClick={handleConsultation}
                disabled={isConsulting}
              >
                {isConsulting ? 'Requesting...' : 'Book a Consultation'}
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-shakes-teal">Location</p>
                  <p className="text-gray-600">Kampala and Jinja, Uganda, Africa</p>
                </div>
                <div>
                  <p className="font-medium text-shakes-teal">Email</p>
                  <p className="text-gray-600">info@shakesdigital.com</p>
                  <p className="text-gray-600">shakesdigital@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium text-shakes-teal">Phone</p>
                  <p className="text-gray-600">+256 705 718 590</p>
                </div>
                <div>
                  <p className="font-medium text-shakes-teal">Working Hours</p>
                  <p className="text-gray-600">Monday to Saturday, 9:00 AM – 5:00 PM EAT</p>
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
