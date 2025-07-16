import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, TrendingUp, Target, Users, BarChart3, Search, Brain, Zap, Clock, Award, ArrowRight, MessageSquare, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const SEOvsAEOvsGEO = () => {
  const strategies = [
    {
      name: "SEO",
      fullName: "Search Engine Optimization",
      target: "Web page rankings on search engines",
      metric: "Organic traffic and click-through rates",
      behavior: "Users click through to websites",
      timeline: "3-6 months",
      icon: Search,
      color: "bg-blue-500",
      description: "The foundation strategy for driving organic website traffic",
      bestFor: ["E-commerce companies", "SaaS businesses", "Content publishers", "Local businesses"]
    },
    {
      name: "AEO",
      fullName: "Answer Engine Optimization",
      target: "Featured snippets and answer boxes",
      metric: "Answer box appearances and voice citations",
      behavior: "Users get answers without clicking",
      timeline: "2-4 months",
      icon: MessageSquare,
      color: "bg-green-500",
      description: "Direct answer strategy for immediate user value",
      bestFor: ["Professional services", "Healthcare providers", "Educational organizations", "Tech support"]
    },
    {
      name: "GEO",
      fullName: "Generative Engine Optimization",
      target: "AI-generated response citations",
      metric: "Mention frequency in AI responses",
      behavior: "Users discover brands through AI recommendations",
      timeline: "1-3 months",
      icon: Brain,
      color: "bg-purple-500",
      description: "AI citation strategy for thought leadership",
      bestFor: ["Consulting firms", "Technology companies", "Research organizations", "Executive brands"]
    }
  ];

  const budgetRecommendations = [
    { type: "Established businesses", seo: 50, aeo: 30, geo: 20 },
    { type: "Growth-stage companies", seo: 40, aeo: 35, geo: 25 },
    { type: "Innovation leaders", seo: 30, aeo: 30, geo: 40 },
    { type: "Local service businesses", seo: 60, aeo: 35, geo: 5 }
  ];

  const evolutionSteps = [
    {
      era: "Traditional SEO Era",
      period: "2000-2015",
      description: "Users typed keywords, clicked blue links, consumed content on websites",
      dominance: "Predictable search behavior"
    },
    {
      era: "AEO Emergence",
      period: "2015-2020",
      description: "Voice search and featured snippets grew popular",
      dominance: "Direct answer formats"
    },
    {
      era: "GEO Revolution",
      period: "2020-Present",
      description: "AI platforms synthesize information from multiple sources",
      dominance: "AI-powered recommendations"
    }
  ];

  return (
    <PageLayout
      title="SEO vs AEO vs GEO: Complete Strategy Guide for 2025"
      subtitle="Master all three optimization strategies for complete search dominance in the fragmented digital landscape"
      currentPath="/seo-vs-aeo-vs-geo"
      pageType="article"
      publishedDate="2025-07-15"
      modifiedDate="2025-07-15"
    >
      <div className="space-y-16">
        {/* Hero Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <Card key={strategy.name} className="relative overflow-hidden group hover-scale">
                <div className={`absolute top-0 left-0 w-1 h-full ${strategy.color.replace('bg-', 'bg-gradient-to-b from-')}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${strategy.color} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{strategy.name}</CardTitle>
                      <CardDescription className="text-sm">{strategy.fullName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{strategy.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{strategy.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{strategy.behavior}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Strategic Comparison Overview</h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Strategy</th>
                    <th className="text-left p-4 font-semibold">Primary Target</th>
                    <th className="text-left p-4 font-semibold">Success Metric</th>
                    <th className="text-left p-4 font-semibold">User Behavior</th>
                    <th className="text-left p-4 font-semibold">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {strategies.map((strategy, index) => (
                    <tr key={strategy.name} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-semibold">{strategy.name}</Badge>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{strategy.target}</td>
                      <td className="p-4 text-sm">{strategy.metric}</td>
                      <td className="p-4 text-sm">{strategy.behavior}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{strategy.timeline}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Evolution Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">The Evolution of Search Optimization</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
            <div className="space-y-8">
              {evolutionSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <Card className="flex-1 hover-scale">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{step.era}</CardTitle>
                        <Badge variant="outline">{step.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{step.dominance}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Strategy Tabs */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Detailed Strategy Breakdown</h2>
          <Tabs defaultValue="seo" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="seo">SEO Strategy</TabsTrigger>
              <TabsTrigger value="aeo">AEO Strategy</TabsTrigger>
              <TabsTrigger value="geo">GEO Strategy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-500" />
                    Search Engine Optimization: The Foundation Strategy
                  </CardTitle>
                  <CardDescription>
                    SEO focuses on improving web page rankings in traditional search engine results pages (SERPs) to drive organic traffic to your website.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Core SEO Principles
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• On-Page Optimization: Keyword targeting, content quality, technical optimization</li>
                        <li>• Off-Page Authority: Link building, brand mentions, social signals</li>
                        <li>• Content Strategy: Pillar content, content clusters, regular publishing</li>
                        <li>• User Experience: Clear navigation, engaging design, fast loading</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-500" />
                        Best Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {strategies[0].bestFor.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aeo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-green-500" />
                    Answer Engine Optimization: The Direct Answer Strategy
                  </CardTitle>
                  <CardDescription>
                    AEO focuses on optimizing content to appear in featured snippets, answer boxes, and voice search results.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Core AEO Principles
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Question-Based Content: FAQ formats, how-to guides, definitions</li>
                        <li>• Featured Snippet Optimization: Concise answers, clear formatting</li>
                        <li>• Voice Search Optimization: Conversational language, local optimization</li>
                        <li>• Authority Signals: Expert authorship, source citations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-green-500" />
                        Best Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {strategies[1].bestFor.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="geo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    Generative Engine Optimization: The AI Citation Strategy
                  </CardTitle>
                  <CardDescription>
                    GEO focuses on optimizing content to be cited by AI-powered platforms like ChatGPT, Perplexity, and Google's AI Overviews.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Core GEO Principles
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Authority-First Content: Expertise demonstration, original insights</li>
                        <li>• AI-Friendly Structure: Semantic clarity, contextual relationships</li>
                        <li>• Multi-Platform Optimization: Cross-platform consistency</li>
                        <li>• Citation-Worthy Formatting: Quotable statements, expert opinions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-purple-500" />
                        Best Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {strategies[2].bestFor.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Budget Allocation */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Resource Allocation Guidelines</h2>
          <Card>
            <CardHeader>
              <CardTitle>Budget Distribution Recommendations</CardTitle>
              <CardDescription>Optimize your investment across all three strategies based on your business type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgetRecommendations.map((rec, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{rec.type}</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline">SEO: {rec.seo}%</Badge>
                        <Badge variant="outline">AEO: {rec.aeo}%</Badge>
                        <Badge variant="outline">GEO: {rec.geo}%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="flex h-full rounded-full overflow-hidden">
                        <div className="bg-blue-500 transition-all duration-300" style={{ width: `${rec.seo}%` }} />
                        <div className="bg-green-500 transition-all duration-300" style={{ width: `${rec.aeo}%` }} />
                        <div className="bg-purple-500 transition-all duration-300" style={{ width: `${rec.geo}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Insights */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Key Strategic Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">Integration is Key</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The most successful businesses don't choose between strategies—they integrate all three for maximum search visibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">GEO Shows Fastest Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  GEO typically delivers results in 1-3 months, making it ideal for quick wins while building long-term SEO authority.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <Award className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">Authority Builds All Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building genuine expertise and authority enhances performance across SEO, AEO, and GEO simultaneously.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Should I focus on one strategy or integrate all three?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integration delivers the best results for most businesses. While resource constraints may require prioritizing one approach initially, successful companies develop complementary strategies that reinforce each other.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I know which strategy to prioritize?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Consider your customer behavior and business model. E-commerce benefits from SEO-first, professional services see strong AEO results, and thought leaders find GEO most valuable.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can these strategies conflict with each other?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Poor implementation can create conflicts, but proper integration enhances all strategies. Common issues include keyword cannibalization and inconsistent messaging.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the biggest mistake businesses make?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Treating them as separate, competing approaches rather than complementary strategies. Also over-investing in familiar SEO while neglecting emerging opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Master All Three Strategies?</h2>
          <p className="text-xl mb-8 opacity-90">
            The future belongs to businesses that optimize for how people actually search, not how search used to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Get Strategic Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/browse-playbooks">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Explore Our Playbooks
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SEOvsAEOvsGEO;