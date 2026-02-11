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
          <h4 className="font-bold text-shakes-teal mb-3">What We Build:</h4>
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
      title: "Website Development",
      description: "We build fast, mobile-responsive, and high-performing websites tailored for African businesses — from corporate sites and e-commerce platforms to web applications and business portals that drive customer acquisition and revenue growth.",
      benefits: [
        "Business & corporate websites that establish a strong digital presence across African markets",
        "E-commerce platforms with local payment integration (MTN MoMo, Airtel Money, M-Pesa) for cross-border trade",
        "Web applications and business portals for stakeholder collaboration and operational efficiency",
        "Content management systems that empower African businesses to manage their own digital content",
        "Website redesign and performance optimization for faster load times on African networks",
        "SEO-optimized websites to help African businesses rank higher in local and international search results"
      ],
      imageUrl: "/web-development-2.png",
      color: "#1D70A2",
      ctaText: "Start Your Website Project",
      serviceLink: "/services/web-development"
    },
    {
      title: "Mobile Application Development",
      description: "We create native and cross-platform mobile applications engineered for Africa's mobile-first economy — with offline capabilities, mobile money integration, and lightweight designs optimized for the devices and connectivity conditions common across the continent.",
      benefits: [
        "Native iOS and Android mobile applications built for performance and reliability",
        "Cross-platform apps with a single codebase to reduce development cost and time-to-market",
        "Offline-capable architecture for areas with limited or intermittent connectivity",
        "Mobile payment integration with M-Pesa, MTN MoMo, Airtel Money, and bank APIs",
        "Field data collection and community engagement apps for development organizations",
        "Business management apps — inventory, CRM, sales tracking, and real-time analytics"
      ],
      imageUrl: "/mobile-app.png",
      color: "#1DACA2",
      ctaText: "Start Your Mobile App Project",
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
                  Website & Mobile App Development for African Businesses
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We specialize in building websites and mobile applications that solve real African business and development challenges — from establishing a digital presence and reaching new customers to automating operations and expanding into new markets.
                </p>
              </div>
              <div>
                <img
                  src="/children-learning-2.png"
                  alt="African team developing website and mobile app solutions"
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
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Two Focused Services, Maximum Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We concentrate on Website Development and Mobile App Development because these are the most powerful tools African businesses need to establish themselves digitally, connect with customers, and grow sustainably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Development Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Development Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every website and mobile app we build follows a structured process rooted in understanding African business challenges and delivering solutions that make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">1</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Discovery</h4>
                <p className="text-gray-600 text-sm">Understand your business challenges, target users, and the African market context</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-blue">2</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Design</h4>
                <p className="text-gray-600 text-sm">Create user-centered website and app designs optimized for African users and devices</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">3</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Development</h4>
                <p className="text-gray-600 text-sm">Build your website or mobile app using modern technologies, with continuous client feedback</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-blue">4</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Testing</h4>
                <p className="text-gray-600 text-sm">Rigorous testing on African networks, devices, and real-world conditions to ensure reliability</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-shakes-teal">5</span>
                </div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Launch & Support</h4>
                <p className="text-gray-600 text-sm">Deploy your product and provide ongoing support, updates, and performance optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Why African Businesses Choose Shakes Digital</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We don't just build websites and apps — we build digital products that understand and solve African business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Built for African Realities</h4>
                <p className="text-gray-600">Our websites and apps are optimized for African connectivity, mobile devices, payment systems, and user behaviors — not copied from Western templates.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Focused on Solving Real Problems</h4>
                <p className="text-gray-600">Every website and mobile app we build addresses a specific business or development challenge — from customer acquisition and revenue growth to operational efficiency and market expansion.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Scalable Across African Markets</h4>
                <p className="text-gray-600">Our solutions are designed to grow with your business — from a single location in Uganda to multi-country operations across East Africa and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Build Your Website or Mobile App?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how a professionally built website or mobile application can help your African business overcome its challenges and reach its growth potential.
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
