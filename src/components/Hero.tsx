
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shakes-blue-dark mb-6">
              Empowering African Communities Through
              <span className="text-shakes-teal"> Digital Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              At Shakes Digital, we harness the power of technology to tackle sustainable community development and business challenges across Africa, driving poverty alleviation and lasting impact in regions like East Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center gap-2">
                Get Started Today <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="btn-outline">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Digital transformation in Africa" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
              />
            </div>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a passion for change in Africa, Shakes Digital bridges the gap between technology and real-world needs on the continent. We provide tailored digital solutions to empower African businesses and communities, fostering growth, inclusion, and sustainability from Uganda to Rwanda and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
