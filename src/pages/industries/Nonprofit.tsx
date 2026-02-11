import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Heart, Smartphone, Globe, BarChart, Users, HandHeart } from "lucide-react";

const Nonprofit: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">NON-PROFITS & NGOs</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Websites & Mobile Apps for Non-Profit Impact Across Africa</h1>
                <p className="text-xl text-blue-100 mb-8">We build websites and mobile apps that help non-profits and NGOs amplify their mission, increase donations, manage programs, measure impact, and engage communities across Africa.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore Services</a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Non-profit team working on community development in Africa" className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">Up to 150%</p>
                  <p className="text-sm text-white">Donation Growth with a Website & Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Websites & Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Why Websites & Mobile Apps for African Non-Profits?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">African non-profits need compelling websites to tell their story and attract donors, and mobile apps for field data collection and community engagement — maximizing impact with limited resources.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: Globe, color: "shakes-teal", title: "Organization Websites", desc: "Compelling websites telling your story, showcasing impact, attracting donors, and providing transparency — the digital face of your mission." },
              { icon: Heart, color: "shakes-blue", title: "Online Donation Websites", desc: "Fundraising websites with secure donation processing, recurring giving, campaign pages, and donor acknowledgment systems." },
              { icon: Smartphone, color: "shakes-blue-light", title: "Field Data Collection Apps", desc: "Mobile apps for field workers — beneficiary registration, survey data collection, GPS-tagged observations, and offline capability." },
              { icon: Users, color: "shakes-teal", title: "Volunteer Management Apps", desc: "Mobile apps for volunteer recruitment, scheduling, task assignment, hour tracking, and communication — organizing your volunteer workforce." },
              { icon: BarChart, color: "shakes-blue", title: "Impact Dashboard Websites", desc: "Web dashboards displaying program outcomes, beneficiary data, financial transparency, and impact metrics — building donor confidence." },
              { icon: HandHeart, color: "shakes-blue-light", title: "Community Engagement Apps", desc: "Mobile apps connecting beneficiaries with services, information, and support — ensuring your programs reach the people who need them most." }
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Website & Mobile App Solutions for Non-Profits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From international NGOs to community-based organizations — we build websites and mobile apps that amplify your mission and accelerate your impact across Africa.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Fundraising & Donation Websites</h3>
                <p className="text-gray-600 mb-6">Compelling websites for online fundraising — campaign pages, secure donation processing, recurring giving, donor management, and financial transparency.</p>
                <ul className="space-y-3">
                  {["Secure online donation with multiple payment options", "Campaign pages with progress tracking and storytelling", "Recurring giving and donor subscription management", "Automated tax receipts and donation acknowledgment"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Field Data Collection Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps for field workers and program staff — beneficiary registration, survey data, GPS-tagged observations, photo documentation, and offline data sync.</p>
                <ul className="space-y-3">
                  {["Offline-capable data collection with auto-sync", "GPS-tagged observations and photo documentation", "Custom survey forms and questionnaires", "Beneficiary registration and enrollment tracking"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Program Management Web Portals</h3>
                <p className="text-gray-600 mb-6">Web-based platforms for program planning, implementation tracking, budget management, staff coordination, and donor reporting.</p>
                <ul className="space-y-3">
                  {["Project planning with milestones and timelines", "Budget tracking and financial reporting", "Staff and partner coordination tools", "Automated donor reporting and compliance documentation"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Impact Measurement Web Dashboards</h3>
                <p className="text-gray-600 mb-6">Web dashboards visualizing program outcomes, beneficiary data, KPIs, and impact stories — building donor confidence and supporting grant applications.</p>
                <ul className="space-y-3">
                  {["Real-time impact metrics and KPI dashboards", "Beneficiary outcome tracking and reporting", "Visual data storytelling for donor communications", "Exportable reports for grant applications and audits"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Our Website & Mobile App Development Approach for Non-Profits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We research your mission and programs, then build websites and mobile apps that amplify your impact and strengthen your donor relationships.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ n: "1", c: "bg-shakes-teal", t: "Research", d: "Understanding your mission, program model, target beneficiaries, and donor engagement needs" },
              { n: "2", c: "bg-shakes-blue", t: "Build", d: "Developing your organization website, fundraising platform, and field data collection app" },
              { n: "3", c: "bg-shakes-blue-light", t: "Launch & Grow", d: "Deploying, training field staff, and optimizing for donations and program impact" }].map((s, i) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">A Fundraising Website & Field App Reaching 200K+ Beneficiaries</h2>
                  <p className="text-xl text-blue-100 mb-8">We can build a fundraising website and field data collection app that increases donations by 150%, reaches 200,000+ beneficiaries, and provides real-time impact measurement across your programs.</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div><p className="text-3xl font-bold mb-2">150%</p><p className="text-blue-100">Donation Growth Potential</p></div>
                    <div><p className="text-3xl font-bold mb-2">200K+</p><p className="text-blue-100">Beneficiary Reach</p></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                </div>
                <div><img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Non-profit community impact in Africa" className="rounded-lg shadow-2xl w-full" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Website or Mobile App for Your Non-Profit?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build a fundraising website or field data collection app that amplifies your mission, increases donations, and maximizes your impact across Africa.</p>
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

export default Nonprofit;
