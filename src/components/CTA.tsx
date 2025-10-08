import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Africa's Challenges into Digital Opportunities</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create powerful digital web solutions—Custom Software, Web Platforms, or Mobile Apps—specifically designed to address your sustainable development and business challenges in Africa. From poverty alleviation to community empowerment, business growth to environmental conservation.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button asChild className="bg-shakes-orange hover:bg-shakes-orange-dark text-white py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105 font-semibold">
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button asChild className="bg-white text-shakes-blue hover:bg-shakes-orange hover:text-white py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105 font-semibold">
              <Link to="/about-us">Learn About Our Objectives</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
