
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
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-teal/20 rounded-full z-0"></div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">About Shakes Digital</h2>
            <p className="text-lg font-medium mb-2 text-shakes-teal">Innovating for Sustainable African Futures</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark">Founder's Story</h3>
                <p className="text-gray-600 mb-4">
                  I started Shakes Digital with a clear mission: to solve real-life sustainable community development and business challenges using digital technology, with a primary focus on Africa, particularly East Africa. During my time as Program Coordinator at FSD (now known as FOSCOD), one question kept echoing in my mind:
                </p>
                <p className="text-gray-600 mb-4 font-medium italic">
                  "How can we address the ongoing sustainable community development and business challenges associated with poverty alleviation using digital technology?"
                </p>
                <p className="text-gray-600 mb-4">
                  This question inspired the creation of Shakes Digital. We provide digital technology solutions that directly tackle these challenges in African contexts, focusing on poverty alleviation through innovative tools and services tailored to the continent's diverse needs. Our goal is to leverage digital technology to meet community development and business needs in Africa, creating pathways for growth, inclusion, and sustainability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Our Mission</h3>
                <p className="text-gray-600">
                  At Shakes Digital, we are dedicated to bridging the digital divide and empowering African communities. By offering a range of digital services, we aim to foster economic opportunities, enhance collaboration, and drive long-term impact in sustainable development across Africa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Our Objectives</h3>
                <p className="text-gray-600 mb-4">At Shakes Digital, our objectives drive every decision and project, with a focus on African contexts:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Research and Identification</h4>
                      <p className="text-gray-600 text-sm">Conduct thorough research to identify ongoing sustainable community development and business challenges in Africa that can be addressed through digital technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Implementation of Solutions</h4>
                      <p className="text-gray-600 text-sm">Develop and implement digital tech solutions that directly work towards resolving these challenges, with a focus on poverty alleviation in African communities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Networking and Partnerships</h4>
                      <p className="text-gray-600 text-sm">Collaborate and partner with local and international organizations in tech, community, and environmental development across Africa to mobilize resources and scale impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Digital Literacy Initiatives</h4>
                      <p className="text-gray-600 text-sm">Provide digital literacy training to reduce the digital divide among different African community groups, ensuring equitable access to technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Business Solutions</h4>
                      <p className="text-gray-600 text-sm">Offer digital business solutions to help African community enterprises boost their online visibility, driving economic growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Monitoring and Evaluation</h4>
                      <p className="text-gray-600 text-sm">Continuously monitor and evaluate our digital solutions to explore possibilities for scaling or replicating them across different African populations, maximizing overall impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-shakes-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-shakes-blue-dark mb-1">Administrative and Legal Compliance</h4>
                      <p className="text-gray-600 text-sm">Meet all administrative and legal requirements for the effective management of Shakes Digital, ensuring transparency and sustainability in African operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Vision Statement</h3>
                <p className="text-gray-600">We envision an Africa where digital technology is a key driver in eradicating poverty and promoting sustainable communities. Through our objectives, we commit to innovation that makes a real difference on the continent.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 text-shakes-teal">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Innovation</h4>
                    <p className="text-gray-600 text-sm">We stay at the forefront of digital trends to deliver effective solutions for African challenges.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Sustainability</h4>
                    <p className="text-gray-600 text-sm">Every project is designed with long-term benefits for African communities in mind.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Collaboration</h4>
                    <p className="text-gray-600 text-sm">We partner with African and international organizations to amplify our reach and resources.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shakes-blue-dark mb-1">Integrity</h4>
                    <p className="text-gray-600 text-sm">Committed to ethical practices and legal compliance in African operations.</p>
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
