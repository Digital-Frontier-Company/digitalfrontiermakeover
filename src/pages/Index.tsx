
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/layout/MainLayout';
import HeroCarousel from '@/components/HeroCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  useEffect(() => {
    // Load HubSpot tracking script if configured
    const hubspotId = localStorage.getItem('hubspot_id');
    const enableTracking = localStorage.getItem('hubspot_enable_tracking') === 'true';
    
    if (hubspotId && enableTracking) {
      const script = document.createElement('script');
      script.src = `//js.hs-scripts.com/${hubspotId}.js`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(`script[src*="${hubspotId}"]`);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  const homepageFaqs = [
    {
      question: "What makes Digital Frontier different from other marketing agencies?",
      answer: "We specialize in cutting-edge AI-powered marketing strategies including GEO, AEO, and advanced SEO techniques that traditional agencies don't offer."
    },
    {
      question: "How quickly can I see results from your services?",
      answer: "Results vary by service, but most clients see initial improvements within 30-60 days, with significant growth within 3-6 months."
    },
    {
      question: "Do you work with both traditional and crypto/Web3 businesses?",
      answer: "Yes! We have specialized expertise in both traditional digital marketing and emerging Web3/cryptocurrency marketing strategies."
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Digital Frontier - AI-Powered Digital Marketing Agency</title>
        <meta name="description" content="Leading digital marketing agency specializing in AI-driven strategies, SEO, GEO, AEO, and cutting-edge optimization techniques for crypto, Web3, and traditional businesses." />
        <link rel="canonical" href="https://www.thedigitalfrontier.ai/" />
      </Helmet>

      {/* Hero Section */}
      <section className="df-hero-section">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="df-logo mx-auto mb-8" width="200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              The Future of Digital Marketing is Here
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              AI-Powered strategies that drive results. Specializing in SEO, GEO, AEO, and cutting-edge optimization for the digital frontier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Started Today
              </Link>
              <Link to="/about-us" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Grid */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-300">Cutting-edge digital marketing solutions for the modern age</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/search-engine-optimization" className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">SEO</h3>
              <p className="text-slate-300">Search Engine Optimization strategies that put you ahead of the competition</p>
            </Link>

            <Link to="/generative-engine-optimization" className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              <div className="text-purple-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">GEO</h3>
              <p className="text-slate-300">Generative Engine Optimization for AI-powered search results</p>
            </Link>

            <Link to="/answer-engine-optimization" className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
              <div className="text-cyan-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">AEO</h3>
              <p className="text-slate-300">Answer Engine Optimization for voice search and AI assistants</p>
            </Link>

            <Link to="/crypto-marketing" className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
              <div className="text-yellow-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">Crypto Marketing</h3>
              <p className="text-slate-300">Specialized marketing strategies for Web3 and cryptocurrency projects</p>
            </Link>

            <Link to="/influencer-marketing-2025" className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:scale-105">
              <div className="text-pink-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">Influencer Marketing 2025</h3>
              <p className="text-slate-300">Next-generation creator strategies and authentic brand partnerships</p>
            </Link>

            <Link to="/ai-and-digital-marketing" className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
              <div className="text-green-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">AI & Digital Marketing</h3>
              <p className="text-slate-300">Artificial Intelligence powered marketing automation and insights</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection faqs={homepageFaqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8">Join the digital frontier and stay ahead of the competition</p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
