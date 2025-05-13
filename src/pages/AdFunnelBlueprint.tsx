import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { useLocation, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AdFunnelBlueprint = () => {
  const location = useLocation();
  const [activePhase, setActivePhase] = useState("awareness");
  
  // Sample data for performance chart
  const performanceData = [
    { month: 'Jan', standard: 45, aiOptimized: 75 },
    { month: 'Feb', standard: 50, aiOptimized: 78 },
    { month: 'Mar', standard: 52, aiOptimized: 82 },
    { month: 'Apr', standard: 55, aiOptimized: 86 },
    { month: 'May', standard: 57, aiOptimized: 90 },
    { month: 'Jun', standard: 60, aiOptimized: 95 },
  ];

  // Sample data for funnel conversion rates
  const funnelData = [
    { stage: 'Awareness', traditional: 100, aiPowered: 100 },
    { stage: 'Consideration', traditional: 45, aiPowered: 68 },
    { stage: 'Conversion', traditional: 18, aiPowered: 35 },
    { stage: 'Loyalty', traditional: 8, aiPowered: 22 },
  ];

  // Sample data for distribution chart
  const audienceData = [
    { name: 'Highly Relevant', value: 65 },
    { name: 'Moderately Relevant', value: 20 },
    { name: 'Low Relevance', value: 10 },
    { name: 'Non-relevant', value: 5 },
  ];

  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

  // FAQ data
  const adFunnelFaqs: FAQItem[] = [
    {
      question: "What's the biggest advantage of an AI-powered ad funnel?",
      answer: "The biggest advantage is personalization at scale. AI can analyze thousands of data points to deliver highly relevant experiences to each user without manual intervention, resulting in higher conversion rates and more efficient ad spend."
    },
    {
      question: "How long does it take to implement an AI-powered ad funnel?",
      answer: "Implementation timelines vary based on complexity, but most businesses can expect a phased rollout over 2-3 months. Start with one phase of your funnel (often awareness or consideration) and expand as you collect data and refine your approach."
    },
    {
      question: "Is this approach only for large companies with big budgets?",
      answer: "Not at all. While enterprise-level AI solutions exist, there are numerous affordable tools that small businesses can utilize. Many ad platforms now include AI capabilities in their standard offerings, making this approach accessible regardless of budget size."
    },
    {
      question: "How does AI-powered retargeting differ from traditional retargeting?",
      answer: "Traditional retargeting simply shows ads to previous visitors based on pages they viewed. AI-powered retargeting predicts purchase intent, analyzes browse patterns, identifies optimal timing, personalizes messaging, and adjusts bid strategies for each user, resulting in significantly higher efficiency."
    },
    {
      question: "What metrics should I track to measure success?",
      answer: "Beyond standard metrics like CTR and conversion rate, focus on customer acquisition cost (CAC), customer lifetime value (CLV), CLV:CAC ratio, multi-touch attribution, time to conversion, and AI-specific metrics like prediction accuracy and personalization effectiveness."
    }
  ];

  const handlePhaseClick = (phase: string) => {
    setActivePhase(phase);
  };
  
  return (
    <PageLayout 
      title="AI-Powered Ad Funnel Blueprint" 
      subtitle="Navigate Your Customer Journey" 
      currentPath={location.pathname}
    >
      <Helmet>
        <link rel="canonical" href="https://thedigitalfrontier.ai/ad-funnel-blueprint" />
      </Helmet>
      
      <div className="space-y-12">
        {/* Introduction section with animated gradient */}
        <section className="relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-800/30 animate-fade-in">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-slate-300 mb-6 relative z-10">
            Welcome, Frontiers! In today's rapidly evolving digital ecosystem, a standard ad funnel isn't enough. 
            To truly thrive, businesses need to integrate intelligence at every step. This blueprint outlines 
            how to leverage Artificial Intelligence (AI) to create a smarter, more personalized, and higher-converting ad funnel.
          </p>
          
          <p className="text-slate-300 mb-6 relative z-10">
            <strong>The Goal:</strong> Move potential customers seamlessly from initial awareness to loyal advocates, using AI to optimize every interaction.
          </p>
        </section>

        {/* Interactive Performance Chart Card */}
        <Card className="border-slate-800 bg-slate-900/80 animate-fade-in">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400">📈</span>
              Performance Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-8 text-slate-300 text-lg">Standard vs AI-Powered Ad Funnel Performance</p>
            <div className="h-[400px] w-full">
              <ChartContainer config={{
                standard: { color: "#9F9EA1" },
                aiOptimized: { color: "#8B5CF6" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={performanceData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#9F9EA1" />
                    <YAxis stroke="#9F9EA1" />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="standard" fill="#9F9EA1" name="Standard Funnel" />
                    <Bar dataKey="aiOptimized" fill="#8B5CF6" name="AI-Powered Funnel" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Funnel Visualization */}
        <Card className="border-slate-800 bg-slate-900/80 animate-fade-in">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">🔄</span>
              Funnel Conversion Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-8 text-slate-300 text-lg">Traditional vs AI-Powered Funnel Conversion</p>
            <div className="h-[400px] w-full">
              <ChartContainer config={{
                traditional: { color: "#9F9EA1" },
                aiPowered: { color: "#8B5CF6" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={funnelData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="stage" stroke="#9F9EA1" />
                    <YAxis stroke="#9F9EA1" />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="traditional" fill="#9F9EA1" name="Traditional Funnel" />
                    <Bar dataKey="aiPowered" fill="#8B5CF6" name="AI-Powered Funnel" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Ad Funnel Phases with Tabs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-100">The AI-Powered Ad Funnel Blueprint</h2>
          
          <Tabs defaultValue="awareness" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="awareness" onClick={() => handlePhaseClick("awareness")} className="text-base py-3">AWARENESS</TabsTrigger>
              <TabsTrigger value="consideration" onClick={() => handlePhaseClick("consideration")} className="text-base py-3">CONSIDERATION</TabsTrigger>
              <TabsTrigger value="conversion" onClick={() => handlePhaseClick("conversion")} className="text-base py-3">CONVERSION</TabsTrigger>
              <TabsTrigger value="loyalty" onClick={() => handlePhaseClick("loyalty")} className="text-base py-3">LOYALTY</TabsTrigger>
            </TabsList>
            
            <TabsContent value="awareness" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6">Phase 1: AWARENESS (TOFU)</h3>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">Objective:</strong> Reach the right broad audience efficiently and make a strong first impression.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">Traditional Approach:</strong> Broad targeting based on simple demographics or interests.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">AI-Powered Approach:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-300">
                    <li>
                      <strong>AI Audience Discovery:</strong> Utilize AI algorithms to analyze vast datasets and identify high-potential Ideal Customer Profiles.
                    </li>
                    <li>
                      <strong>Predictive Targeting:</strong> Leverage AI to predict which audience segments are most likely to engage with specific content.
                    </li>
                    <li>
                      <strong>AI Creative Assistance:</strong> Generate diverse ad copy variations tailored to predicted audience preferences.
                    </li>
                    <li>
                      <strong>Cross-Platform Budget Optimization:</strong> Automatically allocate budget across channels based on real-time performance.
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-[300px]">
                  <ChartContainer config={{
                    'Highly Relevant': { color: "#8B5CF6" },
                    'Moderately Relevant': { color: "#D946EF" },
                    'Low Relevance': { color: "#F97316" },
                    'Non-relevant': { color: "#0EA5E9" },
                  }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={audienceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {audienceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="consideration" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6">Phase 2: CONSIDERATION (MOFU)</h3>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-purple-300">Objective:</strong> Engage interested prospects, educate them about solutions, and capture qualified leads.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-purple-300">Traditional Approach:</strong> Generic landing pages, basic retargeting, manual lead scoring.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-purple-300">AI-Powered Approach:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-300">
                    <li>
                      <strong>Dynamic Creative Optimization:</strong> Automatically mix and match ad components based on user data and context.
                    </li>
                    <li>
                      <strong>Intelligent Content Personalization:</strong> Dynamically recommend relevant content to nurture interest.
                    </li>
                    <li>
                      <strong>AI-Powered Lead Scoring:</strong> Analyze lead interactions to predict conversion likelihood.
                    </li>
                    <li>
                      <strong>Conversational AI:</strong> Deploy intelligent chatbots trained on your data to answer prospect questions 24/7.
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-purple-400 mb-3">Lead Qualification Improvement</h4>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Manual Scoring</span>
                          <span className="text-slate-300">35%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-slate-400 h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Basic Automation</span>
                          <span className="text-slate-300">55%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-slate-400 h-2 rounded-full" style={{ width: "55%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">AI-Powered</span>
                          <span className="text-purple-300">83%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "83%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="conversion" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-indigo-400 mb-6">Phase 3: CONVERSION (BOFU)</h3>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-indigo-300">Objective:</strong> Convert qualified leads into paying customers or desired actions.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-indigo-300">Traditional Approach:</strong> Standard retargeting ads, fixed bidding strategies.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-indigo-300">AI-Powered Approach:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-300">
                    <li>
                      <strong>Predictive Retargeting:</strong> Identify users demonstrating high purchase intent and serve highly personalized retargeting ads.
                    </li>
                    <li>
                      <strong>AI Bidding Strategies:</strong> Adjust bids in real-time based on the predicted likelihood of conversion.
                    </li>
                    <li>
                      <strong>Personalized Landing Pages:</strong> Dynamically adjust landing page elements based on the specific ad clicked.
                    </li>
                    <li>
                      <strong>Conversion Value Optimization:</strong> Focus on maximizing the total value of conversions, not just volume.
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-indigo-400 mb-6">Conversion Rate Comparison</h4>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                      <span className="text-slate-300">Standard Approach</span>
                      <span className="ml-auto text-gray-400 font-semibold">2.4%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                      <span className="text-slate-300">AI-Powered Approach</span>
                      <span className="ml-auto text-indigo-400 font-semibold">6.7%</span>
                    </div>
                    <div className="mt-8 text-center">
                      <div className="text-4xl font-bold text-indigo-400">179%</div>
                      <div className="text-slate-300 mt-2">Improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="loyalty" className="border rounded-xl border-slate-800 bg-slate-900/80 p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6">Phase 4: LOYALTY & ADVOCACY</h3>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">Objective:</strong> Retain existing customers, increase lifetime value, and turn customers into brand advocates.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">Traditional Approach:</strong> Generic email blasts, manual customer segmentation.
                  </p>
                  <p className="text-slate-300 mb-4">
                    <strong className="text-blue-300">AI-Powered Approach:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-300">
                    <li>
                      <strong>Predictive Churn Analysis:</strong> Identify customers at risk of leaving and trigger automated retention campaigns.
                    </li>
                    <li>
                      <strong>AI-Driven Personalization:</strong> Recommend relevant products or services based on purchase history.
                    </li>
                    <li>
                      <strong>Sentiment Analysis:</strong> Monitor social media, reviews, and support interactions to gauge customer sentiment.
                    </li>
                    <li>
                      <strong>Automated Loyalty Journeys:</strong> Trigger personalized rewards based on customer milestones.
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-blue-400 mb-4">Customer Lifetime Value Impact</h4>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900/40">
                            CLV Increase
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-400">
                            65%
                          </span>
                        </div>
                      </div>
                      <div className="flex h-4 mb-4 overflow-hidden rounded-full bg-slate-700">
                        <div style={{ width: "65%" }} className="animate-pulse shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-3 bg-blue-900/30 rounded-lg">
                        <div className="text-3xl font-bold text-blue-400">-42%</div>
                        <div className="text-slate-300 text-sm mt-1">Churn Rate</div>
                      </div>
                      <div className="text-center p-3 bg-blue-900/30 rounded-lg">
                        <div className="text-3xl font-bold text-blue-400">+78%</div>
                        <div className="text-slate-300 text-sm mt-1">Repeat Purchase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Interactive Cards Section with Hover Effects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-100">Overarching AI Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400">🔄</span>
                  Unified Data Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Ensure data from ad platforms, CRM, website analytics, and other sources flows into a central repository for holistic AI analysis.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">📊</span>
                  Continuous Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  AI models constantly learn from new data. Regularly review performance, refine inputs, and allow the AI to adapt strategies.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-indigo-900/20 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">📝</span>
                  Automated Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Leverage AI tools to automate performance reporting and surface key insights or anomalies that might be missed in manual analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Carousel for Case Studies */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-100">Success Stories</h2>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-slate-800 bg-slate-900/80">
                    <CardContent className="flex flex-col p-6">
                      <div className="bg-blue-900/20 self-start p-3 rounded-lg text-blue-400 mb-4">💼</div>
                      <h3 className="text-xl font-semibold mb-2">E-commerce Retailer</h3>
                      <p className="text-slate-300 mb-3 flex-grow">Implemented AI-powered audience discovery and dynamic retargeting, resulting in a 42% increase in ROAS.</p>
                      <div className="text-blue-400 text-sm">View Case Study</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-slate-800 bg-slate-900/80">
                    <CardContent className="flex flex-col p-6">
                      <div className="bg-purple-900/20 self-start p-3 rounded-lg text-purple-400 mb-4">🏥</div>
                      <h3 className="text-xl font-semibold mb-2">Healthcare Provider</h3>
                      <p className="text-slate-300 mb-3 flex-grow">Used AI-driven lead scoring and conversion optimization to reduce patient acquisition costs by 35%.</p>
                      <div className="text-purple-400 text-sm">View Case Study</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-slate-800 bg-slate-900/80">
                    <CardContent className="flex flex-col p-6">
                      <div className="bg-indigo-900/20 self-start p-3 rounded-lg text-indigo-400 mb-4">🎓</div>
                      <h3 className="text-xl font-semibold mb-2">Education Platform</h3>
                      <p className="text-slate-300 mb-3 flex-grow">Leveraged AI funnel optimization to increase course enrollments by 68% while maintaining acquisition costs.</p>
                      <div className="text-indigo-400 text-sm">View Case Study</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* FAQ Section with Structured Data */}
        <FAQSection 
          title="Frequently Asked Questions About AI-Powered Ad Funnels" 
          faqs={adFunnelFaqs} 
          className="mt-16"
        />

        {/* Enhanced CTA Section - Updated with Link to Contact page */}
        <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800/50 text-center mt-16 hover:shadow-lg hover:shadow-purple-900/20 transition-all">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Ad Funnel?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
            Integrate AI at every stage of your customer journey to create a more intelligent, adaptive, and results-driven marketing engine.
          </p>
          <Link to="/contact#contact-form">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-lg shadow-lg shadow-blue-900/30">
              Get Your Free Consultation
            </button>
          </Link>
        </div>

        {/* Conclusion section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Conclusion for Digital Frontier Followers</h2>
          
          <p className="text-slate-300 mb-6">
            Embracing AI isn't just about adopting new tools; it's about building a more intelligent, adaptive, 
            and customer-centric marketing engine. This AI-Powered Ad Funnel Blueprint provides a framework to navigate 
            the digital frontier effectively. Start by identifying one or two AI applications to implement in your weakest 
            funnel stage and build from there. The future of advertising is intelligent – let's build it together!
          </p>
          
          <p className="text-blue-400 text-sm mt-8">
            #DigitalFrontier #AIAdFunnel #MarketingAI #DigitalMarketing #AdvertisingTechnology #FutureOfAds
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default AdFunnelBlueprint;
