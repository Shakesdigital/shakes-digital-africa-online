import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy: React.FC = () => {
  const { slug } = useParams();
  
  // In a real application, you would fetch the case study data based on the slug
  // For now, we'll use placeholder data
  const caseStudy = {
    title: "Project Title",
    description: "Detailed project description",
    challenge: "Project challenge description",
    solution: "Solution implementation details",
    results: ["Result 1", "Result 2", "Result 3"],
    technologies: ["React", "TypeScript", "Node.js"],
    image: "/placeholder.svg"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <Button 
              variant="ghost" 
              className="text-white mb-6" 
              asChild
            >
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              {caseStudy.description}
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-shakes-blue-dark">The Challenge</h2>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-shakes-blue-dark">Our Solution</h2>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-shakes-blue-dark">Results</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-shakes-blue-dark">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;