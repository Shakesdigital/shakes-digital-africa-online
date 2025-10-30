import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Search, Handshake, Coins, LineChart } from 'lucide-react';

const AboutUs: React.FC = () => {
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
                  Empowering African Businesses Through Digital Innovation
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Addressing African businesses' challenges through tailored digital web solutions—driving revenue growth, operational efficiency, market expansion, and competitive advantage
                </p>
              </div>
              <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/about-us-hero.png"
                    alt="African business professionals using digital technology for growth"
                    className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Establishment Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/lady-pos.jpg"
                    alt="African businesswoman using digital point of sale technology"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-teal/20 rounded-full z-0"></div>
                </div>
              </div>

              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-blue-dark">Who We Are</h3>
                    <p className="text-gray-600 mb-4">
                      Shakes Digital is Africa's digital web services agency dedicated to helping African businesses address their competitive and operational challenges through innovative digital web solutions. We specialize in creating tailored Custom Software, Web Development, and Mobile Apps that drive revenue growth, operational efficiency, market expansion, and competitive advantage across Africa's diverse business sectors.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-teal">Our Central Goal</h3>
                    <p className="text-gray-600">
                      To leverage digital technology through tailored digital web solutions that help African businesses overcome competitive and operational challenges—from digital transformation to market expansion, customer acquisition to scalability—across <a href="/industries" className="font-bold text-shakes-teal hover:text-shakes-teal-dark underline">7 key industries</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Key Objectives</h2>
              <p className="text-lg text-gray-600">
                Strategic objectives that guide every project and partnership:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Research</h4>
                <p className="text-gray-600 text-sm">Understand African business needs and market challenges through market research and competitive analysis.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Business Partnerships</h4>
                <p className="text-gray-600 text-sm">Collaborate with local and international organizations in technology and business development.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Secure funding and resources to enable scalable digital projects.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Monitoring & Evaluation</h4>
                <p className="text-gray-600 text-sm">Assess solution effectiveness to facilitate scaling or replication across diverse populations for enhanced impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services & Sectors Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Three Powerful Digital Solutions for African Businesses</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We deliver Custom Software, Web Development, and Mobile Apps specifically designed to help African businesses overcome competitive and operational challenges across 7 key industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/custom-software.png"
                  alt="Custom software solutions for Africa's development challenges"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Custom Software</h4>
                  <p className="text-gray-600 text-sm">Tailored applications addressing African business challenges—from inventory management to CRM systems, financial tracking to supply chain optimization.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/web-development-2.png"
                  alt="Web development platforms for African businesses"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Web Development</h4>
                  <p className="text-gray-600 text-sm">Robust web platforms designed for African businesses—optimized for performance, mobile-first access, and driving revenue growth and market expansion.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/mobile-app.png"
                  alt="Mobile apps for African communities and businesses"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Mobile Apps</h4>
                  <p className="text-gray-600 text-sm">Mobile-first solutions for African businesses—enabling customer engagement, sales automation, digital payments, and real-time analytics.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/industries" className="btn-primary inline-flex items-center gap-2">
                Explore Our 7 Key Sectors <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>


        {/* Impact Across Africa */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Africa-Wide Business Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Every solution we create is rooted in deep research of African business challenges, implemented with local market context in mind, and evaluated for scalability across African enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-teal mb-2">7</div>
                <p className="text-gray-600 font-medium">Key Industries Served</p>
                <p className="text-xs text-gray-500 mt-1">Across All Business Types</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-blue mb-2">3</div>
                <p className="text-gray-600 font-medium">Core Digital Services</p>
                <p className="text-xs text-gray-500 mt-1">Tailored to Africa's Needs</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-teal mb-2">5</div>
                <p className="text-gray-600 font-medium">Strategic Objectives</p>
                <p className="text-xs text-gray-500 mt-1">Guiding Every Project</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-blue mb-2">100%</div>
                <p className="text-gray-600 font-medium">Tailored Solutions</p>
                <p className="text-xs text-gray-500 mt-1">Built for Africa's Context</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Transform Your African Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in creating tailored digital solutions that drive growth, efficiency, and competitive advantage for African businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Partner with Us <ArrowRight className="h-5 w-5" />
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

export default AboutUs;