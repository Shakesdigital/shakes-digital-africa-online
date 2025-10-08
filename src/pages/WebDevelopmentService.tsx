import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Globe, Smartphone, Zap, Lock, Search, TrendingUp } from "lucide-react";

const WebDevelopmentService: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-shakes-teal via-shakes-blue-light to-shakes-blue pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Web Development Designed for Africa's Growth
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Robust, mobile-first web platforms optimized for low bandwidth, designed for Africa's context, and engineered to drive sustainable business growth across the continent.
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
                  src="/web-development-2.png"
                  alt="Web development solutions designed for African markets and businesses"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">98%</p>
                  <p className="text-sm">Mobile-First Responsive Design on All Projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Web Development with Shakes Digital */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Web Development Built for African Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand Africa's digital landscape—from infrastructure challenges to mobile-first users. Our web solutions are engineered to perform brilliantly in these conditions while driving real business results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Mobile-First Design</h3>
                <p className="text-gray-600">
                  Over 80% of African internet users access the web via mobile. We design mobile-first, ensuring flawless experiences on smartphones and tablets, then enhance for desktop.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Lightning-Fast Performance</h3>
                <p className="text-gray-600">
                  Optimized for low bandwidth and intermittent connectivity. Progressive image loading, intelligent caching, and compressed assets ensure fast load times even on 2G/3G networks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-shakes-blue-light" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Progressive Web Apps (PWA)</h3>
                <p className="text-gray-600">
                  Web apps that work offline, install like native apps, send push notifications, and function smoothly even with poor connectivity—perfect for African markets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with SSL encryption, secure payment integration (mobile money, card payments), regular security updates, and data protection compliance.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">SEO Optimized</h3>
                <p className="text-gray-600">
                  Built-in search engine optimization to ensure your business is discoverable on Google and other search engines, driving organic traffic and leads across African markets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-shakes-blue-light" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Built to grow with your business—from startup to enterprise. Handle increasing traffic, expand to new markets, and add features seamlessly without rebuilding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Web Solutions We Build */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Web Solutions Driving African Business Growth
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From e-commerce to enterprise platforms, we build web solutions that address real business challenges and create sustainable value.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">E-Commerce Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Full-featured online stores optimized for African markets—mobile money integration, low-bandwidth product catalogs, SMS order notifications, and multi-currency support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">M-Pesa, Airtel Money, MTN Mobile Money integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Progressive image loading for slow connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Inventory management & analytics dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SMS/WhatsApp order confirmations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Corporate Websites</h3>
                <p className="text-gray-600 mb-6">
                  Professional, conversion-focused business websites that establish credibility, attract customers, and generate leads—optimized for African audiences.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Modern, mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SEO optimization for African search markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Lead capture forms & CRM integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Multi-language support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Business Portals & Dashboards</h3>
                <p className="text-gray-600 mb-6">
                  Custom web applications for business operations—customer portals, project management, inventory systems, and analytics dashboards accessible from anywhere.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Role-based access control & security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time data visualization & reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">API integrations with existing systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline functionality for field operations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Booking & Reservation Systems</h3>
                <p className="text-gray-600 mb-6">
                  Online booking platforms for hotels, tours, events, transportation, and services—automated scheduling, payment processing, and customer management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time availability & instant confirmations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mobile money & card payment integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Automated SMS/email notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Calendar sync & customer dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Community & Membership Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Web platforms for NGOs, associations, and communities—member management, event organization, content sharing, and collaboration tools.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Member directories & profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Discussion forums & messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Event management & RSVP systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Donation & fundraising capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Educational Platforms</h3>
                <p className="text-gray-600 mb-6">
                  E-learning websites and learning management systems—course delivery, student tracking, assessments, and certificates optimized for low-bandwidth environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Video streaming optimized for 3G networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline content download & access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Progress tracking & certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Interactive quizzes & assessments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Web Development Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Our Proven Web Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to launch and beyond—a collaborative approach that ensures your web platform meets your goals and exceeds user expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="relative">
                <div className="bg-shakes-teal/10 p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-shakes-blue-dark mb-2">Strategy & Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Understanding your goals, audience, and requirements to create a detailed project roadmap.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-shakes-blue/10 p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-shakes-blue-dark mb-2">UX/UI Design</h3>
                  <p className="text-gray-600 text-sm">
                    Creating intuitive, mobile-first designs that delight users and drive conversions.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-shakes-blue-light/10 p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue-light text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-shakes-blue-dark mb-2">Development</h3>
                  <p className="text-gray-600 text-sm">
                    Building with modern technologies, tested on African networks and devices.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-shakes-teal/10 p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-shakes-blue-dark mb-2">Testing & QA</h3>
                  <p className="text-gray-600 text-sm">
                    Rigorous testing across devices, browsers, and network conditions.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-shakes-blue/10 p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    5
                  </div>
                  <h3 className="text-lg font-bold text-shakes-blue-dark mb-2">Launch & Support</h3>
                  <p className="text-gray-600 text-sm">
                    Deployment, training, and ongoing maintenance to ensure continued success.
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
                Cutting-Edge Technologies for Africa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use modern, proven technologies optimized for performance, security, and scalability in African markets.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "React & Next.js",
                "Vue.js & Nuxt",
                "Node.js & Express",
                "WordPress (optimized)",
                "Tailwind CSS",
                "Progressive Web Apps",
                "RESTful APIs",
                "GraphQL",
                "PostgreSQL & MySQL",
                "MongoDB",
                "AWS & Azure Africa",
                "CDN & Caching"
              ].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-shakes-blue-dark font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Performance That Drives Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our web platforms consistently achieve exceptional performance metrics, even on African networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-shakes-teal">&lt;2s</span>
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Load Time</h4>
                <p className="text-gray-600">Average page load on 3G networks across Africa</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-shakes-blue">95+</span>
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">PageSpeed Score</h4>
                <p className="text-gray-600">Google PageSpeed Insights mobile performance rating</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-shakes-blue-light">100%</span>
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Mobile Responsive</h4>
                <p className="text-gray-600">Perfect display across all devices and screen sizes</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-shakes-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-shakes-teal">99.9%</span>
                </div>
                <h4 className="text-xl font-bold text-shakes-blue-dark mb-2">Uptime</h4>
                <p className="text-gray-600">Guaranteed availability with reliable hosting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-shakes-teal to-shakes-blue-light text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    WHAT'S POSSIBLE
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Imagine: E-Commerce Platform Generating $50K Monthly Revenue
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Picture a mobile-first e-commerce platform for a Kenya-based retailer, integrating M-Pesa and optimizing for 3G networks—achieving 250% increase in online sales within 6 months.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">250%</p>
                      <p className="text-blue-100">Potential Sales Increase</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">1.5s</p>
                      <p className="text-blue-100">Optimized Load Time on 3G</p>
                    </div>
                  </div>
                  <a href="/services" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explore Services <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/7414027/pexels-photo-7414027.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="African business owner managing successful e-commerce platform"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  How long does it take to build a website?
                </h3>
                <p className="text-gray-600">
                  Timeline depends on complexity. A corporate website typically takes 4-6 weeks, while an e-commerce platform or custom web application may take 8-16 weeks. We provide detailed timelines during project planning.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Will my website work well on African mobile networks?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We optimize specifically for African conditions—testing on 2G/3G networks, using progressive loading, image compression, and efficient caching. Our sites typically load in under 2 seconds on 3G.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Can you integrate mobile money payments?
                </h3>
                <p className="text-gray-600">
                  Yes! We integrate M-Pesa, Airtel Money, MTN Mobile Money, and other African payment platforms, plus international card payments. All transactions are secure and PCI-compliant.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Do you provide hosting and maintenance?
                </h3>
                <p className="text-gray-600">
                  Yes. We offer reliable hosting on African servers (for better performance), domain registration, SSL certificates, regular backups, security updates, and maintenance packages tailored to your needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Can I update the website content myself?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We build user-friendly content management systems (CMS) and provide comprehensive training, so you can easily update text, images, and products without technical knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-blue-dark to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Launch Your Web Platform?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's build a fast, mobile-friendly, conversion-focused website that drives real business growth across African markets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Explore Services
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

export default WebDevelopmentService;
