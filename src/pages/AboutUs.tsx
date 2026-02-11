import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Search, Handshake, Coins, LineChart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                  Building Websites & Mobile Apps That Solve African Challenges
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  We develop websites and mobile applications designed to address real African business and development challenges — helping businesses grow, reach customers, and scale across the continent.
                </p>
              </div>
              <div className="lg:pl-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/about-us-hero.png"
                    alt="Shakes Digital team building websites and mobile apps for African businesses"
                    className="rounded-lg shadow-xl relative z-10 w-full object-cover h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/lady-pos.jpg"
                    alt="African businesswoman using a digital point of sale system built by Shakes Digital"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-teal/20 rounded-full z-0"></div>
                </div>
              </div>

              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-blue-dark">Who We Are</h3>
                    <p className="text-gray-600 mb-4">
                      Shakes Digital is a website and mobile app development agency dedicated to solving African business and development challenges. We specialize in building powerful, user-friendly websites and mobile applications that help African businesses establish their digital presence, acquire customers, automate operations, and expand into new markets — all designed for the realities of the African continent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-shakes-teal">Our Central Goal</h3>
                    <p className="text-gray-600">
                      To develop professionally built websites and mobile applications that directly address African business and development challenges — from helping businesses go digital for the first time to enabling cross-border e-commerce, improving customer engagement, and driving operational efficiency across <a href="/industries" className="font-bold text-shakes-teal hover:text-shakes-teal-dark underline">7 key industries</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section
          className="relative overflow-hidden py-24"
          aria-labelledby="founder-story-heading"
          style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(13, 92, 99, 0.4) 1px, transparent 50px), radial-gradient(circle at 80% 30%, rgba(249, 168, 38, 0.35) 1px, transparent 55px), radial-gradient(circle at 40% 80%, rgba(93, 63, 211, 0.35) 1px, transparent 60px)"
            }}
          ></div>
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <figure className="w-full lg:w-2/5 flex justify-center items-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-shakes-teal/20 rounded-full z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shakes-blue/20 rounded-full z-0"></div>
                  <img
                    src="/images/IMG_0122.jpeg"
                    alt="Portrait of Mugisa Dan Byenkya"
                    loading="lazy"
                    className="rounded-lg shadow-xl relative z-10 w-full object-cover"
                  />
                </div>
                <figcaption className="sr-only">Mugisa Dan Byenkya, Founder and CEO of Shakes Digital</figcaption>
              </figure>
              <div className="w-full lg:w-3/5 text-gray-700">
                <h2
                  id="founder-story-heading"
                  className="text-base md:text-lg font-medium text-shakes-teal mb-6 flex flex-wrap items-center gap-2"
                >
                  Founder's Story
                  <span className="font-semibold text-gray-900">Mugisa Dan Byenkya</span>
                </h2>
                <div className="space-y-5 leading-relaxed">
                  <p>My journey is rooted in a deep passion for digital technology and firsthand exposure to Africa's business and development challenges. Growing up in Uganda, I witnessed how the lack of digital tools — websites for businesses, mobile apps for communities — held back economic growth and limited opportunities. As Programs Coordinator at the <a href="https://foscod.org/" target="_blank" rel="noopener noreferrer" className="text-shakes-teal hover:text-shakes-teal-dark underline font-semibold">Foundation for Sustainable Community Based Development</a>, I worked directly with communities and businesses facing these realities, which constantly led me to ask:</p>
                  <blockquote className="bg-white/80 border-l-4 border-shakes-teal rounded-xl p-6 italic text-shakes-blue-dark shadow-sm">
                    How can professionally built websites and mobile applications bridge these gaps — empowering African businesses to reach customers, grow revenue, and build sustainable operations?
                  </blockquote>
                  <p>This question became my driving force and ultimately inspired me to found Shakes Digital Agency in late 2024. I am committed to developing websites and mobile applications that solve the critical African business and development challenges affecting the continent's economic growth. Through our focused approach to website and mobile app development, we address real problems that limit African businesses from thriving in the digital economy.</p>
                  <p>My vision is to see every African business — from a market vendor in Kampala to a logistics company serving East Africa — equipped with a professionally built website or mobile app that helps them compete, grow, and succeed. I look forward to building strategic partnerships, amplifying our impact through technology, and contributing to a digitally empowered Africa.</p>
                </div>
                <a
                  href="/contact"
                  aria-label="Partner with Shakes Digital"
                  className="btn-primary inline-flex items-center gap-2 mt-8"
                >
                  Partner with Us <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Key Objectives</h2>
              <p className="text-lg text-gray-600">
                Strategic objectives that guide every website and mobile app we build:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Research</h4>
                <p className="text-gray-600 text-sm">Understand African business challenges and user needs to ensure every website and app we build addresses real problems.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Partnerships</h4>
                <p className="text-gray-600 text-sm">Collaborate with local and international organizations to expand the reach and impact of our website and mobile app solutions.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Resource Mobilization</h4>
                <p className="text-gray-600 text-sm">Secure funding and resources to enable scalable website and mobile app projects for African businesses and organizations.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-shakes-teal/20 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-shakes-teal" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-shakes-blue-dark">Impact Measurement</h4>
                <p className="text-gray-600 text-sm">Continuously measure the business impact of our websites and apps, optimizing for growth and scalability across African markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Two Focused Services for Maximum Impact</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We focus exclusively on Website Development and Mobile App Development — the two most powerful digital tools African businesses need to solve their challenges and grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/web-development-2.png"
                  alt="Website development for African businesses and organizations"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Website Development</h4>
                  <p className="text-gray-600 text-sm">Business websites, e-commerce platforms, web applications, and portals — built fast, mobile-responsive, and optimized for African markets and connectivity conditions.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/mobile-app.png"
                  alt="Mobile app development for African businesses and communities"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-shakes-blue-dark">Mobile App Development</h4>
                  <p className="text-gray-600 text-sm">Native and cross-platform mobile apps with offline capabilities, mobile payment integration, and lightweight designs — engineered for Africa's mobile-first economy.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/industries" className="btn-primary inline-flex items-center gap-2">
                Explore Industries We Serve <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>


        {/* Impact Across Africa */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Impact Across Africa</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Every website and mobile app we build is rooted in deep research of African business challenges, designed for local users and conditions, and built to scale across markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-teal mb-2">7</div>
                <p className="text-gray-600 font-medium">Industries Served</p>
                <p className="text-xs text-gray-500 mt-1">With Website & Mobile App Solutions</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-blue mb-2">2</div>
                <p className="text-gray-600 font-medium">Core Services</p>
                <p className="text-xs text-gray-500 mt-1">Website & Mobile App Development</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-teal mb-2">4+</div>
                <p className="text-gray-600 font-medium">Countries Served</p>
                <p className="text-xs text-gray-500 mt-1">Uganda, Kenya, Tanzania, Rwanda</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-shakes-blue mb-2">100%</div>
                <p className="text-gray-600 font-medium">Africa-Focused</p>
                <p className="text-xs text-gray-500 mt-1">Built for African Business Realities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Build Your Website or Mobile App?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how a professionally built website or mobile application can help your African business solve its challenges and unlock growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Partner with Us <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/services" className="btn-outline">
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

export default AboutUs;