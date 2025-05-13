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
    id: 1,
    title: "The Future of AI in Digital Marketing",
    excerpt: "Exploring how artificial intelligence is reshaping marketing strategies and customer engagement.",
    image: "/lovable-uploads/8397f9b3-fc8b-4246-b8a6-166b26926970.png",
    date: "May 10, 2025",
    category: "AI Technology",
    author: "Alex Jordan"
  },
  {
    id: 2,
    title: "Optimizing Your SEO For Answer Engines",
    excerpt: "Learn how to adapt your SEO strategy for the new era of answer engines and AI search.",
    image: "/lovable-uploads/36f6d997-5da6-4119-aaba-d7390e04fde2.png",
    date: "May 7, 2025",
    category: "SEO",
    author: "Samantha Lee"
  },
  {
    id: 3,
    title: "How Crypto Businesses Can Enhance Their Digital Marketing",
    excerpt: "Specialized marketing strategies for blockchain and cryptocurrency companies in an evolving landscape.",
    image: "/lovable-uploads/7856abf2-126d-4fbb-87da-fe5143707423.png",
    date: "May 3, 2025",
    category: "Crypto Marketing",
    author: "Michael Chen"
  },
  {
    id: 4,
    title: "Building Effective AI-Powered Ad Funnels",
    excerpt: "A step-by-step guide to creating conversion-focused advertising funnels with AI optimization.",
    image: "/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
    date: "April 28, 2025",
    category: "Ad Strategy",
    author: "Jessica Williams"
  },
  {
    id: 5,
    title: "Ethics in AI Marketing: Avoiding Bias in Automated Campaigns",
    excerpt: "Understanding and mitigating potential biases in AI-driven marketing campaigns.",
    image: "/lovable-uploads/4a25c6e7-d446-42a7-b9be-e55739bc1e58.png",
    date: "April 22, 2025",
    category: "Ethics",
    author: "David Thompson"
  },
  {
    id: 6,
    title: "Industry KPIs: Measuring Success in AI Marketing",
    excerpt: "Key performance indicators to track the effectiveness of your AI marketing initiatives.",
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
      question: "How often is the Digital Frontier blog updated?",
      answer: "Our blog is updated weekly with new content exploring AI marketing, ethics, SEO strategies, and industry trends. We publish deep-dive analyses on Tuesdays and practical how-to guides on Thursdays, ensuring you always have fresh insights to help your business navigate the digital landscape."
    },
    {
      question: "Can I contribute a guest post to the Digital Frontier blog?",
      answer: "Yes! We welcome guest contributions from industry experts. To be considered, please email your pitch to blog@thedigitalfrontier.ai with your proposed topic, a brief outline, and examples of your previous writing. Ideal contributions provide unique insights backed by data or experience in AI marketing ethics or applications."
    },
    {
      question: "Are there resources for beginners to understand AI marketing concepts?",
      answer: "Absolutely. We have a dedicated 'Fundamentals' section that breaks down complex AI marketing concepts for beginners. Start with our 'AI Marketing 101' series, which covers basic principles, terminology, and practical applications. We also offer downloadable guides and infographics designed specifically for newcomers to the field."
    }
  ];

  return (
    <PageLayout 
      title="Digital Frontier Company's Blog" 
      subtitle="Where we explore the Digital Frontier in Digital Marketing, Social Media, Artificial Intelligence and Cryptocurrency" 
      currentPath={location.pathname}
    >
      <Helmet>
        <title>Digital Frontier Company's Blog | The Digital Frontier</title>
        <meta name="description" content="Where we explore the Digital Frontier in Digital Marketing, Social Media, Artificial Intelligence and Cryptocurrency" />
        <link rel="canonical" href="https://thedigitalfrontier.ai/blog" />
      </Helmet>
      
      <div className="space-y-12">
        <section>
          <p className="text-lg text-slate-300 mb-8">
            At the Digital Frontier Company's blog, we delve deep into the vast and ever-evolving landscape of digital marketing, social media, artificial intelligence, and cryptocurrency. Our mission is to explore the latest trends, innovative strategies, and cutting-edge technologies that shape the digital world. Whether you're a marketing professional looking to enhance your skills, a tech enthusiast eager to understand AI, or an investor seeking insights into cryptocurrency, our blog offers valuable resources and thought-provoking content. Join us as we navigate the complexities of the digital frontier, empowering you with the knowledge to thrive in this dynamic environment. Stay informed and inspired as we uncover the potential and possibilities within the digital realm.
          </p>
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
                  <Button 
                    variant="ghost" 
                    className="text-[#00BFFF] hover:text-white hover:bg-[#0066FF] p-0 h-auto font-semibold"
                  >
                    Read more →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </section>
        
        <section className="bg-gradient-to-r from-[#0066FF]/10 to-[#00BFFF]/10 p-8 rounded-xl border border-[#0066FF]/20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Get the latest insights on AI marketing delivered straight to your inbox. 
              No spam, just valuable content to help your business grow.
            </p>
            <div className="pt-4">
              <Link to="/newsletter">
                <Button className="bg-gradient-to-r from-[#0066FF] to-[#00BFFF] hover:from-[#0055DD] hover:to-[#00AAEE] text-white">
                  Subscribe Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection 
          title="Blog FAQ" 
          faqs={blogFaqs} 
          className="mt-12" 
        />
      </div>
    </PageLayout>
  );
};

export default Blog;
