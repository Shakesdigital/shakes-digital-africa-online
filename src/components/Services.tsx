
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, LayoutDashboard, ShoppingCart } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  link: string;
  cta1: {
    text: string;
    link: string;
  };
  cta2: {
    text: string;
    link: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, color, link, cta1, cta2 }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4" style={{ borderColor: color }}>
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-shakes-blue-dark">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className="mr-2 text-shakes-orange">✓</div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col space-y-2">
        <Button className="btn-secondary w-full mt-auto" asChild>
          <Link to={cta1.link}>{cta1.text}</Link>
        </Button>
        <Button variant="outline" className="w-full border-shakes-blue text-shakes-blue hover:bg-shakes-blue hover:text-white" asChild>
          <Link to={cta2.link}>{cta2.text}</Link>
        </Button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites that represent your brand and engage your audience effectively.",
      features: [
        "Custom design & development",
        "Content management systems",
        "Responsive & mobile-friendly",
        "SEO optimization"
      ],
      icon: <LayoutDashboard className="w-8 h-8 text-shakes-blue" />,
      color: "#1D70A2",
      link: "/website-development",
      cta1: {
        text: "Request a Quote",
        link: "/website-development/request-quote"
      },
      cta2: {
        text: "See Our Work",
        link: "/website-development/portfolio"
      }
    },
    {
      title: "Web Application Development",
      description: "Powerful, scalable web applications built for your specific business needs and processes.",
      features: [
        "Custom business applications",
        "Internal platforms & tools",
        "Client portals & dashboards",
        "Process automation"
      ],
      icon: <Code className="w-8 h-8 text-shakes-orange" />,
      color: "#FF6B35",
      link: "/web-application-development",
      cta1: {
        text: "Schedule a Demo",
        link: "/web-application-development/schedule-demo"
      },
      cta2: {
        text: "View Our Portfolio",
        link: "/web-application-development/portfolio"
      }
    },
    {
      title: "eCommerce Solutions",
      description: "End-to-end online store development with local payment integration and order management.",
      features: [
        "Custom online stores",
        "Local payment gateways",
        "Inventory management",
        "Mobile shopping experience"
      ],
      icon: <ShoppingCart className="w-8 h-8 text-shakes-blue-light" />,
      color: "#66B9DE",
      link: "/ecommerce-solutions",
      cta1: {
        text: "Get Started",
        link: "/ecommerce-solutions/get-started"
      },
      cta2: {
        text: "Explore Features",
        link: "/ecommerce-solutions/explore-features"
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Digital Services</h2>
          <p className="section-subtitle mx-auto">
            We deliver end-to-end digital solutions tailored to the unique needs of African businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
