
import React from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartBarIcon, ChartPieIcon, ChartLineIcon, SquareIcon, ArrowRight } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const AnswerEngineOptimization = () => {
  const location = useLocation();

  // Sample data for comparison chart
  const comparisonData = [
    { month: 'Jan', traditional: 35, aeo: 65 },
    { month: 'Feb', traditional: 38, aeo: 72 },
    { month: 'Mar', traditional: 40, aeo: 78 },
    { month: 'Apr', traditional: 38, aeo: 82 },
    { month: 'May', traditional: 42, aeo: 87 },
    { month: 'Jun', traditional: 45, aeo: 92 },
  ];

  // Sample data for answer distribution chart
  const answerDistributionData = [
    { name: 'Featured Snippets', value: 45 },
    { name: 'Knowledge Panels', value: 28 },
    { name: 'Voice Responses', value: 17 },
    { name: 'Rich Results', value: 10 },
  ];

  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

  // Sample data for optimization factors
  const factorsData = [
    { factor: 'Question Relevance', impact: 90 },
    { factor: 'Answer Conciseness', impact: 85 },
    { factor: 'Structured Data', impact: 80 },
    { factor: 'Voice-Search Ready', impact: 75 },
    { factor: 'Content Quality', impact: 70 },
    { factor: 'Page Authority', impact: 65 },
  ];

  // Sample data for monthly improvement
  const monthlyImprovementData = [
    { month: 'Jan', improvement: 15 },
    { month: 'Feb', improvement: 32 },
    { month: 'Mar', improvement: 48 },
    { month: 'Apr', improvement: 63 },
    { month: 'May', improvement: 79 },
    { month: 'Jun', improvement: 92 },
  ];

  // Sample data for SEO vs AEO vs GEO comparison - UPDATED to match across pages
  const optimizationComparisonData = [
    { name: 'Search Visibility', seo: 80, aeo: 60, geo: 50 },
    { name: 'Direct Traffic', seo: 70, aeo: 40, geo: 30 },
    { name: 'AI Citations', seo: 20, aeo: 70, geo: 90 },
    { name: 'Conversion Rate', seo: 60, aeo: 65, geo: 75 },
    { name: 'Content ROI', seo: 50, aeo: 60, geo: 85 },
  ];

  // AEO FAQ questions and answers
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
    >
      {/* Hero Image Section */}
      <section className="mb-24">
        <img 
          src="/lovable-uploads/4a25c6e7-d446-42a7-b9be-e55739bc1e58.png" 
          alt="Answer Engine Optimization" 
          className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12" 
        />
        <h2 className="text-2xl font-bold mb-8 text-slate-100">Understanding AEO: The Direct Answer Revolution</h2>
        <p className="text-slate-300 text-lg mb-6">
          Answer Engine Optimization (AEO) is a modern strategy that refines your content to deliver direct 
          answers to user queries. Unlike traditional SEO, which casts a wide net to rank pages for broad keywords, 
          AEO zeroes in on providing quick, concise responses—think Google's featured snippets, voice search results, 
          or AI-driven answer boxes.
        </p>
        <p className="text-slate-300 text-lg">
          The goal is simple: position your content as the immediate solution, not just a link to it. 
          This boosts visibility and caters to the growing preference for fast answers in today's 
          digital landscape, shaped by evolving technology and a demand for instant, digestible information.
        </p>
      </section>

      {/* 6-Step Framework Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 text-slate-100">Your 6-Step AEO Playbook</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img 
            src="/lovable-uploads/d376fcd6-50df-40c9-b62e-adf836bcee74.png" 
            alt="6-Step AEO Framework" 
            className="w-full max-w-md rounded-lg shadow-lg border border-slate-700" 
          />
          <div className="space-y-6">
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                Find the Questions
              </h3>
              <p className="text-slate-300 ml-10">Use Google's "People Also Ask" or tools like Ahrefs to uncover queries your audience is asking about your industry or products.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                Keep It Short
              </h3>
              <p className="text-slate-300 ml-10">Write answers in 40-60 words—perfect for answer boxes and featured snippets while still providing complete information.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                Add Schema
              </h3>
              <p className="text-slate-300 ml-10">Implement structured data like FAQ schema to signal your content's structure to search engines and enhance visibility.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
                Talk Naturally
              </h3>
              <p className="text-slate-300 ml-10">Optimize for voice search with conversational phrases and natural language that matches how people actually speak.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</span>
                Prioritize Quality
              </h3>
              <p className="text-slate-300 ml-10">Deliver accurate, valuable answers that genuinely help users—search engines increasingly reward content that serves user intent.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">6</span>
                Track Results
              </h3>
              <p className="text-slate-300 ml-10">Use analytics to see what's working, monitor featured snippet performance, and continuously refine your approach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison Card */}
      <Card className="mb-28 border-slate-800 bg-slate-900/80">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ChartBarIcon className="h-6 w-6 text-blue-400" />
            Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-slate-300 text-lg">Traditional SEO vs AEO-Optimized Content Performance in Answer Visibility</p>
          <div className="h-[400px] w-full">
            <ChartContainer config={{
              traditional: { color: "#9F9EA1" },
              aeo: { color: "#3b82f6" },
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparisonData}
                  margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#9F9EA1" />
                  <YAxis stroke="#9F9EA1" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                  <Bar dataKey="traditional" fill="#9F9EA1" name="Traditional Content" />
                  <Bar dataKey="aeo" fill="#3b82f6" name="AEO-Optimized" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* SEO vs AEO vs GEO Comparison Chart */}
      <Card className="mb-32 border-slate-800 bg-slate-900/80">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ChartLineIcon className="h-6 w-6 text-blue-400" />
            Optimization Strategy Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-slate-300 text-lg">SEO vs AEO vs <Link to="/generative-engine-optimization" className="text-purple-400 hover:underline">GEO</Link>: Performance Across Key Metrics</p>
          <div className="h-[450px] w-full mb-8">
            <ChartContainer config={{
              seo: { color: "#22c55e" },
              aeo: { color: "#3b82f6" },
              geo: { color: "#8B5CF6" },
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={optimizationComparisonData}
                  margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#9F9EA1" />
                  <YAxis stroke="#9F9EA1" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                  <Bar dataKey="seo" fill="#22c55e" name="SEO" />
                  <Bar dataKey="aeo" fill="#3b82f6" name="AEO" />
                  <Bar dataKey="geo" fill="#8B5CF6" name={<Link to="/generative-engine-optimization" className="text-purple-400 hover:underline">GEO</Link>} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-base pt-4">
            <div className="p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
              <h4 className="font-medium text-green-400 mb-2">SEO</h4>
              <p className="text-slate-300">Traditional search engine optimization targeting broad keywords to drive traffic to your website.</p>
            </div>
            <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">AEO</h4>
              <p className="text-slate-300">Answer Engine Optimization focusing on direct responses to questions via snippets and voice search.</p>
            </div>
            <div className="p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
              <h4 className="font-medium text-purple-400 mb-2"><Link to="/generative-engine-optimization" className="hover:underline">GEO</Link></h4>
              <p className="text-slate-300"><Link to="/generative-engine-optimization" className="text-slate-300 hover:underline">Generative Engine Optimization</Link> for AI quotability and citation in large language models.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Multiple Chart Views */}
      <Tabs defaultValue="distribution" className="mb-32">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="distribution" className="text-base py-3">Answer Distribution</TabsTrigger>
          <TabsTrigger value="factors" className="text-base py-3">Optimization Factors</TabsTrigger>
          <TabsTrigger value="improvement" className="text-base py-3">Improvement Over Time</TabsTrigger>
        </TabsList>
        
        <TabsContent value="distribution" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[450px]">
              <ChartContainer config={{
                'Featured Snippets': { color: "#3b82f6" },
                'Knowledge Panels': { color: "#D946EF" },
                'Voice Responses': { color: "#F97316" },
                'Rich Results': { color: "#0EA5E9" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={answerDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {answerDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-8 text-slate-100">Answer Format Distribution</h3>
              <p className="text-slate-300 text-lg mb-8">
                Our AEO-optimized content appears in various answer formats across search results, with featured snippets 
                representing the largest percentage at 45%. Understanding these formats is crucial for maximizing visibility.
              </p>
              <ul className="space-y-6 text-slate-300 text-lg">
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#3b82f6]"></span>
                  <span>Featured Snippets: Direct answers at the top of search results</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#D946EF]"></span>
                  <span>Knowledge Panels: Informational boxes for entities and topics</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#F97316]"></span>
                  <span>Voice Responses: Answers delivered through voice assistants</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#0EA5E9]"></span>
                  <span>Rich Results: Enhanced listings with additional information</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="factors" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[450px]">
              <ChartContainer config={{
                impact: { color: "#3b82f6" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={factorsData}
                    margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis type="number" stroke="#9F9EA1" />
                    <YAxis dataKey="factor" type="category" scale="band" stroke="#9F9EA1" />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="impact" fill="#3b82f6" name="Impact Score" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-8 text-slate-100">Key Optimization Factors</h3>
              <p className="text-slate-300 text-lg mb-8">
                Our comprehensive approach targets the critical factors that influence answer selection. 
                By optimizing these key areas, we maximize the likelihood of your content being featured in direct answers.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="border border-slate-800 rounded p-5">
                  <h4 className="font-medium text-blue-400 mb-2 text-lg">Question Relevance</h4>
                  <p className="text-slate-300">Directly addressing the questions your audience is asking with properly formatted headings and content.</p>
                </div>
                <div className="border border-slate-800 rounded p-5">
                  <h4 className="font-medium text-blue-400 mb-2 text-lg">Answer Conciseness</h4>
                  <p className="text-slate-300">Providing complete answers in the optimal 40-60 word range that search engines prefer for featured snippets.</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="improvement" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[450px]">
              <ChartContainer config={{
                improvement: { color: "#3b82f6" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyImprovementData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#9F9EA1" />
                    <YAxis stroke="#9F9EA1" />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="improvement" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      dot={{ r: 5 }}
                      activeDot={{ r: 10 }}
                      name="Monthly Improvement %" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-8 text-slate-100">Progressive Improvement</h3>
              <p className="text-slate-300 text-lg mb-8">
                Our AEO strategy delivers continuous improvement in answer visibility over time. As search engines evolve,
                our optimization techniques adapt to maintain and enhance your content's prominence.
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-blue-400 mb-3">92% Improvement</h4>
                <p className="text-slate-300 text-lg">
                  Clients typically see up to 92% improvement in answer visibility within 6 months of implementing our AEO strategies.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Interactive Cards Section */}
      <h2 className="text-3xl font-bold mb-8 text-slate-100">Our AEO Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartLineIcon className="h-6 w-6 text-blue-400" />
              Content Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our AI-powered analysis engine examines your existing content to identify questions users are asking
              about your industry and products, revealing prime opportunities for answer optimization.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <SquareIcon className="h-6 w-6 text-blue-400" />
              Schema Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We implement robust structured data schemas that signal to search engines exactly which parts of your
              content are questions and answers, significantly boosting your chances of featured snippet selection.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartPieIcon className="h-6 w-6 text-blue-400" />
              Voice Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We optimize your content for natural language patterns that match how people actually speak, ensuring
              your answers are selected for voice search results across Google Assistant, Alexa, and Siri.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartBarIcon className="h-6 w-6 text-blue-400" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our specialized monitoring tools track how frequently your content appears in featured snippets, 
              knowledge panels, and voice responses, providing actionable insights for continuous improvement.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* FAQ Section with JSON-LD Schema */}
      <FAQSection 
        title="Frequently Asked Questions About AEO" 
        faqs={aeoFaqs} 
        className="mb-16"
      />
      
      {/* Benefits Section with Gradients */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Benefits of AEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-800/30">
            <div className="text-blue-400 mb-4 text-3xl font-bold">01</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Trust & Authority</h3>
            <p className="text-slate-300">Build credibility by directly answering your audience's questions, establishing your brand as the go-to resource in your industry.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-800/30">
            <div className="text-cyan-400 mb-4 text-3xl font-bold">02</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Zero-Click Visibility</h3>
            <p className="text-slate-300">Capture attention even without website visits through prominent placement in featured snippets and voice search results.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-800/30">
            <div className="text-indigo-400 mb-4 text-3xl font-bold">03</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Voice Search Ready</h3>
            <p className="text-slate-300">Future-proof your content strategy by optimizing for the rapidly growing segment of voice-activated searches and devices.</p>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">AEO vs. Traditional SEO</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Feature</th>
                <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Traditional SEO</th>
                <th className="p-5 text-left text-blue-300 border-b border-slate-700 text-lg">AEO Strategy</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Primary Target</td>
                <td className="p-5 border-b border-slate-800">Search Engine Rankings</td>
                <td className="p-5 border-b border-slate-800">Featured Snippets & Voice Results</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Content Format</td>
                <td className="p-5 border-b border-slate-800">Keyword-optimized articles</td>
                <td className="p-5 border-b border-slate-800">Direct Q&A with structured data</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Success Metric</td>
                <td className="p-5 border-b border-slate-800">Traffic & Rankings</td>
                <td className="p-5 border-b border-slate-800">Answer Box Appearances</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">User Journey</td>
                <td className="p-5 border-b border-slate-800">SERP → Website</td>
                <td className="p-5 border-b border-slate-800">Direct Answer → Brand Recognition</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 font-medium">Technical Focus</td>
                <td className="p-5">Site speed, backlinks, metadata</td>
                <td className="p-5">Schema markup, concise answers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <ChartBarIcon className="h-10 w-10 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">Local Business Success</h3>
                  <p className="text-slate-300 mb-6 text-base">
                    A Memphis-based marketing agency saw a 180% increase in featured snippet appearances after implementing our AEO strategy, leading to a 43% boost in qualified leads.
                  </p>
                  <div className="flex items-center">
                    <span className="text-blue-400 font-semibold">Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1 text-blue-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-cyan-900/30 p-4 rounded-lg">
                  <ChartLineIcon className="h-10 w-10 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">E-commerce Voice Optimization</h3>
                  <p className="text-slate-300 mb-6 text-base">
                    An online retailer increased their visibility in voice search results by 290% after restructuring their product FAQ pages using our AEO framework.
                  </p>
                  <div className="flex items-center">
                    <span className="text-cyan-400 font-semibold">Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1 text-cyan-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-800/50 text-center mb-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dominate Answer Boxes?</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
          As search behavior shifts toward voice and direct answers, positioning your content correctly is more important than ever. 
          Our AEO specialists can help make your brand the answer people find, not just another search result.
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-lg">
          Get Your Free AEO Analysis
        </button>
      </div>
    </PageLayout>
  );
};

export default AnswerEngineOptimization;
