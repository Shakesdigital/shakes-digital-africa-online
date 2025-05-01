import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToHash = useScrollTo();

  useEffect(() => {
    scrollToHash();
  }, [location.hash, scrollToHash]);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/" && path.startsWith("/#")) {
      navigate("/");
      // Small delay to ensure navigation completes before scrolling
      setTimeout(scrollToHash, 100);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/97fbf1c7-d62a-40ce-9b67-0c5b50bb01e5.png" 
              alt="Shakes Digital Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-shakes-blue-dark">Shakes Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-shakes-blue-dark hover:text-shakes-teal font-medium"
              onClick={() => handleNavClick("/")}
            >
              Home
            </Link>
            <Link 
              to="/#services" 
              className="text-shakes-blue-dark hover:text-shakes-teal font-medium"
              onClick={() => handleNavClick("/#services")}
            >
              Services
            </Link>
            <Link 
              to="/#industries" 
              className="text-shakes-blue-dark hover:text-shakes-teal font-medium"
              onClick={() => handleNavClick("/#industries")}
            >
              Industries
            </Link>
            <Link 
              to="/portfolio" 
              className="text-shakes-blue-dark hover:text-shakes-teal font-medium"
              onClick={() => handleNavClick("/portfolio")}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className="text-shakes-blue-dark hover:text-shakes-teal font-medium"
              onClick={() => handleNavClick("/blog")}
            >
              Blog
            </Link>
            <Link 
              to="/#about" 
              className="text-shakes-blue-dark hover:text-shakes-teal font-medium"
              onClick={() => handleNavClick("/#about")}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary ml-4"
              onClick={() => handleNavClick("/contact")}
            >
              Contact Us
            </Link>
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
              <Link
                to="/"
                className="text-shakes-blue-dark hover:text-shakes-teal font-medium px-4 py-2"
                onClick={() => handleNavClick("/")}
              >
                Home
              </Link>
              <Link
                to="/#services"
                className="text-shakes-blue-dark hover:text-shakes-teal font-medium px-4 py-2"
                onClick={() => handleNavClick("/#services")}
              >
                Services
              </Link>
              <Link
                to="/#industries"
                className="text-shakes-blue-dark hover:text-shakes-teal font-medium px-4 py-2"
                onClick={() => handleNavClick("/#industries")}
              >
                Industries
              </Link>
              <Link
                to="/portfolio"
                className="text-shakes-blue-dark hover:text-shakes-teal font-medium px-4 py-2"
                onClick={() => handleNavClick("/portfolio")}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="text-shakes-blue-dark hover:text-shakes-teal font-medium px-4 py-2"
                onClick={() => handleNavClick("/blog")}
              >
                Blog
              </Link>
              <Link
                to="/#about"
                className="text-shakes-blue-dark hover:text-shakes-teal font-medium px-4 py-2"
                onClick={() => handleNavClick("/#about")}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="btn-primary mx-4"
                onClick={() => handleNavClick("/contact")}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
