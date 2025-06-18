
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartLineIcon } from "lucide-react";

const AEOComparisonChart = () => {
  const optimizationComparisonData = [
    { name: 'Search Visibility (%)', seo: 53, aeo: 41, geo: 46 },
    { name: 'Direct Traffic (%)', seo: 40, aeo: 0, geo: 45 },
    { name: 'Conversion Rate (%)', seo: 2.8, aeo: 24, geo: 20 },
    { name: 'Content ROI (%)', seo: 550, aeo: 400, geo: 400 }
  ];

  return (
    <Card className="mb-32 border-slate-800 bg-slate-900/80">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <ChartLineIcon className="h-6 w-6 text-blue-400" />
          Optimization Strategy Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-8 text-slate-300 text-lg">
          SEO vs AEO vs <Link to="/generative-engine-optimization" className="text-purple-400 hover:underline">GEO</Link>: Performance Across Key Metrics (Logarithmic Scale)
        </p>
        <div className="h-[500px] w-full mb-8">
          <ChartContainer config={{
            seo: { color: "#22c55e" },
            aeo: { color: "#3b82f6" },
            geo: { color: "#8B5CF6" }
          }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={optimizationComparisonData} margin={{ top: 70, right: 30, left: 20, bottom: 70 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#9F9EA1" />
                <YAxis 
                  stroke="#9F9EA1" 
                  scale="log" 
                  domain={[1, 'auto']} 
                  allowDataOverflow={true} 
                  tickFormatter={value => value.toLocaleString()} 
                />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend wrapperStyle={{ paddingTop: "30px", marginBottom: "10px" }} />
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
            <p className="text-slate-300">Traditional search engine optimization targeting broad keywords to drive traffic to your website.</p>
          </div>
          <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
            <h4 className="font-medium text-blue-400 mb-2">AEO</h4>
            <p className="text-slate-300">Answer Engine Optimization focusing on direct responses to questions via snippets and voice search.</p>
          </div>
          <div className="p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
            <h4 className="font-medium text-purple-400 mb-2">GEO</h4>
            <p className="text-slate-300">Generative Engine Optimization for AI quotability and citation in large language models.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AEOComparisonChart;
