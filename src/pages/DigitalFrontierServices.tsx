import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, TrendingUp, Users, Globe, Zap, BarChart3, Target, MessageSquare, Search, Palette, Code, Database, Shield } from 'lucide-react';

const DigitalFrontierServices = () => {
  const aiServices = [
    {
      title: "AI-Powered Content Creation",
      description: "Generate high-quality, SEO-optimized content using advanced AI algorithms that understand your brand voice and target audience.",
      features: ["Blog posts & articles", "Social media content", "Email campaigns", "Product descriptions"],
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: "Intelligent Marketing Automation",
      description: "Streamline your marketing processes with AI-driven automation that personalizes customer journeys and maximizes conversions.",
      features: ["Lead scoring", "Behavioral triggers", "Personalized campaigns", "Predictive analytics"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "AI Analytics & Insights",
      description: "Leverage machine learning to uncover hidden patterns in your data and make data-driven decisions that drive growth.",
      features: ["Customer behavior analysis", "Performance predictions", "ROI optimization", "Trend forecasting"],
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const marketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Dominate search results with our comprehensive SEO strategies that increase organic visibility and drive qualified traffic.",
      features: ["Keyword research", "On-page optimization", "Link building", "Technical SEO"],
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Maximize your ad spend with targeted PPC campaigns that generate immediate results and measurable ROI.",
      features: ["Google Ads management", "Facebook advertising", "Conversion optimization", "Budget management"],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all major social media platforms with compelling content.",
      features: ["Content strategy", "Community management", "Influencer partnerships", "Social advertising"],
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers and provide exceptional user experiences.",
      features: ["Custom web design", "E-commerce development", "Mobile optimization", "User experience design"],
      icon: <Palette className="w-8 h-8" />
    }
  ];

  const consultingServices = [
    {
      title: "Digital Strategy Consulting",
      description: "Develop comprehensive digital strategies that align with your business goals and drive sustainable growth.",
      features: ["Market analysis", "Competitive research", "Growth planning", "Technology roadmap"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Marketing Technology Integration",
      description: "Seamlessly integrate marketing tools and platforms to create a unified ecosystem that maximizes efficiency.",
      features: ["CRM setup", "Marketing automation", "Analytics configuration", "Tool integration"],
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Performance Optimization",
      description: "Continuously monitor and optimize your digital marketing performance to ensure maximum ROI and growth.",
      features: ["Conversion rate optimization", "A/B testing", "Performance audits", "Growth optimization"],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="gradient-bg">
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Header Navigation */}
      <nav className="relative z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png" 
              alt="Digital Frontier Company Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="cta-button-secondary">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h1 className="hero-title">
            Digital Frontier Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Revolutionize your digital presence with our cutting-edge AI-powered marketing solutions. 
            We combine advanced technology with proven strategies to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="cta-button">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="cta-button-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 slide-in-left">
          <div className="badge-ai inline-block mb-4">AI-Powered Solutions</div>
          <h2 className="category-header">Artificial Intelligence Services</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your marketing efforts and stay ahead of the competition.
          </p>
        </div>
        
        <div className="services-grid">
          {aiServices.map((service, index) => (
            <div key={index} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-frontier-cyan mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-frontier-cyan rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 slide-in-left">
          <div className="badge-marketing inline-block mb-4">Digital Marketing</div>
          <h2 className="category-header">Core Marketing Services</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to increase your online visibility and drive measurable results.
          </p>
        </div>
        
        <div className="services-grid">
          {marketingServices.map((service, index) => (
            <div key={index} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-frontier-cyan mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-frontier-cyan rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 slide-in-left">
          <div className="badge-consulting inline-block mb-4">Strategic Consulting</div>
          <h2 className="category-header">Consulting & Strategy</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Expert guidance and strategic planning to help your business navigate the digital landscape and achieve sustainable growth.
          </p>
        </div>
        
        <div className="services-grid">
          {consultingServices.map((service, index) => (
            <div key={index} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-frontier-cyan mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-frontier-cyan rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="dark-container p-12 text-center fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already revolutionized their marketing with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="cta-button">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="cta-button-secondary">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 text-lg">
              Ready to start your digital transformation? Contact us today for a personalized consultation.
            </p>
          </div>
          
          <div className="contact-form">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input type="text" className="form-input" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-white mb-2">Company</label>
                <input type="text" className="form-input" placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-white mb-2">Phone</label>
                <input type="tel" className="form-input" placeholder="Your phone number" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white mb-2">Message</label>
                <textarea className="form-input h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="cta-button">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalFrontierServices;