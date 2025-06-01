
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AdFunnelBlueprint from "./pages/AdFunnelBlueprint";
import AnswerEngineOptimization from "./pages/AnswerEngineOptimization";
import GenerativeEngineOptimization from "./pages/GenerativeEngineOptimization";
import AIBias from "./pages/AIBias";
import CryptoMarketing from "./pages/CryptoMarketing";
import SearchEngineOptimization from "./pages/SearchEngineOptimization";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContentCreationAgent from "./pages/ContentCreationAgent";
import Pricing from "./pages/Pricing";
import Newsletter from "./pages/Newsletter";
import Technical from "./pages/Technical";
import Evolution from "./pages/Evolution";
import Regulations from "./pages/Regulations";
import Sectors from "./pages/Sectors";
import Future from "./pages/Future";
import KPIs from "./pages/KPIs";
import FAQ from "./pages/FAQ";
import SiteMap from "./pages/SiteMap";
import PsychologicalDigitalMarketingInsights from "./pages/PsychologicalDigitalMarketingInsights";
import EmotionalMarketingPlaybook from "./pages/EmotionalMarketingPlaybook";
import NikeCaseStudy from "./pages/NikeCaseStudy";
import SWOTAnalysis from "./pages/SWOTAnalysis";
import PortersFiveForces from "./pages/PortersFiveForces";
import BlueOceanStrategy from "./pages/BlueOceanStrategy";
import GrowthHacking from "./pages/GrowthHacking";
import DigitalMarketingPlaybook from "./pages/DigitalMarketingPlaybook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ad-funnel-blueprint" element={<AdFunnelBlueprint />} />
            <Route path="/answer-engine-optimization" element={<AnswerEngineOptimization />} />
            <Route path="/generative-engine-optimization" element={<GenerativeEngineOptimization />} />
            <Route path="/ai-bias-in-advertising" element={<AIBias />} />
            <Route path="/crypto-marketing" element={<CryptoMarketing />} />
            <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resources/content-creation-agent" element={<ContentCreationAgent />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/evolution" element={<Evolution />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/future" element={<Future />} />
            <Route path="/kpis" element={<KPIs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/site-map" element={<SiteMap />} />
            <Route path="/ai-and-digital-marketing" element={<PsychologicalDigitalMarketingInsights />} />
            <Route path="/psychological-digital-marketing-insights" element={<PsychologicalDigitalMarketingInsights />} />
            <Route path="/emotional-marketing-playbook" element={<EmotionalMarketingPlaybook />} />
            <Route path="/nike-case-study" element={<NikeCaseStudy />} />
            <Route path="/swot-analysis" element={<SWOTAnalysis />} />
            <Route path="/porters-five-forces" element={<PortersFiveForces />} />
            <Route path="/blue-ocean-strategy" element={<BlueOceanStrategy />} />
            <Route path="/growth-hacking" element={<GrowthHacking />} />
            <Route path="/digital-marketing-playbook" element={<DigitalMarketingPlaybook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
