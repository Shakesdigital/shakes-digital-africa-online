
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-blue/20 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" 
                alt="Shakes Digital Team" 
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-orange/20 rounded-full z-0"></div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">About Shakes Digital</h2>
            <p className="text-lg mb-6 text-gray-600">
              Founded with a vision to transform East Africa's digital landscape, Shakes Digital 
              brings together the region's best tech talent to deliver innovative solutions that drive growth.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-shakes-blue">Our Mission</h3>
                <p className="text-gray-600">
                  To empower East African businesses and organizations with transformative digital solutions 
                  that are innovative, scalable, and tailored to local needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-shakes-blue">Our Expertise</h3>
                <p className="text-gray-600">
                  Our team combines deep technical knowledge with local insights to create digital experiences 
                  that resonate with East African users while meeting international standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-shakes-blue">Our Commitment</h3>
                <p className="text-gray-600">
                  We're committed to delivering excellence, fostering innovation, and building long-term partnerships 
                  that contribute to East Africa's digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
