import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Sprout, Cloud, TrendingUp, Map, Smartphone, Database } from "lucide-react";

const Agriculture: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-lime-600 pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  AGRICULTURE & FOOD SECURITY
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Digital Solutions Empowering Africa's Farmers and Food Systems
                </h1>
                <p className="text-xl text-green-50 mb-8">
                  Transform agricultural operations with precision farming tools, market access platforms, and supply chain solutions designed to improve yields, incomes, and food security across Africa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Start Your Project <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View AgTech Projects
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="African farmer using mobile technology for improved agricultural practices"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-green-700 p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">40%</p>
                  <p className="text-sm text-gray-700">Average Income Increase for Digital-Enabled Farmers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Digital Solutions for Agriculture */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Why Digital Technology for Africa's Agricultural Sector?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Africa's smallholder farmers feed the continent but face challenges from climate change to market access. Our digital solutions address these barriers, improving productivity, profitability, and food security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Sprout className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Precision Agriculture</h3>
                <p className="text-gray-600">
                  Data-driven farming tools providing crop recommendations, soil analysis, pest identification, and optimal planting schedules—maximizing yields while minimizing inputs and costs.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Market Access</h3>
                <p className="text-gray-600">
                  Digital marketplaces connecting farmers directly to buyers, eliminating middlemen, providing fair prices, and reducing post-harvest losses through better market information.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Weather & Climate Data</h3>
                <p className="text-gray-600">
                  Hyper-local weather forecasting, climate risk alerts, and seasonal planning tools helping farmers adapt to changing conditions and protect their livelihoods.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Mobile-First Solutions</h3>
                <p className="text-gray-600">
                  Apps designed for feature phones and smartphones with offline capabilities, SMS integration, and voice interfaces—accessible even in areas with limited connectivity.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Supply Chain Transparency</h3>
                <p className="text-gray-600">
                  Track-and-trace systems ensuring product quality, reducing losses, enabling traceability from farm to fork, and building consumer trust in African agricultural products.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Map className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Farm Management</h3>
                <p className="text-gray-600">
                  Comprehensive platforms for plot mapping, input tracking, labor management, financial records, and harvest planning—professionalizing smallholder agriculture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for Agricultural Stakeholders */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Digital Solutions for Agriculture and Food Security
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From smallholder farmers to agribusinesses, cooperatives to food processors—our solutions strengthen every link in Africa's agricultural value chain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Farmer Advisory & Extension Apps</h3>
                <p className="text-gray-600 mb-6">
                  Mobile applications providing agronomic advice, pest and disease identification, best practices, and personalized recommendations based on location and crop type.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">AI-powered crop disease diagnosis using phone camera</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Weather forecasts and planting calendar recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Expert Q&A and community forums for peer learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Video tutorials and voice-based content in local languages</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Agricultural Marketplace Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Digital trading platforms connecting farmers with buyers, providing price transparency, facilitating transactions, and integrating mobile money payments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time commodity pricing from multiple markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Direct farmer-to-buyer matching and negotiation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mobile money integration for instant payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Quality grading and logistics coordination tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Farm Management Information Systems</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive platforms for managing farm operations—plot mapping, input tracking, labor management, financial records, and harvest planning for improved productivity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">GPS-based field mapping and acreage calculation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Input inventory management (seeds, fertilizers, pesticides)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Expense tracking and profit/loss analysis per plot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Seasonal planning and crop rotation recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Supply Chain & Traceability Systems</h3>
                <p className="text-gray-600 mb-6">
                  Track-and-trace platforms ensuring product quality, reducing post-harvest losses, and building transparency from farm to consumer for premium market access.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Blockchain-based product provenance and certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Cold chain monitoring and quality assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Logistics optimization and transportation tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Consumer-facing QR codes for origin verification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Cooperative Management Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Digital tools for farmer cooperatives—member management, input distribution, aggregated marketing, financial services, and democratic governance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Member registration and contribution tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Bulk input procurement and distribution management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Aggregated produce marketing and payment distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Savings and loan management for members</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">AgFinance & Insurance Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Digital financial services for farmers—credit scoring, loan management, crop insurance, and savings products integrated with mobile money and agricultural data.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Alternative credit scoring using farm data and satellite imagery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Index-based crop insurance with automated payouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Input financing tied to harvest and market offtake</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mobile wallet integration for seamless transactions</span>
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
                Our Agricultural Development Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aligned with Shakes Digital's core objectives—supporting food security and farmer prosperity through research-driven, implementable agricultural technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Research</h4>
                <p className="text-gray-600 text-sm">Understanding farmer challenges, crop patterns, market dynamics, and local agricultural practices</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Building mobile-first, offline-capable solutions accessible to smallholder farmers</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Partnerships</h4>
                <p className="text-gray-600 text-sm">Connecting with agribusinesses, NGOs, government extension services, and farmer organizations</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Facilitating access to agricultural finance, inputs, and market opportunities</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Measuring yield improvements, income gains, and food security outcomes for continuous refinement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SUCCESS STORY
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    AgTech Platform Increases Farmer Incomes by 35% and Reaches 50,000+ Smallholders
                  </h2>
                  <p className="text-xl text-green-50 mb-8">
                    We built an integrated farm management and marketplace app for East African smallholder farmers—resulting in higher yields, better prices, reduced post-harvest losses, and improved livelihoods for thousands of farming families.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">35%</p>
                      <p className="text-green-50">Income Increase</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">50K+</p>
                      <p className="text-green-50">Farmers Reached</p>
                    </div>
                  </div>
                  <a href="/portfolio" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Full Case Study <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="African farmers benefiting from agricultural technology platform"
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
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Agricultural Operations?
              </h2>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                Let's build digital solutions that improve yields, increase farmer incomes, strengthen food security, and create sustainable agricultural value chains across Africa.
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

export default Agriculture;
