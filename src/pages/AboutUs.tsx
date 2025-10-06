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
                About Shakes Digital: Empowering Africa Through Digital Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Providing community-tailored digital web solutions that address Africa's sustainable community and business development challenges across different development sectors
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
                    <h3 className="text-2xl font-bold mb-4 text-shakes-blue-dark">Who We Are</h3>
                    <p className="text-gray-600 mb-4">
                      Shakes Digital is Africa's premier digital web agency dedicated to addressing the continent's sustainable development and business challenges through innovative digital solutions. We specialize in creating community-tailored Custom Software, Web Development, and Mobile Apps that drive poverty alleviation, community empowerment, and economic growth across Africa's diverse sectors.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-teal">Our Central Goal</h3>
                    <p className="text-gray-600">
                      To leverage digital technology through community-tailored solutions that address Africa's sustainable community and business development challenges in different development sectors—including Sustainable Tourism, Renewable Energy, Agriculture, Non-Profit, Education, SMEs, and Healthcare.
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

        {/* Our Services & Sectors Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Core Digital Solutions</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We deliver three powerful digital web services—Custom Software, Web Development, and Mobile Apps—specifically designed to address Africa's unique sustainable development and business challenges across 7 key sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-shakes-teal rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Custom Software</h4>
                <p className="text-gray-600 text-sm">Tailored applications addressing Africa's specific challenges—from agricultural management to healthcare access, environmental monitoring to financial inclusion.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-shakes-blue rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Web Development</h4>
                <p className="text-gray-600 text-sm">Robust web platforms designed for Africa's context—optimized for low bandwidth, mobile-first access, and driving sustainable business growth across the continent.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-shakes-blue-light rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Mobile Apps</h4>
                <p className="text-gray-600 text-sm">Mobile-first solutions for Africa's growing smartphone adoption—enabling community reporting, market access, digital payments, and offline functionality.</p>
              </div>
            </div>

            <div className="text-center">
              <a href="/industries" className="btn-primary inline-flex items-center gap-2">
                Explore Our 7 Key Sectors <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>


        {/* Impact Across Africa */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Africa-Wide Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Every solution we create is rooted in deep research of Africa's sustainable development and business challenges, implemented with local context in mind, and evaluated for scalability across African communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-teal mb-2">7</div>
                <p className="text-gray-600 font-medium">Key Sectors Served</p>
                <p className="text-xs text-gray-500 mt-1">From Tourism to Healthcare</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-blue mb-2">3</div>
                <p className="text-gray-600 font-medium">Core Digital Services</p>
                <p className="text-xs text-gray-500 mt-1">Tailored to Africa's Needs</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-teal mb-2">5</div>
                <p className="text-gray-600 font-medium">Strategic Objectives</p>
                <p className="text-xs text-gray-500 mt-1">Guiding Every Project</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-blue mb-2">100%</div>
                <p className="text-gray-600 font-medium">Community-Tailored</p>
                <p className="text-xs text-gray-500 mt-1">Built for Africa's Context</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Transform Africa's Future Together?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in creating community-tailored digital solutions that address Africa's sustainable development and business challenges across different sectors.
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