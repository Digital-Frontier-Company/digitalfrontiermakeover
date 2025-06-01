import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import MainLayout from "@/components/layout/MainLayout";
import useFaqToggle from "@/hooks/useFaqToggle";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroCarousel from "@/components/HeroCarousel";
import Typed from 'typed.js';

const Index = () => {
  // Use the FAQ toggle hook
  useFaqToggle();

  // Reference for Typed.js element
  const typedElement = useRef(null);
  const typed = useRef(null);

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
      {/* NEW HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00BFFF] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066FF] rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
        </div>
        
        {/* Floating abstract shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-lg bg-[#00BFFF] opacity-10 floating" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-[#0066FF] opacity-10 floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 rounded-lg bg-[#00BFFF] opacity-10 floating" style={{animationDelay: '2s'}}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="mb-6">
            <img alt="Digital Frontier Company" className="mx-auto h-32 w-auto" src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            We don't just use AI to crunch numbers. We use it to <span className="gradient-text">Crush Markets</span>.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From raw data to ruthless execution, Digital Frontier plugs machine learning into every decision, 
            every strategy, every campaign—so your business doesn't just grow...
          </p>
          
          <p className="text-2xl sm:text-3xl font-semibold gradient-text">
            It dominates.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            You'll stop guessing. You'll start scaling. Measurable wins. Market momentum. Growth you can see in your bank account.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            This is war, and we bring the smart weapons.
          </p>
          
          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium flex items-center justify-center gap-2">
              <span className="text-yellow-400">⚡️</span>
              <span ref={typedElement} className="gradient-text"></span>
              <span className="cursor"></span>
            </h2>
            
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              At Digital Frontier, we weaponize AI-powered data to take you from strategy to full-blown market domination. 
              No fluff. Just hard growth, fast execution, and results you can measure in MRR.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00BFFF] rounded-lg hover:from-[#0055DD] hover:to-[#00AAEE] transition-all duration-300">
              Get Your Free Strategy Call
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <a href="#cases" className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300">
              See Our Success Stories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Client" />
                <img className="w-8 h-8 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <img className="w-8 h-8 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
              </div>
              <span className="ml-3">Trusted by 850+ brands</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1.5">4.9/5 (387 reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#services" className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* TestimonialsSection - Keeping this after the hero section */}
      <TestimonialsSection />

      {/* SMART MARKETING SECTION */}
      <section className="df-smart-marketing">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="60" className="mb-4" />
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
      <div className="hostinger-custom-about">
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
      <section className="df-revenue-engine">
        <div className="container">
          <div className="row" style={{
            alignItems: "center"
          }}>
            <div className="col-lg-6">
              <div className="df-neon-border mt-3 mb-5 mb-lg-3">
                <img alt="Digital Frontier Data Dashboard" className="img-fluid p-2" style={{
                  borderRadius: "10px"
                }} src="/lovable-uploads/8397f9b3-fc8b-4246-b8a6-166b26926970.png" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 style={{
                fontSize: "32px",
                fontWeight: 700,
                marginBottom: "20px"
              }}>Turn Your Brand into a Revenue Engine</h2>
              <div className="imagine-text">
                <p style={{
                  fontSize: "18px",
                  color: "#e0e0e0",
                  marginBottom: "15px"
                }}>Imagine this: You wake up, check your dashboard, and sales are already climbing. Your ad spend? Low. Your return? Massive. And your brand? Getting noticed—on search, social, and beyond.</p>
              </div>
              <div className="content-text">
                <p style={{
                  fontSize: "16px",
                  color: "#cccccc",
                  marginBottom: "15px"
                }}>This isn't a fantasy. It's what happens when businesses plug into Digital Frontier Marketing.</p>
                <p style={{
                  fontSize: "16px",
                  color: "#cccccc",
                  marginBottom: 0
                }}>Most companies waste thousands on broken funnels, low-converting traffic, and "meh" strategies. We don't do mediocre. We engineer performance. <span className="highlight">Real clicks. Real conversions. Real cash.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GAIN SECTION */}
      <section className="df-what-youll-gain">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="60" className="mb-4" />
            <h2 className="section-title" style={{
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "15px"
            }}>What You'll <span>Gain</span></h2>
            <p className="section-subtitle" style={{
              fontSize: "18px",
              color: "#e0e0e0",
              maxWidth: "700px",
              margin: "0 auto"
            }}>Our comprehensive website analysis delivers actionable insights to help you outperform your competition.</p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                  fontSize: "40px"
                }}>🔍</div>
                <h3>SEO Analysis</h3>
                <p>Detailed review of your site's search engine optimization with clear recommendations for improvement.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                  fontSize: "40px"
                }}>📈</div>
                <h3>Conversion Insights</h3>
                <p>Expert evaluation of your conversion funnels with optimization tips to increase your sales.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                  fontSize: "40px"
                }}>🔄</div>
                <h3>Competitor Analysis</h3>
                <p>See how you stack up against competitors and identify opportunities to gain market share.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                  fontSize: "40px"
                }}>📋</div>
                <h3>Action Plan</h3>
                <p>Receive a prioritized list of improvements with clear next steps to implement changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="df-faq-section" id="faq">
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
      <section className="df-final-cta">
        <div className="container">
          <div className="text-center mb-4">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company" width="120" className="mb-4" />
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
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
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
