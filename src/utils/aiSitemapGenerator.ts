
export interface AISitemapEntry {
  url: string;
  summary: string;
  primaryEntity: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export const generateAISitemap = (): AISitemapEntry[] => {
  const baseUrl = "https://www.thedigitalfrontier.ai";
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    {
      url: `${baseUrl}/`,
      summary: "Digital Frontier's AI-powered marketing solutions and digital transformation strategies for businesses.",
      primaryEntity: "Organization",
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/about-us`,
      summary: "Learn about Digital Frontier's mission to lead AI-powered marketing innovation with proven results.",
      primaryEntity: "AboutPage",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      summary: "Contact Digital Frontier for AI marketing consultation and digital transformation services.",
      primaryEntity: "ContactPage",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      summary: "Technical AI marketing insights with real performance metrics from 500+ client implementations.",
      primaryEntity: "Blog",
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/blog/mastering-digital-marketing`,
      summary: "Meta Advantage+ and Google Performance Max deliver 15-30% better ROAS. Implementation strategies with XGBoost models.",
      primaryEntity: "BlogPosting",
      lastmod: "2025-05-13",
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/technical`,
      summary: "Understanding AI architecture in marketing: XGBoost models, real-time bidding, and ethical frameworks.",
      primaryEntity: "TechArticle",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/ad-funnel-blueprint`,
      summary: "AI-powered advertising funnel optimization using programmatic bidding and machine learning models.",
      primaryEntity: "Service",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/answer-engine-optimization`,
      summary: "Answer Engine Optimization (AEO) strategies that drive 30% more organic traffic through structured data.",
      primaryEntity: "Service",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/generative-engine-optimization`,
      summary: "Generative Engine Optimization (GEO) for AI search engines like ChatGPT, Claude, and Perplexity.",
      primaryEntity: "Service",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/search-engine-optimization`,
      summary: "Advanced SEO strategies combining traditional optimization with AI-powered content and technical improvements.",
      primaryEntity: "Service",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/crypto-marketing`,
      summary: "Crypto marketing compliance frameworks for 2025 with 60% lead quality improvement through AI targeting.",
      primaryEntity: "Service",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/ai-and-digital-marketing`,
      summary: "Comprehensive AI and digital marketing solutions with predictive analytics and automation.",
      primaryEntity: "Service",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/pricing`,
      summary: "Transparent pricing for AI marketing services with performance guarantees and ROI tracking.",
      primaryEntity: "PriceSpecification",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/faq`,
      summary: "Frequently asked questions about AI marketing implementation, ROI measurement, and best practices.",
      primaryEntity: "FAQPage",
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    }
  ];
};

export const saveAISitemap = async (): Promise<void> => {
  const sitemap = generateAISitemap();
  const blob = new Blob([JSON.stringify(sitemap, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-sitemap.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
