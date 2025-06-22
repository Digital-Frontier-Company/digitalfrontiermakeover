
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import AIPromptHeroSection from "@/components/ai-prompts/AIPromptHeroSection";
import AIPromptCategories from "@/components/ai-prompts/AIPromptCategories";
import AIPromptLibrary from "@/components/ai-prompts/AIPromptLibrary";
import AIPromptUsageGuide from "@/components/ai-prompts/AIPromptUsageGuide";
import AIPromptCallToAction from "@/components/ai-prompts/AIPromptCallToAction";

const AIPromptTemplates = () => {
  const location = useLocation();

  return (
    <PageLayout
      title="AI Prompt Templates for Memphis Marketing | ChatGPT Business Prompts"
      subtitle="50+ Proven ChatGPT Prompts for Memphis Businesses to Boost Marketing Results"
      currentPath={location.pathname}
      pageType="article"
      publishedDate="2024-12-18"
      modifiedDate="2024-12-18"
    >
      <AIPromptHeroSection />
      <AIPromptCategories />
      <AIPromptLibrary />
      <AIPromptUsageGuide />
      <AIPromptCallToAction />
    </PageLayout>
  );
};

export default AIPromptTemplates;
