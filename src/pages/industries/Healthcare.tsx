import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Heart, Smartphone, Shield, BarChart, Users, Globe } from "lucide-react";

const Healthcare: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">HEALTHCARE & HEALTH TECH</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Websites & Mobile Apps for Healthcare Access Across Africa</h1>
                <p className="text-xl text-blue-100 mb-8">We build healthcare websites and telemedicine mobile apps that help clinics, hospitals, and health organizations expand patient access, improve care delivery, and grow their practice across Africa.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore Services</a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African healthcare professional using telemedicine app" className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">5x</p>
                  <p className="text-sm text-white">Patient Reach with a Website & Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Websites & Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Why Websites & Mobile Apps for Africa's Healthcare Sector?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Africa's healthcare providers need websites for patient acquisition and information, and mobile apps for telemedicine and patient engagement — expanding access to quality care across the continent.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: Heart, color: "shakes-teal", title: "Clinic & Hospital Websites", desc: "Professional websites for patient acquisition, service information, doctor directories, appointment booking, and health education content." },
              { icon: Smartphone, color: "shakes-blue", title: "Telemedicine Mobile Apps", desc: "Mobile apps enabling remote consultations, prescription refills, appointment scheduling, and secure patient-doctor communication." },
              { icon: Shield, color: "shakes-blue-light", title: "Patient Portal Websites", desc: "Web-based portals for medical records access, lab results, appointment history, billing, and secure messaging with healthcare providers." },
              { icon: Users, color: "shakes-teal", title: "Community Health Worker Apps", desc: "Mobile apps for community health workers — patient registration, visit tracking, referral management, and health data collection in the field." },
              { icon: BarChart, color: "shakes-blue", title: "Health Analytics Dashboards", desc: "Web dashboards tracking patient volumes, disease patterns, resource utilization, and facility performance for data-driven healthcare management." },
              { icon: Globe, color: "shakes-blue-light", title: "Health Education Apps", desc: "Mobile apps delivering health education, maternal care guidance, medication reminders, and wellness information in local languages." }
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Website & Mobile App Solutions for Healthcare</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From clinics to hospitals, health NGOs to pharma companies — we build websites and mobile apps that improve healthcare delivery across Africa.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Telemedicine & Teleconsultation Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps enabling remote doctor consultations, symptom checkers, prescription management, and follow-up care for patients in underserved areas.</p>
                <ul className="space-y-3">
                  {["Video and audio consultation with doctors", "AI-powered symptom assessment and triage", "E-prescription and pharmacy locator", "Appointment scheduling and reminders"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Clinic & Hospital Websites</h3>
                <p className="text-gray-600 mb-6">Professional healthcare websites for patient acquisition, service information, doctor profiles, online appointment booking, and health blog content.</p>
                <ul className="space-y-3">
                  {["Online appointment booking and scheduling", "Doctor directory with profiles and specialties", "Service pages with detailed descriptions and pricing", "Health blog and patient education resources"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Patient Records Web Portals</h3>
                <p className="text-gray-600 mb-6">Web-based electronic medical records portals for clinics and hospitals — patient data management, lab results, treatment history, and billing.</p>
                <ul className="space-y-3">
                  {["Electronic medical records with secure access", "Lab results and diagnostic imaging portal", "Treatment history and medication tracking", "Billing management and insurance claims processing"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Community Health Worker Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Field-ready mobile apps for community health workers — patient registration, home visit tracking, referral management, and health data collection.</p>
                <ul className="space-y-3">
                  {["Offline-capable patient registration and data collection", "GPS-tagged home visit logging and route optimization", "Referral generation and follow-up tracking", "Real-time reporting to supervising health facilities"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Our Website & Mobile App Development Approach for Healthcare</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We research your healthcare challenges, then build websites and mobile apps that expand patient access and improve care delivery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ n: "1", c: "bg-shakes-teal", t: "Research", d: "Understanding your health facility's needs, patient demographics, and care delivery challenges" },
              { n: "2", c: "bg-shakes-blue", t: "Build", d: "Developing your healthcare website and telemedicine mobile app with HIPAA-compliant security" },
              { n: "3", c: "bg-shakes-blue-light", t: "Launch & Grow", d: "Deploying, training staff, and optimizing for patient engagement and facility growth" }].map((s, i) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">A Healthcare Website & Telemedicine App Serving 50K+ Patients</h2>
                  <p className="text-xl text-blue-100 mb-8">We can build a healthcare website and telemedicine mobile app that serves 50,000+ patients, reduces wait times by 70%, and expands healthcare access to remote communities across Africa.</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div><p className="text-3xl font-bold mb-2">50K+</p><p className="text-blue-100">Patient Reach Potential</p></div>
                    <div><p className="text-3xl font-bold mb-2">70%</p><p className="text-blue-100">Wait Time Reduction</p></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                </div>
                <div><img src="https://images.pexels.com/photos/7579828/pexels-photo-7579828.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African healthcare with telemedicine app" className="rounded-lg shadow-2xl w-full" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Website or Mobile App for Your Healthcare Organization?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build a healthcare website or telemedicine app that expands patient access, improves care delivery, and grows your practice across Africa.</p>
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

export default Healthcare;
