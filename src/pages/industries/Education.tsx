import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, GraduationCap, BookOpen, Smartphone, BarChart, Users, Globe } from "lucide-react";

const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">EDUCATION & EDTECH</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Websites & Mobile Apps for Education Access Across Africa</h1>
                <p className="text-xl text-blue-100 mb-8">We build e-learning websites and mobile learning apps that help educational institutions expand access, engage students, and deliver quality education across Africa.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Explore Services</a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African students learning with mobile technology" className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">10x</p>
                  <p className="text-sm text-white">Student Reach with a Website & Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Websites & Mobile Apps */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Why Websites & Mobile Apps for Africa's Education Sector?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Africa's educational institutions need websites for visibility and enrollment, and mobile apps for delivering learning content to students anywhere — bridging the education access gap with technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: GraduationCap, color: "shakes-teal", title: "School & University Websites", desc: "Professional websites for enrollment, course catalogs, campus information, and student portals — the digital front door for educational institutions." },
              { icon: Smartphone, color: "shakes-blue", title: "Mobile Learning Apps", desc: "Mobile apps delivering lessons, quizzes, video tutorials, and interactive content — enabling learning anytime, anywhere, even offline." },
              { icon: BookOpen, color: "shakes-blue-light", title: "E-Learning Platform Websites", desc: "Web-based learning management systems with course creation, student tracking, assessments, and certificate generation." },
              { icon: Users, color: "shakes-teal", title: "Student Community Apps", desc: "Mobile apps for student collaboration, study groups, peer tutoring, and campus social networking — strengthening learning communities." },
              { icon: BarChart, color: "shakes-blue", title: "Education Analytics Dashboards", desc: "Web dashboards tracking student performance, enrollment trends, completion rates, and institutional KPIs for data-driven decisions." },
              { icon: Globe, color: "shakes-blue-light", title: "Multi-Language Learning Apps", desc: "Mobile apps delivering educational content in local African languages — making quality education accessible to diverse populations." }
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Website & Mobile App Solutions for Education</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From schools to universities, training centers to EdTech startups — we build websites and mobile apps that transform education delivery across Africa.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Learning Management System (LMS) Websites</h3>
                <p className="text-gray-600 mb-6">Web-based platforms for course creation, student enrollment, content delivery, assessments, grading, and certificate generation.</p>
                <ul className="space-y-3">
                  {["Course creation with video, text, and interactive content", "Student enrollment, progress tracking, and analytics", "Online assessments, quizzes, and automated grading", "Certificate generation and credential verification"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Mobile Learning Apps</h3>
                <p className="text-gray-600 mb-6">Mobile apps delivering bite-sized lessons, video content, interactive exercises, and offline learning — making education accessible on any smartphone.</p>
                <ul className="space-y-3">
                  {["Offline content download for areas with limited connectivity", "Push notifications for assignments and deadlines", "Gamified learning with progress tracking and badges", "Voice-enabled learning and local language support"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">School & University Websites</h3>
                <p className="text-gray-600 mb-6">Professional institutional websites for enrollment, course catalogs, faculty directories, news, events, and student/parent portals.</p>
                <ul className="space-y-3">
                  {["Online admission and enrollment systems", "Course catalog and program information pages", "Student and parent portal with grades and attendance", "Event calendars, news, and alumni networks"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" /><span className="text-gray-600">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Virtual Classroom & Tutoring Apps</h3>
                <p className="text-gray-600 mb-6">Mobile and web apps for live virtual classes, one-on-one tutoring, group discussions, and collaborative learning experiences.</p>
                <ul className="space-y-3">
                  {["Live video classes with screen sharing and whiteboard", "One-on-one tutoring scheduling and session management", "Group study rooms and collaborative document editing", "Session recording and playback for revision"].map((t, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">Our Website & Mobile App Development Approach for Education</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We research your educational challenges, then build websites and mobile apps that expand access and improve learning outcomes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ n: "1", c: "bg-shakes-teal", t: "Research", d: "Understanding your institution's goals, student needs, and content delivery challenges" },
              { n: "2", c: "bg-shakes-blue", t: "Build", d: "Developing your e-learning website and mobile learning app with offline capabilities" },
              { n: "3", c: "bg-shakes-blue-light", t: "Launch & Grow", d: "Deploying, training educators, and optimizing for student engagement and enrollment" }].map((s, i) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">An E-Learning Website & Mobile App Reaching 100K+ Students</h2>
                  <p className="text-xl text-blue-100 mb-8">We can build an e-learning website and mobile learning app that reaches 100,000+ students, improves completion rates by 60%, and delivers quality education to underserved communities.</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div><p className="text-3xl font-bold mb-2">100K+</p><p className="text-blue-100">Student Reach Potential</p></div>
                    <div><p className="text-3xl font-bold mb-2">60%</p><p className="text-blue-100">Completion Rate Improvement</p></div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Your Project <ArrowRight className="h-5 w-5" /></a>
                </div>
                <div><img src="https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="African students using e-learning mobile app" className="rounded-lg shadow-2xl w-full" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Website or Mobile App for Your Educational Institution?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build an e-learning website or mobile app that expands access, engages students, and transforms education delivery across Africa.</p>
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

export default Education;
