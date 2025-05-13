
import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation } from "react-router-dom";

const ContentCreationAgent = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="Content Creation Agent"
      subtitle="Generate SEO-optimized content for your digital marketing needs"
      currentPath={location.pathname}
    >
      <Helmet>
        <title>Content Creation Agent | Digital Frontier</title>
        <meta 
          name="description" 
          content="Use our AI-powered content creation agent to generate high-quality, SEO-optimized blog posts for your digital marketing strategy." 
        />
        <link rel="canonical" href={`https://thedigitalfrontier.ai${location.pathname}`} />
      </Helmet>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">Create SEO-Optimized Content</h2>
        <p className="mb-6 text-slate-300">
          Use our AI-powered content creation tool to generate high-quality blog posts, 
          articles, and marketing copy that are optimized for search engines and aligned 
          with your digital marketing strategy.
        </p>

        <div className="mt-8 border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
          <iframe 
            src="https://www.create.xyz/app/dda0d2b8-5786-42dc-a538-0968081c598d"
            title="SEO Blog Post Generator"
            style={{width: "100%", height: "800px", border: "none"}}
          ></iframe>
        </div>

        <div className="mt-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold mb-4 text-cyan-300">How to Use This Tool</h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300">
            <li>Enter your target keywords or topic</li>
            <li>Specify your desired tone and content length</li>
            <li>Click generate to create your content</li>
            <li>Edit and refine the output to match your brand voice</li>
            <li>Download or copy your finalized content</li>
          </ol>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContentCreationAgent;
