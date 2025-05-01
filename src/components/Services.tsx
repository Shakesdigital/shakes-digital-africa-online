
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, color, link }) => {
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
            <div className="mr-2 text-shakes-teal">✓</div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="btn-secondary w-full mt-auto" asChild>
        <Link to={link}>Request a Quote</Link>
      </Button>
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
      link: "/website-development"
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
      icon: <Code className="w-8 h-8 text-shakes-teal" />,
      color: "#1DACA2",
      link: "/web-application-development"
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
      link: "/ecommerce-solutions"
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
