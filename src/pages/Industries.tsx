import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  emoji: string;
  title: string;
  description: string;
  services: string[];
  objectives: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ emoji, title, description, services, objectives }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-5xl mb-4">{emoji}</div>
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

      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 italic">{objectives}</p>
      </div>

      <a href="/contact" className="btn-outline w-full mt-6 block text-center">
        Customize for Your Sector
      </a>
    </div>
  );
};

const Industries: React.FC = () => {
  const industries = [
    {
      emoji: "🌿",
      title: "Sustainable Tourism & Ecotourism",
      description: "Digital solutions for environmentally responsible tourism operations.",
      services: [
        "Web Development for booking sites and visitor portals",
        "Mobile Apps for guided tours and wildlife tracking",
        "Custom Software for real-time data and reservations"
      ],
      objectives: "Leverages research and evaluation for scalable, impactful tourism deployments."
    },
    {
      emoji: "⚡",
      title: "Renewable Energy & Green Tech",
      description: "Technology supporting clean energy initiatives and sustainability projects.",
      services: [
        "Custom Software for energy modeling and grid management",
        "Web Development for performance tracking dashboards",
        "Mobile Apps for field monitoring and reporting"
      ],
      objectives: "Supports implementation and resource mobilization for renewable energy expansion."
    },
    {
      emoji: "🌾",
      title: "Agriculture & Food Security",
      description: "Empowering farmers and agricultural enterprises with digital tools.",
      services: [
        "Mobile Apps for crop management and market access",
        "Web Development for market portals and supply chain",
        "Custom Software for precision agriculture and analytics"
      ],
      objectives: "Facilitates networking and partnerships for sustainable food system transformation."
    },
    {
      emoji: "🤝",
      title: "Non-Profit & Social Impact",
      description: "Digital infrastructure for NGOs and community development organizations.",
      services: [
        "Custom Software for project tools and impact tracking",
        "Web Development for outreach sites and fundraising",
        "Mobile Apps for collaboration and donor management"
      ],
      objectives: "Enables research, implementation, and evaluation for amplified social impact."
    },
    {
      emoji: "📚",
      title: "Education & Workforce Development",
      description: "Technology platforms advancing learning and skills development.",
      services: [
        "Web Development for learning management platforms",
        "Mobile Apps for interactive courses and assessments",
        "Custom Software for student analytics and progress tracking"
      ],
      objectives: "Drives implementation and monitoring for improved educational outcomes."
    },
    {
      emoji: "💼",
      title: "SMEs with ESG Focus",
      description: "Supporting small and medium enterprises committed to environmental, social, and governance goals.",
      services: [
        "Custom Software for ESG compliance and reporting tools",
        "Web Development with ecommerce integration",
        "Mobile Apps for sustainability metrics tracking"
      ],
      objectives: "Supports resource mobilization and evaluation for sustainable business growth."
    },
    {
      emoji: "🏥",
      title: "Healthcare & Public Health",
      description: "Digital health solutions improving access and quality of care.",
      services: [
        "Mobile Apps for telehealth and patient engagement",
        "Custom Software for health information systems",
        "Web Development for patient portals and secure data sharing"
      ],
      objectives: "Enables partnerships and implementation for expanded healthcare access."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                Industries We Elevate: Digital Solutions for Sector-Specific Sustainability
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Custom Software, Web Development, and Mobile Apps tailored for African challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Sector-Specific Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each industry benefits from our core services, aligned with our objectives for sustainable impact.
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
                Our services enable resource mobilization and partnerships, ensuring solutions scale across industries. From tourism to healthcare, we deliver Custom Software, Web Development, and Mobile Apps that are researched, implemented, and evaluated for maximum sustainable impact.
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
                Delivering objective-driven solutions for sustainable development across Africa.
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
                Let us help you leverage digital technology to address the unique challenges in your sector and drive sustainable growth across Africa.
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
