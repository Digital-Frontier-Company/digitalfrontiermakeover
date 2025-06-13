
import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import MorphingHero from "@/components/MorphingHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/utils";

const Index = () => {
  const canonicalUrl = "https://www.thedigitalfrontier.ai/";
  
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.thedigitalfrontier.ai",
    "name": "Digital Frontier Company",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.thedigitalfrontier.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Digital Frontier AI Marketing Platform",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": "AI-powered digital marketing and optimization platform",
    "url": "https://www.thedigitalfrontier.ai",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "category": "Digital Marketing Services"
    }
  };

  return (
    <>
      <Helmet>
        <title>Digital Frontier | AI-Powered Marketing & Digital Transformation</title>
        <meta name="description" content="Leading AI-powered marketing solutions including Answer Engine Optimization, Generative Engine Optimization, and crypto marketing. Transform your digital strategy with Digital Frontier Company." />
        <meta name="keywords" content="AI marketing, digital transformation, Answer Engine Optimization, AEO, Generative Engine Optimization, GEO, crypto marketing, SEO, digital marketing agency, AI advertising" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Digital Frontier Company" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Digital Frontier | AI-Powered Marketing & Digital Transformation" />
        <meta property="og:description" content="Leading AI-powered marketing solutions including Answer Engine Optimization and Generative Engine Optimization. Transform your digital strategy." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DigitalFro14616" />
        <meta name="twitter:title" content="Digital Frontier | AI-Powered Marketing" />
        <meta name="twitter:description" content="Leading AI-powered marketing solutions and digital transformation strategies." />
        <meta name="twitter:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(softwareApplicationSchema)}
        </script>
      </Helmet>
      
      <MainLayout>
        <div className="min-h-screen">
          <MorphingHero />
          <TestimonialsSection />
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
