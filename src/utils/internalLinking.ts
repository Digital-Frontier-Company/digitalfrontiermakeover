// Internal linking utilities for SEO optimization

export interface InternalLink {
  url: string;
  text: string;
  description?: string;
  category?: string;
}

// Define strategic internal links for each page type
export const internalLinkMap: Record<string, InternalLink[]> = {
  // SEO-related pages should link to each other
  seo: [
    { url: "/search-engine-optimization", text: "SEO Services", description: "Traditional search engine optimization" },
    { url: "/answer-engine-optimization", text: "AEO", description: "Answer Engine Optimization for AI" },
    { url: "/generative-engine-optimization", text: "GEO", description: "Generative Engine Optimization" },
    { url: "/seo-vs-aeo-vs-geo", text: "SEO vs AEO vs GEO Comparison", description: "Complete strategy comparison" }
  ],
  
  // Marketing strategy pages
  marketing: [
    { url: "/crypto-marketing", text: "Crypto Marketing", description: "Web3 and cryptocurrency marketing" },
    { url: "/influencer-marketing-2025", text: "Influencer Marketing 2025", description: "Next-gen creator strategies" },
    { url: "/ad-funnel-blueprint", text: "Ad Funnel Blueprint", description: "High-converting ad strategies" },
    { url: "/ai-and-digital-marketing", text: "AI & Digital Marketing", description: "AI-powered marketing strategies" }
  ],
  
  // Resource and tool pages
  resources: [
    { url: "/insights", text: "Insights Hub", description: "Marketing playbooks and strategies" },
    { url: "/ai-prompt-templates", text: "AI Prompt Templates", description: "Memphis ChatGPT prompts" },
    { url: "/information-architecture-prompts", text: "IA Prompts", description: "Website structure optimization" },
    { url: "/user-experience-prompts", text: "UX Prompts", description: "300 UX optimization prompts" },
    { url: "/psychological-digital-marketing-insights", text: "Psychology Insights", description: "Consumer behavior analysis" }
  ],
  
  // Technical and advanced topics
  technical: [
    { url: "/ai-bias-in-advertising", text: "AI Bias in Advertising", description: "Understanding algorithmic bias" },
    { url: "/regulations", text: "Regulations", description: "AI and digital marketing compliance" },
    { url: "/recommender-system", text: "Recommender Systems", description: "AI recommendation engines" }
  ],
  
  // Business and company pages
  business: [
    { url: "/about-us", text: "About Us", description: "Learn about Digital Frontier" },
    { url: "/pricing", text: "Pricing", description: "Service packages and rates" },
    { url: "/contact", text: "Contact", description: "Get in touch with our team" },
    { url: "/modern-contact-form", text: "Contact Form", description: "Modern lead capture form" }
  ]
};

// Get relevant internal links for a page based on its content/category
export function getRelevantInternalLinks(
  currentPath: string, 
  categories: string[] = [],
  maxLinks: number = 5
): InternalLink[] {
  const allLinks: InternalLink[] = [];
  
  // Add links from specified categories
  categories.forEach(category => {
    if (internalLinkMap[category]) {
      allLinks.push(...internalLinkMap[category]);
    }
  });
  
  // Remove current page from suggestions
  const filteredLinks = allLinks.filter(link => link.url !== currentPath);
  
  // Remove duplicates based on URL
  const uniqueLinks = filteredLinks.filter((link, index, self) => 
    index === self.findIndex(l => l.url === link.url)
  );
  
  // Return limited number of links
  return uniqueLinks.slice(0, maxLinks);
}

// Generate contextual internal links for specific content types
export function getContextualLinks(contentType: string, currentPath: string): InternalLink[] {
  switch (contentType) {
    case 'seo-content':
      return getRelevantInternalLinks(currentPath, ['seo', 'marketing'], 4);
      
    case 'marketing-strategy':
      return getRelevantInternalLinks(currentPath, ['marketing', 'resources'], 4);
      
    case 'ai-content':
      return getRelevantInternalLinks(currentPath, ['technical', 'resources'], 4);
      
    case 'business-content':
      return getRelevantInternalLinks(currentPath, ['business', 'resources'], 3);
      
    default:
      return getRelevantInternalLinks(currentPath, ['marketing', 'resources'], 3);
  }
}

// Generate anchor text variations for internal links
export function generateAnchorTextVariations(baseText: string): string[] {
  const variations = [
    baseText,
    `Learn about ${baseText.toLowerCase()}`,
    `Discover ${baseText.toLowerCase()}`,
    `Explore ${baseText.toLowerCase()}`,
    `Read more about ${baseText.toLowerCase()}`
  ];
  
  return variations;
}

// Create contextual call-to-action links
export function generateCTALinks(currentPath: string): { primary: InternalLink; secondary: InternalLink } {
  // Default CTAs
  const defaultPrimary = { url: "/modern-contact-form", text: "Get Started Today", description: "Contact our team" };
  const defaultSecondary = { url: "/pricing", text: "View Pricing", description: "See our service packages" };
  
  // Contextual CTAs based on current page
  if (currentPath.includes('seo') || currentPath.includes('aeo') || currentPath.includes('geo')) {
    return {
      primary: { url: "/modern-contact-form", text: "Optimize Your SEO Strategy", description: "Get expert SEO consultation" },
      secondary: { url: "/seo-vs-aeo-vs-geo", text: "Compare SEO Strategies", description: "Learn the differences" }
    };
  }
  
  if (currentPath.includes('marketing') || currentPath.includes('crypto') || currentPath.includes('influencer')) {
    return {
      primary: { url: "/modern-contact-form", text: "Boost Your Marketing", description: "Start your marketing transformation" },
      secondary: { url: "/insights", text: "Explore Marketing Playbooks", description: "Access our strategy guides" }
    };
  }
  
  if (currentPath.includes('ai') || currentPath.includes('prompt') || currentPath.includes('technical')) {
    return {
      primary: { url: "/modern-contact-form", text: "Implement AI Marketing", description: "Get AI-powered marketing help" },
      secondary: { url: "/ai-prompt-templates", text: "Try AI Prompts", description: "Use our prompt library" }
    };
  }
  
  if (currentPath.includes('pricing') || currentPath.includes('about')) {
    return {
      primary: { url: "/modern-contact-form", text: "Start Your Project", description: "Contact us for a consultation" },
      secondary: { url: "/insights", text: "Learn Our Methods", description: "Explore our approach" }
    };
  }
  
  return { primary: defaultPrimary, secondary: defaultSecondary };
}