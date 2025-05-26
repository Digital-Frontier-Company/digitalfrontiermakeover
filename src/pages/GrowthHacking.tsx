
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const GrowthHacking = () => {
  return (
    <PageLayout
      title="Growth Hacking"
      subtitle="Rapid Experimentation for Efficient Growth"
      currentPath="/growth-hacking"
    >
      <div className="w-full max-w-none">
        <article className="w-full">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-green-900/30 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-400/20 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-3xl text-green-400"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Growth Hacking</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-slate-300">
                A data-driven approach to rapidly scaling businesses through creative, low-cost marketing experiments.
              </p>
            </div>
          </section>

          {/* What is Growth Hacking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">What is Growth Hacking?</h2>
            <div className="bg-slate-800/30 p-6 rounded-lg mb-6">
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Growth hacking is a process of rapid experimentation across marketing channels and product development 
                to identify the most efficient ways to grow a business. It combines creativity, analytical thinking, 
                and social metrics to sell products and gain exposure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <i className="fas fa-rocket text-3xl text-green-400 mb-2"></i>
                  <h3 className="font-bold text-white">Fast</h3>
                  <p className="text-slate-300 text-sm">Quick iteration cycles</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-chart-bar text-3xl text-green-400 mb-2"></i>
                  <h3 className="font-bold text-white">Data-Driven</h3>
                  <p className="text-slate-300 text-sm">Metrics-based decisions</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-lightbulb text-3xl text-green-400 mb-2"></i>
                  <h3 className="font-bold text-white">Creative</h3>
                  <p className="text-slate-300 text-sm">Unconventional tactics</p>
                </div>
              </div>
            </div>
          </section>

          {/* Growth Funnel */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">The AARRR Growth Funnel</h2>
            <div className="space-y-4">
              {[
                {
                  letter: "A",
                  stage: "Acquisition",
                  description: "How do users find you?",
                  metrics: ["Traffic sources", "Cost per acquisition", "Channel effectiveness"],
                  icon: "fas fa-bullhorn"
                },
                {
                  letter: "A", 
                  stage: "Activation",
                  description: "Do users have a great first experience?",
                  metrics: ["Sign-up rate", "Time to first value", "Onboarding completion"],
                  icon: "fas fa-play-circle"
                },
                {
                  letter: "R",
                  stage: "Retention", 
                  description: "Do users come back?",
                  metrics: ["Daily/Monthly active users", "Churn rate", "Session frequency"],
                  icon: "fas fa-redo"
                },
                {
                  letter: "R",
                  stage: "Revenue",
                  description: "How do you monetize?",
                  metrics: ["Conversion rate", "Average revenue per user", "Lifetime value"],
                  icon: "fas fa-dollar-sign"
                },
                {
                  letter: "R",
                  stage: "Referral",
                  description: "Do users tell others?",
                  metrics: ["Viral coefficient", "Net promoter score", "Share rate"],
                  icon: "fas fa-share-alt"
                }
              ].map((stage, index) => (
                <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-green-400/30">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={stage.icon}></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{stage.stage}</h3>
                      <p className="text-slate-300 mb-3">{stage.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.metrics.map((metric, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Growth Hacking Tactics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Popular Growth Hacking Tactics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Viral Loops",
                  description: "Users invite others naturally",
                  example: "Dropbox's referral program",
                  icon: "fas fa-virus"
                },
                {
                  title: "Content Marketing",
                  description: "Valuable content attracts users",
                  example: "HubSpot's free tools",
                  icon: "fas fa-pen-fancy"
                },
                {
                  title: "Product-Led Growth",
                  description: "Product itself drives acquisition",
                  example: "Slack's team invitations",
                  icon: "fas fa-cog"
                },
                {
                  title: "SEO Optimization",
                  description: "Organic search visibility",
                  example: "Zillow's location pages",
                  icon: "fas fa-search"
                },
                {
                  title: "Social Proof",
                  description: "Leverage user testimonials",
                  example: "Booking.com's urgency messages",
                  icon: "fas fa-users"
                },
                {
                  title: "Freemium Model",
                  description: "Free tier with paid upgrades",
                  example: "Spotify's premium conversion",
                  icon: "fas fa-gift"
                }
              ].map((tactic, index) => (
                <div key={index} className="bg-slate-800/30 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <i className={`${tactic.icon} text-2xl text-green-400 mr-3`}></i>
                    <h3 className="text-xl font-bold text-white">{tactic.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-3">{tactic.description}</p>
                  <p className="text-green-400 text-sm font-medium">Example: {tactic.example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Growth Hacking Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">The Growth Hacking Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Set Up Analytics",
                  description: "Implement tracking for all key metrics across the funnel."
                },
                {
                  step: 2,
                  title: "Identify Bottlenecks",
                  description: "Find where you're losing the most users in your funnel."
                },
                {
                  step: 3,
                  title: "Generate Ideas",
                  description: "Brainstorm experiments to address the biggest bottlenecks."
                },
                {
                  step: 4,
                  title: "Prioritize Tests",
                  description: "Score experiments by impact, confidence, and ease (ICE framework)."
                },
                {
                  step: 5,
                  title: "Run Experiments",
                  description: "Execute tests with proper controls and statistical significance."
                },
                {
                  step: 6,
                  title: "Analyze Results",
                  description: "Learn from successes and failures to inform future tests."
                }
              ].map((item) => (
                <div key={item.step} className="bg-slate-800/30 p-6 rounded-lg flex items-start">
                  <div className="w-10 h-10 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tools & Metrics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Essential Tools & Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Analytics Tools</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Google Analytics - Web analytics</li>
                  <li>• Mixpanel - Event tracking</li>
                  <li>• Hotjar - User behavior</li>
                  <li>• Amplitude - Product analytics</li>
                  <li>• Segment - Data integration</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Key Metrics</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Customer Acquisition Cost (CAC)</li>
                  <li>• Lifetime Value (LTV)</li>
                  <li>• Viral Coefficient (K-factor)</li>
                  <li>• Monthly Recurring Revenue (MRR)</li>
                  <li>• Net Promoter Score (NPS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-green-900/30 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Hack Your Growth?</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                Start experimenting and unlock explosive growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition">
                  Start Growing
                </Link>
                <Link to="/emotional-marketing-playbook" className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-400/10 transition">
                  Explore More Strategies
                </Link>
              </div>
            </div>
          </section>
        </article>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </PageLayout>
  );
};

export default GrowthHacking;
