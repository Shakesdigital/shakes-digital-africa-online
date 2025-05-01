
import * as React from "react";
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

// Website Development subsections
import RequestQuote from "./pages/website-development/RequestQuote";
import Portfolio from "./pages/website-development/Portfolio";

// Web Application Development subsections
import ScheduleDemo from "./pages/web-application-development/ScheduleDemo";
import AppPortfolio from "./pages/web-application-development/AppPortfolio";

// eCommerce Solutions subsections
import GetStarted from "./pages/ecommerce-solutions/GetStarted";
import ExploreFeatures from "./pages/ecommerce-solutions/ExploreFeatures";

const queryClient = new QueryClient();

const App: React.FC = () => (
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
          
          {/* Website Development subsection routes */}
          <Route path="/website-development/request-quote" element={<RequestQuote />} />
          <Route path="/website-development/portfolio" element={<Portfolio />} />
          
          {/* Web Application Development subsection routes */}
          <Route path="/web-application-development/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/web-application-development/portfolio" element={<AppPortfolio />} />
          
          {/* eCommerce Solutions subsection routes */}
          <Route path="/ecommerce-solutions/get-started" element={<GetStarted />} />
          <Route path="/ecommerce-solutions/explore-features" element={<ExploreFeatures />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
