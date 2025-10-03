import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  description: string;
  slug: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, description, slug }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-shakes-teal mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3 text-shakes-blue-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/case-studies/${slug}`} 
          className="text-shakes-orange font-medium flex items-center gap-2 hover:gap-3 transition-all"
        >
          View Case Study <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Websites", "Web Apps", "eCommerce"];
  
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      title: "Safari Tours Booking Platform",
      category: "Web Apps",
      description: "A comprehensive booking system for Africa's premier safari company.",
      slug: "safari-tours-booking-platform"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
      title: "Afya Health Portal",
      category: "Web Apps",
      description: "Patient management system for a network of clinics across Uganda.",
      slug: "afya-health-portal"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      title: "African Crafts eStore",
      category: "eCommerce",
      description: "Online marketplace connecting artisans to global customers.",
      slug: "east-african-crafts-estore"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      title: "Kilimanjaro University",
      category: "Websites",
      description: "Modern, responsive website for a leading African university.",
      slug: "kilimanjaro-university"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle mx-auto">
            Explore our successful digital projects across various industries in Africa.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map(filter => (
              <Button 
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter ? "bg-shakes-teal text-white" : "text-shakes-blue-dark"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
