import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/utils";

const blogPosts = [
  {
    id: 0,
    title: "Ultimate Guide to Tax Reduction & All-Weather Wealth-Building",
    excerpt: "Master advanced tax reduction tactics and build resilient wealth with proven strategies that work in any economic climate.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=573,fit=crop/AQED72Wg6XijkzV2/blovcky-AwvDpoZjZgsOjJNo.png",
    date: "January 13, 2025",
    category: "Financial Strategy",
    author: "Digital Frontier Team",
    link: "/blog/tax-reduction-wealth-building-guide"
  },
  {
    id: 1,
    title: "Answer Engine Optimization in Digital Marketing for Crypto Startups",
    excerpt: "Discover how AEO and strategic community building can help crypto startups overcome credibility challenges and build lasting trust in 2025.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=579,fit=crop/AQED72Wg6XijkzV2/chatgpt-image-apr-24-2025-08_58_50-am-YrDWZ3jZq7hJ7D2B.png",
    date: "January 13, 2025",
    category: "Crypto Marketing",
    author: "Digital Frontier Team",
    link: "/blog/answer-engine-optimization-crypto-startups"
  },
  {
    id: 1,
    title: "Mastering Digital Marketing: AI, AEO, and Innovations",
    excerpt: "Learn how AI, AEO, and new digital marketing innovations can transform your B2B marketing strategy in 2025 and beyond.",
    image: "/lovable-uploads/c735c494-8f65-49b4-89b6-d6a1040a6168.png",
    date: "May 13, 2025",
    category: "Digital Marketing",
    author: "Digital Frontier Team",
    link: "/blog/mastering-digital-marketing"
  },
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=240,fit=crop/AQED72Wg6XijkzV2/the-perfect-none-background-mem-AE0r33Kk1ZT9DN1k.png",
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

const Blog = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.thedigitalfrontier.ai${location.pathname}`;
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.thedigitalfrontier.ai" },
    { name: "Blog", url: canonicalUrl }
  ]);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog | AI & Digital Transformation Insights</title>
        <meta name="description" content="Explore expert insights on AI marketing, Answer Engine Optimization, crypto marketing, and digital transformation. Latest trends and strategies from Digital Frontier Company." />
        <meta name="keywords" content="digital marketing blog, AI marketing insights, Answer Engine Optimization blog, crypto marketing articles, digital transformation trends, SEO blog, marketing strategy" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Digital Marketing Blog | AI & Digital Transformation Insights" />
        <meta property="og:description" content="Expert insights on AI marketing, Answer Engine Optimization, and digital transformation strategies." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Blog | Digital Frontier" />
        <meta name="twitter:description" content="Expert insights on AI marketing and digital transformation strategies." />
        <meta name="twitter:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageLayout 
        title="Digital Marketing Insights Blog"
        subtitle="Expert insights on AI marketing, digital transformation, and the future of online business"
        currentPath={location.pathname}
      >
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
                    <Link to={post.link || "#"}>
                      <Button 
                        variant="ghost" 
                        className="text-[#00BFFF] hover:text-white hover:bg-[#0066FF] p-0 h-auto font-semibold"
                      >
                        Read more →
                      </Button>
                    </Link>
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
    </>
  );
};

export default Blog;
