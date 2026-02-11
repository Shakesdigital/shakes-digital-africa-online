import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, ShoppingCart, Smartphone, TrendingUp, BarChart, Users, Globe } from "lucide-react";

const SMEs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SMEs & STARTUPS</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Websites & Mobile Apps for SME Growth Across Africa</h1>
                <p className="text-xl text-blue-100 mb-8">We build business websites and mobile apps that help small and medium enterprises establish online presence, reach customers, streamline operations, and scale across Africa's growing markets.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore Services</a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African SME team growing their business" className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">Up to 70%</p>
                  <p className="text-sm text-white">Revenue Growth with a Website & Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Websites & Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Why Websites & Mobile Apps for African SMEs?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Africa's SMEs need professional websites to build credibility and reach customers online, and mobile apps to manage operations and serve customers on-the-go — the foundation for competing in the digital economy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: Globe, color: "shakes-teal", title: "Business Websites", desc: "Professional websites establishing online presence, showcasing products/services, and generating leads — the digital shopfront for African SMEs." },
              { icon: ShoppingCart, color: "shakes-blue", title: "E-Commerce Websites", desc: "Online stores with product catalogs, shopping carts, mobile money payments, and delivery management — enabling SMEs to sell to customers anywhere." },
              { icon: Smartphone, color: "shakes-blue-light", title: "Business Mobile Apps", desc: "Mobile apps for customer engagement, order management, loyalty programs, and service delivery — keeping SMEs connected to their customers." },
              { icon: TrendingUp, color: "shakes-teal", title: "Sales & CRM Web Portals", desc: "Web-based tools for managing customer relationships, tracking sales pipelines, and automating follow-ups — professionalizing SME sales processes." },
              { icon: BarChart, color: "shakes-blue", title: "Business Analytics Dashboards", desc: "Web dashboards tracking sales, customer patterns, inventory, and financial performance — enabling data-driven decisions for SME owners." },
              { icon: Users, color: "shakes-blue-light", title: "Marketplace Mobile Apps", desc: "Mobile apps connecting SMEs with customers, suppliers, and partners — expanding market reach through aggregation and recommendation algorithms." }
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Website & Mobile App Solutions for SMEs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From retail shops to service providers, manufacturers to tech startups — we build websites and mobile apps that drive SME growth across Africa.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Professional Business Websites</h3>
                <p className="text-gray-600 mb-6">Modern, responsive websites for African SMEs — establishing credibility, showcasing products/services, generating leads, and converting visitors into customers.</p>
                <ul className="space-y-3">
                  {["Mobile-responsive design optimized for African audiences", "SEO optimization for local and regional search visibility", "Lead capture forms and inquiry management", "Integration with WhatsApp Business and social media"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">E-Commerce Websites & Apps</h3>
                <p className="text-gray-600 mb-6">Online stores with product catalogs, inventory management, mobile money payments, delivery tracking, and customer accounts — enabling digital commerce.</p>
                <ul className="space-y-3">
                  {["Product catalog with categories, search, and filtering", "Mobile money and card payment integration", "Order tracking and delivery management", "Customer accounts, wishlists, and order history"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Customer Engagement Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps for customer loyalty, order placement, appointment booking, and service delivery — keeping SME customers engaged and returning.</p>
                <ul className="space-y-3">
                  {["Loyalty programs with points and rewards", "Push notifications for promotions and updates", "In-app ordering and appointment booking", "Customer feedback and support chat"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Operations Management Web Portals</h3>
                <p className="text-gray-600 mb-6">Web-based tools for inventory management, employee scheduling, financial tracking, and supplier management — bringing operational efficiency to SMEs.</p>
                <ul className="space-y-3">
                  {["Inventory management and low-stock alerts", "Employee scheduling and attendance tracking", "Financial reporting and expense management", "Supplier management and purchase order tracking"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Our Website & Mobile App Development Approach for SMEs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We research your business model and customer journey, then build websites and mobile apps that drive growth and operational efficiency.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ n: "1", c: "bg-shakes-teal", t: "Research", d: "Understanding your business model, target customers, and operational challenges" },
              { n: "2", c: "bg-shakes-blue", t: "Build", d: "Developing your business website and customer engagement mobile app" },
              { n: "3", c: "bg-shakes-blue-light", t: "Launch & Grow", d: "Deploying, training your team, and optimizing for customer growth and revenue" }].map((s, i) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">A Business Website & Mobile App Driving 70% Revenue Growth</h2>
                  <p className="text-xl text-blue-100 mb-8">We can build a professional website and customer engagement app that increases your revenue by 70%, expands your customer base 3x, and establishes your SME as a market leader in your region.</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div><p className="text-3xl font-bold mb-2">70%</p><p className="text-blue-100">Revenue Growth Potential</p></div>
                    <div><p className="text-3xl font-bold mb-2">3x</p><p className="text-blue-100">Customer Base Expansion</p></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                </div>
                <div><img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African SME team celebrating business growth" className="rounded-lg shadow-2xl w-full" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Website or Mobile App for Your SME?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build a professional website or customer engagement mobile app that drives growth, increases revenue, and scales your business across Africa.</p>
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

export default SMEs;
