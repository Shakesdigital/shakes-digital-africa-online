import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/SEOSchema";
import { ArrowRight, Wifi, Smartphone, Database, Cloud, Code, Settings, CheckCircle2 } from "lucide-react";

const TopOfflineWebTools: React.FC = () => {
  const tools = [
    {
      name: "Progressive Web Apps (PWAs)",
      description: "Offline-first web applications that work seamlessly without internet connectivity",
      benefits: ["Loads in 1.2s on 2G networks", "Works 100% offline", "87% data savings", "Cross-platform compatibility"],
      icon: Smartphone
    },
    {
      name: "Service Workers",
      description: "Background scripts that enable offline functionality and smart caching strategies",
      benefits: ["Intercepts network requests", "Caches critical resources", "Background sync", "Push notifications"],
      icon: Settings
    },
    {
      name: "IndexedDB Storage",
      description: "Client-side database for storing large amounts of structured data offline",
      benefits: ["Store 50MB+ data locally", "Fast query performance", "Transaction support", "Asynchronous API"],
      icon: Database
    },
    {
      name: "Cache API",
      description: "Precise control over what gets cached and how long it persists",
      benefits: ["Version control for assets", "Selective caching", "Network-first strategies", "Cache invalidation"],
      icon: Cloud
    },
    {
      name: "Offline-First Frameworks",
      description: "React, Vue, and Angular frameworks with offline-first architecture patterns",
      benefits: ["PouchDB for sync", "Redux Offline", "Workbox for PWAs", "Background sync queues"],
      icon: Code
    },
    {
      name: "Background Sync API",
      description: "Defer actions until user has stable connectivity for reliable data transfer",
      benefits: ["Automatic retry", "Queue management", "Battery-efficient", "User-friendly experience"],
      icon: Wifi
    },
    {
      name: "Local Storage & Session Storage",
      description: "Simple key-value storage for lightweight offline data persistence",
      benefits: ["5-10MB capacity", "Simple API", "Synchronous access", "Persistent across sessions"],
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOSchema
        type="Article"
        title="Top 7 Offline-Ready Web Tools for African Startups | Shakes Digital"
        description="Complete 2025 guide to building offline web apps in Africa. Learn how Progressive Web Apps (PWAs), Service Workers, and IndexedDB enable 100% offline functionality on 2G networks. By Shakes Digital, Africa's leading PWA agency."
        url="https://shakesdigital.com/blog/top-offline-web-tools-africa"
        image="https://shakesdigital.com/hero-mobile-app.png"
        article={{
          headline: "Top 7 Offline-Ready Web Tools for African Startups (2025 Guide)",
          datePublished: "2025-11-03",
          dateModified: "2025-11-03",
          author: "Dan Mugisa Byenkya"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://shakesdigital.com/" },
          { name: "Blog", url: "https://shakesdigital.com/blog" },
          { name: "Offline Web Tools", url: "https://shakesdigital.com/blog/top-offline-web-tools-africa" }
        ]}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-12">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-shakes-teal/20 text-shakes-teal rounded-full text-sm font-semibold mb-4">
                Updated November 2025
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                Top 7 Offline-Ready Web Tools for African Startups
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                How to build web apps that work perfectly on 2G networks and completely offline
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span>By <strong>Dan Mugisa Byenkya</strong></span>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span>November 3, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In Africa, <strong>94% of users experience daily connectivity issues</strong>. Traditional web apps fail when internet drops, frustrating users and losing business. But what if your web app could work <strong>perfectly offline</strong>, load in <strong>1.2 seconds on 2G networks</strong>, and sync automatically when connectivity returns?
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                That's the power of <strong>offline-first web development</strong>. At Shakes Digital, we've built offline-ready apps across Uganda, Kenya, and Tanzania for startups in fintech, healthcare, education, and e-commerce. This guide reveals the 7 essential tools we use.
              </p>

              <div className="bg-shakes-teal/10 border-l-4 border-shakes-teal p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-shakes-blue-dark mb-3">Why Offline-First Matters in Africa</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-shakes-teal mr-2 mt-1 flex-shrink-0" />
                    <span><strong>94% of African users</strong> face connectivity issues daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-shakes-teal mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Loads in 1.2s on 2G</strong> vs 5-8s for traditional apps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-shakes-teal mr-2 mt-1 flex-shrink-0" />
                    <span><strong>87% data savings</strong> through smart caching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-shakes-teal mr-2 mt-1 flex-shrink-0" />
                    <span><strong>70% cheaper</strong> than building native iOS + Android apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-shakes-blue-dark mb-8 text-center">The 7 Essential Offline Web Tools</h2>

            <div className="space-y-8">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-shakes-teal">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-shakes-teal" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-shakes-blue-dark mb-2">{index + 1}. {tool.name}</h3>
                        <p className="text-gray-700 text-lg mb-4">{tool.description}</p>
                      </div>
                    </div>

                    <h4 className="font-bold text-shakes-teal mb-3">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tool.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-shakes-teal mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-12 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="bg-gradient-to-br from-shakes-blue/10 to-shakes-teal/10 p-8 rounded-lg border-2 border-shakes-teal/20">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Real-World Case Study: Kilimanjaro University PWA</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Kilimanjaro University in Tanzania needed a learning management system that worked in rural areas with poor connectivity. Shakes Digital built an offline-first PWA using these tools.
                </p>

                <h3 className="text-xl font-bold text-shakes-blue-dark mb-4">Results:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-shakes-teal mb-2">87%</div>
                    <div className="text-sm text-gray-600">Data Usage Reduced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-shakes-blue mb-2">1.2s</div>
                    <div className="text-sm text-gray-600">Load Time on 2G</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-shakes-teal mb-2">100%</div>
                    <div className="text-sm text-gray-600">Offline Functionality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-shakes-blue mb-2">3,500+</div>
                    <div className="text-sm text-gray-600">Active Students</div>
                  </div>
                </div>

                <p className="text-gray-700">
                  Students can now download course materials, submit assignments, and take quizzes completely offline. Data syncs automatically when they get connectivity. This increased course completion rates by 65%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">How Shakes Digital Implements Offline-First Architecture</h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Our proven 5-step process for building offline-ready web apps:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-shakes-teal mb-3">Step 1: Design Offline-First Data Architecture</h3>
                  <p className="text-gray-700">Identify which data needs offline access. Use IndexedDB for large datasets, Cache API for assets, and LocalStorage for settings.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-shakes-teal mb-3">Step 2: Implement Service Worker Caching</h3>
                  <p className="text-gray-700">Configure service workers to cache critical resources. Use cache-first strategies for static assets, network-first for dynamic data.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-shakes-teal mb-3">Step 3: Build Background Sync Logic</h3>
                  <p className="text-gray-700">Queue user actions when offline. Use Background Sync API to automatically sync when connectivity returns.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-shakes-teal mb-3">Step 4: Optimize for 2G Networks</h3>
                  <p className="text-gray-700">Compress images, minify code, lazy load non-critical resources. Target LCP <2.5s on 2G networks.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-shakes-teal mb-3">Step 5: Test on Real African Networks</h3>
                  <p className="text-gray-700">Test on actual 2G/3G networks in Uganda, Kenya, Tanzania. Use Chrome DevTools throttling during development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-shakes-blue to-shakes-teal text-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Offline-First Web App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Shakes Digital has built 50+ offline-ready PWAs across Africa. Get a free consultation and technical architecture review.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-shakes-blue px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/services/web-development" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-shakes-blue transition-all">
                View Our PWA Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TopOfflineWebTools;
