
import React from "react";

const AEOHeroSection = () => {
  return (
    <section 
      className="mb-24 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('/lovable-uploads/c7dccd8e-96e5-4472-81fd-46eead5b47e0.png')`
      }}
    >
      <div className="relative z-10 py-16 px-6">
        <img 
          alt="Answer Engine Optimization Services - AEO for ChatGPT and AI Search Results" 
          className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12 opacity-90" 
          src="/lovable-uploads/ee38718a-95d4-48fd-9ffb-203acff704f0.jpg" 
          loading="lazy"
        />
      
      {/* Inverted Pyramid - Answer First */}
      <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-6 mb-8">
        <p className="text-xl text-blue-200 font-medium leading-relaxed">
          Answer Engine Optimization (AEO) gets your business featured in ChatGPT responses, voice search results, 
          and AI overviews by optimizing content for direct answers rather than traditional search rankings.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-8 text-slate-100">What is Answer Engine Optimization?</h2>
      <p className="text-slate-300 text-lg mb-6">
        Answer Engine Optimization is a cutting-edge digital marketing strategy that positions your content 
        as the authoritative source for AI-powered search engines. While traditional SEO targets Google's web results, 
        AEO focuses on ChatGPT optimization, voice search visibility, and AI overviews—where users increasingly 
        find their answers without clicking through to websites.
      </p>
      
      <p className="text-slate-300 text-lg mb-6">
        Our Answer Engine Optimization services help Memphis businesses capture visibility in Perplexity AI, 
        Google's Search Generative Experience (SGE), and voice assistants. Through strategic schema markup, 
        FAQ optimization, and AI-friendly content structure, we ensure your expertise gets cited when 
        potential customers ask AI systems about your industry.
      </p>
      
      <p className="text-slate-300 text-lg">
        The future of search is conversational, and Answer Engine Optimization positions your business 
        to thrive in this AI-driven landscape. From ChatGPT SEO to voice search optimization, our AEO methodology 
        delivers measurable results in featured snippets, AI citations, and direct answer visibility.
      </p>
      </div>
    </section>
  );
};

export default AEOHeroSection;
