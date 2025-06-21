import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import useFaqToggle from "@/hooks/useFaqToggle";
import TestimonialsSection from "@/components/TestimonialsSection";
import Typed from 'typed.js';
import { ChevronDown, Zap, Target, Rocket, TrendingUp, Users, Award, Check } from 'lucide-react';
const Index = () => {
  // Use the FAQ toggle hook
  useFaqToggle();

  // Reference for Typed.js element
  const typedElement = useRef(null);
  const typed = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const carouselSlides = ["The Secret Weapon you aren't using", "but Elite Companies are", "and will never share with you or your SMB", "Ready to get actual real results?", "Meet The Digital Frontier Company"];

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Carousel rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/48401342.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/48401342.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
  return <MainLayout>
      {/* REDESIGNED HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 relative overflow-hidden flex items-center">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-slate-900/80"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2)_0%,transparent_50%)] animate-pulse"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/10 text-cyan-400/30 text-2xl font-mono font-bold animate-bounce" style={{
          animationDelay: '0s'
        }}>&lt;/&gt;</div>
          <div className="absolute top-3/5 left-1/5 text-cyan-400/30 text-2xl font-mono font-bold animate-bounce" style={{
          animationDelay: '2s'
        }}>{}</div>
          <div className="absolute top-1/3 right-1/6 text-cyan-400/30 text-2xl font-mono font-bold animate-bounce" style={{
          animationDelay: '4s'
        }}>[ ]</div>
          <div className="absolute bottom-1/3 right-1/4 text-cyan-400/30 text-2xl font-mono font-bold animate-bounce" style={{
          animationDelay: '6s'
        }}>∞</div>
          
          {/* Circuit elements */}
          <div className="absolute top-1/6 right-1/3 w-5 h-5 border-2 border-cyan-400/30 rounded-full animate-pulse" style={{
          animationDelay: '1s'
        }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400/50 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/5 left-1/6 w-5 h-5 border-2 border-cyan-400/30 rounded-full animate-pulse" style={{
          animationDelay: '3s'
        }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400/50 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-0">
            {/* Hero Text Content */}
            <div className="text-white space-y-6 rounded-full mx-0 my-[12px]">
              {/* Badge */}
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold animate-pulse px-0 py-0 rounded">◆ LIMITED TIME OPPORTUNITY</div>

              {/* Logo Integration - Centered and Larger */}
              <div className="flex justify-center mb-8 rounded-full">
                <div className="relative">
                  <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Logo" className="max-w-24 max-h-24 animate-pulse object-contain" />
                  <div className=""></div>
                </div>
              </div>

              {/* Interactive text area */}
              <div className="relative p-6 rounded-xl transition-all duration-300 cursor-pointer" style={{
              background: showFullText ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
              backdropFilter: showFullText ? 'blur(10px)' : 'none'
            }} onMouseEnter={() => setShowFullText(true)} onMouseLeave={() => setShowFullText(false)}>
                {/* Carousel headline */}
                <div className="relative bg-black/80 rounded-2xl p-8 mb-6 backdrop-blur-sm border border-white/10 min-h-[200px] flex items-center justify-center overflow-hidden">
                  {carouselSlides.map((slide, index) => <div key={index} className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${index === currentSlide ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                      <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text leading-tight px-4 text-transparent font-extrabold lg:text-5xl">
                        {slide}
                      </h1>
                    </div>)}
                  
                  {/* Carousel indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {carouselSlides.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-cyan-400/30'}`} />)}
                  </div>
                </div>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl font-semibold text-slate-300 mb-4 leading-relaxed">
                  They're spending millions on AI marketing teams. You can deploy the same technology for thousands—and get better results.
                </p>

                {/* Expandable body text */}
                <div className={`transition-all duration-600 overflow-hidden ${showFullText ? 'max-h-96 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-5'}`}>
                  <p className="text-lg text-slate-200 leading-relaxed mb-4">
                    <span className="text-cyan-400 font-bold">Big brands are scared.</span> For the first time ever, small businesses have access to the same AI-powered marketing strategies that built billion-dollar companies. Answer Engine Optimization, automated content generation, AI-driven lead scoring—it's all within reach.
                  </p>
                </div>

                {/* Hover hint */}
                <div className={`text-cyan-400/60 text-sm font-medium text-center transition-opacity duration-300 ${showFullText ? 'opacity-0' : 'opacity-70 animate-pulse'}`}>
                  ▸ Hover to reveal the full story
                </div>
              </div>

              {/* Countdown timer */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                <div className="text-red-400 text-sm font-semibold mb-2">◊ Early Adopter Pricing Ends In:</div>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-red-400">07</div>
                    <div className="text-xs text-red-300 uppercase tracking-wide">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-red-400">14</div>
                    <div className="text-xs text-red-300 uppercase tracking-wide">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-red-400">32</div>
                    <div className="text-xs text-red-300 uppercase tracking-wide">Minutes</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                  <span className="relative z-10">Level the Playing Field →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
                <Link to="/contact" className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105">
                  See Live Demo
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-slate-300 text-sm">Join</span>
                <div className="bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-lg text-cyan-400 font-semibold text-sm">
                  547+ SMBs Already Winning
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative flex items-center justify-center my-[33px]">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full animate-pulse">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-400">847%</div>
                    <div className="text-xs text-slate-300 uppercase tracking-wide">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-400">24/7</div>
                    <div className="text-xs text-slate-300 uppercase tracking-wide">AI Working</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-400">90%</div>
                    <div className="text-xs text-slate-300 uppercase tracking-wide">Time Saved</div>
                  </div>
                </div>

                {/* Feature list */}
                <ul className="space-y-3">
                  {['Automated content generation', 'AI-powered lead scoring', 'Answer Engine Optimization', 'Predictive analytics dashboard', '24/7 automated nurturing', 'Competitor intelligence'].map((feature, index) => <li key={index} className="flex items-center text-white text-sm">
                      <Check className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART MARKETING SECTION */}
      <section id="smart-marketing" className="df-smart-marketing animate-on-scroll">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="40" className="mb-4" />
            <h2>Smart Marketing Built for Speed, Scale, and Survival</h2>
          </div>

          <div className="intro-text" style={{
          maxWidth: "800px",
          margin: "0 auto 30px",
          textAlign: "center"
        }}>
            <p>We're not another digital marketing agency tossing generic playbooks. We are The Digital Frontier Company, a crew of engineers, analysts, and creative killers who live to squeeze more money out of your pipeline.</p>
            <p>Here's what Digital Frontier Marketing includes:</p>
          </div>

          <div className="df-service-list">
            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">
                  <Link to="/answer-engine-optimization" className="hover:text-blue-400 transition-colors">
                    Answer Engine Optimization (AEO):
                  </Link>
                </span>
                <span className="service-description">Get found on AI-driven engines like ChatGPT, Google's SGE, and Bing Copilot.</span>
              </div>
            </div>

            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">AI-Powered Automation:</span>
                <span className="service-description">Workflows that respond to leads instantly. Bots that never sleep. Follow-ups that never miss.</span>
              </div>
            </div>

            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">Performance SEO:</span>
                <span className="service-description">Not fluff. Not theory. SEO that ranks and banks.</span>
              </div>
            </div>

            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">
                  <Link to="/ad-funnel-blueprint" className="hover:text-blue-400 transition-colors">
                    Full Funnel Ads:
                  </Link>
                </span>
                <span className="service-description">From scroll-stopping Meta creatives to zero-click Google Search dominance.</span>
              </div>
            </div>

            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">Sales-Focused Email Sequences:</span>
                <span className="service-description">We write, build, and automate the follow-up.</span>
              </div>
            </div>

            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">Digital Consulting for SaaS & B2B:</span>
                <span className="service-description">Deep strategy for scaling tech products and recurring revenue models.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SERVICE CARDS SECTION */}
      <section className="py-20 relative overflow-hidden animate-on-scroll">
        {/* Animated background image with medium opacity */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse opacity-40" style={{
        backgroundImage: "url('/lovable-uploads/1382424c-884b-488c-a216-f685e32138c7.png')",
        filter: 'blur(1px)'
      }}></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-slate-900/80 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 animate-gradient-x"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="60" className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Turn Your Brand into a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Revenue Engine</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We don't just build campaigns—we engineer revenue machines that dominate markets and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI-Powered Marketing Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <img src="/lovable-uploads/e54d0fa9-0841-4307-be48-9729f84a20b3.png" alt="AI-Powered Marketing" className="w-full h-48 object-cover rounded-lg" onError={e => {
                console.error('Failed to load image:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }} onLoad={() => console.log('Image loaded successfully')} />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-xl text-cyan-300 text-center">
                AI-Powered Marketing
              </h3>
              <p className="mb-6 leading-relaxed text-slate-100 font-bold">
                Leverage cutting-edge artificial intelligence to automate and optimize your marketing campaigns for maximum impact.
              </p>
              <ul className="space-y-3 mb-8">
                {['Smart automation', 'Predictive analytics', 'Real-time optimization', 'ROI maximization'].map((feature, index) => <li key={index} className="flex items-center text-white rounded-tl-full rounded-full bg-[#074192]/0">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Explore AI Solutions
              </Link>
            </div>

            {/* Data-Driven Insights Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <img alt="Data-Driven Insights" onError={e => {
                console.error('Failed to load image:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }} onLoad={() => console.log('Image loaded successfully')} className="w-full h-48 rounded-lg object-cover" src="/lovable-uploads/78ed0175-99f6-4e35-bc1b-6193e2493053.png" />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-cyan-300 text-xl text-center">
                Data-Driven Insights
              </h3>
              <p className="mb-6 leading-relaxed text-base font-semibold text-slate-100">
                Transform raw data into actionable strategies that drive measurable business growth and competitive advantage.
              </p>
              <ul className="space-y-3 mb-8">
                {['Advanced analytics', 'Performance tracking', 'Custom reporting', 'Strategic insights'].map((feature, index) => <li key={index} className="flex items-center text-white rounded-full bg-[#074192]/0">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                See Our Analytics
              </Link>
            </div>

            {/* Answer Engine Optimization Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 md:col-span-2 lg:col-span-1 bg-slate-950/80">
              <div className="mb-6">
                <img src="/lovable-uploads/0c145136-0069-47e6-b799-655b514f21bf.png" alt="Answer Engine Optimization" className="w-full h-48 object-cover rounded-lg" onError={e => {
                console.error('Failed to load image:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }} onLoad={() => console.log('Image loaded successfully')} />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-cyan-300 text-xl text-center">
                Answer Engine Optimization
              </h3>
              <p className="mb-6 leading-relaxed font-bold text-slate-100">
                Dominate AI-powered search results and voice assistants to capture high-intent traffic before your competition.
              </p>
              <ul className="space-y-3 mb-8">
                {['AI search optimization', 'Voice search ready', 'Featured snippets', 'Future-proof SEO'].map((feature, index) => <li key={index} className="flex items-center text-white">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/answer-engine-optimization" className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Learn About AEO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE ENGINE SECTION */}
      <section className="df-revenue-engine animate-on-scroll">
        <div className="container">
          <div className="row" style={{
          alignItems: "center"
        }}>
            <div className="col-lg-6">
              <div className="df-neon-border mt-3 mb-5 mb-lg-3">
                <img alt="Digital Frontier Data Dashboard" className="img-fluid p-2 max-h-64 object-contain" style={{
                borderRadius: "10px"
              }} src="/lovable-uploads/8397f9b3-fc8b-4246-b8a6-166b26926970.png" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 style={{
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "20px"
            }}>Turn Your Brand into a Revenue Engine</h2>
              <div className="imagine-text">
                <p style={{
                fontSize: "16px",
                color: "#e0e0e0",
                marginBottom: "15px"
              }}>Imagine this: You wake up, check your dashboard, and sales are already climbing. Your ad spend? Low. Your return? Massive. And your brand? Getting noticed—on search, social, and beyond.</p>
              </div>
              <div className="content-text">
                <p style={{
                fontSize: "14px",
                color: "#cccccc",
                marginBottom: "15px"
              }}>This isn't a fantasy. It's what happens when businesses plug into Digital Frontier Marketing.</p>
                <p style={{
                fontSize: "14px",
                color: "#cccccc",
                marginBottom: 0
              }}>Most companies waste thousands on broken funnels, low-converting traffic, and "meh" strategies. We don't do mediocre. We engineer performance. <span className="highlight">Real clicks. Real conversions. Real cash.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GAIN SECTION */}
      <section className="df-what-youll-gain animate-on-scroll">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="40" className="mb-4" />
            <h2 className="section-title" style={{
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "15px"
          }}>What You'll <span>Gain</span></h2>
            <p className="section-subtitle" style={{
            fontSize: "16px",
            color: "#e0e0e0",
            maxWidth: "700px",
            margin: "0 auto"
          }}>Our comprehensive website analysis delivers actionable insights to help you outperform your competition.</p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>🔍</div>
                <h3>SEO Analysis</h3>
                <p>Detailed review of your site's search engine optimization with clear recommendations for improvement.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>📈</div>
                <h3>Conversion Insights</h3>
                <p>Expert evaluation of your conversion funnels with optimization tips to increase your sales.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>🔄</div>
                <h3>Competitor Analysis</h3>
                <p>See how you stack up against competitors and identify opportunities to gain market share.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>📋</div>
                <h3>Action Plan</h3>
                <p>Receive a prioritized list of improvements with clear next steps to implement changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="df-faq-section animate-on-scroll" id="faq">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="60" className="mb-4" />
            <h2>Frequently asked questions</h2>
          </div>

          <div className="df-faq-container">
            <div className="df-faq-item">
              <div className="df-faq-question">How is Digital Frontier different from other digital marketing agencies?</div>
              <div className="df-faq-answer">Most agencies sell services. We sell outcomes. Every campaign we build is tied to revenue, not vanity metrics. We don't hand off checklists—we execute strategies that scale.</div>
            </div>

            <div className="df-faq-item">
              <div className="df-faq-question">What's Answer Engine Optimization (AEO), and why does it matter?</div>
              <div className="df-faq-answer">AEO is the future of SEO. Instead of just ranking on Google, AEO helps you show up in AI-driven answers across search engines and voice assistants. It's where high-intent users go first.</div>
            </div>

            <div className="df-faq-item">
              <div className="df-faq-question">Can I use Digital Frontier for just one service (like SEO or ads)?</div>
              <div className="df-faq-answer">Yes, but we'll still audit your entire system. Why? Because ads don't work if your funnel's broken. SEO won't help if your site doesn't convert. Everything is connected—we treat it that way.</div>
            </div>

            <div className="df-faq-item">
              <div className="df-faq-question">Do you work with local businesses or just SaaS companies?</div>
              <div className="df-faq-answer">Both. We've scaled local eCommerce brands, service pros, and global SaaS startups. If your business runs on digital, we can build your frontier.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="df-final-cta animate-on-scroll">
        <div className="container">
          <div className="text-center mb-4">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company" width="80" className="mb-4" />
          </div>
          <h2>Ready to Own Your Digital Space?</h2>
          <p>If you're ready to dominate your market and make your competitors irrelevant, let's talk. Click below, and let's build something legendary.</p>
          <div className="text-center">
            <Link to="/contact" className="df-yellow-cta-button">Join Now</Link>
          </div>
          <p className="tagline mt-4">Digital Frontier—Marketing That Actually Works.</p>
        </div>
      </section>

      {/* LEARN MORE SECTION */}
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-8">Explore Digital Frontier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Digital Marketing Solutions */}
            <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Digital Marketing Solutions</h3>
              <div className="space-y-3">
                <Link to="/ad-funnel-blueprint" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Ad Funnel Blueprint</h4>
                  <p className="text-slate-300 text-sm">Optimize your advertising funnel from awareness to conversion with our proven blueprint.</p>
                </Link>
                
                <Link to="/generative-engine-optimization" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Generative Engine Optimization</h4>
                  <p className="text-slate-300 text-sm">Leverage AI-generated content to boost your visibility and engagement.</p>
                </Link>
                
                <Link to="/answer-engine-optimization" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Answer Engine Optimization</h4>
                  <p className="text-slate-300 text-sm">Optimize your content to appear in AI-driven answer boxes and voice search results.</p>
                </Link>
              </div>
            </div>
            
            {/* AI Marketing Foundations */}
            <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">AI Marketing Foundations</h3>
              <div className="space-y-3">
                <Link to="/technical" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Technical Breakdown</h4>
                  <p className="text-slate-300 text-sm">Understand how modern AI marketing tools work and how they can transform your business.</p>
                </Link>
                
                <Link to="/evolution" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Evolution of AI Marketing</h4>
                  <p className="text-slate-300 text-sm">Trace the history of AI in marketing from early automation to today's sophisticated systems.</p>
                </Link>
                
                <Link to="/regulations" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Regulations & Compliance</h4>
                  <p className="text-slate-300 text-sm">Navigate the complex legal landscape of AI-powered marketing and advertising.</p>
                </Link>
              </div>
            </div>
            
            {/* Industry Insights */}
            <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Industry Insights</h3>
              <div className="space-y-3">
                <Link to="/sectors" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Sector Spotlights</h4>
                  <p className="text-slate-300 text-sm">See how different industries are leveraging AI marketing for competitive advantage.</p>
                </Link>
                
                <Link to="/future" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Future Trends</h4>
                  <p className="text-slate-300 text-sm">Get ahead of the curve with insights into emerging AI marketing technologies.</p>
                </Link>
                
                <Link to="/ai-bias-in-advertising" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">AI Bias in Advertising</h4>
                  <p className="text-slate-300 text-sm">Understand the ethical implications of AI in advertising and how to address bias.</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Additional Resources Row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/about-us" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h4 className="text-xl font-bold text-blue-300 mb-2">About Digital Frontier</h4>
              <p className="text-slate-300">Learn more about our team, our mission, and how we're changing the digital marketing landscape.</p>
            </Link>
            
            <Link to="/contact" className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30 hover:border-blue-500/50 hover:bg-blue-900/30 transition-all">
              <h4 className="text-xl font-bold text-blue-300 mb-2">Ready to Transform Your Marketing?</h4>
              <p className="text-slate-300">Contact us today to discuss how we can help your business thrive in the digital frontier.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* HUBSPOT FORM SECTION */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
            <p className="text-slate-300">Ready to transform your digital marketing? Fill out the form below and let's discuss your goals.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="hs-form-frame" data-region="na1" data-form-id="5ab0be60-7598-4f9c-ac2f-72519d49d946" data-portal-id="48401342"></div>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default Index;