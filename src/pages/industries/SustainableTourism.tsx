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
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  TOURISM & HOSPITALITY
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Websites & Mobile Apps for Tourism Business Growth Across Africa
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  We build booking websites and guest experience mobile apps that help tourism operators grow bookings, manage operations, and deliver exceptional visitor experiences across Africa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African wildlife safari tourists" className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">Up to 85%</p>
                  <p className="text-sm text-white">Booking Growth with a Website & Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Websites & Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Why Websites & Mobile Apps for Africa's Tourism Sector?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Africa's tourism operators need professional booking websites and guest experience mobile apps to compete globally. Our websites drive direct bookings, and our mobile apps enhance visitor experiences — growing revenue while supporting community empowerment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6"><Globe className="h-8 w-8 text-shakes-teal" /></div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Booking Websites</h3>
                <p className="text-gray-600">Professional websites with integrated booking systems, showcasing Africa's unique experiences while enabling easy reservations from international travelers.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6"><Leaf className="h-8 w-8 text-shakes-blue" /></div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Conservation Web Portals</h3>
                <p className="text-gray-600">Web-based dashboards monitoring environmental impact, wildlife populations, and visitor capacity — ensuring tourism supports fragile ecosystems.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6"><Users className="h-8 w-8 text-shakes-blue-light" /></div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Community Tourism Websites</h3>
                <p className="text-gray-600">Websites connecting local guides, artisans, and community-based tourism enterprises with visitors — ensuring revenue benefits communities directly.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6"><Smartphone className="h-8 w-8 text-shakes-teal" /></div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Guest Experience Mobile Apps</h3>
                <p className="text-gray-600">Mobile apps providing interactive guides, wildlife identification, GPS-enabled tours, and cultural information — enriching tourist experiences.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6"><BarChart className="h-8 w-8 text-shakes-blue" /></div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Analytics Web Dashboards</h3>
                <p className="text-gray-600">Web-based dashboards tracking bookings, visitor patterns, revenue, and seasonal trends — enabling smarter business decisions for sustainable growth.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6"><Palmtree className="h-8 w-8 text-shakes-blue-light" /></div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Offline-Ready Mobile Apps</h3>
                <p className="text-gray-600">Mobile apps optimized for low-bandwidth environments with offline functionality — perfect for remote lodges, national parks, and wilderness areas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Website & Mobile App Solutions for Tourism Operators</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From safari lodges to hospitality ventures — we build websites and mobile apps that drive bookings and empower communities.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Booking & Reservation Websites</h3>
                <p className="text-gray-600 mb-6">Professional booking websites for lodges, safaris, tours, and activities — with real-time availability, secure payments, and multi-currency support.</p>
                <ul className="space-y-3">
                  {["Real-time availability calendar and instant confirmations", "Integration with payment gateways and mobile money", "Multi-language website support for international guests", "Automated email/SMS notifications and itineraries"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Wildlife & Nature Guide Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps for guided tours, wildlife identification, GPS-enabled trails, and educational content — enhancing visitor experiences.</p>
                <ul className="space-y-3">
                  {["AI-powered wildlife and plant species identification", "GPS-guided trails with offline maps", "Audio guides in multiple languages", "Wildlife sighting reporting and real-time alerts"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Destination Marketing Websites</h3>
                <p className="text-gray-600 mb-6">Stunning websites showcasing destinations and experiences — SEO-optimized and designed to convert browsers into bookers.</p>
                <ul className="space-y-3">
                  {["High-quality photo galleries and virtual tours", "SEO optimization for international travel search terms", "Storytelling content sections and conservation updates", "Social media integration and user-generated content"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Operations Management Web Portals</h3>
                <p className="text-gray-600 mb-6">Web-based systems for lodge operations, staff scheduling, inventory management, and guest services.</p>
                <ul className="space-y-3">
                  {["Staff scheduling and shift management", "Inventory tracking for supplies and equipment", "Maintenance request and task management", "Guest feedback collection and service tracking"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Our Website & Mobile App Development Approach for Tourism</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We research your tourism operation, then build websites and mobile apps that drive bookings and enhance guest experiences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ n: "1", c: "bg-shakes-teal", t: "Research", d: "Understanding your tourism operation's challenges, target market, and guest experience goals" },
              { n: "2", c: "bg-shakes-blue", t: "Build", d: "Developing your booking website and guest experience mobile app" },
              { n: "3", c: "bg-shakes-blue-light", t: "Launch & Grow", d: "Deploying, training staff, and optimizing for bookings and growth" }].map((s, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className={`w-12 h-12 ${s.c} text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl`}>{s.n}</div>
                  <h4 className="font-bold text-shakes-blue-dark mb-2">{s.t}</h4>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievement */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-shakes-blue to-shakes-teal text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">WHAT WE CAN ACHIEVE TOGETHER</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">A Booking Website & Guest App Doubling Direct Bookings</h2>
                  <p className="text-xl text-blue-100 mb-8">We can build a booking website and guest experience mobile app that doubles your direct bookings, increases operational efficiency by 40%, and empowers 120+ community members.</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div><p className="text-3xl font-bold mb-2">200%</p><p className="text-blue-100">Bookings Growth Potential</p></div>
                    <div><p className="text-3xl font-bold mb-2">40%</p><p className="text-blue-100">Efficiency Gain</p></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                </div>
                <div><img src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African eco-lodge with booking website" className="rounded-lg shadow-2xl w-full" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Website or Mobile App for Your Tourism Business?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build a booking website or guest experience mobile app that drives bookings, increases revenue, and enhances visitor experiences across Africa.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Schedule Free Consultation <ArrowRight className="h-5 w-5" /></a>
                <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore Our Services</a>
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
