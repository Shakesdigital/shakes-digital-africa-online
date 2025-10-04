import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Smartphone, Wifi, Battery, Users, Share2, Bell } from "lucide-react";

const MobileAppDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-shakes-blue to-shakes-teal pt-32 pb-24 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Mobile App Development for Africa's Mobile-First Future
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Native and cross-platform mobile applications built for Africa's growing smartphone adoption—enabling community reporting, market access, digital payments, and offline functionality for areas with limited connectivity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                    Start Your App Project <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    View Our Apps
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="African entrepreneur using mobile app for business development"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-shakes-blue-dark text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl mb-1">500K+</p>
                  <p className="text-sm">Downloads Across Africa from Our Mobile Apps</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mobile Apps for Africa */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Why Mobile Apps Are Essential for Africa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 80% of African internet users accessing the web exclusively via smartphones, mobile apps are the primary gateway to reaching and serving African communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Mobile-First Continent</h3>
                <p className="text-gray-600">
                  Africa leapfrogged desktop computers. Mobile phones are the primary—and often only—device for internet access, making mobile apps essential for reaching African users.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Wifi className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Offline-First Design</h3>
                <p className="text-gray-600">
                  Apps that work without constant internet—syncing data when connectivity returns. Perfect for rural areas and regions with intermittent network coverage across Africa.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6">
                  <Battery className="h-8 w-8 text-shakes-blue-light" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Low-End Device Support</h3>
                <p className="text-gray-600">
                  Optimized for affordable smartphones with limited RAM, storage, and battery—ensuring your app works smoothly on the devices Africans actually use.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Bell className="h-8 w-8 text-shakes-teal" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Push Notifications</h3>
                <p className="text-gray-600">
                  Real-time engagement through push notifications—keeping users informed about updates, promotions, appointments, and important alerts even when offline.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-shakes-blue" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Native Features</h3>
                <p className="text-gray-600">
                  Access device capabilities—camera, GPS, biometrics, contacts, SMS—to create rich, contextual experiences tailored to African user needs and use cases.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-shakes-blue-light/10 rounded-lg flex items-center justify-center mb-6">
                  <Share2 className="h-8 w-8 text-shakes-blue-light" />
                </div>
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Viral Growth Potential</h3>
                <p className="text-gray-600">
                  Apps spread through communities via Bluetooth sharing and word-of-mouth—perfect for markets where app store discovery and data costs can be barriers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Apps We Build */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Mobile Solutions Transforming African Communities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From financial inclusion to agricultural productivity, our mobile apps address real challenges facing African communities and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Mobile Money & Financial Apps</h3>
                <p className="text-gray-600 mb-6">
                  Digital wallets, microfinance, peer-to-peer payments, savings groups (ROSCAs), mobile banking, and financial literacy apps tailored to African markets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Integration with M-Pesa, Airtel Money, MTN Mobile Money</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Biometric authentication & PIN security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline transaction queuing & sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SMS transaction confirmations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Agricultural & Farming Apps</h3>
                <p className="text-gray-600 mb-6">
                  Farm management, crop planning, weather alerts, market prices, pest identification, supply chain tracking, and farmer-to-buyer marketplaces.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">GPS mapping for farm plots & field data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Camera-based crop disease detection (AI)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Local language voice navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline access to farming guides & tips</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Healthcare & Telemedicine Apps</h3>
                <p className="text-gray-600 mb-6">
                  Patient records, appointment booking, telemedicine consultations, medication reminders, health worker coordination, and community health tracking.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Low-bandwidth video consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Encrypted patient data (HIPAA compliant)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline medical reference libraries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">SMS appointment & medication reminders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">E-Commerce & Marketplace Apps</h3>
                <p className="text-gray-600 mb-6">
                  Mobile shopping platforms, peer-to-peer marketplaces, product catalogs, order management, and delivery tracking optimized for African e-commerce.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Progressive image loading for slow networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Cash-on-delivery & mobile money payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">WhatsApp & SMS order notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Location-based seller/product discovery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Education & E-Learning Apps</h3>
                <p className="text-gray-600 mb-6">
                  Mobile learning platforms, student portals, teacher training, language learning, skill development, and digital literacy apps for African learners.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Download lessons for offline learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Interactive quizzes & gamification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Multi-language content support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Progress tracking & certificates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-blue-dark mb-4">Community & Social Impact Apps</h3>
                <p className="text-gray-600 mb-6">
                  Citizen reporting, community organizing, environmental monitoring, disaster response, volunteer coordination, and NGO project management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">GPS-tagged incident reporting with photos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Offline data collection & synchronization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Real-time dashboards for decision-makers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Anonymous reporting for safety</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Native vs Cross-Platform */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Native or Cross-Platform? We Build Both.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right approach for your project goals, budget, and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-shakes-blue-dark to-shakes-blue text-white p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Native Apps (iOS & Android)</h3>
                <p className="text-blue-100 mb-6">
                  Platform-specific development using Swift/Objective-C for iOS and Kotlin/Java for Android—maximum performance and native feel.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span>Best performance & user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span>Full access to device features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span>Platform-specific design patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-teal flex-shrink-0 mt-1" />
                    <span>Ideal for complex, feature-rich apps</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-100">
                  <strong>Best for:</strong> Apps requiring maximum performance, complex features, or platform-specific experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-shakes-teal to-shakes-blue-light text-white p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Cross-Platform (React Native & Flutter)</h3>
                <p className="text-blue-100 mb-6">
                  Single codebase for both iOS and Android using React Native or Flutter—faster development and lower cost with near-native performance.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-blue-dark flex-shrink-0 mt-1" />
                    <span>Faster time-to-market (30-40% faster)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-blue-dark flex-shrink-0 mt-1" />
                    <span>Cost-effective (single codebase)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-blue-dark flex-shrink-0 mt-1" />
                    <span>Easier maintenance & updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-shakes-blue-dark flex-shrink-0 mt-1" />
                    <span>Near-native performance</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-100">
                  <strong>Best for:</strong> MVPs, startups, and apps where speed to market and budget efficiency are priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Development Process */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Our Mobile App Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to app store launch and beyond—a structured approach optimized for African markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Strategy & Planning</h3>
                  <p className="text-gray-600">
                    User research, feature prioritization, platform selection (iOS/Android/both), technical architecture, and roadmap.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">UX/UI Design</h3>
                  <p className="text-gray-600">
                    Mobile-first wireframes, user flows, prototypes, and visual design following iOS and Android design guidelines.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="w-12 h-12 bg-shakes-blue-light text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Development & Testing</h3>
                  <p className="text-gray-600">
                    Agile sprints, continuous testing on real African devices and networks, beta testing with target users.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="w-12 h-12 bg-shakes-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Launch & Growth</h3>
                  <p className="text-gray-600">
                    App store optimization, launch marketing, analytics setup, user feedback collection, and iterative improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                Modern Mobile Technologies for Africa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use proven, scalable technologies optimized for African mobile devices and networks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "React Native",
                "Flutter",
                "Swift (iOS)",
                "Kotlin (Android)",
                "Firebase",
                "SQLite & Realm",
                "Push Notifications",
                "GPS & Maps",
                "Mobile Analytics",
                "In-App Payments",
                "Offline-First Sync",
                "Biometric Auth"
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-shakes-blue-dark font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Store Optimization */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-shakes-blue-dark mb-6">
                  App Store Success Included
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Building a great app is just the beginning. We ensure your app gets discovered and downloaded through strategic app store optimization and launch support.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-shakes-teal flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-shakes-blue-dark">App Store Listing Optimization</strong>
                      <p className="text-gray-600">Compelling descriptions, keywords, screenshots, and preview videos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-shakes-teal flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-shakes-blue-dark">Google Play & Apple App Store Submission</strong>
                      <p className="text-gray-600">We handle the entire submission process and approval requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-shakes-teal flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-shakes-blue-dark">Analytics & User Feedback Integration</strong>
                      <p className="text-gray-600">Track downloads, engagement, and user behavior for continuous improvement</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-shakes-teal flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-shakes-blue-dark">Post-Launch Support & Updates</strong>
                      <p className="text-gray-600">Regular updates, bug fixes, and feature enhancements</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Mobile app analytics and app store success metrics"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-shakes-blue to-shakes-teal text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SUCCESS STORY
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Agricultural App Empowering 50,000+ Farmers
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    We built a cross-platform farming app connecting smallholder farmers to market prices, weather data, and buyers—resulting in 35% income increase and reaching 50,000+ downloads in East Africa.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-bold mb-2">50K+</p>
                      <p className="text-blue-100">Active Farmers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-2">35%</p>
                      <p className="text-blue-100">Income Increase</p>
                    </div>
                  </div>
                  <a href="/portfolio" className="inline-flex items-center gap-2 bg-white text-shakes-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Full Case Study <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="African farmer using agricultural mobile app in the field"
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
                  How long does it take to develop a mobile app?
                </h3>
                <p className="text-gray-600">
                  A simple app (MVP) typically takes 2-3 months. Medium complexity apps take 4-6 months, while complex, feature-rich apps may require 6-12 months. We use agile development to show progress every 2 weeks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Should I build for iOS, Android, or both?
                </h3>
                <p className="text-gray-600">
                  In African markets, Android dominates with 80-90% market share. We typically recommend starting with Android, then expanding to iOS. Alternatively, use cross-platform development (React Native/Flutter) to launch on both simultaneously.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  How do you ensure the app works on low-end devices?
                </h3>
                <p className="text-gray-600">
                  We test on actual low-end African devices (not just simulators), optimize for limited RAM/storage, use efficient code, compress assets, implement progressive loading, and ensure the app runs smoothly even on 2GB RAM devices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Can the app work offline?
                </h3>
                <p className="text-gray-600">
                  Yes! We specialize in offline-first architecture—apps store data locally, function without internet, and sync automatically when connectivity returns. Essential for rural areas and unreliable networks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">
                  Do you handle app store submission and approval?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We manage the entire process—developer accounts, app store listings, compliance with guidelines, submission, and communication with Apple/Google until approval. We also handle updates and ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-shakes-teal to-shakes-blue text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's create a mobile app that works brilliantly on African networks, empowers your users, and drives real business results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-shakes-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Schedule Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Our Mobile Apps
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

export default MobileAppDevelopment;
