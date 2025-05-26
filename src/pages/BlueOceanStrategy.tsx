
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const BlueOceanStrategy = () => {
  return (
    <PageLayout
      title="Blue Ocean Strategy"
      subtitle="Create Uncontested Market Space"
      currentPath="/blue-ocean-strategy"
    >
      <div className="w-full max-w-none">
        <article className="w-full">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-400/20 rounded-full flex items-center justify-center">
                <i className="fas fa-water text-3xl text-cyan-400"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blue Ocean Strategy</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-slate-300">
                Move beyond competing in existing markets to create new demand and make competition irrelevant.
              </p>
            </div>
          </section>

          {/* Core Concept */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Blue Ocean vs Red Ocean</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-900/20 border border-red-400/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                  <i className="fas fa-tint mr-3"></i> Red Ocean Strategy
                </h3>
                <ul className="text-slate-300 space-y-3">
                  <li>• Compete in existing market space</li>
                  <li>• Beat the competition</li>
                  <li>• Exploit existing demand</li>
                  <li>• Make value-cost trade-off</li>
                  <li>• Align activities for differentiation or low cost</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-400/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                  <i className="fas fa-water mr-3"></i> Blue Ocean Strategy
                </h3>
                <ul className="text-slate-300 space-y-3">
                  <li>• Create uncontested market space</li>
                  <li>• Make competition irrelevant</li>
                  <li>• Create and capture new demand</li>
                  <li>• Break value-cost trade-off</li>
                  <li>• Align activities for differentiation AND low cost</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Four Actions Framework */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Four Actions Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <i className="fas fa-times-circle mr-3"></i> Eliminate
                </h3>
                <p className="text-slate-300 mb-3">
                  Which factors that the industry takes for granted should be eliminated?
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Unnecessary features</li>
                  <li>• Outdated practices</li>
                  <li>• Cost-adding elements</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-orange-400/30">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                  <i className="fas fa-arrow-down mr-3"></i> Reduce
                </h3>
                <p className="text-slate-300 mb-3">
                  Which factors should be reduced well below industry standard?
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Over-engineered features</li>
                  <li>• Excessive service</li>
                  <li>• Complex processes</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <i className="fas fa-arrow-up mr-3"></i> Raise
                </h3>
                <p className="text-slate-300 mb-3">
                  Which factors should be raised well above industry standard?
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li>• Key value drivers</li>
                  <li>• Customer experience</li>
                  <li>• Quality standards</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-blue-400/30">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                  <i className="fas fa-plus-circle mr-3"></i> Create
                </h3>
                <p className="text-slate-300 mb-3">
                  Which factors should be created that the industry has never offered?
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li>• New value propositions</li>
                  <li>• Innovative features</li>
                  <li>• Unique experiences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Value Innovation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Value Innovation</h2>
            <div className="bg-slate-800/30 p-6 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Value Innovation = Differentiation + Low Cost</h3>
                <p className="text-slate-300 text-lg">
                  Blue Ocean Strategy breaks the traditional trade-off between differentiation and low cost
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">Traditional Thinking</h4>
                  <p className="text-slate-300 mb-3">Companies must choose:</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Differentiation strategy (higher cost)</li>
                    <li>• Low-cost strategy (lower value)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">Blue Ocean Thinking</h4>
                  <p className="text-slate-300 mb-3">Companies can achieve both:</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Superior value for customers</li>
                    <li>• Lower cost structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Success Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Blue Ocean Success Stories</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Cirque du Soleil</h3>
                <p className="text-slate-300 mb-3">
                  Created a new market space between circus and theater
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <strong className="text-red-400">Eliminated:</strong>
                    <p className="text-slate-300">Animal acts, star performers</p>
                  </div>
                  <div>
                    <strong className="text-orange-400">Reduced:</strong>
                    <p className="text-slate-300">Fun, humor, thrill</p>
                  </div>
                  <div>
                    <strong className="text-green-400">Raised:</strong>
                    <p className="text-slate-300">Unique venue</p>
                  </div>
                  <div>
                    <strong className="text-blue-400">Created:</strong>
                    <p className="text-slate-300">Theme, artistic music/dance</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Southwest Airlines</h3>
                <p className="text-slate-300 mb-3">
                  Combined the speed of air travel with the low cost and frequency of car transport
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <strong className="text-red-400">Eliminated:</strong>
                    <p className="text-slate-300">Meals, lounges, seat selection</p>
                  </div>
                  <div>
                    <strong className="text-orange-400">Reduced:</strong>
                    <p className="text-slate-300">Price, hubs</p>
                  </div>
                  <div>
                    <strong className="text-green-400">Raised:</strong>
                    <p className="text-slate-300">Flight frequency, speed</p>
                  </div>
                  <div>
                    <strong className="text-blue-400">Created:</strong>
                    <p className="text-slate-300">Fun, friendly service</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Implementation Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Map Current Strategy Canvas",
                  description: "Visualize your current competitive profile and industry factors."
                },
                {
                  step: 2,
                  title: "Apply Four Actions Framework",
                  description: "Systematically challenge industry assumptions using eliminate, reduce, raise, create."
                },
                {
                  step: 3,
                  title: "Draw New Strategy Canvas",
                  description: "Create a new value curve that breaks away from competition."
                },
                {
                  step: 4,
                  title: "Test and Refine",
                  description: "Validate your blue ocean strategy with target customers."
                },
                {
                  step: 5,
                  title: "Execute and Monitor",
                  description: "Implement the strategy while building barriers to imitation."
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

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Create Your Blue Ocean?</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                Break free from competition and create uncontested market space.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition">
                  Start Your Journey
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

export default BlueOceanStrategy;
