import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, LayoutDashboard, ShoppingCart, Globe, Database, Search, Megaphone, Users, Shield, FileText, BarChart } from "lucide-react";

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
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
      title: "Web Application Development",
      description: "Build custom apps that streamline operations and enhance user engagement for African community initiatives and businesses.",
      features: [
        "Community engagement tools",
        "Data collection systems",
        "Resource management platforms",
        "Mobile-first design for African users"
      ],
      icon: <Code className="w-8 h-8 text-shakes-teal" />,
      color: "#1DACA2",
      link: "/web-application-development"
    },
    {
      title: "Portal Development",
      description: "Create secure, user-friendly portals for resource sharing, collaboration, and information access in African development projects.",
      features: [
        "Stakeholder collaboration portals",
        "Resource sharing platforms",
        "Information access systems",
        "Multi-language support"
      ],
      icon: <Globe className="w-8 h-8 text-shakes-blue" />,
      color: "#1D70A2",
      link: "/portal-development"
    },
    {
      title: "Website Re-development",
      description: "Revamp existing sites to improve functionality, accessibility, and performance, ensuring they meet modern standards for African users.",
      features: [
        "Accessibility improvements",
        "Performance optimization",
        "Mobile responsiveness",
        "Cross-platform compatibility"
      ],
      icon: <LayoutDashboard className="w-8 h-8 text-shakes-blue-light" />,
      color: "#66B9DE",
      link: "/website-development"
    },
    {
      title: "E-Commerce Website Development",
      description: "Launch online stores to boost local African businesses, enabling wider market reach and economic growth across the continent.",
      features: [
        "Local payment integration",
        "Multi-currency support",
        "Inventory management",
        "Market expansion tools"
      ],
      icon: <ShoppingCart className="w-8 h-8 text-shakes-teal" />,
      color: "#1DACA2",
      link: "/ecommerce-solutions"
    },
    {
      title: "CRM Applications",
      description: "Manage interactions efficiently to strengthen community ties and business relationships in African contexts.",
      features: [
        "Community relationship management",
        "Stakeholder engagement tracking",
        "Communication automation",
        "Impact measurement tools"
      ],
      icon: <Users className="w-8 h-8 text-shakes-blue" />,
      color: "#1D70A2",
      link: "/crm-development"
    },
    {
      title: "Content Management Systems",
      description: "Easy-to-use platforms for updating and sharing content on African development topics and business resources.",
      features: [
        "Multi-language content support",
        "Community content sharing",
        "Educational resource management",
        "Offline content access"
      ],
      icon: <FileText className="w-8 h-8 text-shakes-blue-light" />,
      color: "#66B9DE",
      link: "/cms-development"
    },
    {
      title: "Data Management Systems",
      description: "Securely handle data to inform decisions in poverty alleviation and sustainability efforts in Africa.",
      features: [
        "Impact data tracking",
        "Analytics and reporting",
        "Secure data storage",
        "Evidence-based insights"
      ],
      icon: <Database className="w-8 h-8 text-shakes-teal" />,
      color: "#1DACA2",
      link: "/data-management"
    },
    {
      title: "Digital Marketing",
      description: "Promote your initiatives online to amplify impact and attract support within African markets.",
      features: [
        "Community awareness campaigns",
        "Social media strategy",
        "Local market targeting",
        "Impact storytelling"
      ],
      icon: <Megaphone className="w-8 h-8 text-shakes-blue" />,
      color: "#1D70A2",
      link: "/digital-marketing"
    },
    {
      title: "Search Engine Optimization",
      description: "Optimize your digital presence for better visibility and reach in Africa-focused searches.",
      features: [
        "Local SEO optimization",
        "African market targeting",
        "Multi-language SEO",
        "Community visibility enhancement"
      ],
      icon: <Search className="w-8 h-8 text-shakes-blue-light" />,
      color: "#66B9DE",
      link: "/seo-services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Digital Services</h2>
          <p className="section-subtitle mx-auto">
            Tailored solutions to empower African communities and businesses in the fight against poverty and for sustainable growth across the continent.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover how our digital expertise can transform challenges into opportunities for African sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Customization Note */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            All services are customized to align with your African sustainable development goals. Contact us for a consultation tailored to your community's needs.
          </p>
          <a href="#contact" className="btn-primary">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
