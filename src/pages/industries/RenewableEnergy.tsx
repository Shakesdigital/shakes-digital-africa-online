import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Zap, Sun, Smartphone, BarChart, Battery, Globe } from "lucide-react";

const RenewableEnergy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">RENEWABLE ENERGY & CLEANTECH</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Websites & Mobile Apps for Clean Energy Business Growth Across Africa</h1>
                <p className="text-xl text-blue-100 mb-8">We build websites and mobile apps that help renewable energy companies sell solar systems, manage energy services, monitor installations, and grow their customer base across Africa.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore Services</a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Solar panel installation in Africa" className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">Up to 60%</p>
                  <p className="text-sm text-white">Sales Growth with a Website & Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Websites & Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Why Websites & Mobile Apps for Africa's Energy Sector?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Africa's renewable energy companies need websites to acquire customers and establish credibility, and mobile apps for system monitoring, customer service, and payment collection — accelerating the clean energy transition.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: Sun, color: "shakes-teal", title: "Energy Company Websites", desc: "Professional websites showcasing solar products, services, and financing options — driving customer acquisition and building brand credibility." },
              { icon: Smartphone, color: "shakes-blue", title: "Energy Monitoring Mobile Apps", desc: "Mobile apps for real-time solar system monitoring, energy consumption tracking, alerts, and performance analytics for customers and technicians." },
              { icon: Battery, color: "shakes-blue-light", title: "Pay-As-You-Go Web Platforms", desc: "Web-based platforms for managing pay-as-you-go solar customers — billing, payment tracking, remote activation, and customer account management." },
              { icon: Zap, color: "shakes-teal", title: "Mini-Grid Management Apps", desc: "Mobile apps for mini-grid operators — energy dispatch, customer metering, fault detection, and prepaid billing in off-grid communities." },
              { icon: BarChart, color: "shakes-blue", title: "Energy Analytics Dashboards", desc: "Web dashboards tracking energy production, consumption patterns, system health, and business KPIs for data-driven energy management." },
              { icon: Globe, color: "shakes-blue-light", title: "Customer Self-Service Apps", desc: "Mobile apps enabling energy customers to check balances, make payments, request support, and monitor their system — reducing service costs." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-${item.color}/10 rounded-lg flex items-center justify-center mb-6`}><item.icon className={`h-8 w-8 text-${item.color}`} /></div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Website & Mobile App Solutions for Renewable Energy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From solar companies to mini-grid operators — we build websites and mobile apps that accelerate clean energy adoption across Africa.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Solar Company Websites</h3>
                <p className="text-gray-600 mb-6">Professional websites for solar companies — product catalogs, financing calculators, installation booking, customer testimonials, and lead generation.</p>
                <ul className="space-y-3">
                  {["Product catalog with solar system specifications and pricing", "Solar savings calculator and financing options display", "Online booking for site assessment and installation", "Customer testimonials and project portfolio showcase"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Energy Monitoring Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps for monitoring solar system performance, energy production, battery levels, and consumption — for both customers and field technicians.</p>
                <ul className="space-y-3">
                  {["Real-time energy production and consumption dashboards", "Battery level monitoring and charge optimization alerts", "System fault detection and automatic technician alerts", "Historical energy data and performance analytics"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Pay-As-You-Go Web Platforms</h3>
                <p className="text-gray-600 mb-6">Web-based platforms for PAYGO solar companies — customer account management, payment tracking, remote system activation, and collections management.</p>
                <ul className="space-y-3">
                  {["Mobile money payment integration and tracking", "Remote system activation and deactivation controls", "Customer account management and payment history", "Collections reporting and delinquency management"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Field Technician Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps for installation and maintenance teams — work order management, site assessment tools, GPS navigation, and offline data collection.</p>
                <ul className="space-y-3">
                  {["Work order assignment and completion tracking", "Site assessment forms with photo and GPS documentation", "Inventory management for spare parts and equipment", "Offline capability for remote installation sites"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Our Website & Mobile App Development Approach for Energy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We research your energy business model, then build websites and mobile apps that drive customer acquisition and operational efficiency.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ n: "1", c: "bg-shakes-teal", t: "Research", d: "Understanding your energy business model, customer journey, and operational needs" },
              { n: "2", c: "bg-shakes-blue", t: "Build", d: "Developing your energy company website and monitoring/service mobile app" },
              { n: "3", c: "bg-shakes-blue-light", t: "Launch & Grow", d: "Deploying, integrating with IoT systems, and optimizing for customer growth" }].map((s, i) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">A Solar Company Website & App Powering 25K+ Homes</h2>
                  <p className="text-xl text-blue-100 mb-8">We can build a solar company website and energy monitoring app that drives 60% sales growth, serves 25,000+ customers, and accelerates clean energy access across Africa.</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div><p className="text-3xl font-bold mb-2">25K+</p><p className="text-blue-100">Customers Potential</p></div>
                    <div><p className="text-3xl font-bold mb-2">60%</p><p className="text-blue-100">Sales Growth</p></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                </div>
                <div><img src="https://images.pexels.com/photos/9875436/pexels-photo-9875436.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Solar energy installation in Africa" className="rounded-lg shadow-2xl w-full" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Website or Mobile App for Your Energy Business?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build a website or mobile app that drives customer acquisition, enables system monitoring, and grows your clean energy business across Africa.</p>
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

export default RenewableEnergy;
