import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  color: string;
  ctaText: string;
  serviceLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, benefits, imageUrl, color, ctaText, serviceLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 overflow-hidden" style={{ borderColor: color }}>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-shakes-blue-dark">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        <div className="mb-6">
          <h4 className="font-bold text-shakes-teal mb-3">Key Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 text-shakes-teal mt-1">✓</div>
                <span className="text-gray-600 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <Button className="btn-outline w-full" asChild>
            <Link to={serviceLink}>Learn More</Link>
          </Button>
          <Button className="btn-primary w-full" asChild>
            <Link to="/contact">{ctaText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Software",
      description: "Bespoke applications designed specifically for African business needs—from CRM and inventory management to financial systems and supply chain optimization.",
      benefits: [
        "Built for African market realities (mobile-first, cost-effective infrastructure)",
        "Drives revenue growth and operational efficiency through targeted digital solutions",
        "Supports business automation, customer management, and financial tracking",
        "Designed for scalability across African businesses and markets"
      ],
      imageUrl: "/custom-software.png",
      color: "#1DACA2",
      ctaText: "Request Custom Build",
      serviceLink: "/services/custom-software"
    },
    {
      title: "Web Development",
      description: "Robust web platforms engineered for African business success—optimized for high performance, mobile-first access, and designed to drive sales, customer acquisition, and market expansion.",
      benefits: [
        "Optimized for African market connectivity and mobile-first customer engagement",
        "Drives business growth and revenue generation across African markets",
        "Supports e-commerce, digital marketing, and customer relationship management",
        "Built to facilitate partnerships and market expansion across Africa"
      ],
      imageUrl: "/web-development-2.png",
      color: "#1D70A2",
      ctaText: "Develop Your Web Presence",
      serviceLink: "/services/web-development"
    },
    {
      title: "Mobile Apps",
      description: "Mobile-first solutions capitalizing on Africa's rapid smartphone adoption—enabling customer engagement, sales transactions, digital payments, and real-time business analytics.",
      benefits: [
        "Leverages Africa's mobile-first reality and growing smartphone penetration",
        "Enables revenue generation through mobile commerce and digital payment integration",
        "Supports customer acquisition, loyalty programs, and business growth",
        "Offline-capable architecture for African market reliability"
      ],
      imageUrl: "/mobile-app.png",
      color: "#66B9DE",
      ctaText: "Build Your App",
      serviceLink: "/services/mobile-app-development"
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
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                  Digital Web Solutions for African Business Growth
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Purpose-built services addressing African business challenges and sustainable development needs—revenue growth, operational efficiency, market expansion, and competitive advantage through contextually-relevant digital technology that supports long-term economic resilience.
                </p>
              </div>
              <div>
                <img
                  src="/children-learning-2.png"
                  alt="African team developing digital solutions for sustainable development challenges"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Three Services Tailored for African Business Growth</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each service is meticulously designed to address African business challenges—researched within African market contexts, implemented with local realities in mind, and evaluated for scalability across diverse African enterprises and industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Africa-Focused Business Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every solution begins with deep research into African market and business challenges, followed by contextually-relevant implementation, strategic business partnerships across the continent, resource mobilization, and rigorous evaluation for scalability across African enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">1</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Research</h4>
                <p className="text-gray-600 text-sm">Identify African market and competitive challenges addressable through digital solutions</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-blue">2</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Deploy Africa-adapted technologies addressing business growth, operational efficiency, and market expansion</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">3</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Partnerships</h4>
                <p className="text-gray-600 text-sm">Partner with African and international businesses to scale market presence and business impact</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-blue">4</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Mobilize funding and resources for African business growth and digital transformation projects</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">5</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Evaluate and optimize solutions across African markets for maximum business impact and ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Why Choose Shakes Digital for African Business Challenges</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We combine technical excellence with deep expertise in African business challenges—from digital transformation to market competition, operational scalability to customer acquisition and revenue growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Africa-Contextualized Solutions</h4>
                <p className="text-gray-600">Every project is designed for African market realities—competitive dynamics, customer preferences, and diverse business needs across the continent.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Business Growth Focus</h4>
                <p className="text-gray-600">Specialized in addressing African business growth, operational efficiency, market expansion, and competitive advantage challenges through digital solutions.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Proven African Business Results</h4>
                <p className="text-gray-600">Solutions rigorously tested and scaled across African markets for maximum business growth and competitive advantage impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Address Your African Business Challenges?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our digital web solutions can tackle your specific business challenges in Africa—from digital transformation to market expansion, customer acquisition to operational efficiency and revenue growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/industries" className="btn-outline">
                  View Industries We Serve
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

export default Services;
