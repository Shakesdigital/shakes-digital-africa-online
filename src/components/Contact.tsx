import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/email-service";

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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shakes-blue-dark mb-6">
            Reach Out to Shakes Digital: Tailor Your Digital Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Explore Custom Software, Web Development, or Mobile Apps for your sustainable goals.
          </p>
        </div>

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
  );
};

export default Contact;
