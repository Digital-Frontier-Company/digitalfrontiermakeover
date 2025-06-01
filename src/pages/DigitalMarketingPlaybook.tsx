
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { ChevronDown, Download, Calendar, Play, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const DigitalMarketingPlaybook = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedTweet, setCopiedTweet] = useState<number | null>(null);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const copyTweet = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedTweet(index);
      setTimeout(() => setCopiedTweet(null), 2000);
    });
  };

  return (
    <PageLayout
      title="2025 Digital Marketing Playbook"
      subtitle="AI-Powered Growth Strategies for SMBs"
      currentPath="/digital-marketing-playbook"
    >
      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .card-hover {
          transition: all 0.3s ease;
          border: 1px solid rgba(209, 213, 219, 0.5);
        }
        
        .card-hover:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.25);
          border-color: #06b6d4;
        }
        
        .stat-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%);
          backdrop-filter: blur(6px);
        }
        
        .timeline-dot {
          position: absolute;
          left: -38px;
          top: 4px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid #eff6ff;
        }
        
        .heatmap-0 { background-color: #ebf5ff; color: #1c64f2; }
        .heatmap-1 { background-color: #d8eefe; color: #1a56db; }
        .heatmap-2 { background-color: #bfe1ff; color: #1e429f; }
        .heatmap-3 { background-color: #93c5fd; color: #ffffff; }
        .heatmap-4 { background-color: #60a5fa; color: #ffffff; }
      `}</style>

      <div className="w-full max-w-none">
        <article className="w-full">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                    <span>2025 Growth Playbook</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                    <span className="block">Outpace Competitors with</span>
                    <span className="gradient-text">AI-Augmented Marketing</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                    Small-to-midsize businesses deploying these 2025 frameworks are seeing 214% higher marketing ROI than peers using 2023 tactics.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold">
                      Get 90-Day Action Plan
                    </Button>
                    <Button variant="outline" className="px-6 py-3 rounded-lg font-medium flex items-center">
                      <Play className="mr-2 h-4 w-4" /> How It Works
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" 
                      alt="AI-Powered Marketing Dashboard" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <i className="fas fa-chart-line text-blue-600 text-sm"></i>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Average Results</p>
                        <p className="font-bold text-blue-400">+214% ROI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="mb-12">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-white">Playbook Sections</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#ai-stack" className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                  <i className="fas fa-robot text-blue-400 mr-3"></i>
                  <span className="text-sm font-medium">AI Stack</span>
                </a>
                <a href="#content-velocity" className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                  <i className="fas fa-bolt text-green-400 mr-3"></i>
                  <span className="text-sm font-medium">Content</span>
                </a>
                <a href="#cro" className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                  <i className="fas fa-chart-line text-purple-400 mr-3"></i>
                  <span className="text-sm font-medium">CRO</span>
                </a>
                <a href="#data" className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                  <i className="fas fa-shield-alt text-indigo-400 mr-3"></i>
                  <span className="text-sm font-medium">Data</span>
                </a>
              </div>
            </div>
          </section>

          {/* AI Stack Section */}
          <section id="ai-stack" className="mb-16">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <i className="fas fa-robot text-xl"></i>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Section 1</span>
                <h2 className="text-3xl font-bold text-white">The 2025 AI Automation Stack</h2>
                <p className="text-slate-400 mt-2">38% of U.S. SMBs already deploy AI for marketing</p>
              </div>
            </div>
            
            <div className="bg-blue-50/10 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
              <p className="text-slate-300 font-medium">
                In 2025, small-to-midsize businesses (SMBs) are no longer asking if they should automate marketing but how fast they can roll it out. AI-powered automation spending is growing 25% YoY worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-hover bg-slate-800/30 p-8 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                      <i className="fas fa-map-marked-alt"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mapping the Modern Marketing OS</h3>
                </div>
                <p className="text-slate-300 mb-6">Start with the funnel. Audit every touch—from ad click to renewal—and map which events need real-time triggers.</p>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">Connect CRM, CDP and analytics so journeys stay stitched when cookies vanish</p>
                  </div>
                </div>
              </div>
              
              <div className="card-hover bg-slate-800/30 p-8 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
                      <i className="fas fa-tools"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Low-Code AI Tools That Scale</h3>
                </div>
                <p className="text-slate-300 mb-6">No-code AI suites valued at $4.9 billion in 2024 will hit $24.8 billion by 2029.</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-300">Shop platform ecosystems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-300">Prioritize extensibility</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-300">Pilot, then ramp in sprints</span>
                  </div>
                </div>
                
                <div className="text-xs text-slate-500 mt-6">No-code AI Market CAGR: 38.2% (2024-2029)</div>
              </div>
              
              <div className="card-hover bg-slate-800/30 p-8 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
                      <i className="fas fa-user-shield"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Human-in-the-Loop Governance</h3>
                </div>
                <p className="text-slate-300 mb-6">Loopex Digital reports a 4.3% average conversion lift when AI suggestions are manually QA'd before launch.</p>
                
                <div className="p-4 bg-orange-50/10 rounded-lg mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">Route anomaly alerts to Slack for rapid human intervention</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast-Action Checklist */}
            <div className="bg-slate-800/30 p-6 rounded-xl border border-blue-200/20 border-l-4 mb-8">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                <i className="fas fa-bolt text-yellow-500 mr-2"></i> Fast-Action Checklist
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Map funnel events and assign owner</label>
                    <p className="text-xs text-slate-500">From lead capture to renewal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Select low-code tool with CRM sync</label>
                    <p className="text-xs text-slate-500">Prioritize native connectors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Define QA checkpoints and escalation</label>
                    <p className="text-xs text-slate-500">Human review protocols</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweetable Takeaway */}
            <div className="bg-blue-50/10 p-6 rounded-xl border border-blue-200/20 mb-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <i className="fab fa-twitter text-blue-400 text-2xl mt-1"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Shrink This Playbook (198 chars):</h4>
                  <p className="text-slate-300 mb-3">
                    AI automation isn't "set-and-forget." Map the funnel, plug in low-code AI, and keep humans on the joystick—then watch qualified leads surge without adding payroll. #DigitalMarketing2025
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => copyTweet("AI automation isn't \"set-and-forget.\" Map the funnel, plug in low-code AI, and keep humans on the joystick—then watch qualified leads surge without adding payroll. #DigitalMarketing2025", 1)}
                    className="text-blue-400 border-slate-600 hover:bg-slate-700/50"
                  >
                    {copiedTweet === 1 ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                    {copiedTweet === 1 ? "Copied!" : "Copy Tweet"}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Content Velocity Section */}
          <section id="content-velocity" className="mb-16">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                  <i className="fas fa-bolt text-xl"></i>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold tracking-wider text-green-400 uppercase">Section 2</span>
                <h2 className="text-3xl font-bold text-white">Content Velocity: Publish at Search Speed</h2>
                <p className="text-slate-400 mt-2">Brands publishing 9+ posts/month earn 3.6x more traffic</p>
              </div>
            </div>

            <div className="bg-green-50/10 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
              <p className="text-slate-300 font-medium">
                Google's generative-AI SERPs reward fresh, topic-clustered content—all delivered faster than legacy editorial teams can type. Feed AI-powered search with clustered, high-tempo content, then slice each post into shorts and emails.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Topic Clustering & Semantic SEO in 2025</h3>
                <p className="text-slate-300 mb-6">75% of marketers say AI-enabled search will increase their blog traffic. Reorganize legacy content by search intent.</p>
                
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 mb-8">
                  <h4 className="font-semibold mb-3 text-slate-200">Cold Plunge Co. Results</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">64%</div>
                      <div className="text-sm text-slate-400">Impressions Lift</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">140</div>
                      <div className="text-sm text-slate-400">Posts Reorganized</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">6</div>
                      <div className="text-sm text-slate-400">Intent Clusters</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <i className="fas fa-chart-bar text-blue-500 mr-2"></i> Traffic vs. Publishing Velocity
                </h3>
                <div className="h-64 flex items-end justify-around mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 bg-blue-200 rounded-t" style={{height: "80px"}}></div>
                    <div className="text-xs text-slate-400 mt-1">2-4/mo</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 bg-green-200 rounded-t" style={{height: "120px"}}></div>
                    <div className="text-xs text-slate-400 mt-1">5-8/mo</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 bg-purple-400 rounded-t" style={{height: "180px"}}></div>
                    <div className="text-xs text-slate-400 mt-1">16+/mo</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div className="bg-blue-100/20 p-2 rounded text-center text-slate-300">1x Traffic</div>
                  <div className="bg-green-100/20 p-2 rounded text-center text-slate-300">2.4x Traffic</div>
                  <div className="bg-purple-100/20 p-2 rounded text-center text-slate-300">3.6x Traffic</div>
                </div>
                <p className="text-xs text-slate-500 text-center">Source: Stratabeat 2025 Content Benchmark Report</p>
              </div>
            </div>

            {/* Fast-Action Checklist */}
            <div className="bg-slate-800/30 p-6 rounded-xl border border-green-200/20 border-l-4 mb-8">
              <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
                <i className="fas fa-bolt text-yellow-500 mr-2"></i> Fast-Action Checklist
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Build 30-day topic cluster calendar</label>
                    <p className="text-xs text-slate-500">Align with search intent</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Automate AI outlines + human edits</label>
                    <p className="text-xs text-slate-500">40-minute draft cycle</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Repurpose every asset into 5 formats</label>
                    <p className="text-xs text-slate-500">5x reach multiplier</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweetable Takeaway */}
            <div className="bg-green-50/10 p-6 rounded-xl border border-green-200/20">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <i className="fab fa-twitter text-green-400 text-2xl mt-1"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Shrink This Playbook (272 chars):</h4>
                  <p className="text-slate-300 mb-3">
                    Feed AI-powered search with clustered, high-tempo content, then slice each post into shorts and emails. Velocity + repurposing = exponential reach without extra headcount.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => copyTweet("Feed AI-powered search with clustered, high-tempo content, then slice each post into shorts and emails. Velocity + repurposing = exponential reach without extra headcount.", 2)}
                    className="text-green-400 border-slate-600 hover:bg-slate-700/50"
                  >
                    {copiedTweet === 2 ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                    {copiedTweet === 2 ? "Copied!" : "Copy Tweet"}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CRO Section */}
          <section id="cro" className="mb-16">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">Section 3</span>
                <h2 className="text-3xl font-bold text-white">Conversion Rate Optimization 3.0</h2>
                <p className="text-slate-400 mt-2">Personalized recommendations boost conversions up to 15%</p>
              </div>
            </div>

            <div className="bg-purple-50/10 border-l-4 border-purple-500 p-6 rounded-r-lg mb-12">
              <p className="text-slate-300 font-medium">
                The CRO playbook of 2025 uses AI to personalize UX, prices, and experiments in real time. Layer Bayesian test engines on top and every visitor becomes a statistically significant insight.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI-Driven UX Personalization</h3>
                <p className="text-slate-300 mb-6">Dynamic Yield reports 15% average lift from AI recommendations across 200M sessions.</p>
                
                <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700 mb-8">
                  <h4 className="font-semibold mb-3 text-slate-200">EcomParts Implementation</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-r border-slate-600 pr-4">
                      <div className="text-2xl font-bold text-purple-400">11%</div>
                      <div className="text-sm text-slate-400">Higher AOV</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">18% ↓</div>
                      <div className="text-sm text-slate-400">Cart Abandonment</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Testing Frameworks & Micro-Conversions</h3>
                <p className="text-slate-300 mb-6">VWO reports Bayesian tests reach directional confidence 2× faster than frequentist models.</p>
                
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-slate-200">
                        <i className="fas fa-chess-clock text-blue-500 mr-2"></i> Bayesian Testing
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                          <span className="text-sm text-slate-300">Smaller sample sizes needed</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                          <span className="text-sm text-slate-300">Adapts to traffic changes</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                          <span className="text-sm text-slate-300">Probability distributions</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-slate-200">
                        <i className="fas fa-hourglass-half text-purple-500 mr-2"></i> Frequentist Testing
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                          <span className="text-sm text-slate-300">Clear significance thresholds</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                          <span className="text-sm text-slate-300">Simpler to understand</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                          <span className="text-sm text-slate-300">Better for static testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast-Action Checklist */}
            <div className="bg-slate-800/30 p-6 rounded-xl border border-purple-200/20 border-l-4 mb-8">
              <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                <i className="fas fa-bolt text-yellow-500 mr-2"></i> Fast-Action Checklist
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Deploy AI recommendation engine</label>
                    <p className="text-xs text-slate-500">On product pages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Switch to Bayesian testing</label>
                    <p className="text-xs text-slate-500">For UI elements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Track ≥3 micro-conversions</label>
                    <p className="text-xs text-slate-500">Video plays, scroll depth, etc</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweetable Takeaway */}
            <div className="bg-purple-50/10 p-6 rounded-xl border border-purple-200/20">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <i className="fab fa-twitter text-purple-400 text-2xl mt-1"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Shrink This Playbook (233 chars):</h4>
                  <p className="text-slate-300 mb-3">
                    Personalize, price dynamically, and test Bayesian-fast—then watch micro-wins compound into double-digit revenue lifts. CRO 3.0 is always-on optimization.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => copyTweet("Personalize, price dynamically, and test Bayesian-fast—then watch micro-wins compound into double-digit revenue lifts. CRO 3.0 is always-on optimization.", 3)}
                    className="text-purple-400 border-slate-600 hover:bg-slate-700/50"
                  >
                    {copiedTweet === 3 ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                    {copiedTweet === 3 ? "Copied!" : "Copy Tweet"}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Data & Privacy Section */}
          <section id="data" className="mb-16">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">Section 4</span>
                <h2 className="text-3xl font-bold text-white">Data, Privacy & Trust Signals</h2>
                <p className="text-slate-400 mt-2">Marketers recover 40% of "lost" conversions with server-side tagging</p>
              </div>
            </div>

            <div className="bg-indigo-50/10 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-12">
              <p className="text-slate-300 font-medium">
                With Chrome's third-party cookies vanishing in late 2025, first-party data becomes critical. Marketers that master server-side tagging recover conversions and sidestep privacy fines while building trust through transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Post-Cookie Data Strategies</h3>
                <p className="text-slate-300 mb-6">82% of consumers will share data for better personalization (Instapage).</p>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-slate-800/30 rounded-lg border border-indigo-100/20">
                    <h4 className="font-semibold text-indigo-400 mb-2">Email Gated Content</h4>
                    <p className="text-sm text-slate-300">Premium content in exchange for verified emails</p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/30 rounded-lg border border-indigo-100/20">
                    <h4 className="font-semibold text-indigo-400 mb-2">Progressive Profiling</h4>
                    <p className="text-sm text-slate-300">Collect data across multiple touchpoints</p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/30 rounded-lg border border-indigo-100/20">
                    <h4 className="font-semibold text-indigo-400 mb-2">Value-Exchange Copy</h4>
                    <p className="text-sm text-slate-300">"Help us personalize your experience..."</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Server-Side Tagging & Trust</h3>
                <p className="text-slate-300 mb-6">Server-side tagging boosts attribution accuracy 3× (Admetrics).</p>
                
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-slate-200">Attribution Accuracy</h4>
                    <div className="flex items-center">
                      <span className="text-xs mr-3 font-medium text-slate-400">Before</span>
                      <span className="text-xs font-medium text-indigo-400">After</span>
                    </div>
                  </div>
                  
                  <div className="h-48 flex items-end justify-center space-x-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-slate-600 rounded-t" style={{height: "60px"}}></div>
                      <div className="text-xs text-slate-400 mt-2">32%</div>
                      <div className="text-xs text-slate-500">Paid</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-slate-600 rounded-t" style={{height: "80px"}}></div>
                      <div className="text-xs text-slate-400 mt-2">48%</div>
                      <div className="text-xs text-slate-500">Organic</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-slate-600 rounded-t" style={{height: "40px"}}></div>
                      <div className="text-xs text-slate-400 mt-2">20%</div>
                      <div className="text-xs text-slate-500">Direct</div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-indigo-400 rounded-t" style={{height: "90px"}}></div>
                      <div className="text-xs text-indigo-400 mt-2">59%</div>
                      <div className="text-xs text-indigo-400">Paid</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-indigo-400 rounded-t" style={{height: "120px"}}></div>
                      <div className="text-xs text-indigo-400 mt-2">68%</div>
                      <div className="text-xs text-indigo-400">Organic</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-indigo-400 rounded-t" style={{height: "30px"}}></div>
                      <div className="text-xs text-indigo-400 mt-2">12%</div>
                      <div className="text-xs text-indigo-400">Direct</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast-Action Checklist */}
            <div className="bg-slate-800/30 p-6 rounded-xl border border-indigo-200/20 border-l-4 mb-8">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center">
                <i className="fas fa-bolt text-yellow-500 mr-2"></i> Fast-Action Checklist
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Launch value-exchange popups</label>
                    <p className="text-xs text-slate-500">For first-party data capture</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Migrate key pixels server-side</label>
                    <p className="text-xs text-slate-500">By Q3 at latest</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Add accessibility & ESG badges</label>
                    <p className="text-xs text-slate-500">Sitewide trust signals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweetable Takeaway */}
            <div className="bg-indigo-50/10 p-6 rounded-xl border border-indigo-200/20">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <i className="fab fa-twitter text-indigo-400 text-2xl mt-1"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Shrink This Playbook (265 chars):</h4>
                  <p className="text-slate-300 mb-3">
                    Own your data, tag server-side, and flaunt trust signals. The privacy-first web rewards brands that respect consent and prove responsibility—while recovering 40% of "lost" conversions.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => copyTweet("Own your data, tag server-side, and flaunt trust signals. The privacy-first web rewards brands that respect consent and prove responsibility—while recovering 40% of \"lost\" conversions.", 4)}
                    className="text-indigo-400 border-slate-600 hover:bg-slate-700/50"
                  >
                    {copiedTweet === 4 ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                    {copiedTweet === 4 ? "Copied!" : "Copy Tweet"}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Action Plan Section */}
          <section id="action" className="mb-16">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold tracking-wider text-yellow-400 uppercase">Section 5</span>
                <h2 className="text-3xl font-bold text-white">Action Plan & Next Steps</h2>
                <p className="text-slate-400 mt-2">Compress years of learning into 90 days</p>
              </div>
            </div>

            <div className="bg-yellow-50/10 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-12">
              <p className="text-slate-300 font-medium">
                Strategy without execution is hallucination. Here's a 90-day blueprint to pull AI automation, content velocity, and CRO into one revenue-driving engine—measured with crystal-clear KPIs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-hover bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">90-Day Roadmap</h3>
                
                <div className="relative">
                  <div className="border-l-2 border-yellow-200 pl-8 pb-8">
                    <div className="relative pb-8">
                      <div className="timeline-dot bg-yellow-500"></div>
                      <div className="text-sm font-semibold text-yellow-400 mb-1">Weeks 1-2</div>
                      <h4 className="font-medium mb-2 text-slate-200">Foundation Setup</h4>
                      <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                        <li>Funnel mapping & AI tool selection</li>
                        <li>Draft content cluster calendar</li>
                        <li>First-party data strategy</li>
                      </ul>
                    </div>
                    <div className="relative pb-8">
                      <div className="timeline-dot bg-yellow-500"></div>
                      <div className="text-sm font-semibold text-yellow-400 mb-1">Weeks 3-6</div>
                      <h4 className="font-medium mb-2 text-slate-200">Initial Launch</h4>
                      <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                        <li>First automation workflows</li>
                        <li>2+ posts/week cadence</li>
                        <li>Server-side GTM installed</li>
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="timeline-dot bg-yellow-500"></div>
                      <div className="text-sm font-semibold text-yellow-400 mb-1">Weeks 7-12</div>
                      <h4 className="font-medium mb-2 text-slate-200">Optimization</h4>
                      <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                        <li>Bayesian testing begins</li>
                        <li>Roll out personalization</li>
                        <li>Micro-conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-hover bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Core KPIs Dashboard</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-slate-400">Content Velocity</div>
                    <div className="text-xl font-bold text-white">≥9 posts/mo</div>
                    <div className="text-xs text-slate-500 mt-1">Target: 3.6× traffic lift</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-slate-400">Conversion Rate</div>
                    <div className="text-xl font-bold text-white">3.44%+</div>
                    <div className="text-xs text-slate-500 mt-1">Global e-com average</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-slate-400">Cost Per Lead</div>
                    <div className="text-xl font-bold text-white">Target -18%</div>
                    <div className="text-xs text-slate-500 mt-1">Benchmark quarterly</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-slate-400">Unknown Sources</div>
                    <div className="text-xl font-bold text-white">&lt;10%</div>
                    <div className="text-xs text-slate-500 mt-1">Post server-side tagging</div>
                  </div>
                </div>
              </div>
              
              <div className="card-hover bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">Free Strategy Call</h3>
                  <p className="text-blue-100 mb-6">Get customized quick wins for your funnel in 30 minutes—no hard sell.</p>
                  
                  <Link to="/contact" className="block w-full py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-50 transition text-center">
                    <Calendar className="inline mr-2 h-4 w-4" />
                    Book Free Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Deploy Your 2025 Marketing OS?</h3>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">Join hundreds of SMBs using this playbook to outmaneuver larger competitors and build sustainable growth.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold">
                  <Download className="mr-2 h-4 w-4" />
                  Get Full Playbook
                </Button>
                <Button variant="outline" className="px-8 py-3 rounded-lg font-bold">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </section>
        </article>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </PageLayout>
  );
};

export default DigitalMarketingPlaybook;
