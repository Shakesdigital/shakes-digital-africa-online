import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Smartphone } from "lucide-react";

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
      title: "Website Development",
      description: "We build fast, mobile-responsive websites that help African businesses establish a strong digital presence — from corporate websites and e-commerce platforms to web applications and business portals.",
      features: [
        "Business & corporate websites",
        "E-commerce platforms with local payment integration",
        "Web applications & business portals",
        "Content management systems (CMS)",
        "Website redesign & optimization",
        "Mobile-first, performance-optimized design"
      ],
      icon: <Globe className="w-8 h-8 text-shakes-blue" />,
      color: "#1D70A2",
      link: "/services/web-development"
    },
    {
      title: "Mobile Application Development",
      description: "We create native and cross-platform mobile apps engineered for Africa's mobile-first economy — with offline capabilities, mobile payment integration, and lightweight designs that work across diverse devices and connectivity conditions.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform mobile applications",
        "Offline-capable architecture",
        "Mobile payment integration (M-Pesa, MTN MoMo)",
        "Real-time analytics & push notifications",
        "Field data collection & community engagement apps"
      ],
      icon: <Smartphone className="w-8 h-8 text-shakes-teal" />,
      color: "#1DACA2",
      link: "/services/mobile-app-development"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We focus on two powerful capabilities — Website Development and Mobile App Development — to help African businesses and development organizations solve their most pressing challenges.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Every website and mobile app we build is researched, designed, and optimized for African business realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Customization Note */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Every project is customized to address your specific African business challenges. Contact us for a consultation tailored to your organization's needs.
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
