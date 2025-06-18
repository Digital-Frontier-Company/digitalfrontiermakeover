
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartBarIcon } from "lucide-react";

const AEOPerformanceChart = () => {
  const comparisonData = [
    { month: 'Jan', traditional: 35, aeo: 65 },
    { month: 'Feb', traditional: 38, aeo: 72 },
    { month: 'Mar', traditional: 40, aeo: 78 },
    { month: 'Apr', traditional: 38, aeo: 82 },
    { month: 'May', traditional: 42, aeo: 87 },
    { month: 'Jun', traditional: 45, aeo: 92 }
  ];

  return (
    <Card className="mb-28 border-slate-800 bg-slate-900/80">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <ChartBarIcon className="h-6 w-6 text-blue-400" />
          Performance Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-8 text-slate-300 text-lg">Traditional SEO vs AEO-Optimized Content Performance in Answer Visibility</p>
        <div className="h-[450px] w-full">
          <ChartContainer config={{
            traditional: { color: "#9F9EA1" },
            aeo: { color: "#3b82f6" }
          }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} margin={{ top: 50, right: 30, left: 20, bottom: 50 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#9F9EA1" />
                <YAxis stroke="#9F9EA1" />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend wrapperStyle={{ paddingTop: "20px", marginBottom: "10px" }} />
                <Bar dataKey="traditional" fill="#9F9EA1" name="Traditional Content" />
                <Bar dataKey="aeo" fill="#3b82f6" name="AEO-Optimized" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AEOPerformanceChart;
