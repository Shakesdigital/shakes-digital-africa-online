import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <>
      {/* Our Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shakes-blue-dark">Our Impact</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            We're committed to leveraging digital technology for good in Africa. From poverty alleviation in East African communities to business empowerment across the continent, our solutions drive measurable change. Join us in building a more connected and sustainable Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Community Empowerment</h3>
              <p className="text-gray-600">Digital solutions that strengthen African communities and promote sustainable development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Poverty Alleviation</h3>
              <p className="text-gray-600">Technology-driven initiatives that create economic opportunities and reduce poverty across Africa.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Digital Literacy</h3>
              <p className="text-gray-600">Bridging the digital divide through education and accessible technology solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive Sustainable Change in Africa?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create digital solutions that empower African communities and drive sustainable development. Partner with us to make a lasting impact across the continent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
              <Link to="/objectives">Learn About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
