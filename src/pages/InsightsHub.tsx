import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Clock, TrendingUp, Brain, Target, Zap, Users, Award, BookOpen, Play } from "lucide-react";
import FAQSection from "@/components/FAQSection";
const InsightsHub = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const featuredPlaybooks = [{
    title: "The Complete AEO Playbook: Dominating AI Search Results",
    description: "Master Answer Engine Optimization with our 47-page comprehensive guide. Learn to rank #1 in ChatGPT, Claude, and voice search results.",
    category: "Answer Engine Optimization",
    readTime: "12 min read",
    image: "/lovable-uploads/783ff8d4-b039-4c59-bf19-1ecdb0b9fb9a.png",
    slug: "/playbooks/complete-aeo-guide",
    featured: true,
    tags: ["AEO", "AI Search", "Voice Search", "Featured Snippets"]
  }, {
    title: "Stop Losing Traffic to AI Search: Advanced GEO Strategies",
    description: "The complete guide to Generative Engine Optimization. Capture traffic from ChatGPT, Claude, and other AI search platforms before your competitors do.",
    category: "Generative Engine Optimization",
    readTime: "18 min read",
    image: "/lovable-uploads/fc7766a1-d8c1-4e01-b409-72d965448fd0.png",
    slug: "/playbooks/geo-advanced-strategies",
    featured: true,
    tags: ["GEO", "AI Search", "Traffic Recovery", "Generative Search"]
  }, {
    title: "Predictive Analytics for Marketing: The Executive Guide",
    description: "Transform your marketing data into competitive advantage with machine learning models that predict customer behavior and campaign ROI.",
    category: "Data Science",
    readTime: "15 min read",
    image: "/lovable-uploads/4b409906-2e02-4aea-b041-c9e725fdae78.png",
    slug: "/playbooks/predictive-analytics",
    featured: true,
    tags: ["Predictive Analytics", "Machine Learning", "ROI", "Data Science"]
  }];
  const additionalPlaybooks = [{
    title: "ChatGPT Marketing Prompts That Convert",
    description: "50+ tested prompts for content creation, ad copy, and customer research",
    category: "AI Tools",
    readTime: "8 min read",
    slug: "/playbooks/chatgpt-prompts",
    tags: ["ChatGPT", "AI Prompts", "Content Marketing"]
  }, {
    title: "Voice Search Optimization for B2B",
    description: "Position your brand for the next wave of search behavior",
    category: "SEO Strategy",
    readTime: "10 min read",
    slug: "/playbooks/voice-search-b2b",
    tags: ["Voice Search", "B2B SEO", "Future Marketing"]
  }, {
    title: "AI-Powered Lead Scoring Models",
    description: "Build machine learning models that identify your best prospects",
    category: "Lead Generation",
    readTime: "14 min read",
    slug: "/playbooks/ai-lead-scoring",
    tags: ["Lead Scoring", "AI Models", "Sales Automation"]
  }, {
    title: "Content Clusters for AI Search",
    description: "Structure your content to dominate AI-powered search engines",
    category: "Content Strategy",
    readTime: "11 min read",
    slug: "/playbooks/ai-content-clusters",
    tags: ["Content Clusters", "AI Search", "Topic Authority"]
  }, {
    title: "Automated Email Sequences with AI",
    description: "Create hyper-personalized email campaigns that scale",
    category: "Email Marketing",
    readTime: "9 min read",
    slug: "/playbooks/ai-email-automation",
    tags: ["Email Automation", "Personalization", "AI Writing"]
  }, {
    title: "ROI Measurement for AI Marketing",
    description: "Track and prove the value of your AI marketing investments",
    category: "Analytics",
    readTime: "13 min read",
    slug: "/playbooks/ai-marketing-roi",
    tags: ["ROI Measurement", "Marketing Analytics", "AI Attribution"]
  }];
  const categories = [{
    name: "Answer Engine Optimization",
    icon: Target,
    count: 8
  }, {
    name: "AI Advertising",
    icon: Zap,
    count: 12
  }, {
    name: "Predictive Analytics",
    icon: TrendingUp,
    count: 6
  }, {
    name: "Content Strategy",
    icon: BookOpen,
    count: 15
  }, {
    name: "Marketing Automation",
    icon: Brain,
    count: 10
  }];
  return <>
      <Helmet>
        <title>AI Marketing Playbooks & Insights Hub | Digital Frontier</title>
        <meta name="description" content="Master AI-powered marketing with our comprehensive playbooks. Learn AEO, AI funnel ads, predictive analytics, and advanced automation strategies from industry experts." />
        <meta name="keywords" content="AEO, AI funnel ads, Answer Engine Optimization, AI marketing playbooks, predictive analytics, marketing automation, AI advertising" />
        <link rel="canonical" href="https://digitalfrontier.marketing/insights" />
      </Helmet>

      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="min-h-screen bg-background">
        {/* Hero Section */}
        <motion.section variants={fadeInUp} className="relative py-20 bg-gradient-to-br from-deep-navy via-card to-background overflow-hidden" aria-labelledby="insights-hero-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-azure/10 via-transparent to-ultraviolet/10"></div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8
            }} className="mb-8">
                <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Logo" className="h-16 w-auto mx-auto" />
              </motion.div>
              
              <motion.h1 id="insights-hero-heading" variants={fadeInUp} className="font-poppins font-semibold text-soft-white mb-6" style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em'
            }}>
                AI Marketing <span className="text-electric-azure text-7xl font-bold">Insights Hub</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="font-inter text-lg md:text-xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Master the future of marketing with our comprehensive playbooks, case studies, and strategic insights. 
                From AEO to AI funnel ads—everything you need to dominate your market.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#featured-playbooks" className="inline-flex items-center justify-center px-8 py-4 bg-electric-azure text-deep-navy font-semibold rounded-lg hover:bg-electric-azure/90 transition-all duration-300">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Playbooks
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-electric-azure text-electric-azure font-semibold rounded-lg hover:bg-electric-azure/10 transition-all duration-300">
                  Get Custom Strategy
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Featured Playbooks */}
        <motion.section variants={fadeInUp} id="featured-playbooks" className="py-20 bg-background" aria-labelledby="featured-playbooks-heading">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 id="featured-playbooks-heading" className="font-poppins font-medium text-soft-white mb-4" style={{
              fontSize: 'clamp(28px, 4vw, 40px)'
            }}>
                Featured Playbooks
              </h2>
              <p className="font-inter text-lg text-soft-white/70 max-w-2xl mx-auto">
                Our most comprehensive guides for mastering AI-powered marketing
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPlaybooks.map((playbook, index) => <motion.div key={playbook.title} variants={fadeInUp} whileHover={{
              y: -8,
              scale: 1.02
            }} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-electric-azure/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={playbook.image} alt={playbook.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-electric-azure/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-signal-lime text-deep-navy px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-electric-azure text-sm font-medium">{playbook.category}</span>
                      <span className="text-soft-white/60 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {playbook.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-poppins font-medium text-xl text-soft-white mb-3">
                      {playbook.title}
                    </h3>
                    
                    <p className="font-inter text-soft-white/70 mb-4 leading-relaxed">
                      {playbook.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {playbook.tags.map(tag => <span key={tag} className="bg-electric-azure/10 text-electric-azure px-2 py-1 rounded text-xs">
                          {tag}
                        </span>)}
                    </div>
                    
                    <Link to={playbook.slug} className="inline-flex items-center text-electric-azure hover:text-electric-azure/80 font-medium">
                      <Play className="w-4 h-4 mr-2" />
                      Read Playbook →
                    </Link>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section variants={fadeInUp} className="py-20 bg-card" aria-labelledby="categories-heading">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 id="categories-heading" className="font-poppins font-medium text-soft-white mb-4" style={{
              fontSize: 'clamp(28px, 4vw, 40px)'
            }}>
                Browse by Category
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => <motion.div key={category.name} variants={fadeInUp} whileHover={{
              scale: 1.05
            }} className="bg-background border border-border rounded-xl p-6 hover:border-electric-azure/50 transition-all duration-300 cursor-pointer">
                  <category.icon className="w-8 h-8 text-electric-azure mb-4" />
                  <h3 className="font-poppins font-medium text-lg text-soft-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-soft-white/60 text-sm">
                    {category.count} playbooks available
                  </p>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Additional Playbooks Grid */}
        <motion.section variants={fadeInUp} className="py-20 bg-background" aria-labelledby="more-playbooks-heading">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 id="more-playbooks-heading" className="font-poppins font-medium text-soft-white mb-4" style={{
              fontSize: 'clamp(28px, 4vw, 40px)'
            }}>
                More Playbooks
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalPlaybooks.map((playbook, index) => <motion.div key={playbook.title} variants={fadeInUp} whileHover={{
              y: -4
            }} className="bg-card border border-border rounded-xl p-6 hover:border-electric-azure/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-electric-azure text-sm font-medium">{playbook.category}</span>
                    <span className="text-soft-white/60 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {playbook.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-poppins font-medium text-lg text-soft-white mb-3">
                    {playbook.title}
                  </h3>
                  
                  <p className="font-inter text-soft-white/70 mb-4 text-sm leading-relaxed">
                    {playbook.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {playbook.tags.map(tag => <span key={tag} className="bg-electric-azure/10 text-electric-azure px-2 py-1 rounded text-xs">
                        {tag}
                      </span>)}
                  </div>
                  
                  <Link to={playbook.slug} className="inline-flex items-center text-electric-azure hover:text-electric-azure/80 font-medium text-sm">
                    Read Now →
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section with Schema Markup */}
        <motion.section variants={fadeInUp} className="py-20 bg-card">
          <div className="mx-auto max-w-4xl px-6">
            <FAQSection 
              title="Frequently Asked Questions"
              faqs={[
                {
                  question: "What's the difference between AEO and traditional SEO?",
                  answer: "AEO (Answer Engine Optimization) focuses on optimizing content for AI-powered search engines like ChatGPT, Claude, and voice assistants, while traditional SEO targets standard search engines like Google. AEO requires structured data, direct answers, and conversational content formats."
                },
                {
                  question: "How do I get started with AI marketing playbooks?",
                  answer: "Start with our featured playbooks based on your immediate needs. If you're new to AI marketing, begin with the Complete AEO Playbook. For advanced users, explore our GEO strategies or predictive analytics guides. Each playbook includes step-by-step implementation instructions."
                },
                {
                  question: "Are these strategies suitable for small businesses?",
                  answer: "Absolutely! Our playbooks are designed to scale from small businesses to enterprise organizations. Each guide includes budget-friendly options and prioritized action items so you can implement strategies based on your resources and goals."
                },
                {
                  question: "How often are the playbooks updated?",
                  answer: "We update our playbooks monthly to reflect the latest AI marketing trends, algorithm changes, and best practices. Subscribers receive notifications when new content is added or existing guides are updated with fresh insights."
                },
                {
                  question: "Can I get personalized help implementing these strategies?",
                  answer: "Yes! We offer custom strategy sessions where our experts help you adapt these playbooks to your specific business needs, industry, and goals. Contact us to schedule a consultation and get hands-on implementation support."
                }
              ]}
              className="bg-background/50 p-8 rounded-2xl"
            />
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section variants={fadeInUp} className="py-20 bg-gradient-to-br from-electric-azure/10 via-transparent to-ultraviolet/10" aria-labelledby="implementation-cta-heading">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.h2 id="implementation-cta-heading" variants={fadeInUp} className="font-poppins font-medium text-soft-white mb-6" style={{
            fontSize: 'clamp(28px, 4vw, 40px)'
          }}>
              Ready to Implement These Strategies?
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="font-inter text-lg text-soft-white/70 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our AI marketing experts. We'll help you implement these playbooks for your specific business.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-signal-lime text-deep-navy font-semibold rounded-lg hover:bg-signal-lime/90 transition-all duration-300">
                Book Your Strategy Session
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>;
};
export default InsightsHub;