
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Index from '@/pages/Index';
import AdFunnelBlueprint from '@/pages/AdFunnelBlueprint';
import GenerativeEngineOptimization from '@/pages/GenerativeEngineOptimization';
import AnswerEngineOptimization from '@/pages/AnswerEngineOptimization';
import SearchEngineOptimization from '@/pages/SearchEngineOptimization';
import CryptoMarketing from '@/pages/CryptoMarketing';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import Pricing from '@/pages/Pricing';
import FAQ from '@/pages/FAQ';
import Newsletter from '@/pages/Newsletter';
import SiteMap from '@/pages/SiteMap';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import ContentCreationAgent from '@/pages/ContentCreationAgent';
import PsychologicalDigitalMarketingInsights from '@/pages/PsychologicalDigitalMarketingInsights';
import Technical from '@/pages/Technical';
import Evolution from '@/pages/Evolution';
import Regulations from '@/pages/Regulations';
import Sectors from '@/pages/Sectors';
import Future from '@/pages/Future';
import AIBias from '@/pages/AIBias';
import AIAndDigitalMarketing from '@/pages/AIAndDigitalMarketing';
import RecommenderSystemGeneralization from '@/pages/RecommenderSystemGeneralization';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaxReductionGuide from "./pages/TaxReductionGuide";
import InfluencerMarketing2025 from "./pages/InfluencerMarketing2025";
import { Toaster } from 'react-hot-toast';
import NotFound from '@/pages/NotFound';

// Create a query client instance
const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ad-funnel-blueprint" element={<AdFunnelBlueprint />} />
            <Route path="/generative-engine-optimization" element={<GenerativeEngineOptimization />} />
            <Route path="/answer-engine-optimization" element={<AnswerEngineOptimization />} />
            <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="/crypto-marketing" element={<CryptoMarketing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/site-map" element={<SiteMap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/mastering-digital-marketing" element={<BlogPost />} />
            <Route path="/blog/answer-engine-optimization-crypto-startups" element={<BlogPost />} />
            <Route path="/resources/content-creation-agent" element={<ContentCreationAgent />} />
            <Route path="/psychological-digital-marketing-insights" element={<PsychologicalDigitalMarketingInsights />} />
            <Route path="/blog/tax-reduction-wealth-building-guide" element={<TaxReductionGuide />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/evolution" element={<Evolution />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/future" element={<Future />} />
            <Route path="/ai-bias-in-advertising" element={<AIBias />} />
            <Route path="/ai-and-digital-marketing" element={<AIAndDigitalMarketing />} />
            <Route path="/recommender-system-generalization" element={<RecommenderSystemGeneralization />} />
            <Route path="/influencer-marketing-2025" element={<InfluencerMarketing2025 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
