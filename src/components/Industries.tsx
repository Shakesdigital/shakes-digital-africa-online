
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
      title: "Tourism & Hospitality",
      description: "Digital solutions for hotels, tour companies, and travel services across East Africa."
    },
    {
      icon: "/placeholder.svg",
      title: "Retail & eCommerce",
      description: "Online store development with local payment integration for retailers of all sizes."
    },
    {
      icon: "/placeholder.svg",
      title: "Education",
      description: "Learning platforms and school management systems for educational institutions."
    },
    {
      icon: "/placeholder.svg",
      title: "Healthcare",
      description: "Patient management systems and healthcare service platforms tailored to local needs."
    },
    {
      icon: "/placeholder.svg",
      title: "Logistics & Transport",
      description: "Route optimization, tracking, and management systems for logistics companies."
    },
    {
      icon: "/placeholder.svg",
      title: "NGOs & Non-Profits",
      description: "Impact-focused platforms for organizations making a difference in East Africa."
    }
  ];

  return (
    <section id="industries" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle mx-auto">
            Our digital solutions are tailored to meet the unique needs of diverse sectors across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
