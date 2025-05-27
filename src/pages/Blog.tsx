
import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: 0,
    title: "Mastering Digital Marketing: AI, AEO, and Innovations",
    excerpt: "Meta Advantage+ and Google Performance Max deliver 15-30% better ROAS. Learn implementation strategies that reduced client churn by 18% using XGBoost models on 240k sessions.",
    image: "/lovable-uploads/c735c494-8f65-49b4-89b6-d6a1040a6168.png",
    date: "May 13, 2025",
    category: "Digital Marketing",
    author: "Digital Frontier Team",
    link: "/blog/mastering-digital-marketing"
  },
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    excerpt: "HubSpot's AI increases lead scoring accuracy by 40%. Salesforce Einstein boosts sales productivity 25-35%. Discover enterprise implementation roadmaps.",
    image: "/lovable-uploads/8397f9b3-fc8b-4246-b8a6-166b26926970.png",
    date: "May 10, 2025",
    category: "AI Technology",
    author: "Alex Jordan"
  },
  {
    id: 2,
    title: "Optimizing Your SEO For Answer Engines",
    excerpt: "Answer Engine Optimization (AEO) drives 30% more organic traffic. Learn structured data implementation that increased client visibility by 45%.",
    image: "/lovable-uploads/36f6d997-5da6-4119-aaba-d7390e04fde2.png",
    date: "May 7, 2025",
    category: "SEO",
    author: "Samantha Lee"
  },
  {
    id: 3,
    title: "How Crypto Businesses Can Enhance Their Digital Marketing",
    excerpt: "Crypto marketing compliance frameworks for 2025. Case studies showing 60% lead quality improvement through regulatory-compliant AI targeting.",
    image: "/lovable-uploads/7856abf2-126d-4fbb-87da-fe5143707423.png",
    date: "May 3, 2025",
    category: "Crypto Marketing",
    author: "Michael Chen"
  },
  {
    id: 4,
    title: "Building Effective AI-Powered Ad Funnels",
    excerpt: "Programmatic advertising with AI optimization delivers 20-40% better ROAS. Step-by-step funnel architecture using real-time bidding algorithms.",
    image: "/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
    date: "April 28, 2025",
    category: "Ad Strategy",
    author: "Jessica Williams"
  },
  {
    id: 5,
    title: "Ethics in AI Marketing: Avoiding Bias in Automated Campaigns",
    excerpt: "IBM AI Fairness 360 and Google's What-If Tool help identify campaign bias. Learn statistical testing methods for demographic parity compliance.",
    image: "/lovable-uploads/4a25c6e7-d446-42a7-b9be-e55739bc1e58.png",
    date: "April 22, 2025",
    category: "Ethics",
    author: "David Thompson"
  },
  {
    id: 6,
    title: "Industry KPIs: Measuring Success in AI Marketing",
    excerpt: "Essential metrics: 85-95% churn prediction accuracy, sub-100ms bid response times, 3.2x conversion rate improvements from AI segmentation.",
    image: "/lovable-uploads/3d7bf124-081a-4959-9a39-759c1e0dc150.png",
    date: "April 18, 2025",
    category: "Analytics",
    author: "Rachel Kim"
  }
];

const Blog: React.FC = () => {
  const location = useLocation();

  const blogFaqs: FAQItem[] = [
    {
      question: "How often is the Digital Frontier blog updated with new AI marketing insights?",
      answer: "We publish 2-3 data-driven articles weekly: technical deep-dives on Tuesdays (AI implementation, ethics frameworks) and practical guides on Thursdays (campaign optimization, tool reviews). All content includes real performance metrics and case studies from our 500+ client implementations."
    },
    {
      question: "Can I contribute expert analysis to the Digital Frontier blog?",
      answer: "Yes! We welcome technical contributions from AI marketing practitioners. Submit your pitch to blog@thedigitalfrontier.ai with: proposed topic, data/case studies to include, and examples of previous technical writing. We prioritize content with measurable outcomes and statistical significance."
    },
    {
      question: "Are there beginner-friendly resources for understanding AI marketing implementation?",
      answer: "Our 'AI Marketing Fundamentals' series breaks down complex concepts: start with 'Data Requirements for AI Models' (10k minimum interactions), then 'Measuring AI Performance' (precision, recall, F1-scores), followed by 'Ethics Frameworks' (bias detection, fairness metrics). Each guide includes downloadable checklists."
    },
    {
      question: "What AI marketing tools do you recommend for different business sizes?",
      answer: "Small businesses (under $1M revenue): HubSpot AI, Mailchimp automation. Mid-market ($1-10M): Salesforce Einstein, Google Performance Max. Enterprise ($10M+): Custom ML models, programmatic DSPs. We provide implementation roadmaps and ROI calculations for each tier."
    },
    {
      question: "How do I measure the ROI of AI marketing implementations?",
      answer: "Key metrics include: customer acquisition cost reduction (15-30% typical), churn prediction accuracy (85-95% achievable), conversion rate improvements (2-4x with proper segmentation), and time-to-insight reduction (60-80% automation gains). We provide free ROI calculators for all major AI marketing platforms."
    }
  ];

  return (
    <PageLayout 
      title="Digital Frontier Company's Blog" 
      subtitle="Data-driven insights on AI marketing, with real metrics from 500+ client implementations" 
      currentPath={location.pathname}
    >
      <Helmet>
        <title>AI Marketing Blog with Real Performance Data | Digital Frontier</title>
        <meta name="description" content="Technical AI marketing insights with real performance metrics. Learn from 500+ implementations: 15-30% ROAS improvements, 85-95% prediction accuracy, measurable results." />
        <link rel="canonical" href="https://thedigitalfrontier.ai/blog" />
      </Helmet>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Why read our AI marketing blog?</h2>
          <p className="text-lg text-slate-300 mb-6">
            <strong>Real data from real implementations.</strong> Every article includes performance metrics from our 500+ client deployments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Proven Results</h3>
              <p className="text-slate-300">15-30% ROAS improvements, 85-95% prediction accuracy, 60-80% time savings</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Technical Depth</h3>
              <p className="text-slate-300">Implementation guides, code examples, statistical significance testing</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-2">Ethics Focus</h3>
              <p className="text-slate-300">Bias detection, fairness metrics, regulatory compliance frameworks</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700 hover:border-[#00BFFF]/50 transition-all hover:shadow-lg hover:shadow-[#0066FF]/10">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute top-4 right-4 bg-[#0066FF] text-white text-xs py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm text-slate-400 space-x-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-[#00BFFF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-300">{post.excerpt}</p>
                <div>
                  <Link to={post.link || "#"}>
                    <Button 
                      variant="ghost" 
                      className="text-[#00BFFF] hover:text-white hover:bg-[#0066FF] p-0 h-auto font-semibold"
                    >
                      Read Implementation Guide →
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
        
        <section className="bg-gradient-to-r from-[#0066FF]/10 to-[#00BFFF]/10 p-8 rounded-xl border border-[#0066FF]/20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Get AI Marketing Insights With Real Metrics</h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Weekly technical guides with performance data, implementation roadmaps, and ROI calculators. 
              No fluff, just actionable insights from 500+ client deployments.
            </p>
            <div className="pt-4">
              <Link to="/newsletter">
                <Button className="bg-gradient-to-r from-[#0066FF] to-[#00BFFF] hover:from-[#0055DD] hover:to-[#00AAEE] text-white">
                  Subscribe for Performance Data
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection 
          title="AI Marketing Blog FAQ" 
          faqs={blogFaqs} 
          className="mt-12" 
        />
      </div>
    </PageLayout>
  );
};

export default Blog;
