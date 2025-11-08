import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/lib/email-service";
import { useToast } from "@/components/ui/use-toast";
import { useScrollTo } from "@/hooks/use-scroll-to";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToHash = useScrollTo();

  const handleNavClick = (path: string) => {
    if (location.pathname !== "/" && path.startsWith("/#")) {
      navigate("/");
      setTimeout(scrollToHash, 100);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      await sendEmail({
        name: "Newsletter Subscription",
        email: email,
        message: `New newsletter subscription request from ${email}`,
        company: ""
      });
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-shakes-blue-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              Africa's digital web solutions provider specializing in Custom Software, Web Development, and Mobile Apps designed to address Sustainable African Business Development challenges—driving revenue growth, operational efficiency, and market expansion across African businesses.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-shakes-teal hover:bg-shakes-teal-dark"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/services/custom-software"
                  className="hover:text-shakes-teal transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-shakes-teal transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-app-development"
                  className="hover:text-shakes-teal transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-shakes-teal transition-colors"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/about-us")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/industries")}
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/contact")}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-shakes-teal" />
                <span>Kampala and Jinja, Uganda, East Africa</span>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-shakes-teal" />
                  <a href="mailto:info@shakesdigital.com" className="hover:text-shakes-teal transition-colors">
                    info@shakesdigital.com
                  </a>
                </div>
                <div className="ml-7">
                  <a href="mailto:shakesdigital@gmail.com" className="hover:text-shakes-teal transition-colors">
                    shakesdigital@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-shakes-teal" />
                <a href="tel:+256705718590" className="hover:text-shakes-teal transition-colors">
                  +256 705 718 590
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-shakes-teal mt-1" />
                <div>
                  <span className="font-medium">Working Hours:</span>
                  <div>Monday to Saturday</div>
                  <div>9:00 AM – 5:00 PM EAT</div>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shakes-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shakes-teal transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shakes-teal transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Shakes Digital. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              Designed and developed by Shakes Digital Developers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
