import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                About Shakes Digital: Building Sustainable Digital Futures
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Innovative Solutions for Community and Business Resilience
              </p>
            </div>
          </div>
        </section>

        {/* Our Establishment Section */}
        <section className="py-20">
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
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-blue-dark">The Foundation of Shakes Digital</h3>
                    <p className="text-gray-600 mb-4">
                      Shakes Digital was established to leverage digital technology through tailored solutions, effectively meeting sustainable community development and business challenges. Our mission centers on empowering organizations worldwide with technologies that promote environmental stewardship, economic growth, and collaborative efficiency.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-teal">Our Central Goal</h3>
                    <p className="text-gray-600">
                      To leverage digital technology through innovative solutions to meet sustainable community development and business challenges, fostering long-term resilience and progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Key Objectives</h2>
              <p className="text-lg text-gray-600">
                Strategic objectives that guide every project and partnership:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-shakes-teal rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Research</h4>
                <p className="text-gray-600 text-sm">Identify sustainable community and business challenges addressable through digital solutions.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-shakes-blue rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Implementation</h4>
                <p className="text-gray-600 text-sm">Develop and deploy custom technologies to resolve these challenges.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-shakes-blue-light rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Networking & Partnerships</h4>
                <p className="text-gray-600 text-sm">Collaborate with local and international organizations in tech, community, and environmental development.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-shakes-teal rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Secure funding and resources to enable scalable digital projects.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-shakes-blue/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-shakes-blue rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Monitoring & Evaluation</h4>
                <p className="text-gray-600 text-sm">Assess solution effectiveness to facilitate scaling or replication across diverse populations for enhanced impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Integrated Methodology</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We deliver our core services—Custom Software, Web Development, and Mobile Apps—in alignment with our objectives, ensuring every project is innovative, tailored, and evaluated for sustainability.
              </p>
              <a href="/industries" className="btn-primary inline-flex items-center gap-2">
                Explore Our Industries <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in creating sustainable digital solutions that drive meaningful change through Custom Software, Web Development, and Mobile Apps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Partner with Us <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/services" className="btn-outline">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;