import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  image: string;
  title: string;
  description: string;
  services: string[];
  objectives: string;
  link: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ image, title, description, services, objectives, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-shakes-blue-dark">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-shakes-teal mb-3">Website & Mobile App Solutions:</h4>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-shakes-teal mr-2 mt-1">✓</span>
                <span className="text-gray-600 text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200 mb-6">
          <p className="text-sm text-gray-600 italic">{objectives}</p>
        </div>

        <div className="flex gap-3">
          <a href={link} className="btn-primary flex-1 text-center inline-flex items-center justify-center gap-2">
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/contact" className="btn-outline flex-1 text-center">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

const Industries: React.FC = () => {
  const industries = [
    {
      image: "/sustainable-tourism.png",
      title: "Tourism & Hospitality",
      description: "Websites and mobile apps that help tourism operators grow bookings, manage operations, and deliver exceptional visitor experiences across Africa.",
      services: [
        "Booking websites and visitor portals for lodges, safaris, and tours",
        "Mobile apps for guided tours, wildlife tracking, and guest engagement",
        "Web-based dashboards for reservations, analytics, and staff management"
      ],
      objectives: "Drives revenue growth, direct bookings, and customer satisfaction for tourism businesses.",
      link: "/industries/sustainable-tourism"
    },
    {
      image: "/renewable-energy.png",
      title: "Energy & Utilities",
      description: "Websites and mobile apps that help energy businesses manage operations, reach customers, and track performance across African energy markets.",
      services: [
        "Websites for customer portals, billing systems, and energy service marketing",
        "Mobile apps for field monitoring, meter reading, and customer support",
        "Web-based dashboards for performance tracking and grid management"
      ],
      objectives: "Enables operational efficiency, customer acquisition, and market expansion for energy providers.",
      link: "/industries/renewable-energy"
    },
    {
      image: "/agriculture.png",
      title: "Agriculture & Food Business",
      description: "Websites and mobile apps empowering agribusinesses to access markets, manage operations, and connect with buyers across Africa's agricultural landscape.",
      services: [
        "Mobile apps for crop management, market prices, and farmer advisory",
        "Websites for agricultural marketplaces, supply chain portals, and e-commerce",
        "Web-based platforms for cooperative management and traceability"
      ],
      objectives: "Drives market access, profitability, and business growth for agricultural enterprises.",
      link: "/industries/agriculture"
    },
    {
      image: "/non-profit.png",
      title: "Non-Profit & Organizations",
      description: "Websites and mobile apps that help NGOs and development organizations strengthen outreach, manage projects, and drive donor engagement across Africa.",
      services: [
        "Websites for organizational profiles, fundraising campaigns, and impact reporting",
        "Mobile apps for field data collection, community engagement, and staff coordination",
        "Web-based portals for donor management, project tracking, and impact dashboards"
      ],
      objectives: "Enables operational efficiency, donor acquisition, and fundraising success for NGOs.",
      link: "/industries/nonprofit"
    },
    {
      image: "/education.png",
      title: "Education & EdTech",
      description: "Websites and mobile apps that enable education providers to deliver learning experiences, manage enrollment, and reach students across Africa.",
      services: [
        "Websites for learning management systems, school portals, and online course delivery",
        "Mobile apps for interactive learning, assessments, and student engagement",
        "Web-based dashboards for student analytics, enrollment, and progress tracking"
      ],
      objectives: "Drives enrollment growth, learning outcomes, and operational efficiency for education providers.",
      link: "/industries/education"
    },
    {
      image: "/sme-esg.png",
      title: "Small & Medium Enterprises",
      description: "Websites and mobile apps that help SMEs establish digital presence, sell online, and manage operations to grow revenue across African markets.",
      services: [
        "Business websites and e-commerce platforms with mobile payment integration",
        "Mobile apps for sales, inventory management, and customer engagement",
        "Web-based tools for CRM, invoicing, and business analytics"
      ],
      objectives: "Drives scalability, profitability, and market leadership for growing SMEs.",
      link: "/industries/smes"
    },
    {
      image: "/healthcare.png",
      title: "Healthcare & Wellness",
      description: "Websites and mobile apps that help healthcare providers improve patient access, streamline operations, and deliver better health outcomes across Africa.",
      services: [
        "Websites for patient portals, appointment booking, and health resource centers",
        "Mobile apps for telehealth, patient engagement, and health worker tools",
        "Web-based systems for electronic health records and clinic management"
      ],
      objectives: "Enables operational efficiency, patient acquisition, and care quality for healthcare providers.",
      link: "/industries/healthcare"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                  Website & Mobile App Solutions for 7 Key African Industries
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  We build websites and mobile applications tailored for the unique challenges of each African industry — helping businesses across 7 sectors grow revenue, reach customers, and scale operations.
                </p>
              </div>
              <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/industries-hero.png"
                    alt="Website and mobile app solutions for African industries"
                    className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Industry-Specific Website & Mobile App Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each industry has unique digital challenges. We build websites and mobile apps specifically designed to solve the problems faced by African businesses in each sector.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Sector Approach */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Cross-Industry Website & Mobile App Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether it's a booking website for a safari lodge, a mobile app for farmers, or a patient portal for a clinic — every website and mobile app we build is researched, designed, and optimized for the specific realities of each African industry. Our two core services — Website Development and Mobile App Development — are applied with deep sector knowledge to drive maximum business impact.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Impact Across 7 Industries</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Delivering purpose-built websites and mobile apps for business growth across Africa's key industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-teal mb-2">7</div>
                <p className="text-gray-600 font-medium">Key Industries Served</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-blue mb-2">2</div>
                <p className="text-gray-600 font-medium">Core Services</p>
                <p className="text-xs text-gray-500 mt-1">Websites & Mobile Apps</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-teal mb-2">100%</div>
                <p className="text-gray-600 font-medium">Africa-Focused Solutions</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-blue mb-2">∞</div>
                <p className="text-gray-600 font-medium">Scalability Potential</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Build a Website or Mobile App for Your Industry?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let us build a website or mobile application tailored to the unique challenges and opportunities of your African industry sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start Your Project <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/services" className="btn-outline">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
