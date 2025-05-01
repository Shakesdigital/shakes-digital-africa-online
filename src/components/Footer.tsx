
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shakes-blue-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/97fbf1c7-d62a-40ce-9b67-0c5b50bb01e5.png" 
                alt="Shakes Digital Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-4 text-gray-300">
              Empowering Africa's businesses with innovative digital solutions tailored to your unique needs.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-shakes-teal transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-shakes-teal transition-colors">Web Application Development</a></li>
              <li><a href="#services" className="hover:text-shakes-teal transition-colors">eCommerce Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-shakes-teal transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-shakes-teal transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-shakes-teal transition-colors">Portfolio</a></li>
              <li><a href="#industries" className="hover:text-shakes-teal transition-colors">Industries We Serve</a></li>
              <li><a href="#contact" className="hover:text-shakes-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-shakes-teal" />
                <span>Kampala and Jinja, Uganda, Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-shakes-teal" />
                <span>+256 705 718 590</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-shakes-teal" />
                <span>info@shakesdigital.com</span>
              </li>
              <li className="flex items-start gap-2 ml-7">
                <span>shakesdigital@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <span className="font-medium">Working Hours:</span>
                <span>Monday to Saturday, 9:00 AM – 5:00 PM EAT</span>
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
              <a href="#" className="hover:text-shakes-teal mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-shakes-teal">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
