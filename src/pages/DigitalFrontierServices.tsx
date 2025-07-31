import React, { useState, useEffect } from 'react';
import "../styles/digitalFrontierServices.css";

const DigitalFrontierServices = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 1,
      title: "AI Humanizer Agent",
      description: "Transform machine-generated content into natural human language. Perfect for content creators who need to humanize AI outputs.",
      features: ["Natural language patterns", "Emotional intelligence integration", "Contextual awareness"],
      icon: "fa-solid fa-robot",
      category: "ai",
      badge: "AI AGENT"
    },
    {
      id: 2,
      title: "Content Creation Agent",
      description: "Automated content generation for blogs, social media, and marketing materials with your brand voice and style.",
      features: ["Brand voice consistency", "SEO optimization", "Multi-format outputs"],
      icon: "fa-solid fa-pen-fancy",
      category: "ai",
      badge: "AI AGENT"
    },
    {
      id: 3,
      title: "Answer Engine Optimization",
      description: "Optimize for AI-powered search and answer engines to dominate where AI determines relevancy.",
      features: ["Future-proof SEO", "Voice search optimization", "AI visibility enhancement"],
      icon: "fa-solid fa-magnifying-glass",
      category: "marketing",
      badge: "MARKETING"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      description: "Comprehensive AI-enhanced marketing strategies for businesses seeking growth and market domination.",
      features: ["Data-driven strategies", "Competitive advantage", "Measurable ROI"],
      icon: "fa-solid fa-chart-line",
      category: "marketing",
      badge: "MARKETING"
    },
    {
      id: 5,
      title: "Predictive Analytics Agent",
      description: "Harness the power of predictive AI to forecast market trends, customer behavior, and business opportunities.",
      features: ["Future-focused insights", "Risk mitigation", "Strategic advantage"],
      icon: "fa-solid fa-brain",
      category: "ai",
      badge: "AI AGENT"
    },
    {
      id: 6,
      title: "AI Implementation Consulting",
      description: "Expert guidance on integrating AI solutions into your business operations for maximum efficiency and competitive edge.",
      features: ["Customized AI roadmap", "Technical expertise", "Change management support"],
      icon: "fa-solid fa-comments",
      category: "consulting",
      badge: "CONSULTING"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  // Create particles effect
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 4 + 1;
      
      // Random animation duration
      const duration = Math.random() * 20 + 10;
      
      // Random delay
      const delay = Math.random() * 10;
      
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      
      <div className="bg-black text-white font-sans min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Particles Background */}
        <div id="particles" className="particles"></div>

        {/* Header */}
        <header className="py-6 px-4 md:px-12 relative z-10">
          <div className="container mx-auto flex justify-center">
          <div className="w-48">
            <img 
              className="w-full" 
              src="/lovable-uploads/82ac39f2-c264-42ef-bb92-fa6731db497e.png" 
              alt="Digital Frontier Company logo with mountain peak design in cyan blue"
            />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="text-center px-4 md:px-12 py-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--df-bright-blue)' }}>
              Digital Frontier Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              AI-Powered Solutions for Market Domination. From custom AI agents to strategic marketing, we engineer your path to digital supremacy with cutting-edge technology and proven strategies.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'all' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'all' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'all' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveFilter('ai')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'ai' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'ai' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'ai' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                AI Agents
              </button>
              <button 
                onClick={() => setActiveFilter('marketing')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'marketing' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'marketing' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'marketing' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                Marketing
              </button>
              <button 
                onClick={() => setActiveFilter('consulting')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'consulting' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'consulting' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'consulting' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                Consulting
              </button>
            </div>
          </section>

          {/* Services Grid */}
          <section className="px-4 md:px-12 pb-24">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="glass-card rounded-xl p-6 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(0, 238, 255, 0.2)' }}>
                        <i className={`${service.icon} text-xl`} style={{ color: 'var(--df-cyan)' }}></i>
                      </div>
                      <span 
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(0, 238, 255, 0.2)',
                          color: 'var(--df-cyan)'
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--df-bright-blue)' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm mb-2" style={{ color: 'var(--df-cyan)' }}>KEY BENEFITS:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fa-solid fa-check mt-1 mr-2" style={{ color: 'var(--df-cyan)' }}></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      className="py-2 px-6 rounded-lg transition-all w-full border"
                      style={{ 
                        borderColor: 'var(--df-cyan)',
                        color: 'var(--df-cyan)'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="px-4 md:px-12 py-16 mx-4 md:mx-12 rounded-xl mb-24 glass-card">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: 'var(--df-bright-blue)' }}>
                Why Choose Digital Frontier?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>850+</div>
                  <p className="text-gray-300">Successful Projects</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>4.9/5</div>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>24/7</div>
                  <p className="text-gray-300">Support & Assistance</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-12 border-t border-gray-800 relative z-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="w-32 mx-auto md:mx-0">
                  <img 
                    className="w-full" 
                    src="/lovable-uploads/82ac39f2-c264-42ef-bb92-fa6731db497e.png" 
                    alt="Digital Frontier Company logo"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">About Us</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Services</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Blog</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Contact</span>
              </div>
              <div className="mt-6 md:mt-0 flex gap-4">
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--df-glass-bg)';
                  }}
                >
                  <i className="fa-brands fa-linkedin-in" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--df-glass-bg)';
                  }}
                >
                  <i className="fa-brands fa-twitter" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--df-glass-bg)';
                  }}
                >
                  <i className="fa-brands fa-instagram" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
              </div>
            </div>
            <div className="text-center mt-12 text-gray-500">
              <p>© 2023 Digital Frontier. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DigitalFrontierServices;