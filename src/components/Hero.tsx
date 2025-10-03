
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shakes-blue-dark mb-6">
              Shakes Digital: Tailored Digital Solutions for
              <span className="text-shakes-teal"> Sustainable Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              We are a web development agency dedicated to solving sustainable community and business challenges through innovative, tailored digital web solutions.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
              Established to leverage digital technology for addressing sustainable community and business challenges, we offer Custom Software, Web Development, Mobile Apps, Cloud Services, and Database Solutions that enable scalability, collaboration, and impact across East Africa.
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
                alt="African children learning with digital technology"
                className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mission Highlight */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-shakes-blue-dark mb-4">Our Vision for Digital Sustainability</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Guided by a goal to harness innovative solutions for community development and business resilience, we pursue objectives of research, implementation, partnerships, resource mobilization, and evaluation to deliver transformative technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
