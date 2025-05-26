
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const SWOTAnalysis = () => {
  return (
    <PageLayout
      title="SWOT Analysis"
      subtitle="Identify Strengths, Weaknesses, Opportunities & Threats"
      currentPath="/swot-analysis"
    >
      <div className="w-full max-w-none">
        <article className="w-full">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-400/20 rounded-full flex items-center justify-center">
                <i className="fas fa-clipboard-list text-3xl text-cyan-400"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SWOT Analysis</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-slate-300">
                A comprehensive framework for evaluating your business position through internal and external factors.
              </p>
            </div>
          </section>

          {/* What is SWOT */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">What is SWOT Analysis?</h2>
            <div className="bg-slate-800/30 p-6 rounded-lg mb-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                SWOT Analysis is a strategic planning tool that evaluates the Strengths, Weaknesses, Opportunities, and Threats 
                involved in a project or business venture. It involves specifying the objective of the business venture and 
                identifying the internal and external factors that are favorable and unfavorable to achieving that objective.
              </p>
            </div>
          </section>

          {/* SWOT Matrix */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">The SWOT Matrix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 border border-green-400/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <i className="fas fa-plus-circle mr-2"></i> Strengths
                </h3>
                <p className="text-slate-300 mb-4">Internal positive factors that give you an advantage</p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Unique expertise or skills</li>
                  <li>• Strong brand reputation</li>
                  <li>• Financial resources</li>
                  <li>• Efficient processes</li>
                  <li>• Market position</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-400/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <i className="fas fa-minus-circle mr-2"></i> Weaknesses
                </h3>
                <p className="text-slate-300 mb-4">Internal negative factors that could be improved</p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Limited resources</li>
                  <li>• Skill gaps</li>
                  <li>• Weak brand recognition</li>
                  <li>• Outdated technology</li>
                  <li>• Poor location</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-400/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                  <i className="fas fa-lightbulb mr-2"></i> Opportunities
                </h3>
                <p className="text-slate-300 mb-4">External positive factors you can capitalize on</p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Market growth</li>
                  <li>• New technologies</li>
                  <li>• Regulatory changes</li>
                  <li>• Competitor weaknesses</li>
                  <li>• Customer trends</li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-400/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                  <i className="fas fa-exclamation-triangle mr-2"></i> Threats
                </h3>
                <p className="text-slate-300 mb-4">External negative factors that could harm your business</p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Economic downturns</li>
                  <li>• New competitors</li>
                  <li>• Changing regulations</li>
                  <li>• Technology disruption</li>
                  <li>• Market saturation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Conduct */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">How to Conduct a SWOT Analysis</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Define Your Objective",
                  description: "Clearly state what you're analyzing - a specific project, department, or entire organization."
                },
                {
                  step: 2,
                  title: "Gather Your Team",
                  description: "Include diverse perspectives from different departments and levels of your organization."
                },
                {
                  step: 3,
                  title: "Brainstorm Each Category",
                  description: "Start with strengths and weaknesses (internal), then move to opportunities and threats (external)."
                },
                {
                  step: 4,
                  title: "Prioritize and Analyze",
                  description: "Rank items by importance and analyze relationships between different factors."
                },
                {
                  step: 5,
                  title: "Develop Action Plans",
                  description: "Create strategies that leverage strengths, address weaknesses, capitalize on opportunities, and mitigate threats."
                }
              ].map((item) => (
                <div key={item.step} className="bg-slate-800/30 p-6 rounded-lg flex items-start">
                  <div className="w-10 h-10 bg-cyan-400/20 text-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Benefits of SWOT Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Provides a comprehensive view of your situation",
                "Helps identify competitive advantages",
                "Reveals potential risks and challenges",
                "Guides strategic decision-making",
                "Encourages collaborative thinking",
                "Creates awareness of external factors"
              ].map((benefit, index) => (
                <div key={index} className="bg-slate-800/30 p-4 rounded-lg flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3"></i>
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Analyze Your Business?</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                Start your SWOT analysis today and gain valuable insights into your strategic position.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition">
                  Get Started
                </Link>
                <Link to="/emotional-marketing-playbook" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400/10 transition">
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

export default SWOTAnalysis;
