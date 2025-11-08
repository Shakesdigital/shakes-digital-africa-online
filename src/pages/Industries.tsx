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
        <h4 className="text-lg font-semibold text-shakes-teal mb-3">Our Services:</h4>
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
      description: "Digital solutions for tourism and hospitality business operations, booking systems, and guest management.",
      services: [
        "Web Development for booking sites and visitor portals",
        "Mobile Apps for guided tours and wildlife tracking",
        "Custom Software for real-time data and reservations"
      ],
      objectives: "Drives revenue growth and customer satisfaction for scalable, profitable tourism businesses.",
      link: "/industries/sustainable-tourism"
    },
    {
      image: "/renewable-energy.png",
      title: "Energy & Utilities",
      description: "Technology supporting energy business operations, grid management, and customer billing systems.",
      services: [
        "Custom Software for energy modeling and grid management",
        "Web Development for performance tracking dashboards",
        "Mobile Apps for field monitoring and reporting"
      ],
      objectives: "Enables operational efficiency and market expansion for energy service providers.",
      link: "/industries/renewable-energy"
    },
    {
      image: "/agriculture.png",
      title: "Agriculture & Food Business",
      description: "Empowering agricultural enterprises and agribusinesses with digital tools and market access platforms.",
      services: [
        "Mobile Apps for crop management and market access",
        "Web Development for market portals and supply chain",
        "Custom Software for precision agriculture and analytics"
      ],
      objectives: "Drives market access, profitability, and business growth for agricultural enterprises.",
      link: "/industries/agriculture"
    },
    {
      image: "/non-profit.png",
      title: "Non-Profit & Organizations",
      description: "Digital infrastructure for NGOs and organizations focused on Sustainable African Business Development and community services.",
      services: [
        "Custom Software for project tools and impact tracking",
        "Web Development for outreach sites and fundraising",
        "Mobile Apps for collaboration and donor management"
      ],
      objectives: "Enables operational efficiency and fundraising success for mission-driven organizations.",
      link: "/industries/nonprofit"
    },
    {
      image: "/education.png",
      title: "Education & EdTech",
      description: "Technology platforms for education delivery, skills development, and online learning business operations.",
      services: [
        "Web Development for learning management platforms",
        "Mobile Apps for interactive courses and assessments",
        "Custom Software for student analytics and progress tracking"
      ],
      objectives: "Drives enrollment growth and operational efficiency for education service providers.",
      link: "/industries/education"
    },
    {
      image: "/sme-esg.png",
      title: "Small & Medium Enterprises",
      description: "Supporting small and medium enterprises with digital solutions for growth, efficiency, and market competitiveness.",
      services: [
        "Custom Software for business operations and reporting tools",
        "Web Development with ecommerce integration",
        "Mobile Apps for sales and customer engagement"
      ],
      objectives: "Drives scalability, profitability, and market leadership for growing SMEs.",
      link: "/industries/smes"
    },
    {
      image: "/healthcare.png",
      title: "Healthcare & Wellness",
      description: "Digital health solutions for healthcare providers, clinics, and wellness businesses.",
      services: [
        "Mobile Apps for telehealth and patient engagement",
        "Custom Software for health information systems",
        "Web Development for patient portals and secure data sharing"
      ],
      objectives: "Enables operational efficiency and patient acquisition for healthcare service providers.",
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
                  Industries We Elevate: Digital Solutions for Sector-Specific Business Growth
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Custom Software, Web Development, and Mobile Apps tailored for African challenges.
                </p>
              </div>
              <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/industries-hero.png"
                    alt="African industries empowered through digital solutions for business growth"
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
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Sector-Specific Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each industry benefits from our core services, aligned with our objectives for business growth and profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Focus Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Cross-Sector Innovation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our services enable business growth and market expansion, ensuring solutions scale across industries. From tourism to healthcare, we deliver Custom Software, Web Development, and Mobile Apps that are researched, implemented, and evaluated for maximum business ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Impact Across Sectors</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Delivering objective-driven solutions for business growth and profitability across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-teal mb-2">7</div>
                <p className="text-gray-600 font-medium">Key Industries Served</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-blue mb-2">3</div>
                <p className="text-gray-600 font-medium">Core Services</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-shakes-teal mb-2">100%</div>
                <p className="text-gray-600 font-medium">Tailored Solutions</p>
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
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let us help you leverage digital technology to address the unique business challenges in your sector and drive revenue growth across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  See How We Can Help Your Industry <ArrowRight className="h-5 w-5" />
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
