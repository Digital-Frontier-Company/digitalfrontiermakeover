
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { handleClientRedirect } from "@/utils/redirect";
import EnhancedBreadcrumb from "@/components/layout/EnhancedBreadcrumb";
import InternalLinkingSection from "@/components/layout/InternalLinkingSection";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  currentPath: string;
  pageType?: 'article' | 'page';
  publishedDate?: string;
  modifiedDate?: string;
  showInternalLinks?: boolean;
  contentType?: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  currentPath,
  pageType = 'page',
  publishedDate,
  modifiedDate,
  showInternalLinks = true,
  contentType = 'marketing-strategy'
}) => {
  // Get the current page name from the path
  const pageName = currentPath.split("/").pop() || "";
  const formattedPageName = pageName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Only handle redirects in production or for specific cases
  useEffect(() => {
    // Skip redirects in development/preview environments
    if (window.location.hostname.includes('lovable') || 
        window.location.hostname === 'localhost' ||
        window.location.hostname.includes('127.0.0.1')) {
      return;
    }
    
    const redirectUrl = handleClientRedirect(window.location);
    if (redirectUrl && redirectUrl !== window.location.href) {
      window.location.replace(redirectUrl);
      return;
    }
  }, []);
    
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
      <SEOHead 
        path={currentPath}
        title={title}
        description={subtitle}
        pageType={pageType === 'article' ? 'article' : 'website'}
        publishedDate={publishedDate}
        modifiedDate={modifiedDate}
      />
      
      {/* Hero Section */}
      <section className="df-hero-section py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company - Memphis Digital Marketing Experts" className="df-logo mx-auto mb-6" width="180" height="180" loading="lazy" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <h2 className="text-xl text-slate-300">{subtitle}</h2>}
          </div>
        </div>
      </section>

      <EnhancedBreadcrumb />
      
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
          <article>
            <div className="space-y-8">
              {children}
              
              {/* Internal Linking Section */}
              {showInternalLinks && (
                <InternalLinkingSection 
                  currentPath={currentPath}
                  contentType={contentType}
                  className="mt-12"
                />
              )}
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default PageLayout;
