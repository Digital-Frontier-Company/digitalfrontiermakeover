
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const AEOChartTabs = () => {
  const answerDistributionData = [
    { name: 'Featured Snippets', value: 45, color: '#3b82f6' },
    { name: 'Knowledge Panels', value: 28, color: '#8b5cf6' },
    { name: 'Voice Responses', value: 17, color: '#f59e0b' },
    { name: 'Rich Results', value: 10, color: '#10b981' }
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const factorsData = [
    { factor: 'Question Relevance', impact: 90 },
    { factor: 'Answer Conciseness', impact: 85 },
    { factor: 'Structured Data', impact: 80 },
    { factor: 'Voice-Search Ready', impact: 75 },
    { factor: 'Content Quality', impact: 70 },
    { factor: 'Page Authority', impact: 65 }
  ];

  const monthlyImprovementData = [
    { month: 'Jan', improvement: 15 },
    { month: 'Feb', improvement: 32 },
    { month: 'Mar', improvement: 48 },
    { month: 'Apr', improvement: 63 },
    { month: 'May', improvement: 79 },
    { month: 'Jun', improvement: 92 }
  ];

  return (
    <Tabs defaultValue="distribution" className="mb-32">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="distribution" className="text-base py-3">Answer Distribution</TabsTrigger>
        <TabsTrigger value="factors" className="text-base py-3">Optimization Factors</TabsTrigger>
        <TabsTrigger value="improvement" className="text-base py-3">Improvement Over Time</TabsTrigger>
      </TabsList>
      
      <TabsContent value="distribution" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 h-[600px]">
            <ChartContainer config={{
              'Featured Snippets': { color: "#3b82f6" },
              'Knowledge Panels': { color: "#8b5cf6" },
              'Voice Responses': { color: "#f59e0b" },
              'Rich Results': { color: "#10b981" }
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 60, right: 60, bottom: 60, left: 60 }}>
                  <Pie
                    data={answerDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {answerDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: "40px" }}
                    formatter={(value, entry) => `${value}: ${entry.payload.value}%`}
                  />
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
                <span><strong>Featured Snippets (45%):</strong> Direct answers at the top of search results</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-5 w-5 rounded-full bg-[#8b5cf6]"></span>
                <span><strong>Knowledge Panels (28%):</strong> Informational boxes for entities and topics</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-5 w-5 rounded-full bg-[#f59e0b]"></span>
                <span><strong>Voice Responses (17%):</strong> Answers delivered through voice assistants</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-5 w-5 rounded-full bg-[#10b981]"></span>
                <span><strong>Rich Results (10%):</strong> Enhanced listings with additional information</span>
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="factors" className="border rounded-md border-slate-800 bg-slate-900/80 p-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 h-[450px]">
            <ChartContainer config={{ impact: { color: "#3b82f6" } }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={factorsData} margin={{ top: 20, right: 30, left: 150, bottom: 20 }}>
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
            <ChartContainer config={{ improvement: { color: "#3b82f6" } }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyImprovementData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
  );
};

export default AEOChartTabs;
