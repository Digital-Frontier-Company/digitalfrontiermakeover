import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import AISitemapGenerator from "@/components/AISitemapGenerator";
import { Helmet } from "react-helmet-async";

const SiteMap = () => {
  const location = useLocation();
  
  // Organize site structure
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "FAQ", path: "/faq" },
  ];
  
  const servicePages = [
    { name: "AI-Powered Ad Funnel Blueprint", path: "/ad-funnel-blueprint" },
    { name: "Generative Engine Optimization", path: "/generative-engine-optimization" },
    { name: "Answer Engine Optimization", path: "/answer-engine-optimization" },
    { name: "AI and Digital Marketing", path: "/ai-and-digital-marketing" },
    { name: "Search Engine Optimization", path: "/search-engine-optimization" },
    { name: "Crypto Marketing", path: "/crypto-marketing" },
  ];
  
  const resourcePages = [
    { name: "Content Creation Agent", path: "/resources/content-creation-agent" },
    { name: "AI Bias in Advertising", path: "/ai-bias-in-advertising" },
  ];
  
  const knowledgePages = [
    { name: "Technical Aspects", path: "/technical" },
    { name: "Evolution", path: "/evolution" },
    { name: "Regulations", path: "/regulations" },
    { name: "Industry Sectors", path: "/sectors" },
    { name: "Future Trends", path: "/future" },
    { name: "KPIs and Analytics", path: "/kpis" },
  ];
  
  const blogPosts = [
    { name: "Mastering Digital Marketing", path: "/blog/mastering-digital-marketing" },
  ];

  return (
    <PageLayout 
      title="Site Map" 
      subtitle="Navigate through all pages and generate AI-optimized sitemaps" 
      currentPath={location.pathname}
      ogDescription="Complete site navigation for Digital Frontier with AI sitemap generation tools for better search engine optimization."
    >
      <Helmet>
        <title>Site Map | Digital Frontier</title>
        <meta name="description" content="Navigate through all pages on the Digital Frontier website and generate AI-optimized sitemaps for better search engine visibility." />
        <link rel="canonical" href="https://www.thedigitalfrontier.ai/site-map" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="space-y-12">
        {/* AI Sitemap Generator Section */}
        <section className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/30">
          <AISitemapGenerator />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Navigate to ${page.name}`}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicePages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Learn about ${page.name}`}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourcePages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Access ${page.name}`}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowledgePages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Read about ${page.name}`}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Read ${page.name}`}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SiteMap;
