
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import AnswerEngineOptimization from "./pages/AnswerEngineOptimization";
import Contact from "./pages/Contact";
import RecommenderSystem from "./pages/RecommenderSystem";
import Pricing from "./pages/Pricing";
import Newsletter from "./pages/Newsletter";
import HubSpotSettings from "./components/integration/HubSpotSettings";
import SearchEngineOptimization from "./pages/SearchEngineOptimization";
import CryptoMarketing from "./pages/CryptoMarketing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContentCreationAgent from "./pages/ContentCreationAgent";
import SiteMap from "./pages/SiteMap";
import PsychologicalDigitalMarketingInsights from "./pages/PsychologicalDigitalMarketingInsights";
import EmotionalMarketingPlaybook from "./pages/EmotionalMarketingPlaybook";
import SWOTAnalysis from "./pages/SWOTAnalysis";
import PortersFiveForces from "./pages/PortersFiveForces";
import BlueOceanStrategy from "./pages/BlueOceanStrategy";
import GrowthHacking from "./pages/GrowthHacking";
import "./styles/digitalFrontier.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Digital Frontier - Leading the way in AI-powered marketing solutions and digital transformation strategies." />
        <meta name="keywords" content="digital marketing, AI marketing, SEO, content creation, marketing automation, digital transformation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thedigitalfrontier.ai" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Frontier Company",
            "url": "https://thedigitalfrontier.ai",
            "logo": "https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61572896248731",
              "https://x.com/DigitalFro14616", 
              "https://www.youtube.com/@Digital_FrontierCO",
              "https://www.tiktok.com/@digital_frontier_company",
              "https://www.instagram.com/digital_frontier_company/",
              "https://www.linkedin.com/company/digital-frontier-company"
            ]
          })}
        </script>
      </Helmet>
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
          <Route path="/answer-engine-optimization" element={<AnswerEngineOptimization />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-and-digital-marketing" element={<RecommenderSystem />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
          <Route path="/crypto-marketing" element={<CryptoMarketing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/mastering-digital-marketing" element={<BlogPost />} />
          <Route path="/resources/content-creation-agent" element={<ContentCreationAgent />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route path="/psychological-digital-marketing-insights" element={<PsychologicalDigitalMarketingInsights />} />
          <Route path="/emotional-marketing-playbook" element={<EmotionalMarketingPlaybook />} />
          <Route path="/swot-analysis" element={<SWOTAnalysis />} />
          <Route path="/porters-five-forces" element={<PortersFiveForces />} />
          <Route path="/blue-ocean-strategy" element={<BlueOceanStrategy />} />
          <Route path="/growth-hacking" element={<GrowthHacking />} />
          <Route path="/admin/hubspot-settings" element={<HubSpotSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
