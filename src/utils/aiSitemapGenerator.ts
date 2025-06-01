
export interface AISitemapEntry {
  url: string;
  summary: string;
  primaryEntity: string;
  lastmod: string;
  priority: number;
  keywords: string[];
}

export const generateAISitemap = (): AISitemapEntry[] => {
  const baseUrl = 'https://www.thedigitalfrontier.ai';
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    {
      url: `${baseUrl}/`,
      summary: "Digital Frontier Company homepage featuring AI-powered marketing solutions, digital transformation strategies, and comprehensive services for modern businesses seeking competitive advantage.",
      primaryEntity: "Digital Frontier Company",
      lastmod: currentDate,
      priority: 1.0,
      keywords: ["AI marketing", "digital transformation", "marketing automation", "Digital Frontier"]
    },
    {
      url: `${baseUrl}/about-us`,
      summary: "Learn about Digital Frontier's mission to revolutionize digital marketing through AI-powered solutions, our expert team, and proven track record in helping businesses achieve growth.",
      primaryEntity: "About Digital Frontier",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["company", "team", "mission", "AI marketing experts"]
    },
    {
      url: `${baseUrl}/contact`,
      summary: "Get in touch with Digital Frontier's marketing experts for personalized AI-powered marketing solutions, consultations, and strategic digital transformation guidance.",
      primaryEntity: "Contact Information",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["contact", "consultation", "support", "marketing experts"]
    },
    {
      url: `${baseUrl}/ad-funnel-blueprint`,
      summary: "Comprehensive AI-powered advertising funnel blueprint that optimizes customer acquisition, increases conversion rates, and maximizes ROI through intelligent automation and data-driven insights.",
      primaryEntity: "AI Ad Funnel Strategy",
      lastmod: currentDate,
      priority: 0.9,
      keywords: ["advertising funnel", "AI optimization", "conversion rates", "customer acquisition"]
    },
    {
      url: `${baseUrl}/answer-engine-optimization`,
      summary: "Master Answer Engine Optimization (AEO) strategies to dominate voice search, AI assistants, and featured snippets. Optimize content for direct answers and conversational queries.",
      primaryEntity: "Answer Engine Optimization",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["AEO", "voice search", "featured snippets", "AI assistants", "conversational search"]
    },
    {
      url: `${baseUrl}/generative-engine-optimization`,
      summary: "Advanced Generative Engine Optimization (GEO) techniques for AI-generated content discovery. Optimize for ChatGPT, Bard, and other generative AI platforms to capture new traffic sources.",
      primaryEntity: "Generative Engine Optimization",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["GEO", "generative AI", "ChatGPT optimization", "AI content discovery"]
    },
    {
      url: `${baseUrl}/search-engine-optimization`,
      summary: "Professional SEO services combining traditional optimization with AI-powered strategies. Improve rankings, organic traffic, and visibility across all search engines.",
      primaryEntity: "SEO Services",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["SEO", "search optimization", "organic traffic", "Google rankings"]
    },
    {
      url: `${baseUrl}/crypto-marketing`,
      summary: "Specialized cryptocurrency and blockchain marketing services. Navigate crypto advertising restrictions while building communities and driving adoption through compliant strategies.",
      primaryEntity: "Cryptocurrency Marketing",
      lastmod: currentDate,
      priority: 0.7,
      keywords: ["crypto marketing", "blockchain", "cryptocurrency advertising", "DeFi marketing"]
    },
    {
      url: `${baseUrl}/digital-marketing-playbook`,
      summary: "Complete 2025 digital marketing playbook for SMBs featuring AI automation, content velocity strategies, conversion optimization, and data privacy frameworks for competitive advantage.",
      primaryEntity: "Digital Marketing Playbook",
      lastmod: currentDate,
      priority: 0.9,
      keywords: ["digital marketing", "AI automation", "content strategy", "CRO", "marketing playbook"]
    },
    {
      url: `${baseUrl}/ai-and-digital-marketing`,
      summary: "Explore the intersection of artificial intelligence and digital marketing. Learn how AI transforms customer experiences, automates campaigns, and drives unprecedented growth.",
      primaryEntity: "AI in Digital Marketing",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["AI marketing", "artificial intelligence", "marketing automation", "machine learning"]
    },
    {
      url: `${baseUrl}/psychological-digital-marketing-insights`,
      summary: "Deep dive into psychological triggers in digital marketing. Understand consumer behavior, emotional marketing tactics, and psychological frameworks that drive conversions.",
      primaryEntity: "Marketing Psychology",
      lastmod: currentDate,
      priority: 0.7,
      keywords: ["marketing psychology", "consumer behavior", "emotional marketing", "conversion psychology"]
    },
    {
      url: `${baseUrl}/ai-bias-in-advertising`,
      summary: "Critical analysis of AI bias in advertising algorithms, ethical considerations for marketers, and strategies to ensure fair and inclusive AI-powered marketing campaigns.",
      primaryEntity: "AI Bias in Advertising",
      lastmod: currentDate,
      priority: 0.6,
      keywords: ["AI bias", "ethical marketing", "advertising ethics", "inclusive marketing"]
    },
    {
      url: `${baseUrl}/blog`,
      summary: "Digital Frontier's marketing blog featuring latest insights on AI marketing trends, case studies, strategy guides, and industry analysis for modern marketers.",
      primaryEntity: "Marketing Blog",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["marketing blog", "AI trends", "case studies", "marketing insights"]
    },
    {
      url: `${baseUrl}/resources/content-creation-agent`,
      summary: "AI-powered content creation tool that generates high-quality marketing content, social media posts, and campaign materials using advanced natural language processing.",
      primaryEntity: "Content Creation Agent",
      lastmod: currentDate,
      priority: 0.7,
      keywords: ["content creation", "AI writing", "marketing content", "automated content"]
    },
    {
      url: `${baseUrl}/pricing`,
      summary: "Transparent pricing for Digital Frontier's AI marketing services, packages, and consulting options. Choose the right plan for your business growth objectives.",
      primaryEntity: "Service Pricing",
      lastmod: currentDate,
      priority: 0.8,
      keywords: ["pricing", "marketing services", "packages", "consulting rates"]
    },
    {
      url: `${baseUrl}/newsletter`,
      summary: "Subscribe to Digital Frontier's newsletter for weekly AI marketing insights, industry updates, strategy tips, and exclusive content for marketing professionals.",
      primaryEntity: "Newsletter Subscription",
      lastmod: currentDate,
      priority: 0.6,
      keywords: ["newsletter", "marketing insights", "AI updates", "weekly tips"]
    },
    {
      url: `${baseUrl}/faq`,
      summary: "Frequently asked questions about Digital Frontier's AI marketing services, implementation processes, pricing, and support options for businesses.",
      primaryEntity: "FAQ",
      lastmod: currentDate,
      priority: 0.7,
      keywords: ["FAQ", "questions", "support", "service information"]
    }
  ];
};

export const saveAISitemap = () => {
  const sitemapData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Digital Frontier AI Sitemap",
    "description": "AI-optimized sitemap with content summaries and entity information",
    "url": "https://www.thedigitalfrontier.ai",
    "lastModified": new Date().toISOString(),
    "pages": generateAISitemap()
  };

  const blob = new Blob([JSON.stringify(sitemapData, null, 2)], { 
    type: 'application/json' 
  });
  
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ai-sitemap.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
