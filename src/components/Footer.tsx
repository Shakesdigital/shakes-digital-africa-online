import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
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
              Empowering African communities through digital innovation, driving sustainable development and poverty alleviation across the continent.
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
                  to="/web-application-development"
                  className="hover:text-shakes-teal transition-colors"
                >
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link
                  to="/website-development"
                  className="hover:text-shakes-teal transition-colors"
                >
                  Website Re-development
                </Link>
              </li>
              <li>
                <Link
                  to="/ecommerce-solutions"
                  className="hover:text-shakes-teal transition-colors"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <span className="hover:text-shakes-teal transition-colors cursor-pointer">
                  Digital Marketing
                </span>
              </li>
              <li>
                <span className="hover:text-shakes-teal transition-colors cursor-pointer">
                  Data Management Systems
                </span>
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
                  to="/blog" 
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/blog")}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/#about")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/objectives"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/objectives")}
                >
                  Objectives
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/portfolio")}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-shakes-teal transition-colors"
                  onClick={() => handleNavClick("/contact")}
                >
                  Contact
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
                <span>Kampala and Jinja, Uganda, Africa</span>
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
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} Shakes Digital. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              Designed and developed with ❤️ by Shakes Digital
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
