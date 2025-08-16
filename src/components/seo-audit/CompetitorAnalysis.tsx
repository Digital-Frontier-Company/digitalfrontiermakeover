import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Search, Trophy, TrendingUp, AlertCircle } from "lucide-react";

const CompetitorAnalysis = () => {
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const competitorData = [
    {
      domain: "competitor1.com",
      seoScore: 85,
      performance: 78,
      content: 82,
      backlinks: 1247,
      keywords: 325,
      traffic: "125K",
    },
    {
      domain: "competitor2.com", 
      seoScore: 79,
      performance: 85,
      content: 76,
      backlinks: 892,
      keywords: 298,
      traffic: "98K",
    },
    {
      domain: "yoursite.com",
      seoScore: 78,
      performance: 72,
      content: 85,
      backlinks: 634,
      keywords: 412,
      traffic: "87K",
    },
  ];

  const radarData = [
    { metric: "SEO Score", yoursite: 78, competitor1: 85, competitor2: 79 },
    { metric: "Performance", yoursite: 72, competitor1: 78, competitor2: 85 },
    { metric: "Content", yoursite: 85, competitor1: 82, competitor2: 76 },
    { metric: "Backlinks", yoursite: 60, competitor1: 85, competitor2: 70 },
    { metric: "Keywords", yoursite: 88, competitor1: 75, competitor2: 72 },
    { metric: "Technical", yoursite: 92, competitor1: 88, competitor2: 84 },
  ];

  const gapAnalysis = [
    {
      area: "Core Web Vitals",
      yourScore: 72,
      competitorAvg: 82,
      gap: -10,
      priority: "high",
      recommendation: "Optimize image loading and reduce JavaScript execution time",
    },
    {
      area: "Backlink Profile",
      yourScore: 60,
      competitorAvg: 78,
      gap: -18,
      priority: "high", 
      recommendation: "Develop link building strategy focusing on industry publications",
    },
    {
      area: "Content Depth",
      yourScore: 85,
      competitorAvg: 79,
      gap: 6,
      priority: "low",
      recommendation: "Maintain content quality advantage with regular updates",
    },
    {
      area: "Technical SEO",
      yourScore: 92,
      competitorAvg: 86,
      gap: 6,
      priority: "low",
      recommendation: "Continue technical excellence while competitors catch up",
    },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const getGapColor = (gap: number) => {
    if (gap > 0) return "text-green-500";
    if (gap > -10) return "text-yellow-500";
    return "text-red-500";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Competitor Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare your SEO performance against top competitors and identify opportunities
            </p>
          </div>

          {/* Competitor Input */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add Competitor for Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 max-w-md">
                <Input
                  placeholder="Enter competitor URL..."
                  value={competitorUrl}
                  onChange={(e) => setCompetitorUrl(e.target.value)}
                />
                <Button 
                  onClick={handleAnalyze}
                  disabled={!competitorUrl || isAnalyzing}
                >
                  <Search className="w-4 h-4 mr-2" />
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
              <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Competitor Landscape</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {competitorData.map((competitor, index) => (
                      <div key={index} className={`p-4 border rounded-lg ${competitor.domain === "yoursite.com" ? "bg-primary/5 border-primary" : ""}`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{competitor.domain}</span>
                            {competitor.domain === "yoursite.com" && (
                              <Badge variant="default">Your Site</Badge>
                            )}
                            {index === 0 && competitor.domain !== "yoursite.com" && (
                              <Badge variant="secondary">
                                <Trophy className="w-3 h-3 mr-1" />
                                Top Performer
                              </Badge>
                            )}
                          </div>
                          <div className="text-2xl font-bold">{competitor.seoScore}</div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Performance</p>
                            <p className="font-medium">{competitor.performance}%</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Content</p>
                            <p className="font-medium">{competitor.content}%</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Backlinks</p>
                            <p className="font-medium">{competitor.backlinks.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Keywords</p>
                            <p className="font-medium">{competitor.keywords}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Traffic</p>
                            <p className="font-medium">{competitor.traffic}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comparison">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Score Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={competitorData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="domain" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Bar dataKey="seoScore" fill="hsl(var(--primary))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Multi-Metric Radar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="metric" />
                          <PolarRadiusAxis domain={[0, 100]} />
                          <Radar 
                            name="Your Site" 
                            dataKey="yoursite" 
                            stroke="hsl(var(--primary))" 
                            fill="hsl(var(--primary))" 
                            fillOpacity={0.1}
                            strokeWidth={2}
                          />
                          <Radar 
                            name="Competitor 1" 
                            dataKey="competitor1" 
                            stroke="hsl(var(--secondary))" 
                            fill="hsl(var(--secondary))" 
                            fillOpacity={0.1}
                            strokeWidth={2}
                          />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gaps">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gapAnalysis.map((gap, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{gap.area}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant={getPriorityColor(gap.priority) as any}>
                              {gap.priority} priority
                            </Badge>
                            <span className={`font-bold ${getGapColor(gap.gap)}`}>
                              {gap.gap > 0 ? "+" : ""}{gap.gap}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Your Score</span>
                              <span>{gap.yourScore}%</span>
                            </div>
                            <Progress value={gap.yourScore} className="h-2" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Competitor Avg</span>
                              <span>{gap.competitorAvg}%</span>
                            </div>
                            <Progress value={gap.competitorAvg} className="h-2" />
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {gap.recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="opportunities">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Quick Wins</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <span className="font-medium">Image Optimization</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Competitors average 15% better image loading. Easy 5-10 point performance gain.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <span className="font-medium">Meta Descriptions</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            27% of your pages missing optimized meta descriptions vs 8% competitor average.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Long-term Strategies</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">Content Expansion</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Top competitors have 3x more content depth. Consider pillar page strategy.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">Authority Building</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Backlink gap of 600+ links. Focus on industry publications and partnerships.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CompetitorAnalysis;