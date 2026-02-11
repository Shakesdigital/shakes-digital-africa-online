
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
                alt="Shakes Digital Team building websites and mobile apps"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-teal/20 rounded-full z-0"></div>
            </div>
          </div>

          <div>
            <h2 className="section-title">About Shakes Digital</h2>
            <p className="text-lg font-medium mb-2 text-shakes-teal">Building Websites & Mobile Apps for Africa's Future</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark">Founder's Story</h3>
                <p className="text-gray-600 mb-4">
                  I started Shakes Digital with a clear mission: to develop websites and mobile applications that solve real African business and development challenges. During my time as Program Coordinator at FSD (now known as FOSCOD) in Uganda, one question kept echoing in my mind:
                </p>
                <p className="text-gray-600 mb-4 font-medium italic">
                  "How can we build websites and mobile apps that directly address the business and development challenges holding Africa's communities and enterprises back?"
                </p>
                <p className="text-gray-600 mb-4">
                  This question inspired the creation of Shakes Digital. We develop websites and mobile applications that directly tackle these challenges — helping African businesses establish their digital presence, reach more customers, automate operations, and scale across markets. Our goal is to leverage website and mobile app development to meet African business and development needs, creating pathways for growth, inclusion, and sustainability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Our Mission</h3>
                <p className="text-gray-600">
                  At Shakes Digital, we are dedicated to developing websites and mobile applications that empower African businesses and development organizations. By focusing on these two powerful digital tools, we aim to help African enterprises establish digital presence, acquire customers, improve operations, and drive long-term sustainable growth across the continent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Our Objectives</h3>
                <p className="text-gray-600 mb-4">At Shakes Digital, our objectives drive every website and mobile app project we undertake:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Research & Understanding</h4>
                      <p className="text-gray-600 text-sm">Conduct thorough research to identify African business and development challenges that can be addressed through purpose-built websites and mobile applications.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Website & App Development</h4>
                      <p className="text-gray-600 text-sm">Design and develop high-quality websites and mobile applications tailored to solve specific African business challenges — from e-commerce and customer engagement to operations management and market expansion.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Strategic Partnerships</h4>
                      <p className="text-gray-600 text-sm">Partner with local and international organizations to expand the reach and impact of our website and mobile app solutions across African markets.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Digital Inclusion</h4>
                      <p className="text-gray-600 text-sm">Build websites and mobile apps that are accessible, user-friendly, and designed to bridge the digital divide for African communities and businesses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Measurable Impact</h4>
                      <p className="text-gray-600 text-sm">Continuously monitor and evaluate the business impact of our websites and mobile apps, optimizing for scalability and real-world results across diverse African populations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Vision Statement</h3>
                <p className="text-gray-600">We envision an Africa where every business and development organization has access to professionally built websites and mobile applications that drive growth, solve challenges, and contribute to the continent's economic transformation.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Innovation</h4>
                    <p className="text-gray-600 text-sm">We use modern web and mobile technologies to build solutions that truly address African business challenges.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Impact-Driven</h4>
                    <p className="text-gray-600 text-sm">Every website and app we build is designed with measurable business and development impact in mind.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Collaboration</h4>
                    <p className="text-gray-600 text-sm">We partner with African businesses and organizations to co-create digital products that truly fit their needs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Integrity</h4>
                    <p className="text-gray-600 text-sm">Committed to transparent practices, quality delivery, and ethical business conduct across all our projects.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="/contact" className="btn-primary">
                Partner with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
