
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
              Website & Mobile App Development
              <span className="text-shakes-teal"> for African Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              We build powerful Websites and Mobile Applications designed to solve real African business and development challenges—helping businesses grow revenue, reach more customers, and scale operations across the continent.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="btn-primary flex items-center gap-2">
                Explore Our Services <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/about-us" className="btn-outline">
                Learn More About Us
              </a>
            </div>
          </div>
          <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-[320px] md:h-[380px] lg:h-[450px]">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
              <img
                src="/hero-mobile-app.png"
                alt="Website and mobile app development solutions for African businesses"
                className="rounded-lg shadow-xl relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Highlight */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-shakes-blue-dark mb-4">Building Digital Products That Solve African Challenges</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Africa's businesses face unique challenges—from limited digital presence and customer acquisition hurdles to operational inefficiency and market access barriers. We specialize in crafting websites and mobile applications that directly address these challenges, empowering African entrepreneurs and organizations to thrive in the digital economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
