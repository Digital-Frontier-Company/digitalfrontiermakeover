
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  currentPath: string;
  pageType?: 'article' | 'page';
  publishedDate?: string;
  modifiedDate?: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  currentPath,
  pageType = 'page',
  publishedDate,
  modifiedDate
}) => {
  // Get the current page name from the path
  const pageName = currentPath.split("/").pop() || "";
  const formattedPageName = pageName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  // Canonical URL with www prefix
  const canonicalUrl = `https://www.thedigitalfrontier.ai${currentPath}`;
  
  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.thedigitalfrontier.ai" },
    { name: title, url: canonicalUrl }
  ]);
  
  // Generate Article schema if it's an article page
  const articleSchema = pageType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": subtitle || `Learn about ${title} - Digital marketing, AI, and digital transformation strategies by Digital Frontier.`,
    "author": {
      "@type": "Organization",
      "name": "Digital Frontier Company"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Frontier Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thedigitalfrontier.ai/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png"
      }
    },
    "datePublished": publishedDate || new Date().toISOString().split('T')[0],
    "dateModified": modifiedDate || new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  } : null;
    
  // Effect to handle anchor link smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Use smooth scroll behavior
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Run on mount in case of direct anchor link access
    handleHashChange();
    
    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{title} | The Digital Frontier</title>
        <meta name="description" content={subtitle || `Learn about ${title} - Digital marketing, AI, and digital transformation strategies by Digital Frontier.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="digital marketing, AI marketing, digital transformation, Digital Frontier, SEO, AEO, GEO, content marketing" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Article Schema (if applicable) */}
        {articleSchema && (
          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
        )}
      </Helmet>
      
      {/* Hero Section */}
      <section className="df-hero-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="df-logo mx-auto mb-6" width="180" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <h2 className="text-xl text-slate-300">{subtitle}</h2>}
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-900/60 border-y border-slate-800/80">
        <div className="container mx-auto py-3 px-4">
          <div className="flex text-sm text-slate-400">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{formattedPageName || title}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
          <article>
            <div className="space-y-8">
              {children}
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default PageLayout;
