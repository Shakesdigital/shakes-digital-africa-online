
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
              Africa's Digital Web Solutions Provider
              <span className="text-shakes-teal"> Addressing Unique Sustainable Development Challenges</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Shakes Digital specializes in addressing Africa's unique sustainable development and business challenges through innovative, locally-adapted digital web solutions.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
              We understand Africa's context—from infrastructure limitations to community needs. Our Custom Software, Web Development, and Mobile Apps are designed to tackle poverty alleviation, business growth, environmental sustainability, and community empowerment across the African continent.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="btn-primary flex items-center gap-2">
                Discover Our Services <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/about-us" className="btn-outline">
                Learn More About Us
              </a>
            </div>
          </div>
          <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
              <img
                src="/kids-on-laptop.jpg"
                alt="African children empowered through digital technology for sustainable development"
                className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mission Highlight */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-shakes-blue-dark mb-4">Driving Africa's Sustainable Development Through Digital Innovation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Africa faces unique sustainable development challenges—from poverty and limited infrastructure to environmental concerns and business growth barriers. Shakes Digital exists to address these challenges head-on through carefully researched, contextually-relevant digital web solutions that empower African communities and businesses to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
