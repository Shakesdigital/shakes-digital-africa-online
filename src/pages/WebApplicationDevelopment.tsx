
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Code, LayoutDashboard } from "lucide-react";

const WebApplicationDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <Badge className="bg-shakes-orange text-white mb-4 px-3 py-1 text-sm">Web Application Development</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Custom Web Applications for African Businesses</h1>
                <p className="text-xl opacity-90 mb-8">
                  We build powerful, scalable web applications that automate processes, optimize workflows, and create exceptional digital experiences for your users.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg">
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg">
                    View Our Portfolio
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-shakes-orange/20 rounded-lg blur-xl"></div>
                  <AspectRatio ratio={16/9} className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="Web Application Development" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Web Application Solutions</h2>
              <p className="section-subtitle mx-auto">
                From internal tools to customer-facing platforms, we build applications that drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Business Applications",
                  description: "Tailored software solutions that address your specific business challenges and requirements.",
                  icon: <LayoutDashboard className="h-12 w-12 text-shakes-blue" />,
                  features: ["Business process automation", "Workflow optimization", "Data management", "Reporting & analytics"]
                },
                {
                  title: "Client Portals & Dashboards",
                  description: "Secure, interactive portals that provide your customers with personalized experiences and information.",
                  icon: <Code className="h-12 w-12 text-shakes-blue" />,
                  features: ["User authentication", "Interactive dashboards", "Real-time data visualization", "Document sharing"]
                },
                {
                  title: "Enterprise Solutions",
                  description: "Robust applications that integrate with your existing systems to streamline operations across your organization.",
                  icon: <CheckCircle className="h-12 w-12 text-shakes-blue" />,
                  features: ["API integrations", "Legacy system connections", "Multi-tenant architecture", "Scalable infrastructure"]
                }
              ].map((solution, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <div className="mb-6 flex justify-center">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-shakes-blue-dark">{solution.title}</h3>
                    <p className="text-gray-600 text-center mb-6">{solution.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-shakes-orange flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Technology Stack</h2>
              <p className="section-subtitle mx-auto">
                We use modern, reliable technologies to build robust and scalable web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  category: "Frontend Development",
                  technologies: [
                    { name: "React.js", proficiency: 95 },
                    { name: "Vue.js", proficiency: 85 },
                    { name: "Angular", proficiency: 80 },
                    { name: "Progressive Web Apps", proficiency: 90 }
                  ]
                },
                {
                  category: "Backend Development",
                  technologies: [
                    { name: "Node.js", proficiency: 95 },
                    { name: "Python", proficiency: 90 },
                    { name: "PHP/Laravel", proficiency: 85 },
                    { name: "Java", proficiency: 75 }
                  ]
                },
                {
                  category: "Database & Storage",
                  technologies: [
                    { name: "MySQL/PostgreSQL", proficiency: 90 },
                    { name: "MongoDB", proficiency: 85 },
                    { name: "Redis", proficiency: 80 },
                    { name: "Firebase", proficiency: 85 }
                  ]
                },
                {
                  category: "DevOps & Cloud",
                  technologies: [
                    { name: "AWS", proficiency: 85 },
                    { name: "Google Cloud", proficiency: 80 },
                    { name: "Docker", proficiency: 90 },
                    { name: "CI/CD Pipelines", proficiency: 85 }
                  ]
                }
              ].map((stack, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4 text-shakes-blue-dark">{stack.category}</h3>
                  <div className="space-y-4">
                    {stack.technologies.map((tech, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">{tech.name}</span>
                          <span className="text-gray-500">{tech.proficiency}%</span>
                        </div>
                        <Progress value={tech.proficiency} className="h-2 bg-gray-200" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Development Methodology</h2>
              <p className="section-subtitle mx-auto">
                We follow a proven Agile approach to deliver high-quality web applications
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-shakes-blue-light transform -translate-x-1/2"></div>

              {/* Process steps */}
              <div className="space-y-24">
                {[
                  {
                    step: "01",
                    title: "Discovery & Requirements",
                    description: "We work closely with your team to understand your business processes, user needs, and technical requirements.",
                    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600",
                    align: "left"
                  },
                  {
                    step: "02",
                    title: "Design & Architecture",
                    description: "Our team designs intuitive user interfaces and develops a robust technical architecture to support your application.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
                    align: "right"
                  },
                  {
                    step: "03",
                    title: "Agile Development",
                    description: "We develop your application in iterative sprints, delivering working software that you can test and provide feedback on.",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600",
                    align: "left"
                  },
                  {
                    step: "04",
                    title: "Testing & Deployment",
                    description: "We thoroughly test your application for quality, security, and performance before deploying it to production.",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
                    align: "right"
                  },
                  {
                    step: "05",
                    title: "Support & Evolution",
                    description: "We provide ongoing support and continue to evolve your application to meet your changing business needs.",
                    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600",
                    align: "left"
                  }
                ].map((process, index) => (
                  <div key={index} className={`flex flex-col ${process.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-block px-3 py-1 bg-shakes-blue text-white rounded-full font-bold mb-3">Step {process.step}</div>
                      <h3 className="text-2xl font-bold mb-3 text-shakes-blue-dark">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>

                    <div className="hidden md:block relative z-10 w-12 h-12 rounded-full bg-shakes-orange flex items-center justify-center text-white font-bold">
                      {process.step}
                    </div>

                    <div className="flex-1">
                      <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={process.image} 
                          alt={process.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Featured Web Application Projects</h2>
              <p className="section-subtitle mx-auto">
                Real-world solutions we've built for businesses across Africa
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Logistics Management System",
                  client: "Africa Transport Solutions",
                  description: "A comprehensive logistics platform that streamlines operations, manages fleets, and provides real-time tracking for this major Kenyan logistics company.",
                  image: "https://picsum.photos/800/450?random=10",
                  technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
                  results: ["35% reduction in operational costs", "65% faster delivery time tracking", "Improved customer satisfaction scores"]
                },
                {
                  title: "Healthcare Patient Portal",
                  client: "Nairobi Medical Network",
                  description: "A secure patient portal allowing appointment scheduling, medical record access, and telehealth consultations for a network of clinics across Africa.",
                  image: "https://picsum.photos/800/450?random=11",
                  technologies: ["Vue.js", "PHP/Laravel", "MySQL", "AWS"],
                  results: ["40% reduction in administrative work", "24/7 access to medical services", "Expanded patient reach beyond urban centers"]
                }
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <AspectRatio ratio={4/3} className="lg:h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <CardContent className="p-8">
                      <Badge className="bg-shakes-blue-light text-white mb-3">
                        Case Study
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 text-shakes-blue-dark">{project.title}</h3>
                      <p className="text-shakes-orange font-medium mb-4">Client: {project.client}</p>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-700 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-shakes-blue text-shakes-blue">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-700 mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-shakes-orange flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-shakes-blue hover:bg-shakes-blue-light text-white">
                        View Full Case Study
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-2 border-shakes-blue text-shakes-blue hover:bg-shakes-blue hover:text-white py-3 px-6 text-lg">
                View All Application Projects
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-shakes-blue to-shakes-blue-dark text-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Custom Web Application?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's create a powerful, user-friendly web application that streamlines your operations and helps your business grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-shakes-orange hover:bg-shakes-orange-light text-white py-3 px-8 text-lg"
                >
                  Schedule a Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg"
                >
                  Download Capability Brief
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle mx-auto">
                Common questions about our web application development services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does it take to develop a web application?",
                  answer: "Development timelines vary based on complexity, but typical projects range from 3-6 months. We work in Agile sprints, delivering working software incrementally throughout the project."
                },
                {
                  question: "What is your approach to security?",
                  answer: "We prioritize security at every stage of development, implementing industry best practices for authentication, data protection, and vulnerability prevention. We also conduct security audits before launch."
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer: "Yes, we specialize in creating web applications that integrate seamlessly with your existing software through APIs and custom connectors, ensuring data flows smoothly across your organization."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Absolutely. We offer flexible support packages to ensure your application remains secure, up-to-date, and continues to meet your evolving business needs."
                }
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 text-shakes-blue-dark">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebApplicationDevelopment;
