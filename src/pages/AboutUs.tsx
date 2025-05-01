
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const AboutUs = () => {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Your Partner in Digital Marketing Excellence"
      currentPath="/about-us"
    >
      {/* Hero Image Section */}
      <div className="df-neon-border mb-8">
        <img 
          src="/lovable-uploads/36f6d997-5da6-4119-aaba-d7390e04fde2.png" 
          alt="David Thompson, CEO and Founder" 
          className="rounded-lg w-72 mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="text-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">
            Bridging the Gap Between Technology and Trends — Turning Vision into Reality
          </h2>
          
          <div className="mb-6">
            <p className="mb-4"><strong className="text-blue-400">David Thompson, CEO / Founder's Story</strong> – Growing up in Memphis, Tennessee,
              David cultivated a deep appreciation for discipline, innovation, and the transformative power of technology...</p>
            
            <p className="mb-4">With a background in computer science and digital marketing, David founded Digital Frontier in 2025 with a vision to 
              bridge the gap between cutting-edge AI technology and practical business applications. His journey from coding enthusiast to 
              digital marketing pioneer reflects the company's commitment to staying ahead of technological trends while remaining firmly 
              grounded in delivering measurable results for clients.</p>

            <p className="mb-4">Today, under David's leadership, Digital Frontier stands at the forefront of Answer Engine Optimization and 
              AI-driven marketing solutions, helping businesses across various sectors navigate the rapidly evolving digital landscape.</p>
          </div>

          <div className="df-gain-card mb-6">
            <div className="icon">🧠</div>
            <h3>AI Strategy Development</h3>
            <p>Collaborate with our visionary team to craft a forward-looking AI strategy tailored to your unique business needs. We analyze your current operations, identify opportunities for AI integration, and develop a comprehensive roadmap that ensures seamless adoption and maximum ROI. Our strategic approach balances innovation with practicality, ensuring AI solutions that deliver real business value.</p>
          </div>

          <div className="df-gain-card mb-6">
            <div className="icon">🚀</div>
            <h3>Accelerate AI Model Design & Build</h3>
            <p>Leverage our world-class machine-learning specialists to supercharge your AI journey. Whether you're starting from scratch or optimizing existing models, our team brings the technical expertise and creative problem-solving skills needed to develop sophisticated AI solutions. From natural language processing to computer vision, we build custom AI models that drive meaningful business outcomes.</p>
          </div>

          <div className="df-gain-card mb-6">
            <div className="icon">💡</div>
            <h3>Our Value Proposition</h3>
            <p>At Digital Frontier, personalized partnerships are at the heart of everything we do. We don't just implement technology; we build relationships based on trust, transparency, and shared success. Our collaborative approach ensures that we understand your unique challenges and objectives, allowing us to deliver tailored solutions that address your specific needs. With Digital Frontier, you gain more than a service provider – you gain a dedicated partner committed to your long-term success.</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2 text-slate-100">Ready to Unlock Your Potential?</h3>
            <p>Contact <Link to="/" className="text-blue-400 hover:underline">Digital Frontier</Link> today and discover how our transformative solutions can guide you to success in the digital age.</p>
            
            <div className="mt-6 flex justify-center">
              <Link to="/contact" className="df-cta-button">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <h4 className="text-center text-lg font-bold mb-4 text-slate-100">Connect With Us</h4>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com/digitalfrontiercompany" aria-label="Digital Frontier on Facebook" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com/digitalfrontiercompany" aria-label="Digital Frontier on Instagram" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com/company/digitalfrontiercompany" aria-label="Digital Frontier on LinkedIn" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/digitalfrontierco" aria-label="Digital Frontier on Twitter" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://youtube.com/@digitalfrontiercompany" aria-label="Digital Frontier on YouTube" className="text-slate-300 hover:text-blue-400 transition-colors">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
