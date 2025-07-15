import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags, SITE_CONFIG } from '@/utils/seo';

interface SEOHeadProps {
  path: string;
  title?: string;
  description?: string;
  keywords?: string;
  pageType?: 'website' | 'article' | 'service';
  publishedDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
}

/**
 * Comprehensive SEO Head component that handles all meta tags,
 * canonical URLs, Open Graph, Twitter Cards, and JSON-LD structured data
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  path,
  title,
  description,
  keywords,
  pageType = 'website',
  publishedDate,
  modifiedDate,
  imageUrl
}) => {
  const metaTags = generateMetaTags(path, title, description, keywords);
  const currentDate = new Date().toISOString();
  
  // Generate JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.baseUrl}/#org`,
    "name": SITE_CONFIG.siteName,
    "url": SITE_CONFIG.baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": SITE_CONFIG.logoUrl,
      "width": 400,
      "height": 400
    },
    "description": SITE_CONFIG.defaultDescription,
    "foundingDate": "2023-01-01",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${SITE_CONFIG.baseUrl}/contact`
    },
    "sameAs": SITE_CONFIG.socialUrls
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    "url": SITE_CONFIG.baseUrl,
    "name": SITE_CONFIG.siteName,
    "description": SITE_CONFIG.defaultDescription,
    "publisher": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = path !== '/' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": metaTags.title.replace(` | ${SITE_CONFIG.siteName}`, ''),
        "item": metaTags.canonicalUrl
      }
    ]
  } : null;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType === 'article' ? "Article" : "WebPage",
    "@id": `${metaTags.canonicalUrl}#webpage`,
    "url": metaTags.canonicalUrl,
    "name": metaTags.title,
    "description": metaTags.description,
    "isPartOf": { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    "about": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
    "datePublished": publishedDate || currentDate,
    "dateModified": modifiedDate || currentDate,
    ...(pageType === 'article' && {
      "headline": metaTags.title,
      "author": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
      "publisher": { "@id": `${SITE_CONFIG.baseUrl}/#org` },
      "mainEntityOfPage": { "@id": `${metaTags.canonicalUrl}#webpage` },
      "image": {
        "@type": "ImageObject",
        "url": imageUrl || SITE_CONFIG.logoUrl,
        "width": 1200,
        "height": 630
      }
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={SITE_CONFIG.siteName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL - Critical for preventing duplicate content */}
      <link rel="canonical" href={metaTags.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={metaTags.openGraph.type} />
      <meta property="og:title" content={metaTags.openGraph.title} />
      <meta property="og:description" content={metaTags.openGraph.description} />
      <meta property="og:url" content={metaTags.openGraph.url} />
      <meta property="og:site_name" content={metaTags.openGraph.siteName} />
      <meta property="og:image" content={metaTags.openGraph.images[0].url} />
      <meta property="og:image:width" content={metaTags.openGraph.images[0].width.toString()} />
      <meta property="og:image:height" content={metaTags.openGraph.images[0].height.toString()} />
      <meta property="og:image:alt" content={metaTags.openGraph.images[0].alt} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={metaTags.twitter.card} />
      <meta name="twitter:title" content={metaTags.twitter.title} />
      <meta name="twitter:description" content={metaTags.twitter.description} />
      <meta name="twitter:image" content={metaTags.twitter.images[0]} />
      <meta name="twitter:site" content="@DigitalFro14616" />
      <meta name="twitter:creator" content="@DigitalFro14616" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0F172A" />
      <meta name="msapplication-TileColor" content="#0F172A" />
      <meta name="application-name" content={SITE_CONFIG.siteName} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};