
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Search, Users, BarChart, ArrowRight, Code, Lightbulb } from "lucide-react";
import Hero from "@/components/Hero";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Comprehensive Digital Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Digital Solutions for Africa's Development</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine research-driven insights, strategic partnerships, and continuous evaluation to create sustainable digital solutions that address Africa's unique development challenges—from infrastructure limitations to community empowerment.
              </p>
            </div>

            {/* Core Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <img
                  src="/custom-software.png"
                  alt="African software developer creating solutions"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-16 h-16 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto -mt-14 mb-4 border-4 border-white">
                    <Code className="w-8 h-8 text-shakes-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Custom Software</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Tailored applications addressing specific challenges—from agricultural management to healthcare access and financial inclusion.
                  </p>
                  <a href="/services/custom-software" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <img
                  src="/web-development-2.png"
                  alt="African developers building web platforms"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-16 h-16 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto -mt-14 mb-4 border-4 border-white">
                    <Lightbulb className="w-8 h-8 text-shakes-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Web Development</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Mobile-first web platforms optimized for low bandwidth and driving sustainable business growth across Africa.
                  </p>
                  <a href="/services/web-development" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <img
                  src="/mobile-app.png"
                  alt="African entrepreneur using mobile app"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-16 h-16 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto -mt-14 mb-4 border-4 border-white">
                    <Search className="w-8 h-8 text-shakes-blue-light" />
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Mobile Apps</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Solutions enabling community reporting, market access, and offline functionality for areas with limited connectivity.
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
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Research-Driven</h4>
                <p className="text-gray-600">Deep understanding of local challenges to create contextually relevant solutions</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-shakes-blue" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Strategic Partnerships</h4>
                <p className="text-gray-600">Collaboration with local organizations to ensure sustainable impact</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-10 h-10 text-shakes-blue-light" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Impact Focused</h4>
                <p className="text-gray-600">Continuous evaluation to ensure meaningful development outcomes</p>
              </div>
            </div>

            {/* Impact Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-6">Driving Sustainable Change</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We partner with African and international organizations in technology, community development, environmental conservation, and poverty alleviation to create scalable digital solutions that drive real change across the continent.
                </p>
                <a href="/about-us" className="btn-primary inline-flex items-center gap-2">
                  Explore Our Impact <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div>
                <img
                  src="/farmer-2.png"
                  alt="African farmer using technology in the field"
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
