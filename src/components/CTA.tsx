import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <>
      {/* Our Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shakes-blue-dark">Addressing Africa's Development Challenges</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Shakes Digital exists to tackle Africa's sustainable development and business challenges through digital web solutions. Our approach—researching African contexts, implementing locally-adapted technologies, building partnerships across the continent, mobilizing resources, and evaluating for scalability—ensures every solution drives real impact in poverty alleviation, business growth, and community empowerment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Africa-Focused Research & Implementation</h3>
              <p className="text-gray-600">Identifying Africa's poverty, business, and infrastructure challenges, then deploying contextually-relevant Custom Software, Web, and Mobile solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">African Partnerships & Resources</h3>
              <p className="text-gray-600">Partnering with African and international organizations to mobilize funding and scale sustainable development solutions across the continent.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Evaluation for African Impact</h3>
              <p className="text-gray-600">Rigorously evaluating solutions for replication across African communities, maximizing sustainable development and poverty alleviation impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Africa's Challenges into Digital Opportunities</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create powerful digital web solutions—Custom Software, Web Platforms, or Mobile Apps—specifically designed to address your sustainable development and business challenges in Africa. From poverty alleviation to community empowerment, business growth to environmental conservation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
              <Link to="/about-us">Learn About Our Objectives</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
