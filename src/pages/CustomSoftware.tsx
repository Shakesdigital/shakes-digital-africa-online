import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Code2, Cog, Database, Rocket, Shield, Users } from "lucide-react";

const CustomSoftware: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-shakes-blue-dark via-shakes-blue to-shakes-blue-light pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Custom Software Development for Africa's Challenges
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Tailored digital solutions addressing Africa's unique sustainable development and business challenges—from agricultural management to healthcare access, environmental monitoring to financial inclusion.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Our Work
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img
                  src="/custom-software.png"
                  alt="Custom software development solutions for African businesses and communities"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-shakes-teal text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">100+</p>
                  <p className="text-sm">Custom Solutions Deployed Across Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Custom Software */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Why Choose Custom Software Development?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer off the shelf custom software solutions tailored specifically to address Africa's unique sustainable development and business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Built for African Context</h3>
                <p className="text-gray-600">
                  Solutions optimized for low bandwidth, intermittent connectivity, mobile-first access, and local language support—designed for Africa's digital infrastructure reality.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Cog className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Perfectly Tailored</h3>
                <p className="text-gray-600">
                  Every feature, workflow, and integration is custom-built to match your exact business processes, community needs, and sustainable development goals.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="h-8 w-8 text-shakes-blue-light" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Scalable & Future-Ready</h3>
                <p className="text-gray-600">
                  Built on modern architectures that grow with your organization, from serving one community to scaling across multiple African countries.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Secure & Compliant</h3>
                <p className="text-gray-600">
                  Enterprise-grade security, data privacy compliance, and protection standards meeting both local African regulations and international requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Complete Integration</h3>
                <p className="text-gray-600">
                  Seamlessly connects with your existing systems, mobile money platforms, government databases, and third-party services across Africa.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-shakes-blue-light" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Community-Centered Design</h3>
                <p className="text-gray-600">
                  User interfaces designed for diverse literacy levels, cultural contexts, and accessibility needs across African communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions We Build */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Custom Solutions We Build for Africa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From poverty alleviation to environmental conservation, our custom software addresses Africa's most pressing sustainable development challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Agricultural Management Systems</h3>
                <p className="text-gray-600 mb-6">
                  Digital platforms for smallholder farmers—crop planning, weather forecasting, market prices, mobile money integration, and supply chain tracking optimized for rural connectivity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SMS & USSD support for feature phones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline data collection & synchronization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Integration with African mobile money platforms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Healthcare Access Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Telemedicine, patient records, appointment scheduling, health worker coordination, and medical supply tracking for areas with limited healthcare infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Low-bandwidth video consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Multi-language support for diverse communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">HIPAA-compliant data security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Financial Inclusion Tools</h3>
                <p className="text-gray-600 mb-6">
                  Microfinance management, savings groups coordination, digital lending, credit scoring for informal economies, and financial literacy platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Alternative credit scoring models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Group lending & ROSCA management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mobile-first interfaces for low-end devices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Environmental Monitoring Systems</h3>
                <p className="text-gray-600 mb-6">
                  Wildlife conservation, deforestation tracking, water quality monitoring, climate data collection, and community reporting for environmental protection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">IoT sensor integration for remote areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Satellite imagery analysis & mapping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Community ranger mobile apps</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Education & Training Platforms</h3>
                <p className="text-gray-600 mb-6">
                  E-learning systems, teacher training, student information systems, and digital literacy programs optimized for African educational contexts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline content access & synchronization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SMS-based assignment submissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Local language content delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Community Development Tools</h3>
                <p className="text-gray-600 mb-6">
                  Project management for NGOs, community reporting systems, volunteer coordination, impact measurement, and resource distribution platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Multi-stakeholder dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time impact reporting & analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Geographic information systems (GIS)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Development Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Our Custom Software Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that aligns with Shakes Digital's core objectives—from research to implementation, monitoring, and scaling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-shakes-blue/10 p-8 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Research & Discovery</h3>
                  <p className="text-gray-600">
                    Deep dive into your challenges, user needs, African context, infrastructure constraints, and sustainable development goals.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-shakes-teal" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-shakes-teal/10 p-8 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Design & Planning</h3>
                  <p className="text-gray-600">
                    User-centered design, technical architecture, mobile-first prototypes, and development roadmap tailored to African users.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-shakes-teal" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-shakes-blue-light/10 p-8 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue-light text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Development & Testing</h3>
                  <p className="text-gray-600">
                    Agile development sprints, continuous testing on African devices and networks, and iterative improvements based on user feedback.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-shakes-teal" />
                </div>
              </div>

              <div>
                <div className="bg-shakes-teal/10 p-8 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Deployment & Scale</h3>
                  <p className="text-gray-600">
                    Phased rollout, user training, monitoring & evaluation, and continuous improvement for sustainable impact across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Modern Technologies, African Context
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies optimized for African infrastructure—ensuring performance on low-end devices and intermittent connectivity.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "React & React Native",
                "Node.js & Python",
                "PostgreSQL & MongoDB",
                "Progressive Web Apps",
                "GraphQL & REST APIs",
                "Docker & Kubernetes",
                "AWS & Azure (Africa regions)",
                "Offline-first Architecture",
                "SMS & USSD Integration",
                "Mobile Money APIs",
                "WebSockets & Real-time",
                "Serverless Functions"
              ].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-shakes-blue-dark font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-shakes-blue-dark to-shakes-blue text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    WHAT'S POSSIBLE
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Imagine: Custom Agricultural Platform Serving 10,000+ Farmers
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Picture a comprehensive agricultural management system connecting smallholder farmers to markets, weather data, and financial services—achieving 40% income increase and 60% reduction in post-harvest losses.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">10,000+</p>
                      <p className="text-blue-100">Potential Active Farmers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">40%</p>
                      <p className="text-blue-100">Possible Income Increase</p>
                    </div>
                  </div>
                  <a href="/portfolio" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explore Possibilities <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="African farmer using custom agricultural software on mobile device"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  How long does custom software development take?
                </h3>
                <p className="text-gray-600">
                  Timelines vary based on complexity. Simple solutions can take 2-3 months, while comprehensive platforms may require 6-12 months. We use agile development to deliver working features incrementally, so you see progress every 2-3 weeks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  What makes your custom software suitable for Africa?
                </h3>
                <p className="text-gray-600">
                  We optimize for African realities: low bandwidth, intermittent connectivity, low-end devices, feature phone support (SMS/USSD), mobile money integration, local language support, and affordable hosting using African data centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Do you provide training and ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes. Every custom software project includes user training, technical documentation, and support packages. We offer various maintenance plans to ensure your software continues to perform optimally and evolves with your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Can you integrate with existing systems?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We specialize in integrating with government databases, mobile money platforms (M-Pesa, Airtel Money, etc.), accounting systems, CRMs, and any other tools your organization already uses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue-light text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your sustainable development or business challenge. Our team will design a custom software solution tailored to Africa's unique context and your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Schedule Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Explore Our Solutions
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

export default CustomSoftware;
