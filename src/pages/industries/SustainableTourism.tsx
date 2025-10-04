import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Palmtree, Globe, Smartphone, BarChart, Users, Leaf } from "lucide-react";

const SustainableTourism: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-teal-500 to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  SUSTAINABLE TOURISM & ECOTOURISM
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Digital Solutions for Environmentally Responsible Tourism in Africa
                </h1>
                <p className="text-xl text-green-50 mb-8">
                  Empower your tourism operation with digital tools designed for conservation, community empowerment, and sustainable visitor experiences across Africa's natural wonders.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Tourism Projects
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="African wildlife safari tourists experiencing sustainable ecotourism"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-green-700 p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">85%</p>
                  <p className="text-sm text-gray-700">Increase in Direct Bookings with Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Digital Solutions for Sustainable Tourism */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Why Digital Technology for Africa's Sustainable Tourism Sector?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Africa's tourism industry faces unique challenges—from remote locations with limited connectivity to the need for conservation-focused operations. Our digital solutions address these while empowering local communities and protecting natural heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Reach Global Travelers</h3>
                <p className="text-gray-600">
                  Connect with international tourists through optimized booking platforms, showcasing Africa's unique ecotourism experiences while ensuring easy reservations from anywhere in the world.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Conservation Tracking</h3>
                <p className="text-gray-600">
                  Monitor environmental impact, wildlife populations, visitor capacity, and conservation metrics in real-time—ensuring tourism supports rather than harms fragile ecosystems.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Community Empowerment</h3>
                <p className="text-gray-600">
                  Platforms connecting local guides, artisans, and community-based tourism enterprises with visitors—ensuring tourism revenue benefits African communities directly.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Enhanced Visitor Experiences</h3>
                <p className="text-gray-600">
                  Mobile apps providing interactive guides, wildlife identification, GPS-enabled tours, and cultural information—enriching tourist experiences while educating about conservation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Data-Driven Management</h3>
                <p className="text-gray-600">
                  Analytics dashboards tracking bookings, visitor patterns, revenue, seasonal trends, and operational efficiency—enabling smarter business decisions for sustainable growth.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Palmtree className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Remote Location Support</h3>
                <p className="text-gray-600">
                  Solutions optimized for low-bandwidth environments, offline functionality, and solar-powered infrastructure—perfect for remote lodges, national parks, and wilderness areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for Tourism Operators */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Digital Solutions for Sustainable Tourism Operations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From safari lodges to ecotourism ventures, cultural heritage sites to adventure tourism—our solutions support every aspect of sustainable tourism in Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Booking & Reservation Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive booking systems for lodges, safaris, tours, and activities—with real-time availability, secure payments, automated confirmations, and multi-currency support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time availability calendar and instant confirmations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Integration with international payment gateways and mobile money</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Multi-language support for international guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Automated email/SMS notifications and itineraries</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Wildlife & Nature Guide Apps</h3>
                <p className="text-gray-600 mb-6">
                  Mobile applications for guided tours, wildlife identification, GPS-enabled trails, and educational content—enhancing visitor experiences while promoting conservation awareness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">AI-powered wildlife and plant species identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">GPS-guided walking and driving trails with offline maps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Audio guides and educational content in multiple languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Wildlife sighting reporting and real-time alerts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Conservation Management Systems</h3>
                <p className="text-gray-600 mb-6">
                  Custom software for environmental monitoring, wildlife tracking, anti-poaching operations, and visitor impact assessment—supporting conservation while enabling tourism.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time wildlife population and movement tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Environmental impact monitoring and reporting dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Ranger patrol management and incident reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Visitor capacity management to prevent over-tourism</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Marketing & Visitor Portals</h3>
                <p className="text-gray-600 mb-6">
                  Stunning websites and web platforms showcasing destinations, attractions, and experiences—optimized for search engines and designed to convert browsers into bookers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">High-quality photo galleries and virtual tour capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SEO optimization for international travel search terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Content sections for storytelling and conservation updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Social media integration and user-generated content</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Community Tourism Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Digital marketplaces connecting travelers with local guides, cultural experiences, homestays, and artisan products—ensuring tourism benefits African communities directly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Local guide and cultural expert profiles and booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Community-based tourism experience marketplace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Direct payment to community members via mobile money</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Reviews and ratings system building local reputation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Operations & Staff Management</h3>
                <p className="text-gray-600 mb-6">
                  Backend systems for lodge operations, staff scheduling, inventory management, maintenance tracking, and guest services—streamlining daily operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Staff scheduling and shift management tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Inventory tracking for supplies and equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Maintenance request and task management systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Guest feedback collection and service improvement tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shakes Digital's Approach */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Our Sustainable Tourism Development Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aligned with Shakes Digital's core objectives—from research to implementation, partnerships to monitoring—ensuring your tourism operation thrives sustainably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Research</h4>
                <p className="text-gray-600 text-sm">Understanding your tourism operation's unique challenges, conservation goals, and target market</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Building digital solutions optimized for remote locations and sustainable tourism practices</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Partnerships</h4>
                <p className="text-gray-600 text-sm">Connecting with conservation organizations, tour operators, and community groups for scalable impact</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Enabling funding opportunities and investment attraction for tourism infrastructure</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Measuring environmental impact, visitor satisfaction, and revenue to optimize for sustainable growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Can Achieve */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    WHAT WE CAN ACHIEVE TOGETHER
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Help Your Safari Lodge Increase Direct Bookings by 200% While Reducing Environmental Impact
                  </h2>
                  <p className="text-xl text-green-50 mb-8">
                    We can build an integrated booking platform and conservation management system for your ecotourism operation—potentially doubling revenue, reducing operational carbon footprint by 50%, and empowering 120+ community members.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">Up to 200%</p>
                      <p className="text-green-50">Potential Bookings Growth</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">Up to 50%</p>
                      <p className="text-green-50">Potential Carbon Reduction</p>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="African eco-lodge benefiting from sustainable tourism digital platform"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Tourism Operation?
              </h2>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                Let's build digital solutions that drive bookings, enhance visitor experiences, support conservation, and empower local communities across Africa's tourism sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Schedule Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
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

export default SustainableTourism;
