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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, benefits, imageUrl, color, ctaText }) => {
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
        <Button className="btn-primary w-full mt-auto" asChild>
          <Link to="/contact">{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Software",
      description: "Tailored software solutions built to fit specific needs, from workflow automation to specialized tools for environmental monitoring.",
      benefits: [
        "Advances research and implementation by creating adaptable systems",
        "Supports evaluation through built-in analytics",
        "Bespoke applications for unique sustainable challenges",
        "Scalable architecture for growing organizations"
      ],
      imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#1DACA2",
      ctaText: "Request Custom Build"
    },
    {
      title: "Web Development",
      description: "Full-stack web platforms with responsive designs, optimized for secure collaboration and data-driven insights.",
      benefits: [
        "Facilitates partnerships with integrated features",
        "Aids resource mobilization via scalable architectures",
        "Responsive design for all devices",
        "SEO-optimized for maximum reach"
      ],
      imageUrl: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#1D70A2",
      ctaText: "Develop Your Web Presence"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform apps enabling real-time engagement, such as community reporting or business management tools.",
      benefits: [
        "Drives objective fulfillment by providing accessible implementations",
        "Enables monitoring for user feedback and iteration",
        "Native and cross-platform development",
        "Offline functionality for low-connectivity areas"
      ],
      imageUrl: "https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#66B9DE",
      ctaText: "Build Your App"
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
                  Our Services: Precision Digital Tools for Sustainability
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Innovative offerings dedicated to solving sustainable community and business challenges.
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African team providing digital services and technology solutions"
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
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Three Core Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each service is designed to align with our objectives—from research to implementation, partnerships, resource mobilization, and evaluation—ensuring sustainable impact across Africa.
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
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Objective-Driven Delivery</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our workflow reflects our objectives: from challenge research to solution implementation and impact evaluation, powered by our core services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">1</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Research</h4>
                <p className="text-gray-600 text-sm">Identify challenges addressable through digital solutions</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-blue">2</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Deploy tailored technologies to resolve challenges</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">3</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Partnerships</h4>
                <p className="text-gray-600 text-sm">Collaborate with organizations for greater impact</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-blue">4</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Secure funding for scalable projects</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">5</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Assess and scale solutions for maximum impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Why Choose Shakes Digital</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We combine technical excellence with a deep understanding of sustainable community and business challenges across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Tailored Solutions</h4>
                <p className="text-gray-600">Every project is customized to align with your unique sustainable development goals.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Africa Focus</h4>
                <p className="text-gray-600">Deep understanding of regional challenges, infrastructure, and opportunities across the continent.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Impact-Driven</h4>
                <p className="text-gray-600">Solutions designed for evaluation, scaling, and long-term sustainable impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us for a consultation tailored to your sustainable community and business needs.
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
