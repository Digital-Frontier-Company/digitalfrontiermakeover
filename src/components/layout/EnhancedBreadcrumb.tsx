import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

// Define the page hierarchy and metadata
const pageHierarchy: Record<string, { 
  name: string; 
  parent?: string; 
  category?: string;
  keywords?: string[];
}> = {
  "/": { name: "Home" },
  
  // Digital Marketing Services
  "/search-engine-optimization": { name: "SEO Services", parent: "/", category: "Digital Marketing" },
  "/generative-engine-optimization": { name: "GEO", parent: "/", category: "Digital Marketing" },
  "/answer-engine-optimization": { name: "AEO", parent: "/", category: "Digital Marketing" },
  "/crypto-marketing": { name: "Crypto Marketing", parent: "/", category: "Digital Marketing" },
  "/influencer-marketing-2025": { name: "Influencer Marketing 2025", parent: "/", category: "Digital Marketing" },
  "/ad-funnel-blueprint": { name: "Ad Funnel Blueprint", parent: "/", category: "Digital Marketing" },
  "/seo-vs-aeo-vs-geo": { name: "SEO vs AEO vs GEO", parent: "/", category: "Digital Marketing" },
  "/ai-and-digital-marketing": { name: "AI & Digital Marketing", parent: "/", category: "Digital Marketing" },
  
  // Resources
  "/insights": { name: "Insights Hub", parent: "/", category: "Resources" },
  "/blog": { name: "Blog", parent: "/", category: "Resources" },
  "/resources/content-creation-agent": { name: "Content Creation Agent", parent: "/insights", category: "Resources" },
  "/ai-prompt-templates": { name: "AI Prompt Templates", parent: "/insights", category: "Resources" },
  "/information-architecture-prompts": { name: "Information Architecture Prompts", parent: "/insights", category: "Resources" },
  "/user-experience-prompts": { name: "User Experience Prompts", parent: "/insights", category: "Resources" },
  "/psychological-digital-marketing-insights": { name: "Psychology Insights", parent: "/insights", category: "Resources" },
  "/ai-bias-in-advertising": { name: "AI Bias in Advertising", parent: "/insights", category: "Resources" },
  "/faq": { name: "FAQ", parent: "/", category: "Resources" },
  "/regulations": { name: "Regulations", parent: "/", category: "Resources" },
  
  // Company
  "/about-us": { name: "About Us", parent: "/", category: "Company" },
  "/pricing": { name: "Pricing", parent: "/", category: "Company" },
  "/contact": { name: "Contact", parent: "/", category: "Company" },
  "/modern-contact-form": { name: "Contact Form", parent: "/contact", category: "Company" },
  
  // Blog Posts (these would be dynamically generated in a real app)
  "/blog/aeo-crypto-marketing": { name: "AEO for Crypto Marketing", parent: "/blog", category: "Blog" },
  
  // Specialized pages
  "/evolution": { name: "Evolution", parent: "/", category: "Insights" },
  "/future": { name: "Future", parent: "/", category: "Insights" },
  "/technical": { name: "Technical", parent: "/", category: "Insights" },
  "/sectors": { name: "Sectors", parent: "/", category: "Insights" },
  "/kpis": { name: "KPIs", parent: "/", category: "Insights" },
  "/newsletter": { name: "Newsletter", parent: "/", category: "Resources" },
  "/browse-playbooks": { name: "Browse Playbooks", parent: "/insights", category: "Resources" },
  "/emotional-marketing-playbook": { name: "Emotional Marketing Playbook", parent: "/insights", category: "Resources" },
  "/tax-reduction-guide": { name: "Tax Reduction Guide", parent: "/insights", category: "Resources" },
  "/recommender-system": { name: "Recommender System", parent: "/insights", category: "Technical" },
  "/recommender-system-generalization": { name: "Recommender System Generalization", parent: "/recommender-system", category: "Technical" },
  "/sitemap": { name: "Site Map", parent: "/", category: "Resources" }
};

const EnhancedBreadcrumb: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Build breadcrumb trail
  const buildBreadcrumbTrail = (path: string): Array<{name: string, path: string}> => {
    const trail: Array<{name: string, path: string}> = [];
    let currentPath = path;
    
    // Add current page
    const pageInfo = pageHierarchy[currentPath];
    if (pageInfo) {
      trail.unshift({ name: pageInfo.name, path: currentPath });
      
      // Add parent pages
      while (pageInfo?.parent && pageInfo.parent !== currentPath) {
        const parentInfo = pageHierarchy[pageInfo.parent];
        if (parentInfo) {
          trail.unshift({ name: parentInfo.name, path: pageInfo.parent });
          currentPath = pageInfo.parent;
        } else {
          break;
        }
      }
    }
    
    // Always ensure Home is first (unless we're on home)
    if (path !== "/" && trail[0]?.path !== "/") {
      trail.unshift({ name: "Home", path: "/" });
    }
    
    return trail;
  };
  
  const breadcrumbTrail = buildBreadcrumbTrail(currentPath);
  
  // Don't show breadcrumbs on homepage
  if (currentPath === "/" || breadcrumbTrail.length <= 1) {
    return null;
  }
  
  // Get current page info for category
  const currentPageInfo = pageHierarchy[currentPath];
  const category = currentPageInfo?.category;
  
  return (
    <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-y border-slate-700/50 backdrop-blur-sm">
      <div className="container mx-auto py-3 px-4">
        <Breadcrumb>
          <BreadcrumbList className="text-slate-300">
            {breadcrumbTrail.map((item, index) => (
              <React.Fragment key={item.path}>
                <BreadcrumbItem>
                  {index === breadcrumbTrail.length - 1 ? (
                    <BreadcrumbPage className="text-blue-400 font-medium flex items-center">
                      {item.path === "/" && <Home className="w-4 h-4 mr-1" />}
                      {item.name}
                      {category && (
                        <span className="ml-2 px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                          {category}
                        </span>
                      )}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link 
                        to={item.path} 
                        className="hover:text-blue-400 transition-colors flex items-center"
                      >
                        {item.path === "/" && <Home className="w-4 h-4 mr-1" />}
                        {item.name}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbTrail.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Structured data for breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbTrail.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": `https://thedigitalfrontier.ai${item.path}`
              }))
            })
          }}
        />
      </div>
    </div>
  );
};

export default EnhancedBreadcrumb;