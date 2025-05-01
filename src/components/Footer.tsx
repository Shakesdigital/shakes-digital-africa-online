
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
            <h3 className="text-xl font-bold mb-4">Shakes<span className="text-shakes-orange">Digital</span></h3>
            <p className="mb-4 text-gray-300">
              Empowering East Africa's businesses with innovative digital solutions tailored to your unique needs.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-shakes-orange transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-shakes-orange transition-colors">Web Application Development</a></li>
              <li><a href="#services" className="hover:text-shakes-orange transition-colors">eCommerce Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-shakes-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-shakes-orange transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-shakes-orange transition-colors">Portfolio</a></li>
              <li><a href="#industries" className="hover:text-shakes-orange transition-colors">Industries We Serve</a></li>
              <li><a href="#contact" className="hover:text-shakes-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-shakes-orange" />
                <span>Nairobi, Kenya, East Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-shakes-orange" />
                <span>+254 700 000000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-shakes-orange" />
                <span>info@shakesdigital.com</span>
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
              <a href="#" className="hover:text-shakes-orange mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-shakes-orange">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
