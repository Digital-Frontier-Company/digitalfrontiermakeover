import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import useFaqToggle from "@/hooks/useFaqToggle";
import TestimonialsSection from "@/components/TestimonialsSection";
import Typed from 'typed.js';
import { ChevronDown, Zap, Target, Rocket, TrendingUp, Users, Award } from 'lucide-react';

const Index = () => {
  // Use the FAQ toggle hook
  useFaqToggle();

  // Reference for Typed.js element
  const typedElement = useRef(null);
  const typed = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Initialize Typed.js on component mount
  useEffect(() => {
    if (typedElement.current) {
      typed.current = new Typed(typedElement.current, {
        strings: ['Outthink', 'Outperform', 'Outgrow'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true,
        showCursor: false
      });
    }

    // Clean up on component unmount
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <MainLayout>
      {/* HERO SECTION - RULE OF THIRDS LAYOUT */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800">
        {/* Interactive Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="border border-blue-400/20 relative animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}

          {/* Interactive Mouse Trail */}
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
        </div>

        {/* Rule of Thirds Grid Layout */}
        <div className="relative z-10 h-screen grid grid-cols-3 grid-rows-3 gap-0">
          
          {/* TOP LEFT - Logo and Brand Identity */}
          <div className="flex items-center justify-center p-8 animate-fade-in">
            <div className="text-center transform hover:scale-110 transition-all duration-500">
              <img 
                alt="Digital Frontier Company" 
                className="mx-auto h-20 w-auto drop-shadow-2xl animate-pulse"
                src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" 
              />
              <div className="mt-4 text-blue-400 text-sm font-medium tracking-wider animate-bounce">
                EST. 2024
              </div>
            </div>
          </div>

          {/* TOP CENTER - Main Headline */}
          <div className="flex items-center justify-center p-8 animate-scale-in">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 animate-fade-in">
                We don't just use AI to 
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                  Crush Markets
                </span>
              </h1>
            </div>
          </div>

          {/* TOP RIGHT - Stats/Trust Indicators */}
          <div className="flex items-center justify-center p-8 animate-slide-in-right">
            <div className="grid grid-cols-1 gap-4 text-center">
              <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-blue-400">850+</div>
                <div className="text-sm text-gray-300">Brands Trust Us</div>
              </div>
              <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-sm text-gray-300">Client Rating</div>
              </div>
            </div>
          </div>

          {/* MIDDLE LEFT - Key Benefits */}
          <div className="flex items-center justify-center p-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                <Zap className="w-6 h-6 text-yellow-400 group-hover:animate-spin" />
                <span className="font-medium">AI-Powered Growth</span>
              </div>
              <div className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                <Target className="w-6 h-6 text-red-400 group-hover:animate-pulse" />
                <span className="font-medium">Precision Targeting</span>
              </div>
              <div className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                <TrendingUp className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
                <span className="font-medium">Measurable Results</span>
              </div>
            </div>
          </div>

          {/* CENTER - Dynamic Typed Text and Core Message */}
          <div className="flex items-center justify-center p-8 relative">
            <div className="text-center z-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-4xl font-medium flex items-center justify-center gap-2 mb-4">
                  <span className="text-yellow-400 drop-shadow-lg animate-pulse">⚡️</span>
                  <span ref={typedElement} className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"></span>
                  <span className="cursor animate-pulse">|</span>
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 max-w-md mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                From raw data to ruthless execution. We weaponize AI-powered data for full-blown market domination.
              </p>

              {/* Interactive CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="group relative px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center">
                    Get Your Free Strategy Call
                    <Rocket className="ml-2 w-4 h-4 group-hover:animate-bounce" />
                  </span>
                </Link>
                
                <a 
                  href="#testimonials" 
                  className="group px-8 py-4 text-base font-semibold text-white border border-blue-500/50 rounded-lg hover:bg-blue-900/20 hover:border-blue-400/70 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    See Success Stories
                    <Award className="ml-2 w-4 h-4 group-hover:animate-pulse" />
                  </span>
                </a>
              </div>
            </div>

            {/* Central Focal Point Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-4 h-4 bg-blue-400/50 rounded-full animate-ping" />
              <div className="absolute w-2 h-2 bg-blue-400 rounded-full" />
            </div>
          </div>

          {/* MIDDLE RIGHT - Social Proof */}
          <div className="flex items-center justify-center p-8 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="mb-4">
                <div className="flex -space-x-2 justify-center mb-3">
                  <img className="w-8 h-8 rounded-full border-2 border-blue-500/50 shadow-lg hover:scale-110 transition-transform duration-300" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Client" />
                  <img className="w-8 h-8 rounded-full border-2 border-blue-500/50 shadow-lg hover:scale-110 transition-transform duration-300" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                  <img className="w-8 h-8 rounded-full border-2 border-blue-500/50 shadow-lg hover:scale-110 transition-transform duration-300" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                </div>
              </div>
              <p className="text-sm text-gray-400 animate-fade-in">
                Join 850+ growing brands
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT - Value Proposition */}
          <div className="flex items-center justify-center p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2 animate-pulse" />
                <p className="text-sm text-gray-300">
                  <strong className="text-blue-400">No fluff.</strong><br />
                  Just hard growth & fast execution
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM CENTER - Scroll Indicator */}
          <div className="flex items-end justify-center p-8 pb-12">
            <a 
              href="#smart-marketing" 
              className="group animate-bounce hover:animate-none inline-flex flex-col items-center justify-center text-blue-300 hover:text-blue-400 transition-colors duration-300"
            >
              <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore More</span>
              <div className="w-10 h-10 rounded-full border-2 border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
              </div>
            </a>
          </div>

          {/* BOTTOM RIGHT - Call to Action Reinforcement */}
          <div className="flex items-center justify-center p-8 animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 hover:bg-gradient-to-br hover:from-yellow-900/30 hover:to-orange-900/30 transition-all duration-300 hover:scale-105">
                <div className="text-yellow-400 text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-300">
                  <strong className="text-yellow-400">This is war,</strong><br />
                  we bring smart weapons
                </p>
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

      {/* CUSTOM ABOUT SECTION */}
      <div className="hostinger-custom-about animate-on-scroll">
        <div className="about-container-inner">
          <div className="about-content-box">
            <h2>So What is Digital Frontier Company?</h2>

            <p className="intro-text">We are Engineers of Connection.</p>

            <p>Based in Memphis, TN, we don't just help businesses get noticed—we make sure they get remembered.</p>
            <p>From SEO and social media to high-converting ad campaigns, we engineer magnetic experiences that pull your audience in and turn them into die-hard customers.</p>

            <h3>SEO & AEO (Answer Engine Optimization)</h3>
            <p>We don't just boost your rankings—we position your brand as the definitive answer customers are searching for. AI is the new search engine, and we make sure you dominate where AI determines relevancy.</p>

            <h3>Social Media Marketing</h3>
            <p>Forget generic content—our strategies ignite engagement, build loyalty, and inspire action. We've mastered the art of turning likes into loyalty and conversations into conversions.</p>

            <h3>Smart Tech, Smarter Marketing</h3>
            <p>AI doesn't replace human creativity—it supercharges it. We leverage AI to analyze data, optimize campaigns, and forecast trends, but at the heart of every strategy is bold, people-driven storytelling.</p>
            <p>Our approach cuts waste, maximizes ROI, and gives you an unfair edge over your competition.</p>

            <h3>Your Growth is Our Mission</h3>
            <p>At Digital Frontier, we ask just one question:</p>
            <p><em>Are you satisfied with your current brand impact and the stories people share about your business?</em></p>
            <p>If the answer was yes, let's be honest—you wouldn't be reading this.</p>
            <p>Whether you're a startup ready to disrupt or an established brand looking to dominate, we scale your business with speed, precision, and vision tailored uniquely to your brand.</p>

            <h3>Ready to Own Your Digital Space?</h3>
            <p>If you're ready to dominate your market and make your competitors irrelevant, let's talk.</p>
            <p>Click below, and let's build something legendary.</p>

            <div className="button-placeholder">
              <Link to="/contact" className="df-cta-button">Let's Talk Growth</Link>
            </div>

            <p className="final-tagline">Digital Frontier—Marketing That Actually Works.</p>
          </div>
        </div>
      </div>

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
    </MainLayout>
  );
};

export default Index;
