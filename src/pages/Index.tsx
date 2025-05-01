import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import useFaqToggle from "@/hooks/useFaqToggle";

const Index = () => {
  // Use the FAQ toggle hook
  useFaqToggle();

  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="df-hero-section">
        <div className="container">
          {/* Digital Frontier Logo */}
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company" className="df-logo" width="220" />
          </div>

          <div className="hero-content">
            <h1>With Answer Engine Optimization, Your Website Isn't Just a Website — It's a <span className="highlight">Money‑Making Machine</span></h1>
            <h2>Stop paying for pretty pixels. Your site should print money. At Digital Frontier we redesign pages around the only metric that matters—pipeline revenue.</h2>
            <div className="text-center mt-4">
              <a href="#contact" className="df-cta-button">Get Your Free Review</a>
            </div>

            <div className="df-trust-badges">
              <div className="df-trust-badge">
                <div className="df-trust-number"><span className="df-stat-counter">200</span>+</div>
                <div className="df-trust-label">Websites Analyzed</div>
              </div>
              <div className="df-trust-badge">
                <div className="df-trust-number"><span className="df-stat-counter">98</span>%</div>
                <div className="df-trust-label">Satisfaction Rate</div>
              </div>
              <div className="df-trust-badge">
                <div className="df-trust-number">+<span className="df-stat-counter">85</span>%</div>
                <div className="df-trust-label">Avg. Traffic Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART MARKETING SECTION */}
      <section className="df-smart-marketing">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="60" className="mb-4" />
            <h2>Smart Marketing Built for Speed, Scale, and Survival</h2>
          </div>

          <div className="intro-text" style={{ maxWidth: "800px", margin: "0 auto 30px", textAlign: "center" }}>
            <p>We're not another digital marketing agency tossing generic playbooks. We are The Digital Frontier Company, a crew of engineers, analysts, and creative killers who live to squeeze more money out of your pipeline.</p>
            <p>Here's what Digital Frontier Marketing includes:</p>
          </div>

          <div className="df-service-list">
            <div className="df-service-item">
              <div className="bullet">•</div>
              <div className="content">
                <span className="service-title">Answer Engine Optimization (AEO):</span>
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
                <span className="service-title">Full Funnel Ads:</span>
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
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6">
              <div className="df-neon-border mt-3 mb-5 mb-lg-3">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Digital Frontier Data Dashboard" className="img-fluid p-2" style={{ borderRadius: "10px" }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "20px" }}>Turn Your Brand into a Revenue Engine</h2>
              <div className="imagine-text">
                <p style={{ fontSize: "18px", color: "#e0e0e0", marginBottom: "15px" }}>Imagine this: You wake up, check your dashboard, and sales are already climbing. Your ad spend? Low. Your return? Massive. And your brand? Getting noticed—on search, social, and beyond.</p>
              </div>
              <div className="content-text">
                <p style={{ fontSize: "16px", color: "#cccccc", marginBottom: "15px" }}>This isn't a fantasy. It's what happens when businesses plug into Digital Frontier Marketing.</p>
                <p style={{ fontSize: "16px", color: "#cccccc", marginBottom: 0 }}>Most companies waste thousands on broken funnels, low-converting traffic, and "meh" strategies. We don't do mediocre. We engineer performance. <span className="highlight">Real clicks. Real conversions. Real cash.</span></p>
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
            <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 700, marginBottom: "15px" }}>What You'll <span>Gain</span></h2>
            <p className="section-subtitle" style={{ fontSize: "18px", color: "#e0e0e0", maxWidth: "700px", margin: "0 auto" }}>Our comprehensive website analysis delivers actionable insights to help you outperform your competition.</p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{ fontSize: "40px" }}>🔍</div>
                <h3>SEO Analysis</h3>
                <p>Detailed review of your site's search engine optimization with clear recommendations for improvement.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{ fontSize: "40px" }}>📈</div>
                <h3>Conversion Insights</h3>
                <p>Expert evaluation of your conversion funnels with optimization tips to increase your sales.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{ fontSize: "40px" }}>🔄</div>
                <h3>Competitor Analysis</h3>
                <p>See how you stack up against competitors and identify opportunities to gain market share.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{ fontSize: "40px" }}>📋</div>
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
              <div className="df-faq-answer">AEO is the future of SEO. Instead of just ranking on Google, AEO helps you show up in AI-generated answers across search engines and voice assistants. It's where high-intent users go first.</div>
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
            <a href="#contact" className="df-yellow-cta-button">Join Now</a>
          </div>
          <p className="tagline mt-4">Digital Frontier—Marketing That Actually Works.</p>
        </div>
      </section>

      {/* Add a "Learn More" section linking to other pages */}
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-8">Explore Digital Frontier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/technical" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Technical Breakdown</h3>
              <p className="text-slate-300">Understand how modern AI marketing tools work and how they can transform your business.</p>
            </Link>
            
            <Link to="/evolution" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Evolution of AI Marketing</h3>
              <p className="text-slate-300">Trace the history of AI in marketing from early automation to today's sophisticated systems.</p>
            </Link>
            
            <Link to="/regulations" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Regulations & Compliance</h3>
              <p className="text-slate-300">Navigate the complex legal landscape of AI-powered marketing and advertising.</p>
            </Link>
            
            <Link to="/sectors" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Sector Spotlights</h3>
              <p className="text-slate-300">See how different industries are leveraging AI marketing for competitive advantage.</p>
            </Link>
            
            <Link to="/future" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Future Trends</h3>
              <p className="text-slate-300">Get ahead of the curve with insights into emerging AI marketing technologies.</p>
            </Link>
            
            <Link to="/ai-bias-in-advertising" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-2">AI Bias in Advertising</h3>
              <p className="text-slate-300">Understand the ethical implications of AI in advertising and how to address bias.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
