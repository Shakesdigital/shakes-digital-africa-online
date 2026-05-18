import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  color: string;
  ctaText: string;
  serviceLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  benefits,
  imageUrl,
  color,
  ctaText,
  serviceLink,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 overflow-hidden flex flex-col"
      style={{ borderColor: color }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-shakes-blue-dark">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        <div className="mb-6 flex-grow">
          <h4 className="font-bold text-shakes-teal mb-3">What We Build:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-shakes-teal mt-1 flex-shrink-0" />
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
      title: "Custom Software Development",
      description:
        "We build tailored business systems, dashboards, portals, workflow tools, and data platforms for African organizations that need more than a standard website or mobile app.",
      benefits: [
        "Custom business management systems for operations, sales, inventory, projects, and teams",
        "Client, partner, and staff portals that centralize service delivery and communication",
        "CRM, ERP, reporting, and workflow automation tools shaped around your processes",
        "Data dashboards and analytics platforms for better decision-making and impact tracking",
        "Integrations with payment platforms, accounting tools, CRMs, APIs, and existing systems",
        "Secure, scalable web-based software that grows from one branch to multi-country operations",
      ],
      imageUrl: "/custom-software.png",
      color: "#0D5C63",
      ctaText: "Start Your Software Project",
      serviceLink: "/services/custom-software",
    },
    {
      title: "Website Development",
      description:
        "We build fast, mobile-responsive, and high-performing websites tailored for African businesses, from corporate sites and e-commerce platforms to content-rich websites that drive customer acquisition and revenue growth.",
      benefits: [
        "Business and corporate websites that establish a strong digital presence across African markets",
        "E-commerce platforms with local payment integration for cross-border trade",
        "Landing pages and campaign websites built to convert visitors into leads and customers",
        "Content management systems that empower African businesses to manage their own digital content",
        "Website redesign and performance optimization for faster load times on African networks",
        "SEO-optimized websites to help African businesses rank higher in search results",
      ],
      imageUrl: "/web-development-2.png",
      color: "#1D70A2",
      ctaText: "Start Your Website Project",
      serviceLink: "/services/web-development",
    },
    {
      title: "Mobile Application Development",
      description:
        "We create native and cross-platform mobile applications engineered for Africa's mobile-first economy, with offline capabilities, mobile money integration, and lightweight designs optimized for real-world devices and connectivity.",
      benefits: [
        "Native iOS and Android mobile applications built for performance and reliability",
        "Cross-platform apps with a single codebase to reduce development cost and time-to-market",
        "Offline-capable architecture for areas with limited or intermittent connectivity",
        "Mobile payment integration with M-Pesa, MTN MoMo, Airtel Money, and bank APIs",
        "Field data collection and community engagement apps for development organizations",
        "Business management apps for inventory, CRM, sales tracking, and real-time analytics",
      ],
      imageUrl: "/mobile-app.png",
      color: "#1DACA2",
      ctaText: "Start Your Mobile App Project",
      serviceLink: "/services/mobile-app-development",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                  Custom Software, Website & Mobile App Development for African Businesses
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We build custom software, websites, and mobile applications that solve real African Development Business Challenges, from establishing a digital presence and reaching new customers to automating operations and scaling across markets.
                </p>
              </div>
              <div>
                <img
                  src="/children-learning-2.png"
                  alt="African team developing software, website, and mobile app solutions"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Three Focused Services, Maximum Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We separate custom software development, website development, and mobile application development so every business can choose the exact digital product it needs to grow, automate, and serve customers better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Development Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every software platform, website, and mobile app we build follows a structured process rooted in understanding African Development Business Challenges and delivering solutions that make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                ["1", "Discovery", "Understand your business challenges, target users, and the African market context"],
                ["2", "Design", "Create user-centered software, website, and app designs optimized for African users and devices"],
                ["3", "Development", "Build your digital product using modern technologies, with continuous client feedback"],
                ["4", "Testing", "Test on African networks, devices, and real-world conditions to ensure reliability"],
                ["5", "Launch & Support", "Deploy your product and provide ongoing support, updates, and performance optimization"],
              ].map(([step, title, description], index) => (
                <div key={title} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className={`${index % 2 === 0 ? "bg-shakes-teal/20" : "bg-shakes-blue/20"} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`${index % 2 === 0 ? "text-shakes-teal" : "text-shakes-blue"} text-xl font-bold`}>{step}</span>
                  </div>
                  <h4 className="font-bold text-shakes-blue-dark mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Why African Businesses Choose Shakes Digital</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We do not just build software, websites, and apps. We build digital products that understand and solve African Development Business Challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Built for African Realities</h4>
                <p className="text-gray-600">Our software, websites, and apps are optimized for African connectivity, mobile devices, payment systems, and user behaviors.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Focused on Solving Real Problems</h4>
                <p className="text-gray-600">Every product we build addresses a specific business or development challenge, from customer acquisition and revenue growth to operational efficiency and market expansion.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-shakes-teal mb-3">Scalable Across African Markets</h4>
                <p className="text-gray-600">Our solutions are designed to grow with your business, from a single location in Uganda to multi-country operations across East Africa and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Build Your Software, Website, or Mobile App?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how a professionally built custom software platform, website, or mobile application can help your African business overcome its challenges and reach its growth potential.
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
