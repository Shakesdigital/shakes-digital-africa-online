
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
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminLandingPages from "./pages/AdminLandingPages";
import AdminPortfolio from "./pages/AdminPortfolio";
import AdminServices from "./pages/AdminServices";
import AdminBlog from "./pages/AdminBlog";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminUsers from "./pages/AdminUsers";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Industries from "./pages/Industries";

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
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/landing-pages" element={<AdminLandingPages />} />
          <Route path="/admin/portfolio" element={<AdminPortfolio />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
