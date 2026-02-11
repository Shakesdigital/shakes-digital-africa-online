
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Search, Users, BarChart, ArrowRight, Code, Lightbulb } from "lucide-react";
import Hero from "@/components/Hero";
import SEOSchema from "@/components/SEOSchema";

const Index: React.FC = () => {
  // FAQ Data for Schema and Display
  const faqs = [
    {
      question: "What website and mobile app development services does Shakes Digital offer for African businesses?",
      answer: "Shakes Digital specializes in two core services for African businesses: (1) Website Development — including business websites, e-commerce platforms, web applications, portals, and content management systems optimized for African markets; (2) Mobile Application Development — native and cross-platform iOS/Android apps with offline capabilities, mobile payment integration, and real-time analytics. All solutions are designed to address specific African business and development challenges."
    },
    {
      question: "Why should African businesses choose Shakes Digital for website and mobile app development?",
      answer: "Shakes Digital brings unique advantages for African businesses: (1) Deep understanding of African business challenges and development needs, (2) Mobile-first approach optimized for African connectivity realities, (3) Cost-effective solutions tailored to African budgets, (4) Expertise across 7 key African industries, (5) Research-driven development process ensuring locally relevant solutions, (6) Focus on solving real business problems — from customer acquisition to revenue growth, operational efficiency, and market expansion."
    },
    {
      question: "How does Shakes Digital approach website development for African businesses?",
      answer: "Our website development process starts with deep research into your specific African business challenges. We build fast-loading, mobile-responsive websites that work reliably across African connectivity conditions. Whether it's an e-commerce platform for cross-border trade, a business portal for stakeholder collaboration, or a corporate website to establish your digital presence — we ensure every website is built to drive measurable business results."
    },
    {
      question: "What kind of mobile apps does Shakes Digital build for African markets?",
      answer: "We build mobile applications specifically engineered for African markets — including business management apps, customer engagement platforms, mobile commerce solutions, field data collection tools, and community engagement apps. Key features include offline functionality for areas with limited connectivity, integration with African mobile payment systems like M-Pesa and MTN Mobile Money, and lightweight designs optimized for devices common across Africa."
    },
    {
      question: "Which industries does Shakes Digital serve with website and mobile app solutions?",
      answer: "Shakes Digital serves 7 key African industries with website and mobile app solutions: (1) Healthcare — patient portals and telemedicine apps, (2) Education — learning platforms and student management systems, (3) Agriculture — farm management and supply chain apps, (4) Fintech — digital wallets and payment platforms, (5) Tourism — booking websites and travel apps, (6) Non-Profits — impact tracking portals and donor management apps, (7) SMEs — business websites and e-commerce mobile apps."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOSchema
        type="Organization"
        title="Website & Mobile App Development for African Businesses | Shakes Digital Africa"
        description="Africa's leading website and mobile app development agency. We build powerful websites and mobile applications that solve real African business and development challenges. Serving businesses across Uganda, Kenya, Tanzania, Rwanda."
        url="https://shakesdigital.com/"
        image="https://shakesdigital.com/hero-mobile-app.png"
        faq={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://shakesdigital.com/" }
        ]}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Core Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Two Core Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We focus on what we do best — building websites and mobile applications that solve real African business and development challenges.
              </p>
            </div>

            {/* Core Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <img
                  src="/web-development-2.png"
                  alt="Website development for African businesses"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Website Development</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    From business websites and e-commerce platforms to web applications and portals — we build fast, mobile-responsive web solutions that help African businesses establish a strong digital presence, acquire customers, and drive revenue.
                  </p>
                  <a href="/services/web-development" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <img
                  src="/mobile-app.png"
                  alt="Mobile app development for African businesses"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Mobile App Development</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Native and cross-platform mobile apps with offline capabilities, mobile payment integration, and analytics — engineered for Africa's mobile-first economy to help businesses engage customers and scale operations.
                  </p>
                  <a href="/services/mobile-app-development" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="w-20 h-20 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-shakes-teal" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Research-Driven Development</h4>
                <p className="text-gray-600">We study your specific African business challenges and market context to build websites and apps that truly fit your needs</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-shakes-blue" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Built for African Users</h4>
                <p className="text-gray-600">Every website and mobile app we create is optimized for African connectivity, devices, and user behaviors</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-10 h-10 text-shakes-blue-light" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Measurable Business Impact</h4>
                <p className="text-gray-600">Our websites and apps are designed to deliver real results — more customers, increased revenue, and improved efficiency</p>
              </div>
            </div>

            {/* Impact Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-6">Solving African Business Challenges Through Code</h3>
                <p className="text-lg text-gray-600 mb-8">
                  From helping a Kampala retailer launch their first e-commerce website to building a mobile app that connects rural farmers to urban markets — we partner with African businesses to understand their challenges and build the digital products that solve them. Every website and mobile app we create is a tool for growth, impact, and economic transformation.
                </p>
                <a href="/about-us" className="btn-primary inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div>
                <img
                  src="/farmer-2.png"
                  alt="African entrepreneur using mobile technology for business growth"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
