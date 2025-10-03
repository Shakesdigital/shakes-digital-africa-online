import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <>
      {/* Our Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shakes-blue-dark">Objective-Driven Impact</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            We're committed to leveraging digital technology through our five core services. Our objectives—research, implementation, partnerships, resource mobilization, and evaluation—ensure every solution drives sustainable outcomes across Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Research & Implementation</h3>
              <p className="text-gray-600">Identifying sustainable challenges and deploying tailored Custom Software, Web, Mobile, Cloud, and Database solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Partnerships & Resources</h3>
              <p className="text-gray-600">Collaborating with organizations to mobilize funding and scale digital innovations for community and business impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-shakes-teal mb-3">Monitoring & Evaluation</h3>
              <p className="text-gray-600">Assessing solutions for replication and scaling across diverse populations, maximizing sustainable development outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Your Digital Journey Today</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create innovative digital solutions—Custom Software, Web Development, Mobile Apps, Cloud Services, or Database Solutions—that address your sustainable community and business challenges across Africa.
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
