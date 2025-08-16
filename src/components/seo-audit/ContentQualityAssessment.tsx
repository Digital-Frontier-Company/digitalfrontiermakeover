import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Bot, Copy, BookOpen, Zap, AlertTriangle } from "lucide-react";

const ContentQualityAssessment = () => {
  const [contentInput, setContentInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const qualityMetrics = [
    { 
      name: "AI Content Detection", 
      score: 25, 
      threshold: 50, 
      status: "pass",
      description: "Content is 75% original (25% AI-detected)",
      icon: Bot 
    },
    { 
      name: "External Uniqueness", 
      score: 100, 
      threshold: 80, 
      status: "pass",
      description: "100% unique across the web",
      icon: Copy 
    },
    { 
      name: "Internal Uniqueness", 
      score: 95, 
      threshold: 90, 
      status: "pass",
      description: "5% similarity within your site",
      icon: FileText 
    },
    { 
      name: "Grammar Score", 
      score: 92, 
      threshold: 95, 
      status: "warning",
      description: "3 grammar issues detected",
      icon: BookOpen 
    },
    { 
      name: "Readability", 
      score: 88, 
      threshold: 80, 
      status: "pass",
      description: "Grade 8 reading level",
      icon: Zap 
    },
  ];

  const contentAnalysis = {
    wordCount: 1247,
    averageWordsPerSentence: 18,
    averageSentencesPerParagraph: 4,
    passiveVoicePercentage: 12,
    transitionWords: 15,
    headingStructure: {
      h1: 1,
      h2: 5,
      h3: 8,
      h4: 2,
    },
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "fail": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pass": return "default";
      case "warning": return "secondary";
      case "fail": return "destructive";
      default: return "outline";
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Content Quality Assessment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced content analysis including AI detection, originality, grammar, and readability scoring
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Quality Overview</TabsTrigger>
              <TabsTrigger value="analyzer">Content Analyzer</TabsTrigger>
              <TabsTrigger value="structure">Structure Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Quality Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {qualityMetrics.map((metric, index) => {
                        const IconComponent = metric.icon;
                        return (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <IconComponent className="w-5 h-5" />
                                <span className="font-medium">{metric.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`font-bold ${getStatusColor(metric.status)}`}>
                                  {metric.score}%
                                </span>
                                <Badge variant={getStatusBadge(metric.status) as any}>
                                  {metric.status}
                                </Badge>
                              </div>
                            </div>
                            <Progress 
                              value={metric.score} 
                              className="h-2"
                            />
                            <p className="text-sm text-muted-foreground">
                              {metric.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold mb-1">{contentAnalysis.wordCount}</div>
                        <p className="text-sm text-muted-foreground">Total Words</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold mb-1">{contentAnalysis.averageWordsPerSentence}</div>
                        <p className="text-sm text-muted-foreground">Avg Words/Sentence</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold mb-1">{contentAnalysis.passiveVoicePercentage}%</div>
                        <p className="text-sm text-muted-foreground">Passive Voice</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold mb-1">{contentAnalysis.transitionWords}</div>
                        <p className="text-sm text-muted-foreground">Transition Words</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Heading Distribution</h4>
                      <div className="space-y-2">
                        {Object.entries(contentAnalysis.headingStructure).map(([heading, count]) => (
                          <div key={heading} className="flex items-center justify-between">
                            <span className="text-sm font-mono">{heading.toUpperCase()}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${(count / 10) * 100}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-6">{count}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analyzer">
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Content Analyzer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Paste your content here for real-time analysis..."
                      value={contentInput}
                      onChange={(e) => setContentInput(e.target.value)}
                      className="min-h-40"
                    />
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {contentInput.split(' ').filter(word => word.length > 0).length} words
                      </div>
                      <Button 
                        onClick={handleAnalyze}
                        disabled={!contentInput.trim() || isAnalyzing}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {isAnalyzing ? "Analyzing..." : "Analyze Content"}
                      </Button>
                    </div>

                    {contentInput && (
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="p-4 border rounded-lg text-center">
                          <div className="text-lg font-bold text-green-500">92%</div>
                          <p className="text-sm text-muted-foreground">Originality</p>
                        </div>
                        <div className="p-4 border rounded-lg text-center">
                          <div className="text-lg font-bold text-yellow-500">85%</div>
                          <p className="text-sm text-muted-foreground">Readability</p>
                        </div>
                        <div className="p-4 border rounded-lg text-center">
                          <div className="text-lg font-bold text-blue-500">88%</div>
                          <p className="text-sm text-muted-foreground">SEO Score</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure">
              <Card>
                <CardHeader>
                  <CardTitle>Content Structure Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Structure Issues</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Missing H2 after introduction</p>
                              <p className="text-sm text-muted-foreground">
                                Consider adding subheadings to break up long content blocks
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Long paragraphs detected</p>
                              <p className="text-sm text-muted-foreground">
                                3 paragraphs exceed 150 words - consider breaking them up
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Optimization Suggestions</h4>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <p className="font-medium">Add more lists and bullet points</p>
                            <p className="text-sm text-muted-foreground">
                              Improve scannability with formatted lists
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="font-medium">Include more transition words</p>
                            <p className="text-sm text-muted-foreground">
                              Enhance flow between sentences and paragraphs
                            </p>
                          </div>
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

export default ContentQualityAssessment;