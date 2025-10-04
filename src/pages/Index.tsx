
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Users, Lightbulb, BarChart, Settings, Globe } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Featured Services Carousel */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Core Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer three powerful, tailored digital web services expertly designed to transform and address sustainable community and business challenges across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Custom Software</h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Bespoke applications designed for unique sustainable needs.
                </p>
                <a href="/services" className="btn-outline w-full text-center block">Learn More</a>
              </div>

              <div className="bg-white border-2 border-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Web Development</h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Responsive platforms optimizing business and community efficiency.
                </p>
                <a href="/services" className="btn-outline w-full text-center block">Learn More</a>
              </div>

              <div className="bg-white border-2 border-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Mobile Apps</h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  User-centric apps for on-the-go access and engagement.
                </p>
                <a href="/services" className="btn-outline w-full text-center block">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Impact by the Numbers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our objectives ensure every solution is researched, implemented, and monitored for replication, maximizing sustainable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-shakes-teal">3</span>
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Core Services</h4>
                <p className="text-gray-600">Comprehensive digital solutions for every need</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-shakes-blue" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Growing Partnerships</h4>
                <p className="text-gray-600">Collaborations Active Through Networking</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-12 h-12 text-shakes-blue-light" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Solutions Evaluated</h4>
                <p className="text-gray-600">Optimized for Scaling & Replication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Teaser Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Forging Alliances for Innovation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We network with local and international organizations in tech, community, and environmental development to mobilize resources and scale digital impact.
              </p>
            </div>

            <div className="text-center mt-12">
              <a href="/about-us" className="btn-primary inline-flex items-center gap-2">
                Learn About Our Partnerships <ArrowRight className="h-5 w-5" />
              </a>
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
