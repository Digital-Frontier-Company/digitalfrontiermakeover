
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technical from "./pages/Technical";
import Evolution from "./pages/Evolution";
import Regulations from "./pages/Regulations";
import Sectors from "./pages/Sectors";
import Future from "./pages/Future";
import KPIs from "./pages/KPIs";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AIBias from "./pages/AIBias";
import AboutUs from "./pages/AboutUs";
import AdFunnelBlueprint from "./pages/AdFunnelBlueprint";
import GenerativeEngineOptimization from "./pages/GenerativeEngineOptimization";
import "./styles/digitalFrontier.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/evolution" element={<Evolution />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/future" element={<Future />} />
          <Route path="/kpis" element={<KPIs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ai-bias-in-advertising" element={<AIBias />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ad-funnel-blueprint" element={<AdFunnelBlueprint />} />
          <Route path="/generative-engine-optimization" element={<GenerativeEngineOptimization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
