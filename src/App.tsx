import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
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
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Cookies from '@/pages/Cookies';
import SiteMap from '@/pages/SiteMap';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import ContentCreationAgent from '@/pages/ContentCreationAgent';
import AIBiasInAdvertising from '@/pages/AIBiasInAdvertising';
import AIAndDigitalMarketing from '@/pages/AIAndDigitalMarketing';
import PsychologicalDigitalMarketingInsights from '@/pages/PsychologicalDigitalMarketingInsights';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient } from 'react-query';
import TaxReductionGuide from "./pages/TaxReductionGuide";

function App() {
  return (
    <HelmetProvider>
      <QueryClient>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
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
            <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
            <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
            <Route path="/cookies" element={<MainLayout><Cookies /></MainLayout>} />
            <Route path="/site-map" element={<MainLayout><SiteMap /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
            <Route path="/blog/mastering-digital-marketing" element={<MainLayout><BlogPost /></MainLayout>} />
            <Route path="/blog/answer-engine-optimization-crypto-startups" element={<MainLayout><BlogPost /></MainLayout>} />
            <Route path="/resources/content-creation-agent" element={<MainLayout><ContentCreationAgent /></MainLayout>} />
            <Route path="/ai-bias-in-advertising" element={<MainLayout><AIBiasInAdvertising /></MainLayout>} />
            <Route path="/ai-and-digital-marketing" element={<MainLayout><AIAndDigitalMarketing /></MainLayout>} />
            <Route path="/psychological-digital-marketing-insights" element={<MainLayout><PsychologicalDigitalMarketingInsights /></MainLayout>} />
            <Route path="/blog/tax-reduction-wealth-building-guide" element={<TaxReductionGuide />} />
          </Routes>
        </BrowserRouter>
      </QueryClient>
    </HelmetProvider>
  );
}

export default App;
