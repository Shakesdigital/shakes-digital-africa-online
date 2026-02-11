import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <>
      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shakes-blue-dark">How We Build for Africa</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Every website and mobile app we develop follows a proven approach — grounded in understanding African business challenges and delivering products that create real impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Research</h3>
              <p className="text-gray-600">We study your business challenges, target users, and the African market context before writing a single line of code.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Build</h3>
              <p className="text-gray-600">We design and develop your website or mobile app using modern technologies, optimized for African users and conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Launch & Grow</h3>
              <p className="text-gray-600">We deploy your product, measure its impact, and continuously optimize it to drive business growth across African markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Website or Mobile App?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how a professionally built website or mobile application can help solve your African business challenges and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
              <Link to="/about-us">Learn About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
