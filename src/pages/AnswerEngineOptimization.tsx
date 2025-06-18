
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AEOHeroSection from "@/components/aeo/AEOHeroSection";
import AEOFrameworkSection from "@/components/aeo/AEOFrameworkSection";
import AEOPerformanceChart from "@/components/aeo/AEOPerformanceChart";
import AEOComparisonChart from "@/components/aeo/AEOComparisonChart";
import AEOChartTabs from "@/components/aeo/AEOChartTabs";
import AEOApproachCards from "@/components/aeo/AEOApproachCards";
import AEOBenefitsSection from "@/components/aeo/AEOBenefitsSection";
import AEOComparisonTable from "@/components/aeo/AEOComparisonTable";
import AEOCaseStudies from "@/components/aeo/AEOCaseStudies";
import AEOCallToAction from "@/components/aeo/AEOCallToAction";

const AnswerEngineOptimization = () => {
  const location = useLocation();

  const aeoFaqs: FAQItem[] = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "AEO optimizes content to provide direct answers to user queries, using structured data to shine in featured snippets, knowledge panels, or voice responses. Unlike traditional SEO, it focuses on being the immediate solution rather than just a link."
    },
    {
      question: "How does AEO differ from SEO?",
      answer: "SEO ranks pages for broad keywords to drive traffic, while AEO targets specific questions for zero-click answers, leveraging AI and conversational tones. AEO is designed for the modern search landscape where users expect immediate answers."
    },
    {
      question: "Why is structured data key for AEO?",
      answer: "Structured data (like schema markup) gives AI context about your content, making it a top pick for quick-response formats like featured snippets and voice search results. It's like handing search engines a cheat sheet of your content's organization."
    },
    {
      question: "How long should AEO answers be?",
      answer: "Ideal AEO answers should be concise and complete, typically 40-60 words. This length is perfect for featured snippets and voice responses, while still providing enough information to satisfy the user's query."
    },
    {
      question: "Can AEO work for any industry?",
      answer: "Yes, AEO can be effective across all industries. Any business with information that people search for can benefit from optimizing for direct answers, whether it's e-commerce, B2B services, healthcare, finance, or local businesses."
    }
  ];

  return (
    <PageLayout
      title="Answer Engine Optimization"
      subtitle="Position Your Content as the Go-To Answer Source"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-11-15"
      modifiedDate="2024-12-18"
    >
      <AEOHeroSection />
      <AEOFrameworkSection />
      <AEOPerformanceChart />
      <AEOComparisonChart />
      <AEOChartTabs />
      <AEOApproachCards />
      <FAQSection 
        title="Frequently Asked Questions About AEO" 
        faqs={aeoFaqs} 
        className="mb-16"
      />
      <AEOBenefitsSection />
      <AEOComparisonTable />
      <AEOCaseStudies />
      <AEOCallToAction />
    </PageLayout>
  );
};

export default AnswerEngineOptimization;
