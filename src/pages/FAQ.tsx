
import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { generateBreadcrumbSchema } from "@/lib/utils";

const FAQ = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.thedigitalfrontier.ai${location.pathname}`;
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.thedigitalfrontier.ai" },
    { name: "FAQ", url: canonicalUrl }
  ]);

  const generalFaqs: FAQItem[] = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "Answer Engine Optimization (AEO) is the practice of optimizing content to appear as direct answers in AI-powered search engines and voice assistants. Unlike traditional SEO which focuses on ranking in search results, AEO aims to have your content selected as the definitive answer to user queries by AI systems like ChatGPT, Google's AI Overview, and voice assistants."
    },
    {
      question: "How does Generative Engine Optimization (GEO) differ from SEO?",
      answer: "Generative Engine Optimization (GEO) focuses on optimizing content for AI-powered generative search engines that create custom responses rather than traditional link-based results. While SEO optimizes for keyword rankings and click-through rates, GEO optimizes for AI systems that synthesize information from multiple sources to generate comprehensive answers."
    },
    {
      question: "What services does Digital Frontier Company offer?",
      answer: "Digital Frontier Company offers comprehensive AI-powered marketing services including Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), traditional SEO, crypto marketing strategies, AI-powered ad funnel blueprints, content creation automation, and digital transformation consulting."
    },
    {
      question: "How can AI improve my digital marketing ROI?",
      answer: "AI can improve marketing ROI through precision targeting (up to 40% conversion improvement), automated content creation (70% time reduction), predictive analytics for customer behavior, real-time campaign optimization, and personalized customer journey mapping that increases lead quality by up to 50%."
    },
    {
      question: "What is crypto marketing and why is it important?",
      answer: "Crypto marketing involves specialized strategies for promoting blockchain projects, DeFi protocols, NFTs, and cryptocurrency services. It requires understanding of regulatory compliance, community building, technical communication, and navigating the unique challenges of marketing in the decentralized finance ecosystem."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generalFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ | Digital Frontier Company - AI Marketing Questions Answered</title>
        <meta name="description" content="Get answers to frequently asked questions about AI marketing, Answer Engine Optimization, Generative Engine Optimization, and Digital Frontier Company's services." />
        <meta name="keywords" content="AI marketing FAQ, Answer Engine Optimization questions, Digital Frontier Company FAQ, crypto marketing questions, SEO FAQ, digital marketing help" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="FAQ | Digital Frontier Company - AI Marketing Questions" />
        <meta property="og:description" content="Get answers to frequently asked questions about AI marketing and our services." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Digital Frontier Company" />
        <meta name="twitter:description" content="Get answers to frequently asked questions about AI marketing." />
        <meta name="twitter:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <PageLayout 
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about AI marketing and our services"
        currentPath={location.pathname}
      >
        <FAQSection 
          title="General Questions" 
          faqs={generalFaqs} 
        />
      </PageLayout>
    </>
  );
};

export default FAQ;
