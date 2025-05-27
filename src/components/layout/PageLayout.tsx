
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import { Helmet } from "react-helmet-async";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  currentPath: string;
  ogImage?: string;
  ogDescription?: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  currentPath,
  ogImage = "https://www.thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png",
  ogDescription
}) => {
  // Get the current page name from the path
  const pageName = currentPath.split("/").pop() || "";
  const formattedPageName = pageName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  // Canonical URL with www prefix to prevent duplicate content
  const canonicalUrl = `https://www.thedigitalfrontier.ai${currentPath}`;
  
  // Default OG description from subtitle or title
  const defaultOgDescription = ogDescription || subtitle || `Learn about ${title} - Digital marketing, AI, and digital transformation strategies by Digital Frontier.`;
    
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
    <MainLayout>
      <Helmet>
        <title>{title} | The Digital Frontier</title>
        <meta name="description" content={defaultOgDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="digital marketing, AI marketing, digital transformation, Digital Frontier, SEO, AEO, content marketing" />
        
        {/* Enhanced OpenGraph Tags */}
        <meta property="og:title" content={`${title} | The Digital Frontier`} />
        <meta property="og:description" content={defaultOgDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${title} - Digital Frontier`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Digital Frontier" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | The Digital Frontier`} />
        <meta name="twitter:description" content={defaultOgDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`${title} - Digital Frontier`} />
        <meta name="twitter:site" content="@DigitalFro14616" />
        <meta name="twitter:creator" content="@DigitalFro14616" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.thedigitalfrontier.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
        
        {/* Article Schema for content pages */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": defaultOgDescription,
            "url": canonicalUrl,
            "image": ogImage,
            "author": {
              "@type": "Organization",
              "name": "Digital Frontier Company"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Digital Frontier Company",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png"
              }
            },
            "dateModified": new Date().toISOString(),
            "datePublished": new Date().toISOString()
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="df-hero-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" 
              alt="Digital Frontier Company - AI Marketing Solutions" 
              className="df-logo mx-auto mb-6" 
              width="180" 
              height="auto"
              loading="eager"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <h2 className="text-xl text-slate-300">{subtitle}</h2>}
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-900/60 border-y border-slate-800/80">
        <div className="container mx-auto py-3 px-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-400">
            <Link to="/" className="hover:text-blue-400 focus:text-blue-400 focus:outline-none">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-slate-300">{formattedPageName || title}</span>
          </nav>
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
    </MainLayout>
  );
};

export default PageLayout;
