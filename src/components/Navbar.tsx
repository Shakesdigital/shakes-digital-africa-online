
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <span className="font-heading font-bold text-2xl text-shakes-blue-dark">
              Shakes<span className="text-shakes-orange">Digital</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-shakes-blue-dark hover:text-shakes-orange font-medium">
              Home
            </a>
            <a href="#services" className="text-shakes-blue-dark hover:text-shakes-orange font-medium">
              Services
            </a>
            <a href="#industries" className="text-shakes-blue-dark hover:text-shakes-orange font-medium">
              Industries
            </a>
            <a href="#portfolio" className="text-shakes-blue-dark hover:text-shakes-orange font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-shakes-blue-dark hover:text-shakes-orange font-medium">
              About Us
            </a>
            <a href="#contact" className="btn-primary ml-4">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-shakes-blue-dark hover:text-shakes-orange font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-shakes-blue-dark hover:text-shakes-orange font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#industries" 
                className="text-shakes-blue-dark hover:text-shakes-orange font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>
              <a 
                href="#portfolio" 
                className="text-shakes-blue-dark hover:text-shakes-orange font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#about" 
                className="text-shakes-blue-dark hover:text-shakes-orange font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="btn-primary mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
