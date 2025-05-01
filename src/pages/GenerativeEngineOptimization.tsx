
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartBarIcon, ChartPieIcon, ChartLineIcon, SquareIcon, ArrowRight } from "lucide-react";

const GenerativeEngineOptimization = () => {
  const location = useLocation();

  // Sample data for optimization performance chart
  const optimizationData = [
    { month: 'Jan', standard: 35, optimized: 65 },
    { month: 'Feb', standard: 38, optimized: 72 },
    { month: 'Mar', standard: 40, optimized: 78 },
    { month: 'Apr', standard: 38, optimized: 82 },
    { month: 'May', standard: 42, optimized: 87 },
    { month: 'Jun', standard: 45, optimized: 92 },
  ];

  // Sample data for quote distribution chart
  const quoteDistributionData = [
    { name: 'First Position', value: 65 },
    { name: 'Second Position', value: 20 },
    { name: 'Third Position', value: 10 },
    { name: 'Lower Positions', value: 5 },
  ];

  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

  // Sample data for optimization factors
  const factorsData = [
    { factor: 'Keyword Relevance', impact: 90 },
    { factor: 'Content Quality', impact: 85 },
    { factor: 'Semantic Structure', impact: 75 },
    { factor: 'Technical Optimization', impact: 70 },
    { factor: 'User Engagement', impact: 65 },
    { factor: 'Entity Recognition', impact: 60 },
  ];

  // Sample data for monthly improvement
  const monthlyImprovementData = [
    { month: 'Jan', improvement: 15 },
    { month: 'Feb', improvement: 30 },
    { month: 'Mar', improvement: 45 },
    { month: 'Apr', improvement: 60 },
    { month: 'May', improvement: 75 },
    { month: 'Jun', improvement: 90 },
  ];

  // Sample data for SEO vs AEO vs GEO comparison
  const optimizationComparisonData = [
    { name: 'Search Visibility', seo: 80, aeo: 60, geo: 50 },
    { name: 'Direct Traffic', seo: 70, aeo: 40, geo: 30 },
    { name: 'AI Citations', seo: 20, aeo: 70, geo: 90 },
    { name: 'Conversion Rate', seo: 60, aeo: 65, geo: 75 },
    { name: 'Content ROI', seo: 50, aeo: 60, geo: 85 },
  ];

  return (
    <PageLayout
      title="Generative Engine Optimization"
      subtitle="That Makes AI Engines Quote You First"
      currentPath={location.pathname}
    >
      {/* Hero Image Section */}
      <section className="mb-24">
        <img 
          src="/lovable-uploads/7856abf2-126d-4fbb-87da-fe5143707423.png" 
          alt="SEO-AEO-GEO Blog Optimizer" 
          className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12" 
        />
        <h2 className="text-2xl font-bold mb-8 text-slate-100">Understanding GEO: The Next Frontier</h2>
        <p className="text-slate-300 text-lg mb-6">
          Generative Engine Optimization (GEO) is the emerging practice of optimizing content 
          to be prominently featured in AI-generated responses. As large language models increasingly 
          mediate information access, appearing in AI responses is becoming as crucial as ranking 
          in traditional search engines.
        </p>
        <p className="text-slate-300 text-lg">
          Our data-driven approach ensures your content isn't just found—it's quoted, referenced, and 
          prioritized by leading AI engines, driving visibility in this new paradigm of content discovery.
        </p>
      </section>

      {/* 5-Step Framework Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 text-slate-100">Our 5-Step GEO Framework</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img 
            src="/lovable-uploads/3b21fa11-2a1d-4153-98dd-07178e0da505.png" 
            alt="5-Step GEO Framework" 
            className="w-full max-w-md rounded-lg shadow-lg border border-slate-700" 
          />
          <div className="space-y-6">
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                Entity Audit
              </h3>
              <p className="text-slate-300 ml-10">We comprehensively map every brand, product, expert, and FAQ into structured schemas that AI engines can easily process.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                RAG-Ready Content
              </h3>
              <p className="text-slate-300 ml-10">We format your content with question-first headers and concise answer blocks (≤50 words) to maximize citation potential.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                Vector Friendliness
              </h3>
              <p className="text-slate-300 ml-10">We optimize your content structure by chunking pages under 800 tokens and strategically embedding them for AI retrieval.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
                LLM Sentiment Tracking
              </h3>
              <p className="text-slate-300 ml-10">We implement weekly bot prompting to gauge tone and citation frequency across major AI platforms.</p>
            </div>
            
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</span>
                Zero-Click KPI Loop
              </h3>
              <p className="text-slate-300 ml-10">We measure AI citations, not just clicks, through comprehensive dashboards that track your content's performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison Card - Fixed height and spacing */}
      <Card className="mb-28 border-slate-800 bg-slate-900/80">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ChartBarIcon className="h-6 w-6 text-purple-400" />
            Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-slate-300 text-lg">Standard vs GEO-Optimized Content Performance in AI Quotability</p>
          <div className="h-[400px] w-full">
            <ChartContainer config={{
              standard: { color: "#9F9EA1" },
              optimized: { color: "#8B5CF6" },
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={optimizationData}
                  margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#9F9EA1" />
                  <YAxis stroke="#9F9EA1" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                  <Bar dataKey="standard" fill="#9F9EA1" name="Standard Content" />
                  <Bar dataKey="optimized" fill="#8B5CF6" name="GEO-Optimized" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* SEO vs AEO vs GEO Comparison Chart - Increased height and spacing */}
      <Card className="mb-32 border-slate-800 bg-slate-900/80">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ChartLineIcon className="h-6 w-6 text-purple-400" />
            Optimization Strategy Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-slate-300 text-lg">SEO vs AEO vs GEO: Performance Across Key Metrics</p>
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
                  <Bar dataKey="geo" fill="#8B5CF6" name="GEO" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-base pt-4">
            <div className="p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
              <h4 className="font-medium text-green-400 mb-2">SEO</h4>
              <p className="text-slate-300">Traditional search engine optimization focused on Google rankings and organic traffic.</p>
            </div>
            <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">AEO</h4>
              <p className="text-slate-300">Answer Engine Optimization targeting featured snippets and voice search results.</p>
            </div>
            <div className="p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
              <h4 className="font-medium text-purple-400 mb-2">GEO</h4>
              <p className="text-slate-300">Generative Engine Optimization for maximum AI quotability and citation.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Multiple Chart Views - Increased spacing and fixed heights */}
      <Tabs defaultValue="distribution" className="mb-32">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="distribution" className="text-base py-3">Quote Position</TabsTrigger>
          <TabsTrigger value="factors" className="text-base py-3">Optimization Factors</TabsTrigger>
          <TabsTrigger value="improvement" className="text-base py-3">Improvement Over Time</TabsTrigger>
        </TabsList>
        
        <TabsContent value="distribution" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[450px]">
              <ChartContainer config={{
                'First Position': { color: "#8B5CF6" },
                'Second Position': { color: "#D946EF" },
                'Third Position': { color: "#F97316" },
                'Lower Positions': { color: "#0EA5E9" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={quoteDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {quoteDistributionData.map((entry, index) => (
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
              <h3 className="text-2xl font-semibold mb-8 text-slate-100">Quote Position Distribution</h3>
              <p className="text-slate-300 text-lg mb-8">
                Our GEO-optimized content appears in the first position of AI-generated responses 65% of the time.
                This prime positioning ensures maximum visibility and establishes your content as the authoritative source.
              </p>
              <ul className="space-y-6 text-slate-300 text-lg">
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#8B5CF6]"></span>
                  <span>First Position: Highest visibility and click-through rate</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#D946EF]"></span>
                  <span>Second Position: Good visibility with strong performance</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#F97316]"></span>
                  <span>Third Position: Moderate visibility but still impactful</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#0EA5E9]"></span>
                  <span>Lower Positions: Limited visibility in AI responses</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="factors" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[450px]">
              <ChartContainer config={{
                impact: { color: "#8B5CF6" },
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
                    <Bar dataKey="impact" fill="#8B5CF6" name="Impact Score" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-8 text-slate-100">Key Optimization Factors</h3>
              <p className="text-slate-300 text-lg mb-8">
                Our comprehensive approach targets the critical factors that influence AI quote selection. 
                By optimizing these key areas, we maximize the likelihood of your content being featured prominently.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="border border-slate-800 rounded p-5">
                  <h4 className="font-medium text-purple-400 mb-2 text-lg">Keyword Relevance</h4>
                  <p className="text-slate-300">Strategic use of semantically-related terms that AI engines recognize as authoritative.</p>
                </div>
                <div className="border border-slate-800 rounded p-5">
                  <h4 className="font-medium text-purple-400 mb-2 text-lg">Content Quality</h4>
                  <p className="text-slate-300">Clear, factual, and well-structured content that AI systems identify as reliable.</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="improvement" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[450px]">
              <ChartContainer config={{
                improvement: { color: "#8B5CF6" },
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
                      stroke="#8B5CF6" 
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
                Our GEO strategy delivers continuous improvement in AI quotability over time. As AI engines learn and update,
                our optimization techniques adapt to maintain and enhance your content's prominence.
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-purple-400 mb-3">90% Improvement</h4>
                <p className="text-slate-300 text-lg">
                  Clients typically see up to 90% improvement in AI quotability within 6 months of implementing our GEO strategies.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Interactive Cards Section - Increased spacing */}
      <h2 className="text-3xl font-bold mb-8 text-slate-100">Our GEO Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartLineIcon className="h-6 w-6 text-purple-400" />
              Content Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our AI-powered analysis engine examines your existing content to identify optimization opportunities
              specifically for generative AI quotability, focusing on structure, authority signals, and semantic relevance.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <SquareIcon className="h-6 w-6 text-purple-400" />
              Semantic Enhancement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We enhance your content with AI-friendly semantic structures, entity relationships, and
              information architecture that helps generative engines understand, value, and prioritize your content.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartPieIcon className="h-6 w-6 text-purple-400" />
              Citation Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              We implement proprietary techniques to increase the likelihood that AI engines will cite your 
              content as an authoritative source, incorporating citation-friendly formatting and structure.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ChartBarIcon className="h-6 w-6 text-purple-400" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg">
              Our specialized monitoring tools track how frequently and prominently your content appears
              in AI-generated responses, providing actionable insights for continuous improvement.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Benefits Section with Gradients - Added additional spacing */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Benefits of GEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-800/30">
            <div className="text-purple-400 mb-4 text-3xl font-bold">01</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Zero-Click Visibility</h3>
            <p className="text-slate-300">Gain visibility without requiring users to click through to your website, expanding your content's reach.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 border border-fuchsia-800/30">
            <div className="text-fuchsia-400 mb-4 text-3xl font-bold">02</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Authority Positioning</h3>
            <p className="text-slate-300">Establish your brand as the authoritative source that AI engines trust and quote ahead of competitors.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-800/30">
            <div className="text-blue-400 mb-4 text-3xl font-bold">03</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Future-Proof Strategy</h3>
            <p className="text-slate-300">Adapt to the shifting search landscape where AI-mediated content discovery is becoming increasingly dominant.</p>
          </div>
        </div>
      </section>
      
      {/* Comparison Table - Improved spacing */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">GEO vs. Traditional Optimization</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Feature</th>
                <th className="p-5 text-left text-slate-300 border-b border-slate-700 text-lg">Traditional SEO</th>
                <th className="p-5 text-left text-purple-300 border-b border-slate-700 text-lg">GEO Strategy</th>
              </tr>
            </thead>
            <tbody className="text-base">
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Primary Target</td>
                <td className="p-5 border-b border-slate-800">Search Engine Rankings</td>
                <td className="p-5 border-b border-slate-800">AI Citations & Quotes</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Content Format</td>
                <td className="p-5 border-b border-slate-800">Keyword-optimized content</td>
                <td className="p-5 border-b border-slate-800">Entity-rich, factual, structured</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">Success Metric</td>
                <td className="p-5 border-b border-slate-800">Clicks & Traffic</td>
                <td className="p-5 border-b border-slate-800">Citation Frequency & Position</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 border-b border-slate-800 font-medium">User Journey</td>
                <td className="p-5 border-b border-slate-800">SERP → Website</td>
                <td className="p-5 border-b border-slate-800">AI Response → Brand Recognition</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-5 font-medium">Technical Focus</td>
                <td className="p-5">Site speed, backlinks, metadata</td>
                <td className="p-5">Vector embeddings, entity relationships</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Case Studies Section - Improved spacing */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-slate-100">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <ChartBarIcon className="h-10 w-10 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">E-commerce Product Descriptions</h3>
                  <p className="text-slate-300 mb-6 text-base">
                    A leading e-commerce retailer saw a 215% increase in AI-driven product mentions after implementing our GEO strategy across 5,000+ product descriptions.
                  </p>
                  <div className="flex items-center">
                    <span className="text-purple-400 font-semibold">Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1 text-purple-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-800 bg-slate-900/80">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-6">
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <ChartLineIcon className="h-10 w-10 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">Financial Services Knowledge Base</h3>
                  <p className="text-slate-300 mb-6 text-base">
                    A financial services provider increased their citation rate in AI responses by 340% after restructuring their knowledge base using our GEO framework.
                  </p>
                  <div className="flex items-center">
                    <span className="text-blue-400 font-semibold">Read Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1 text-blue-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA Section - Add spacing and improve visual appearance */}
      <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-800/50 text-center mb-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dominate AI Search Results?</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
          As global brands increasingly hire GEO agencies to counter AI chat's threat to Google dominance, 
          don't get left behind. Our specialists can help position your content as the preferred source for AI engines.
        </p>
        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors text-lg">
          Get Your Free GEO Analysis
        </button>
      </div>
    </PageLayout>
  );
};

export default GenerativeEngineOptimization;
