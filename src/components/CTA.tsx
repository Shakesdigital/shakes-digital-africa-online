
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's collaborate to create innovative digital solutions that drive growth for your East African business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Let's Build Together <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg"
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
