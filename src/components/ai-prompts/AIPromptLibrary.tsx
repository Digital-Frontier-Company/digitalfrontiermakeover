
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const AIPromptLibrary = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const prompts = [
    {
      category: "Local SEO",
      title: "Memphis Local SEO Content Strategy",
      prompt: "Create a comprehensive local SEO content strategy for a [BUSINESS TYPE] in Memphis, Tennessee. Include 10 blog post topics that target Memphis-specific keywords, local landmark references, and neighborhood-focused content. Consider Memphis culture, local events, and seasonal opportunities. Format as a content calendar with publishing schedule."
    },
    {
      category: "Local SEO", 
      title: "Google My Business Optimization",
      prompt: "Analyze and optimize a Google My Business listing for a [BUSINESS TYPE] located in [MEMPHIS NEIGHBORHOOD]. Provide specific recommendations for business description, services, posts, and Q&A that highlight Memphis local expertise. Include 5 GMB post ideas that reference Memphis landmarks and local events."
    },
    {
      category: "Social Media",
      title: "Memphis Community Engagement Strategy",
      prompt: "Develop a social media engagement strategy for a [BUSINESS TYPE] to connect with the Memphis community. Include 15 post ideas that reference Memphis culture, Beale Street, BBQ scene, blues music, and local sports teams. Create captions that feel authentically Memphis while promoting [BUSINESS SERVICES]."
    },
    {
      category: "Social Media",
      title: "Memphis Event Marketing Campaign",
      prompt: "Create a social media marketing campaign for [EVENT/PROMOTION] targeting Memphis residents. Include platform-specific content for Facebook, Instagram, and LinkedIn that references Memphis neighborhoods, local influencers, and community values. Provide hashtag strategy with Memphis-specific tags."
    },
    {
      category: "Competitor Analysis",
      title: "Memphis Market Competitor Research",
      prompt: "Conduct a comprehensive competitor analysis for [BUSINESS TYPE] in the Memphis market. Identify top 5 competitors, analyze their digital marketing strategies, pricing models, and local market positioning. Highlight opportunities for differentiation in the Memphis market specifically."
    },
    {
      category: "Content Creation",
      title: "Memphis Business Blog Post Generator",
      prompt: "Write a 1,500-word blog post titled '[TOPIC]' for a Memphis [BUSINESS TYPE]. Include references to Memphis culture, local landmarks, and community values. Optimize for SEO with Memphis-related keywords while providing valuable information about [BUSINESS SERVICES]. Include local statistics and Memphis-specific examples."
    },
    {
      category: "Customer Service",
      title: "Memphis Customer FAQ Generator", 
      prompt: "Generate 20 frequently asked questions and detailed answers for a [BUSINESS TYPE] serving Memphis customers. Include questions about Memphis-specific services, local delivery areas, neighborhood coverage, and references to Memphis culture. Format for website FAQ section with local SEO optimization."
    },
    {
      category: "Campaign Planning",
      title: "Memphis Seasonal Marketing Campaign",
      prompt: "Plan a [SEASON] marketing campaign for a [BUSINESS TYPE] in Memphis. Consider Memphis weather patterns, local events calendar, tourist seasons, and community traditions. Include promotional ideas, content themes, and local partnership opportunities. Create timeline with Memphis-specific holidays and events."
    },
    {
      category: "Local SEO",
      title: "Memphis Neighborhood Landing Pages",
      prompt: "Create content outline for neighborhood-specific landing pages targeting [NEIGHBORHOOD] Memphis customers for [BUSINESS TYPE]. Include local landmarks, community features, demographic insights, and services tailored to that area. Optimize for '[BUSINESS TYPE] in [NEIGHBORHOOD] Memphis' keywords."
    },
    {
      category: "Social Media",
      title: "Memphis Influencer Collaboration Strategy",
      prompt: "Identify potential Memphis-based influencers and content creators for [BUSINESS TYPE] collaboration. Include micro-influencers, local celebrities, and community leaders. Provide outreach templates and collaboration ideas that authentically connect with Memphis audiences while promoting [BUSINESS SERVICES]."
    }
  ];

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(index);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-slate-100">Memphis Marketing AI Prompt Library</h2>
      <p className="text-slate-300 text-lg mb-8">
        Copy and paste these proven ChatGPT prompts for Memphis marketing success. Replace bracketed placeholders with your specific business details.
      </p>
      
      <div className="space-y-6">
        {prompts.map((item, index) => (
          <Card key={index} className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(item.prompt, index)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  {copiedPrompt === index ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copiedPrompt === index ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <div className="bg-slate-800/40 p-4 rounded-lg">
                <p className="text-slate-300 leading-relaxed font-mono text-sm whitespace-pre-wrap">
                  {item.prompt}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AIPromptLibrary;
