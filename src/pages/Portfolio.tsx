import React from "react";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Explore our successful digital projects and see how we've helped businesses across East Africa transform their online presence.
            </p>
          </div>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;