
import React from "react";

interface IndustryCardProps {
  icon: string;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <img src={icon} alt={title} className="w-14 h-14 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Industries: React.FC = () => {
  const industries = [
    {
      icon: "/placeholder.svg",
      title: "Agriculture",
      description: "Custom apps and data systems to optimize farming practices, connect farmers to markets, and enhance food security in rural East Africa (e.g., Uganda and Kenya)."
    },
    {
      icon: "/placeholder.svg",
      title: "Healthcare",
      description: "Portals and CRM tools for telemedicine, patient data management, and community health initiatives, addressing access challenges in underserved African regions."
    },
    {
      icon: "/placeholder.svg",
      title: "Education",
      description: "E-learning platforms, CMS, and digital literacy programs to bridge educational gaps and empower youth in countries like Tanzania and Rwanda."
    },
    {
      icon: "/placeholder.svg",
      title: "Finance",
      description: "E-commerce and SEO services for fintech startups, promoting financial inclusion and micro-lending in African economies."
    },
    {
      icon: "/placeholder.svg",
      title: "Environment",
      description: "Network systems and digital marketing for conservation projects, supporting sustainable resource management and climate resilience across the continent."
    }
  ];

  return (
    <section id="industries" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle mx-auto">
            Delivering digital solutions tailored to key African industries for sustainable growth and poverty alleviation.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore how Shakes Digital supports transformation in these vital sectors across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            See How We Can Help Your Industry
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
