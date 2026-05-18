import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Code2, Globe, Smartphone } from "lucide-react";

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
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-shakes-blue-dark">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 h-4 w-4 text-shakes-teal mt-1 flex-shrink-0" />
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
      title: "Custom Software Development",
      description:
        "Tailored software systems for businesses and organizations that need workflow automation, portals, dashboards, integrations, and operational tools built around their exact processes.",
      features: [
        "Business management systems",
        "Client and staff portals",
        "Workflow automation tools",
        "Dashboards and reporting platforms",
        "CRM, ERP, and payment integrations",
        "Secure, scalable web-based software",
      ],
      icon: <Code2 className="w-8 h-8 text-shakes-blue-dark" />,
      color: "#0D5C63",
      link: "/services/custom-software",
    },
    {
      title: "Website Development",
      description:
        "Fast, mobile-responsive websites that help African businesses establish a strong digital presence, win trust, generate leads, sell online, and communicate clearly.",
      features: [
        "Business and corporate websites",
        "E-commerce platforms with local payment integration",
        "Landing pages and campaign websites",
        "Content management systems",
        "Website redesign and optimization",
        "Mobile-first, performance-optimized design",
      ],
      icon: <Globe className="w-8 h-8 text-shakes-blue" />,
      color: "#1D70A2",
      link: "/services/web-development",
    },
    {
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile apps engineered for Africa's mobile-first economy, with offline capabilities, mobile payment integration, and lightweight performance.",
      features: [
        "Native iOS and Android apps",
        "Cross-platform mobile applications",
        "Offline-capable architecture",
        "Mobile payment integration",
        "Real-time analytics and push notifications",
        "Field data collection and engagement apps",
      ],
      icon: <Smartphone className="w-8 h-8 text-shakes-teal" />,
      color: "#1DACA2",
      link: "/services/mobile-app-development",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We build custom software, websites, and mobile applications that help African businesses and development organizations solve their most pressing African Development Business Challenges.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Every digital product we build is researched, designed, and optimized for African business realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Every project is customized to address your specific African Development Business Challenges. Contact us for a consultation tailored to your organization's needs.
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
