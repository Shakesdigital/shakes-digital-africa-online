import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Wrench, Users, GraduationCap, TrendingUp, BarChart, Shield, Target } from "lucide-react";

const Objectives: React.FC = () => {
  const objectives = [
    {
      icon: <Search className="w-8 h-8 text-shakes-teal" />,
      title: "Research and Identification",
      description: "Conduct thorough research to identify African business and market challenges addressable through digital technology.",
      color: "#1DACA2"
    },
    {
      icon: <Wrench className="w-8 h-8 text-shakes-blue" />,
      title: "Implementation of Solutions",
      description: "Develop and implement digital tech solutions that directly address African business challenges, with a focus on revenue growth and operational efficiency.",
      color: "#1D70A2"
    },
    {
      icon: <Users className="w-8 h-8 text-shakes-blue-light" />,
      title: "Business Partnerships",
      description: "Collaborate and partner with local and international organizations in technology and Sustainable African Business Development across Africa to mobilize resources and drive business growth.",
      color: "#66B9DE"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-shakes-teal" />,
      title: "Digital Skills Development",
      description: "Provide digital skills training to African businesses and entrepreneurs, ensuring competitive advantage through technology adoption.",
      color: "#1DACA2"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-shakes-blue" />,
      title: "Business Revenue Growth",
      description: "Offer digital business solutions to help African enterprises boost sales, market reach, and profitability.",
      color: "#1D70A2"
    },
    {
      icon: <BarChart className="w-8 h-8 text-shakes-blue-light" />,
      title: "Performance Monitoring & Optimization",
      description: "Continuously monitor and evaluate our digital solutions to optimize ROI and scale across African markets for business growth.",
      color: "#66B9DE"
    },
    {
      icon: <Shield className="w-8 h-8 text-shakes-teal" />,
      title: "Business Compliance & Governance",
      description: "Meet all administrative and legal requirements for the effective management of Shakes Digital, ensuring transparency and operational excellence.",
      color: "#1DACA2"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-shakes-blue-dark mb-6">
                Our Objectives
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Guiding our work towards maximum business impact and growth across Africa.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Shakes Digital, our objectives drive every decision and project, with a focus on African business success and competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${objective.color}20` }}
                    >
                      {objective.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark">{objective.title}</h3>
                    <p className="text-gray-600">{objective.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <Target className="w-16 h-16 text-shakes-teal mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We envision an Africa where digital technology is a key driver for business growth, market competitiveness, and enterprise success. Through our objectives, we commit to innovation that makes a real difference on the continent.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-shakes-teal mb-4">Our Impact Statement</h3>
                <p className="text-lg text-gray-600">
                  We're committed to leveraging digital technology for business growth in Africa. From digital transformation to market expansion and competitive advantage across the continent, our solutions drive measurable business results. Join us in building African enterprise success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-shakes-blue-dark mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in creating digital solutions that empower African businesses and drive meaningful growth across the continent.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary">
                  Partner with Us
                </a>
                <a href="/#services" className="btn-outline">
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

export default Objectives;