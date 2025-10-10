import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import WebApplicationDevelopment from "./pages/WebApplicationDevelopment";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminLandingPages from "./pages/AdminLandingPages";
import AdminPortfolio from "./pages/AdminPortfolio";
import AdminServices from "./pages/AdminServices";
import AdminBlog from "./pages/AdminBlog";
import AdminBlogEdit from "./pages/AdminBlogEdit";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminSubscribers from "./pages/AdminSubscribers";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Industries from "./pages/Industries";
import CustomSoftware from "./pages/CustomSoftware";
import WebDevelopmentService from "./pages/WebDevelopmentService";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import SustainableTourism from "./pages/industries/SustainableTourism";
import RenewableEnergy from "./pages/industries/RenewableEnergy";
import Agriculture from "./pages/industries/Agriculture";
import Nonprofit from "./pages/industries/Nonprofit";
import Education from "./pages/industries/Education";
import SMEs from "./pages/industries/SMEs";
import Healthcare from "./pages/industries/Healthcare";
import TestConnection from "./pages/TestConnection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/web-application-development" element={<WebApplicationDevelopment />} />
          <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/sustainable-tourism" element={<SustainableTourism />} />
          <Route path="/industries/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/industries/agriculture" element={<Agriculture />} />
          <Route path="/industries/nonprofit" element={<Nonprofit />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/smes" element={<SMEs />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/landing-pages" element={<AdminLandingPages />} />
          <Route path="/admin/portfolio" element={<AdminPortfolio />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/blog/new" element={<AdminBlogEdit />} />
          <Route path="/admin/blog/edit/:id" element={<AdminBlogEdit />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/subscribers" element={<AdminSubscribers />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/test-connection" element={<TestConnection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;