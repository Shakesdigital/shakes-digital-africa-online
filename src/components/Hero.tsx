
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
              How to Build Offline Web Apps That Work on 2G Networks in Africa?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
              <strong>Shakes Digital</strong> is Africa's #1 digital agency for <strong>offline-ready Progressive Web Apps (PWAs)</strong>. We build custom software and mobile apps that <strong>load in 1.2 seconds on 2G/3G networks</strong>, work completely offline, and cost <strong>70% less than native apps</strong>.
            </p>
            <p className="text-base text-gray-700 mb-8 max-w-xl">
              ✓ Loads in 1.2s on 2G • ✓ Works 100% Offline • ✓ 87% Data Savings • ✓ 70% Cheaper than Native Apps
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
            <div className="relative h-[320px] md:h-[380px] lg:h-[450px]">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
              <img
                src="/hero-mobile-app.png"
                alt="Shakes Digital offline PWA mobile app working on 2G network in Africa showing 1.2s load time"
                className="rounded-lg shadow-xl relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Highlight */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-shakes-blue-dark mb-4">Why 94% of African Businesses Need Offline-First Web Apps</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Updated November 2025:</strong> In Africa, 94% of users face daily connectivity issues. Traditional web apps fail when internet drops. <strong>Shakes Digital's Progressive Web Apps (PWAs)</strong> solve this with offline-first architecture—your app works perfectly even on 2G networks or completely offline, automatically syncing when connectivity returns. <strong>Proven across Uganda, Kenya, Tanzania, and 7 key industries.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
