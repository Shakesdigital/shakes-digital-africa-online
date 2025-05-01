import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let's create something amazing together. Start your digital journey with East Africa's trusted web development partner.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
            <Link to="/portfolio">View Our Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
