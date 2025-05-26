
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const PortersFiveForces = () => {
  return (
    <PageLayout
      title="Porter's Five Forces"
      subtitle="Analyze Industry Competition & Profitability"
      currentPath="/porters-five-forces"
    >
      <div className="w-full max-w-none">
        <article className="w-full">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-400/20 rounded-full flex items-center justify-center">
                <i className="fas fa-chess-board text-3xl text-blue-400"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Porter's Five Forces</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-slate-300">
                A framework for analyzing the competitive forces that shape every industry and determine profitability.
              </p>
            </div>
          </section>

          {/* The Five Forces */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">The Five Competitive Forces</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-blue-400/30">
                <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                  <i className="fas fa-arrow-up mr-3"></i> 1. Threat of New Entrants
                </h3>
                <p className="text-slate-300 mb-4">
                  The ease with which new competitors can enter the market and threaten existing players.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Barriers to Entry:</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Capital requirements</li>
                      <li>• Economies of scale</li>
                      <li>• Brand loyalty</li>
                      <li>• Government regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Impact:</h4>
                    <p className="text-slate-300">High barriers = Lower threat = Higher profitability</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-purple-400/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                  <i className="fas fa-handshake mr-3"></i> 2. Bargaining Power of Suppliers
                </h3>
                <p className="text-slate-300 mb-4">
                  The ability of suppliers to drive up prices or reduce quality of goods and services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">High Power When:</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Few suppliers exist</li>
                      <li>• Unique products/services</li>
                      <li>• High switching costs</li>
                      <li>• Forward integration threat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Impact:</h4>
                    <p className="text-slate-300">High power = Increased costs = Lower profitability</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-green-400/30">
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  <i className="fas fa-users mr-3"></i> 3. Bargaining Power of Buyers
                </h3>
                <p className="text-slate-300 mb-4">
                  The ability of customers to drive down prices or demand higher quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">High Power When:</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Many alternatives available</li>
                      <li>• Low switching costs</li>
                      <li>• Price sensitivity</li>
                      <li>• Backward integration threat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Impact:</h4>
                    <p className="text-slate-300">High power = Price pressure = Lower margins</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                  <i className="fas fa-exchange-alt mr-3"></i> 4. Threat of Substitutes
                </h3>
                <p className="text-slate-300 mb-4">
                  The likelihood that customers will switch to alternative products or services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">High Threat When:</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Many substitute products</li>
                      <li>• Low switching costs</li>
                      <li>• Better price-performance</li>
                      <li>• Changing customer needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Impact:</h4>
                    <p className="text-slate-300">High threat = Price ceiling = Limited growth</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-red-400/30">
                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                  <i className="fas fa-sword mr-3"></i> 5. Competitive Rivalry
                </h3>
                <p className="text-slate-300 mb-4">
                  The intensity of competition among existing competitors in the industry.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">High Rivalry When:</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Many competitors</li>
                      <li>• Slow industry growth</li>
                      <li>• High fixed costs</li>
                      <li>• Similar products</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Impact:</h4>
                    <p className="text-slate-300">High rivalry = Price wars = Reduced profits</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">How to Apply Porter's Five Forces</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Define Your Industry",
                  description: "Clearly identify the specific industry or market segment you're analyzing."
                },
                {
                  step: 2,
                  title: "Analyze Each Force",
                  description: "Systematically evaluate each of the five forces using relevant data and insights."
                },
                {
                  step: 3,
                  title: "Rate Force Intensity",
                  description: "Score each force as weak, moderate, or strong based on your analysis."
                },
                {
                  step: 4,
                  title: "Identify Key Insights",
                  description: "Determine which forces have the greatest impact on industry profitability."
                },
                {
                  step: 5,
                  title: "Develop Strategy",
                  description: "Create strategies to strengthen your position relative to each force."
                }
              ].map((item) => (
                <div key={item.step} className="bg-slate-800/30 p-6 rounded-lg flex items-start">
                  <div className="w-10 h-10 bg-blue-400/20 text-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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

          {/* Strategic Implications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Strategic Implications</h2>
            <div className="bg-slate-800/30 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Industry Attractiveness</h3>
                  <p className="text-slate-300 mb-4">
                    Use the framework to assess whether an industry is attractive for investment or entry.
                  </p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Weak forces = Attractive industry</li>
                    <li>• Strong forces = Challenging industry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Competitive Positioning</h3>
                  <p className="text-slate-300 mb-4">
                    Develop strategies to improve your position relative to each force.
                  </p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Build barriers to entry</li>
                    <li>• Reduce buyer/supplier power</li>
                    <li>• Differentiate from substitutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Analyze Your Industry Today</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                Understanding competitive forces is crucial for strategic success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-3 rounded-full font-semibold transition">
                  Get Expert Analysis
                </Link>
                <Link to="/emotional-marketing-playbook" className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 transition">
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

export default PortersFiveForces;
