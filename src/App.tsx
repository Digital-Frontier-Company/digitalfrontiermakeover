
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
import AIPromptTemplates from '@/pages/AIPromptTemplates';
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
            <Route path="/" element={<MainLayout><Index /></MainLayout>} />
            <Route path="/ad-funnel-blueprint" element={<MainLayout><AdFunnelBlueprint /></MainLayout>} />
            <Route path="/generative-engine-optimization" element={<MainLayout><GenerativeEngineOptimization /></MainLayout>} />
            <Route path="/answer-engine-optimization" element={<MainLayout><AnswerEngineOptimization /></MainLayout>} />
            <Route path="/search-engine-optimization" element={<MainLayout><SearchEngineOptimization /></MainLayout>} />
            <Route path="/crypto-marketing" element={<MainLayout><CryptoMarketing /></MainLayout>} />
            <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
            <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/newsletter" element={<MainLayout><Newsletter /></MainLayout>} />
            <Route path="/site-map" element={<MainLayout><SiteMap /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
            <Route path="/blog/mastering-digital-marketing" element={<MainLayout><BlogPost /></MainLayout>} />
            <Route path="/blog/answer-engine-optimization-crypto-startups" element={<MainLayout><BlogPost /></MainLayout>} />
            <Route path="/resources/content-creation-agent" element={<MainLayout><ContentCreationAgent /></MainLayout>} />
            <Route path="/psychological-digital-marketing-insights" element={<MainLayout><PsychologicalDigitalMarketingInsights /></MainLayout>} />
            <Route path="/blog/tax-reduction-wealth-building-guide" element={<TaxReductionGuide />} />
            <Route path="/technical" element={<MainLayout><Technical /></MainLayout>} />
            <Route path="/evolution" element={<MainLayout><Evolution /></MainLayout>} />
            <Route path="/regulations" element={<MainLayout><Regulations /></MainLayout>} />
            <Route path="/sectors" element={<MainLayout><Sectors /></MainLayout>} />
            <Route path="/future" element={<MainLayout><Future /></MainLayout>} />
            <Route path="/ai-bias-in-advertising" element={<MainLayout><AIBias /></MainLayout>} />
            <Route path="/ai-and-digital-marketing" element={<MainLayout><AIAndDigitalMarketing /></MainLayout>} />
            <Route path="/recommender-system-generalization" element={<MainLayout><RecommenderSystemGeneralization /></MainLayout>} />
            <Route path="/influencer-marketing-2025" element={<InfluencerMarketing2025 />} />
            <Route path="/ai-prompt-templates" element={<MainLayout><AIPromptTemplates /></MainLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
