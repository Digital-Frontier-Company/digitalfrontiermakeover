
import React, { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ChevronDown } from "lucide-react";

interface Strategy {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
}

const PsychologicalDigitalMarketingInsights = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const strategies: Strategy[] = [
    {
      id: 1,
      title: 'SWOT Analysis',
      description: 'Identify strengths, weaknesses, opportunities, and threats.',
      category: 'business',
      icon: 'fas fa-clipboard-list',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: "Porter's Five Forces",
      description: 'Analyze industry competition and profitability.',
      category: 'business',
      icon: 'fas fa-chess-board',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 3,
      title: 'Blue Ocean Strategy',
      description: 'Create uncontested market space making competition irrelevant.',
      category: 'business',
      icon: 'fas fa-water',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 4,
      title: 'Growth Hacking',
      description: 'Rapid experimentation across channels to fuel growth.',
      category: 'growth',
      icon: 'fas fa-chart-line',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 5,
      title: 'OKR Framework',
      description: 'Set & track objectives with measurable key results.',
      category: 'personal',
      icon: 'fas fa-bullseye',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 6,
      title: 'Inbound Marketing',
      description: 'Attract customers through valuable content.',
      category: 'marketing',
      icon: 'fas fa-magnet',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 7,
      title: 'Lean Startup',
      description: 'Build‑measure‑learn feedback loop for efficient product dev.',
      category: 'business',
      icon: 'fas fa-leaf',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      id: 8,
      title: 'Content Marketing',
      description: 'Create & distribute valuable content to retain customers.',
      category: 'marketing',
      icon: 'fas fa-pen-fancy',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 9,
      title: 'Personal Branding',
      description: 'Establish a prescribed image in minds of others.',
      category: 'personal',
      icon: 'fas fa-user-tie',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const filteredStrategies = activeTab === 'all' 
    ? strategies 
    : strategies.filter(s => s.category === activeTab);

  const faqItems = [
    {
      question: "What is emotional marketing?",
      answer: "Emotional marketing is a strategy that appeals to consumers' emotions to create a connection between your brand and your audience. It leverages psychological triggers to influence purchasing decisions and build brand loyalty."
    },
    {
      question: "How do psychological insights improve marketing?",
      answer: "Psychological insights help marketers understand consumer behavior, motivations, and decision-making processes. This understanding allows for more targeted messaging, better customer segmentation, and more effective campaign strategies."
    },
    {
      question: "What are the core emotions in marketing?",
      answer: "The core emotions commonly used in marketing include fear, joy, anger, surprise, trust, and anticipation. Each emotion can be strategically used to drive specific actions and responses from your target audience."
    }
  ];

  const downloadPlaybook = () => {
    alert('Thank you! In production this would trigger a PDF download.');
  };

  return (
    <PageLayout
      title="Psychological Digital Marketing Insights"
      subtitle="Master the Art of Emotional Marketing & Strategy"
      currentPath="/psychological-digital-marketing-insights"
    >
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-900 to-cyan-500 text-white rounded-xl mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master the Art of <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Emotional Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Learn how to connect with your audience on a deeper level and drive meaningful engagement through emotional triggers.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button 
              onClick={downloadPlaybook}
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Download Playbook
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:bg-opacity-10 transition">
              Learn Strategies
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Psychological Marketing Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-brain text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Deeper Connections</h3>
              <p className="text-gray-600">Build meaningful relationships with your audience by understanding their emotional drivers and psychological needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Conversions</h3>
              <p className="text-gray-600">Emotional triggers lead to faster decision-making and increased conversion rates across all marketing channels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Loyalty</h3>
              <p className="text-gray-600">Emotional connections create lasting brand loyalty that transcends price competition and market changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Blueprint Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-xl mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Master the Art of Strategy</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover proven frameworks to elevate your business growth and competitive edge in any market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Strategy Frameworks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Explore Our Strategy Frameworks</h3>
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {['all', 'business', 'marketing', 'growth', 'personal'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab === 'all' ? 'All Strategies' : tab}
              </button>
            ))}
          </div>

          {/* Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStrategies.map((strategy) => (
              <div key={strategy.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${strategy.color} flex items-center justify-center mr-4`}>
                    <i className={`${strategy.icon} text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold">{strategy.title}</h4>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{strategy.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs capitalize">
                    {strategy.category}
                  </span>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                    Learn More <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center rounded-xl">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Approach?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses who have revolutionized their strategies with our frameworks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition">
              <i className="fas fa-calendar-alt mr-2"></i> Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </PageLayout>
  );
};

export default PsychologicalDigitalMarketingInsights;
