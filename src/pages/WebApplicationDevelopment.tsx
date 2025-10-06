
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
                <Badge className="bg-shakes-orange text-white mb-4 px-3 py-1 text-sm">Web Applications for African Development</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Custom Web Applications Addressing Africa's Sustainable Development Challenges</h1>
                <p className="text-xl opacity-90 mb-8">
                  We build powerful, scalable web applications specifically designed to overcome Africa's sustainable development and business challenges—from poverty alleviation tools to community empowerment platforms, healthcare access systems to agricultural management solutions.
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
              <h2 className="section-title">Web Applications for Africa's Development Needs</h2>
              <p className="section-subtitle mx-auto">
                From poverty alleviation tools to community empowerment platforms, we build applications that address Africa's sustainable development and business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Development Applications",
                  description: "Custom applications addressing Africa's poverty alleviation, healthcare access, agricultural productivity, and environmental conservation challenges through digital innovation.",
                  icon: <LayoutDashboard className="h-12 w-12 text-shakes-blue" />,
                  features: ["Community impact tracking", "Resource allocation optimization", "Offline-first for rural areas", "Multi-language support for African contexts"]
                },
                {
                  title: "Community Empowerment Platforms",
                  description: "Secure portals enabling African communities to report challenges, access resources, participate in development initiatives, and connect with support services.",
                  icon: <Code className="h-12 w-12 text-shakes-blue" />,
                  features: ["Community reporting tools", "Resource mapping dashboards", "Mobile money integration", "SMS/USSD accessibility"]
                },
                {
                  title: "African Business Growth Solutions",
                  description: "Robust applications helping African enterprises overcome infrastructure limitations, access markets, manage operations, and scale sustainably across the continent.",
                  icon: <CheckCircle className="h-12 w-12 text-shakes-blue" />,
                  features: ["Low-bandwidth optimization", "Local payment integration", "Supply chain management", "Market access facilitation"]
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
              <h2 className="section-title">Africa-Optimized Technology Stack</h2>
              <p className="section-subtitle mx-auto">
                We use modern, reliable technologies optimized for Africa's infrastructure realities—building robust applications that work in low-bandwidth environments and scale across diverse African contexts
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
              <h2 className="section-title">Our Africa-Focused Development Methodology</h2>
              <p className="section-subtitle mx-auto">
                We follow a proven Agile approach rooted in understanding Africa's sustainable development challenges, delivering applications that drive real impact across the continent
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
                    title: "African Context Discovery",
                    description: "We research your specific African sustainable development or business challenges, understanding community needs, infrastructure limitations, and impact objectives.",
                    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600",
                    align: "left"
                  },
                  {
                    step: "02",
                    title: "Africa-Adapted Design",
                    description: "Our team designs interfaces optimized for African contexts—mobile-first, low-bandwidth, offline-capable, and culturally appropriate for your target communities.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
                    align: "right"
                  },
                  {
                    step: "03",
                    title: "Agile Development for Africa",
                    description: "We develop applications in iterative sprints, optimizing for Africa's infrastructure realities and incorporating local payment systems, languages, and connectivity solutions.",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600",
                    align: "left"
                  },
                  {
                    step: "04",
                    title: "Africa Testing & Deployment",
                    description: "We thoroughly test your application across African connectivity scenarios, devices, and use cases before deploying to ensure maximum community accessibility and impact.",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
                    align: "right"
                  },
                  {
                    step: "05",
                    title: "Impact Support & Scale",
                    description: "We provide ongoing support and evaluate opportunities to scale your application across diverse African communities, maximizing sustainable development impact.",
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
              <h2 className="section-title">African Development Impact Through Web Applications</h2>
              <p className="section-subtitle mx-auto">
                Real-world applications addressing Africa's sustainable development and business challenges—driving poverty alleviation, community empowerment, and economic growth
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Community Health Access Platform",
                  client: "Rural Healthcare Initiative, East Africa",
                  description: "A mobile-optimized application connecting rural communities across Uganda, Kenya, Tanzania, and Rwanda with healthcare services—featuring offline appointment scheduling, SMS health alerts, and mobile money payment integration to overcome Africa's healthcare access challenges.",
                  image: "https://picsum.photos/800/450?random=10",
                  technologies: ["React", "Node.js", "MongoDB", "M-Pesa API", "SMS Gateway"],
                  results: ["60% increase in rural healthcare access", "Reduced maternal mortality in target areas", "Offline functionality serving communities without reliable internet"]
                },
                {
                  title: "Agricultural Productivity Platform",
                  client: "Smallholder Farmer Cooperative, Kenya",
                  description: "A web application empowering African smallholder farmers with crop management tools, weather predictions, market price information, and direct buyer connections—addressing poverty through agricultural development.",
                  image: "https://picsum.photos/800/450?random=11",
                  technologies: ["Vue.js", "PHP/Laravel", "MySQL", "Weather API", "Mobile Money"],
                  results: ["45% increase in farmer income", "Reduced post-harvest losses by 30%", "Connected 5,000+ farmers to sustainable markets"]
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Address Africa's Challenges Through Custom Web Applications?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's create powerful applications specifically designed to overcome Africa's sustainable development and business challenges—from poverty alleviation to community empowerment, healthcare access to agricultural productivity.
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
                  question: "How do you optimize applications for Africa's infrastructure challenges?",
                  answer: "We build with Africa's realities in mind—optimizing for low bandwidth, implementing offline-first functionality where needed, ensuring mobile responsiveness, and integrating local payment systems like M-Pesa. Our applications are tested across diverse African connectivity scenarios."
                },
                {
                  question: "Can your applications address poverty alleviation and community development?",
                  answer: "Yes, we specialize in building applications that directly address Africa's sustainable development challenges—from healthcare access and agricultural productivity to financial inclusion and community empowerment. We focus on measurable impact and scalability across African contexts."
                },
                {
                  question: "Do you support African languages and local contexts?",
                  answer: "Absolutely. We implement multi-language support for African languages, culturally appropriate design, and features tailored to regional needs—ensuring accessibility for diverse communities across the continent."
                },
                {
                  question: "How do you ensure applications work in rural African areas?",
                  answer: "We design with rural accessibility in mind—offline functionality, SMS/USSD integration for basic phones, low-bandwidth optimization, and mobile money integration. Our Africa-based support team understands regional infrastructure challenges and provides localized assistance."
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
