
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shakes-blue-dark mb-6">
              Empowering East Africa's Businesses with 
              <span className="text-shakes-orange"> Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              We build innovative, scalable, and sustainable digital solutions tailored to 
              the unique needs of East African businesses and organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center gap-2">
                Explore Services <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="btn-outline">
                Get a Digital Quote
              </a>
            </div>
          </div>
          <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-orange/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Digital transformation in East Africa" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
