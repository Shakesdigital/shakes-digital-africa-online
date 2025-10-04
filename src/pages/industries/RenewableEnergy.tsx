import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Zap, Sun, Wind, Battery, TrendingUp, Globe } from "lucide-react";

const RenewableEnergy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  RENEWABLE ENERGY & GREEN TECH
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Digital Solutions Powering Africa's Clean Energy Future
                </h1>
                <p className="text-xl text-orange-50 mb-8">
                  Transform your renewable energy operation with smart grid management, monitoring systems, and data analytics designed for Africa's energy transition and sustainable development goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Energy Projects
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Solar panels providing renewable energy in Africa"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-orange-700 p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">40%</p>
                  <p className="text-sm text-gray-700">Efficiency Improvement with Smart Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Digital Solutions for Renewable Energy */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Why Digital Technology for Africa's Renewable Energy Sector?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Africa's renewable energy sector is experiencing rapid growth, but faces unique challenges—from grid infrastructure limitations to financing barriers. Our digital solutions optimize operations, attract investment, and accelerate the clean energy transition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Smart Grid Management</h3>
                <p className="text-gray-600">
                  Real-time monitoring and control of distributed renewable energy systems—optimizing solar, wind, hydro, and battery storage across mini-grids and utility-scale installations.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Performance Analytics</h3>
                <p className="text-gray-600">
                  Advanced data analytics tracking energy production, equipment efficiency, maintenance needs, and ROI—enabling data-driven decisions for maximum output and profitability.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Investment Attraction</h3>
                <p className="text-gray-600">
                  Transparent reporting dashboards and verified performance data that build investor confidence—critical for securing funding for renewable energy expansion across Africa.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Battery className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Energy Storage Optimization</h3>
                <p className="text-gray-600">
                  Intelligent battery management systems predicting demand, optimizing charge/discharge cycles, and maximizing the value of energy storage in off-grid and hybrid systems.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Wind className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Remote Monitoring</h3>
                <p className="text-gray-600">
                  IoT-enabled systems monitoring installations in remote locations—reducing site visits, predicting failures before they occur, and minimizing downtime across distributed assets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Carbon Credit Tracking</h3>
                <p className="text-gray-600">
                  Automated measurement and verification of emissions reductions—enabling participation in carbon markets and unlocking additional revenue streams from clean energy projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for Energy Operators */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Digital Solutions for Renewable Energy Operations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From solar farms to mini-grids, wind installations to energy storage—our solutions optimize every aspect of clean energy generation and distribution in Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Energy Management Systems (EMS)</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive platforms for real-time monitoring, control, and optimization of renewable energy generation, storage, and distribution across your entire portfolio.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time generation monitoring across all sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Automated load balancing and demand response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Battery storage optimization algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Predictive maintenance and fault detection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Solar Farm Monitoring Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Specialized systems for utility-scale and distributed solar installations—tracking panel performance, irradiance, inverter efficiency, and identifying underperforming assets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Panel-level performance tracking and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Weather integration and production forecasting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Automated cleaning and maintenance scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Degradation analysis and warranty claims management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Mini-Grid Management Software</h3>
                <p className="text-gray-600 mb-6">
                  Complete solutions for community mini-grid operators—customer management, mobile money integration, demand forecasting, and remote monitoring for off-grid electrification.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Customer billing and mobile money payment collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Smart metering and prepaid electricity systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Load forecasting and capacity planning tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Remote diagnostics and troubleshooting capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Investor Reporting Dashboards</h3>
                <p className="text-gray-600 mb-6">
                  Transparent, automated reporting platforms providing investors and financiers with verified performance data, financial metrics, and impact measurement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time financial performance tracking and ROI calculation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Environmental impact metrics and carbon credit verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Automated regulatory compliance reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Customizable stakeholder portals and reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Mobile Field Operations Apps</h3>
                <p className="text-gray-600 mb-6">
                  Mobile applications for field technicians conducting installations, inspections, and maintenance—even in areas with limited connectivity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline-capable inspection checklists and forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">GPS-tagged photos and documentation of site conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Work order management and task assignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Equipment inventory and parts tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Carbon Credit & Impact Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Automated measurement, reporting, and verification (MRV) systems for carbon credits, renewable energy certificates, and sustainability impact metrics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Emissions reduction calculation and verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Carbon credit registry integration and trading support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SDG alignment and impact reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Blockchain-based verification and transparency</span>
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
                Our Renewable Energy Development Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aligned with Shakes Digital's core objectives—supporting Africa's energy transition through research-driven, implementable, and scalable digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Research</h4>
                <p className="text-gray-600 text-sm">Understanding your renewable energy assets, operational challenges, and growth opportunities</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Deploying IoT sensors, software platforms, and analytics optimized for African energy infrastructure</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Partnerships</h4>
                <p className="text-gray-600 text-sm">Connecting with energy companies, development finance institutions, and climate organizations</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Enabling investment attraction through transparent data and verified performance metrics</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Measuring energy output, financial returns, and environmental impact for continuous optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-orange-600 to-yellow-600 text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SUCCESS STORY
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Solar Mini-Grid Operator Reduces Downtime by 65% and Attracts $2M Investment
                  </h2>
                  <p className="text-xl text-orange-50 mb-8">
                    We implemented an integrated energy management and investor reporting platform for a mini-grid operator serving 50+ communities in East Africa—resulting in dramatic operational improvements and successful Series A funding.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">65%</p>
                      <p className="text-orange-50">Downtime Reduction</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">$2M</p>
                      <p className="text-orange-50">Investment Raised</p>
                    </div>
                  </div>
                  <a href="/portfolio" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Full Case Study <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Solar energy installation in Africa with digital monitoring"
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
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Renewable Energy Operation?
              </h2>
              <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
                Let's build digital solutions that maximize energy output, reduce costs, attract investment, and accelerate Africa's clean energy transition.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
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

export default RenewableEnergy;
