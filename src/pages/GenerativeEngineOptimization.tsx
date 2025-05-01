
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartBarIcon, ChartPieIcon, ChartLineIcon, SquareIcon } from "lucide-react";

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

  return (
    <PageLayout
      title="Generative Engine Optimization"
      subtitle="That Makes AI Engines Quote You First"
      currentPath={location.pathname}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Understanding GEO: The Next Frontier</h2>
        <p className="text-slate-300 mb-4">
          Generative Engine Optimization (GEO) is the emerging practice of optimizing content 
          to be prominently featured in AI-generated responses. As large language models increasingly 
          mediate information access, appearing in AI responses is becoming as crucial as ranking 
          in traditional search engines.
        </p>
        <p className="text-slate-300">
          Our data-driven approach ensures your content isn't just found—it's quoted, referenced, and 
          prioritized by leading AI engines, driving visibility in this new paradigm of content discovery.
        </p>
      </section>

      {/* Performance Comparison Card */}
      <Card className="mb-8 border-slate-800 bg-slate-900/80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChartBarIcon className="h-5 w-5 text-purple-400" />
            Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-slate-300">Standard vs GEO-Optimized Content Performance in AI Quotability</p>
          <div className="h-[300px] w-full">
            <ChartContainer config={{
              standard: { color: "#9F9EA1" },
              optimized: { color: "#8B5CF6" },
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={optimizationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#9F9EA1" />
                  <YAxis stroke="#9F9EA1" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="standard" fill="#9F9EA1" name="Standard Content" />
                  <Bar dataKey="optimized" fill="#8B5CF6" name="GEO-Optimized" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Multiple Chart Views */}
      <Tabs defaultValue="distribution" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="distribution">Quote Position</TabsTrigger>
          <TabsTrigger value="factors">Optimization Factors</TabsTrigger>
          <TabsTrigger value="improvement">Improvement Over Time</TabsTrigger>
        </TabsList>
        
        <TabsContent value="distribution" className="border rounded-md border-slate-800 bg-slate-900/80 p-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-[300px]">
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
                      outerRadius={80}
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
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Quote Position Distribution</h3>
              <p className="text-slate-300">
                Our GEO-optimized content appears in the first position of AI-generated responses 65% of the time.
                This prime positioning ensures maximum visibility and establishes your content as the authoritative source.
              </p>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#8B5CF6]"></span>
                  <span>First Position: Highest visibility and click-through rate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#D946EF]"></span>
                  <span>Second Position: Good visibility with strong performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F97316]"></span>
                  <span>Third Position: Moderate visibility but still impactful</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="factors" className="border rounded-md border-slate-800 bg-slate-900/80 p-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-[300px]">
              <ChartContainer config={{
                impact: { color: "#8B5CF6" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={factorsData}
                    margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
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
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Key Optimization Factors</h3>
              <p className="text-slate-300">
                Our comprehensive approach targets the critical factors that influence AI quote selection. 
                By optimizing these key areas, we maximize the likelihood of your content being featured prominently.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2">
                <div className="border border-slate-800 rounded p-3">
                  <h4 className="font-medium text-purple-400">Keyword Relevance</h4>
                  <p className="text-sm text-slate-300">Strategic use of semantically-related terms that AI engines recognize as authoritative.</p>
                </div>
                <div className="border border-slate-800 rounded p-3">
                  <h4 className="font-medium text-purple-400">Content Quality</h4>
                  <p className="text-sm text-slate-300">Clear, factual, and well-structured content that AI systems identify as reliable.</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="improvement" className="border rounded-md border-slate-800 bg-slate-900/80 p-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-[300px]">
              <ChartContainer config={{
                improvement: { color: "#8B5CF6" },
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyImprovementData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
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
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                      name="Monthly Improvement %" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Progressive Improvement</h3>
              <p className="text-slate-300">
                Our GEO strategy delivers continuous improvement in AI quotability over time. As AI engines learn and update,
                our optimization techniques adapt to maintain and enhance your content's prominence.
              </p>
              <div className="mt-6 bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-purple-400">90% Improvement</h4>
                <p className="text-sm text-slate-300">
                  Clients typically see up to 90% improvement in AI quotability within 6 months of implementing our GEO strategies.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Interactive Cards Section */}
      <h2 className="text-2xl font-bold mb-4 text-slate-100">Our GEO Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ChartLineIcon className="h-5 w-5 text-purple-400" />
              Content Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Our AI-powered analysis engine examines your existing content to identify optimization opportunities
              specifically for generative AI quotability, focusing on structure, authority signals, and semantic relevance.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <SquareIcon className="h-5 w-5 text-purple-400" />
              Semantic Enhancement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              We enhance your content with AI-friendly semantic structures, entity relationships, and
              information architecture that helps generative engines understand, value, and prioritize your content.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ChartPieIcon className="h-5 w-5 text-purple-400" />
              Citation Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              We implement proprietary techniques to increase the likelihood that AI engines will cite your 
              content as an authoritative source, incorporating citation-friendly formatting and structure.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-slate-800 bg-slate-900/80 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ChartBarIcon className="h-5 w-5 text-purple-400" />
              Performance Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Our specialized monitoring tools track how frequently and prominently your content appears
              in AI-generated responses, providing actionable insights for continuous improvement.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* CTA Section */}
      <div className="py-6 px-8 rounded-lg bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-800/50 text-center">
        <h2 className="text-2xl font-bold mb-3 text-white">Ready to Dominate AI Search Results?</h2>
        <p className="text-slate-300 mb-6">
          Our GEO specialists can help position your content as the preferred source for AI engines.
          Contact us for a free quotability analysis of your current content.
        </p>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors">
          Get Your Free GEO Analysis
        </button>
      </div>
    </PageLayout>
  );
};

export default GenerativeEngineOptimization;
