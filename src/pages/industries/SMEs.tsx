import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Building2, TrendingUp, BarChart3, Shield, Award, Leaf } from "lucide-react";

const SMEs: React.FC = () => {
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
                  SME BUSINESS GROWTH
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  SME Business Growth and Community Impact
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Drive revenue growth, operational efficiency, and market expansion with digital tools for e-commerce, business management, and ESG compliance—while creating positive social and environmental impact for African communities.
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
                <img
                  src="/SME 12.png"
                  alt="African SME business owners using digital tools for sustainable growth"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-shakes-blue-dark p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">300% Growth</p>
                  <p className="text-sm text-gray-700">Potential Revenue Growth with Digital Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Digital Solutions for SMEs */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Why Digital Technology for SMEs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SMEs need to grow revenue, operate efficiently, and access markets. Digital solutions drive revenue growth, reduce operational costs, enable market expansion, attract investment—while supporting sustainable practices and community impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Market Expansion</h3>
                <p className="text-gray-600">
                  E-commerce platforms and digital marketplaces connecting your SME to customers across Africa and globally—breaking geographical barriers and expanding revenue streams.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">ESG Compliance & Reporting</h3>
                <p className="text-gray-600">
                  Automated systems tracking environmental, social, and governance metrics—ensuring compliance, attracting impact investors, and demonstrating sustainable business practices.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Business management software streamlining inventory, accounting, customer relations, and supply chain—reducing costs and improving productivity for sustainable growth.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Data-Driven Decisions</h3>
                <p className="text-gray-600">
                  Analytics dashboards providing insights on sales, customer behavior, sustainability metrics, and financial performance—enabling evidence-based strategic planning.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Impact Investment Readiness</h3>
                <p className="text-gray-600">
                  Systems demonstrating measurable social and environmental impact—making your SME attractive to impact investors, development finance, and responsible capital.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Sustainability Integration</h3>
                <p className="text-gray-600">
                  Tools measuring carbon footprint, waste reduction, energy efficiency, and social impact—embedding sustainability into daily operations and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for SMEs */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                SME Business Growth and Community Impact Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From social enterprises to green startups, impact-driven businesses to sustainable manufacturers—our solutions drive revenue growth, operational efficiency, and market expansion while supporting community and environmental benefits across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">E-Commerce & Digital Marketplaces</h3>
                <p className="text-gray-600 mb-6">
                  Online storefronts and marketplace integrations enabling your SME to sell products and services across Africa and globally—with secure payments, inventory management, and customer analytics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Responsive e-commerce websites with shopping cart and checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mobile money and international payment gateway integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Product catalog management and automated inventory tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Customer relationship management and order fulfillment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">ESG Compliance & Impact Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive platforms for environmental, social, and governance metrics collection, reporting, and verification—ensuring transparency and attracting responsible investment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Automated ESG data collection and performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Carbon footprint calculation and sustainability reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Social impact measurement and stakeholder reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Compliance tracking and investor-ready impact reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Business Management Systems</h3>
                <p className="text-gray-600 mb-6">
                  Integrated ERP solutions managing finances, inventory, sales, operations, and human resources—streamlining workflows and reducing operational costs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Financial management with accounting and invoicing automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Inventory and supply chain management systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Customer relationship management (CRM) platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">HR management and payroll processing tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Mobile Business Apps</h3>
                <p className="text-gray-600 mb-6">
                  Smartphone applications for field operations, sales teams, delivery tracking, and customer engagement—enabling business management on the go.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Sales force automation and mobile POS systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Delivery and logistics tracking applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Customer loyalty and rewards programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Field service management and inspection tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Marketing & Customer Engagement</h3>
                <p className="text-gray-600 mb-6">
                  Digital marketing platforms and customer engagement tools—building brand awareness, driving sales, and creating loyal customer communities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SEO-optimized websites and content marketing platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Social media integration and automated marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Email marketing and SMS campaign management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Customer analytics and behavioral insights dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Analytics & Business Intelligence</h3>
                <p className="text-gray-600 mb-6">
                  Data visualization and analytics platforms transforming business data into actionable insights—supporting strategic planning and performance optimization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time business performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Sales forecasting and predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Financial reporting and profitability analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Sustainability metrics and ESG performance tracking</span>
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
                SME Business Growth & Community Impact Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ensuring digital solutions drive revenue growth, operational efficiency, and investment access while supporting sustainable practices and positive community impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Research</h4>
                <p className="text-gray-600 text-sm">Understanding your business model, ESG goals, and market opportunities</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Building scalable digital solutions aligned with sustainability objectives</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Partnerships</h4>
                <p className="text-gray-600 text-sm">Connecting with investors, suppliers, and strategic partners for growth</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-shakes-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Enabling access to impact investment and sustainable financing</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
                <h4 className="font-bold text-shakes-blue-dark mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Measuring business performance, impact metrics, and ROI for continuous improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Possible */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-shakes-blue to-shakes-teal text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    WHAT'S POSSIBLE
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Imagine: SME Tripling Revenue While Achieving Sustainability Goals
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Picture an integrated e-commerce platform with business management and ESG tracking for an African SME—achieving 300% revenue growth, operational efficiency, $2M in investment access, and positive community impact.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">300% Revenue</p>
                      <p className="text-blue-100">Growth Potential</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">$2M+ Investment</p>
                      <p className="text-blue-100">Access Potential</p>
                    </div>
                  </div>
                  <a href="/services" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explore Services <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="/SME 1.png"
                    alt="African SME entrepreneur celebrating business success with digital transformation"
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
            <div className="bg-gradient-to-r from-shakes-blue to-shakes-teal text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Grow Your SME Business and Community Impact?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's build digital solutions that grow your SME revenue, operational efficiency, market access, and sustainability goals while supporting positive community impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
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

export default SMEs;
