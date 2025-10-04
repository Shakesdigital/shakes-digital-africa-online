
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
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Digital Solutions for Africa's Development Challenges</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Three powerful digital web services specifically designed to address Africa's unique sustainable development and business challenges—from poverty alleviation to infrastructure limitations, community empowerment to economic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African software developer creating solutions for sustainable development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Custom Software</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Tailored applications addressing Africa's specific challenges—from agricultural management to healthcare access, environmental monitoring to financial inclusion.
                  </p>
                  <a href="/services" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African developers building web platforms for business growth"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Web Development</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Robust web platforms designed for Africa's context—optimized for low bandwidth, mobile-first access, and driving sustainable business growth across the continent.
                  </p>
                  <a href="/services" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African entrepreneur using mobile app for business development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3 text-center">Mobile Apps</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    Mobile-first solutions for Africa's growing smartphone adoption—enabling community reporting, market access, digital payments, and offline functionality for areas with limited connectivity.
                  </p>
                  <a href="/services" className="btn-outline w-full text-center block">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Addressing Africa's Challenges Through Digital Innovation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every solution we create is rooted in deep research of Africa's sustainable development and business challenges, implemented with local context in mind, and evaluated for scalability across African communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-shakes-teal">3</span>
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Africa-Focused Solutions</h4>
                <p className="text-gray-600">Digital services designed for Africa's unique development challenges</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-shakes-blue" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">African Partnerships</h4>
                <p className="text-gray-600">Collaborating with organizations across Africa to scale sustainable impact</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-12 h-12 text-shakes-blue-light" />
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Impact Across Africa</h4>
                <p className="text-gray-600">Solutions tested and scaled for maximum sustainable development impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Teaser Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Partnering to Solve Africa's Development Challenges</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Addressing Africa's complex sustainable development and business challenges requires collaboration. We partner with African and international organizations in tech, community development, environmental conservation, and poverty alleviation to create scalable digital solutions that drive real change across the continent.
                </p>
                <a href="/about-us" className="btn-primary inline-flex items-center gap-2">
                  Learn About Our Partnerships <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African professionals collaborating on sustainable development technology solutions"
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
