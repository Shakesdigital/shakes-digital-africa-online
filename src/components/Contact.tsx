import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('organization') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string
    };

    try {
      // Send email via Netlify function
      console.log('Sending contact form data:', data);

      const emailResponse = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          recipients: ['shakesdigital@gmail.com', 'info@shakesdigital.com', 'fsddanmugisa@gmail.com']
        })
      });

      console.log('Email function status:', emailResponse.status);

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      const responseData = await emailResponse.json();
      console.log('Email sent successfully:', responseData);

      // Try to save to database (optional)
      try {
        await supabase
          .from('contact_submissions')
          .insert([{
            name: data.name,
            email: data.email,
            company: data.company || null,
            project_type: data.service || null,
            message: data.message,
            status: 'new',
            priority: 'normal'
          }]);
        console.log('Successfully saved to database');
      } catch (dbError) {
        console.log('Database save optional - continuing:', dbError);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                Reach out to Shakes Digital for custom digital web solutions for your business or community challenge
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Explore Custom Software, Web Development, or Mobile Apps for your sustainable goals.
              </p>
            </div>
            <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
                <img
                  src="/SME BETTER-.png"
                  alt="African business professionals working on digital solutions"
                  className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Contact Form</h3>
              <p className="text-gray-600 mb-6">
                Describe your challenge—we'll align it with our objectives for a strategic response.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Your company or organization"
                    className="w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-shakes-teal focus:border-shakes-teal"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your challenge and how we can help with sustainable community or business solutions"
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Connect with Us Today'}
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Contact Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-shakes-teal">Address</p>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                  <div>
                    <p className="font-medium text-shakes-teal">Email</p>
                    <p className="text-gray-600">info@shakesdigital.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-shakes-teal">Phone</p>
                    <p className="text-gray-600">+256-705-718-590</p>
                  </div>
                  <div>
                    <p className="font-medium text-shakes-teal">Social Links</p>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-shakes-blue hover:text-shakes-teal transition-colors">LinkedIn</a>
                      <a href="#" className="text-shakes-blue hover:text-shakes-teal transition-colors">X</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-shakes-blue-dark">Your Questions Answered</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-shakes-teal mb-2">How do we collaborate on projects?</h4>
                    <p className="text-gray-600 text-sm">We follow an objective-driven approach: Research, Implementation, Partnerships, Resource Mobilization, and Evaluation to ensure sustainable impact.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-teal mb-2">Which service fits my industry?</h4>
                    <p className="text-gray-600 text-sm">Each of our core services can be tailored to your sector. Contact us to discuss your specific needs and challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">Map embed placeholder - Google Map integration can be added here</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
