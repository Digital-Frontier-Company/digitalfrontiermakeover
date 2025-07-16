import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
const InfluencerMarketing2025 = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Animation on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.hover-grow').forEach(element => {
      observer.observe(element);
    });
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
      observer.disconnect();
    };
  }, []);
  return <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Helmet>
        <title>Influencer Marketing 2025 | Next-Gen Creator Strategies</title>
        <meta name="description" content="2025 Influencer Marketing Strategies - Cutting-edge tactics for creators to outperform traditional brands in the digital space" />
        <link rel="canonical" href="https://www.thedigitalfrontier.ai/influencer-marketing-2025" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .hover-grow {
          transition: transform 0.3s ease;
        }
        
        .hover-grow:hover {
          transform: scale(1.03);
        }
        
        .platform-icon {
          transition: all 0.3s ease;
        }
        
        .platform-icon:hover {
          transform: translateY(-5px);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-delay {
          animation: float 6s ease-in-out infinite 1.5s;
        }
        
        .scroll-indicator {
          width: 24px;
          height: 40px;
          border: 2px solid white;
          border-radius: 12px;
          position: relative;
        }
        
        .scroll-indicator::after {
          content: '';
          position: absolute;
          top: 6px;
          left: 50%;
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 2px;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }
        
        @keyframes scroll {
          0% { opacity: 1; top: 6px; }
          100% { opacity: 0; top: 18px; }
        }
      `}</style>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
      </div>


      {/* Hero Section */}
      <section className="relative pt-12 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">2025 Influencer</span> Marketing Playbook
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              Discover the platform-specific strategies that will set creators apart from traditional brands in the evolving digital landscape. Learn more about our comprehensive <Link to="/answer-engine-optimization" className="text-indigo-400 hover:text-indigo-300 underline">Answer Engine Optimization</Link> approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#differences" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
                Explore Strategies
              </a>
              <a href="#" className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition border border-gray-700">
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </a>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Influencer Marketing Client Testimonial 1" width="40" height="40" loading="lazy" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Influencer Marketing Client Testimonial 2" width="40" height="40" loading="lazy" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Influencer Marketing Client Testimonial 3" width="40" height="40" loading="lazy" />
              </div>
              <p className="text-gray-400">Trusted by <span className="text-white">850+</span> creators worldwide</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-indigo-900/30 blur-xl"></div>
            <div className="relative">
              <div className="glass-card p-1 rounded-2xl inline-block">
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Influencer creating content" className="rounded-2xl w-full max-w-md" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 p-6 rounded-xl shadow-xl w-64">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded-full">Live Analytics</span>
                  <span className="text-xs text-gray-500">Updated: Now</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-indigo-400">Engagement Rate</p>
                    <div className="flex items-end">
                      <p className="text-2xl font-bold text-white">8.7%</p>
                      <p className="text-xs text-green-400 ml-2"><i className="fas fa-arrow-up mr-1"></i> 12%</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{
                    width: '87%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 -right-20 floating">
              <div className="glass-card p-4 rounded-xl w-40">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-xs text-gray-300">Active Now</span>
                </div>
                <p className="text-sm font-medium text-white">@digitalcreator</p>
                <p className="text-xs text-gray-400">+24% engagement</p>
              </div>
            </div>
            <div className="absolute bottom-10 -left-16 floating-delay">
              <div className="glass-card p-3 rounded-xl w-32">
                <p className="text-xs text-gray-300 mb-1">New Trend Alert</p>
                <p className="text-sm font-medium text-white">#CreatorEconomy</p>
                <p className="text-xs text-purple-300">+1.2M posts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">CREATOR STRATEGIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why Influencers Need a <span className="gradient-text">Different Approach</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Traditional digital marketing strategies don't fully translate to influencer success in 2025's competitive landscape.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6">
              <i className="fas fa-user-check text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Authenticity Wins</h3>
            <p className="text-gray-400">Genuine connection outperforms polished advertising in the creator economy.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6">
              <i className="fas fa-bolt text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Algorithm Mastery</h3>
            <p className="text-gray-400">Platforms reward engagement quality, not just follower counts or ad spend.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6">
              <i className="fas fa-book-open text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Storytelling Power</h3>
            <p className="text-gray-400">Personal narratives create deeper bonds than traditional product messaging.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="w-14 h-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Creator Economies</h3>
            <p className="text-gray-400">New monetization models prioritize direct fan relationships over brand deals.</p>
          </div>
        </div>
      </section>

      {/* Core Differences Section */}
      <section id="differences" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">KEY INSIGHTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Influencer Marketing <span className="gradient-text">vs Digital Marketing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Traditional businesses and creators operate differently in the digital space.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900/50 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
                <th className="p-4 text-left text-gray-300 font-medium"></th>
                <th className="p-4 text-center text-gray-300 font-medium">Traditional Digital Marketing</th>
                <th className="p-4 text-center text-gray-300 font-medium">Influencer Marketing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Brand Voice</td>
                <td className="p-4 text-center text-gray-400">Institutional, standardized</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Personal, relatable</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Audience Connection</td>
                <td className="p-4 text-center text-gray-400">Broad targeting, analytics-based</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Community-based, comment-driven</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Funnel Structure</td>
                <td className="p-4 text-center text-gray-400">Awareness → Consideration → Action</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Attention → Engagement → Affinity → Action</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">KPIs</td>
                <td className="p-4 text-center text-gray-400">CTR, ROAS, Conversion Rate</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Engagement Rate, Save/Share Ratio</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Media Spend</td>
                <td className="p-4 text-center text-gray-400">Paid-first approach</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Organic-first, amplified with paid</td>
              </tr>
              <tr className="hover:bg-gray-900/30 transition">
                <td className="p-4 text-gray-300 font-medium">Feedback Speed</td>
                <td className="p-4 text-center text-gray-400">Weeks to measure impact</td>
                <td className="p-4 text-center text-indigo-400 font-medium">Real-time in hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Advanced Hacks Section */}
      <section id="tactics" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">CREATOR HACKS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Advanced <span className="gradient-text">Influencer Tactics</span> for 2025</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">These cutting-edge strategies give creators an unfair advantage in the digital space.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-900/30 text-indigo-400 rounded-lg p-3 mr-4">
                <i className="fas fa-brain text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Neural Tagging for Higher Retention</h3>
                <p className="text-gray-400">Use AI sentiment analysis to identify emotional triggers that boost audience retention in your video content.</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-indigo-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Implementation time: 2-3 weeks</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-purple-900/30 text-purple-400 rounded-lg p-3 mr-4">
                <i className="fas fa-comment-dots text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comment Vault Strategy</h3>
                <p className="text-gray-400">Engage authentically with viral posts in your niche to redirect attention to your profile organically.</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-purple-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Implementation time: 1 week</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-pink-900/30 text-pink-400 rounded-lg p-3 mr-4">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Platform Pulse Syncing</h3>
                <p className="text-gray-400">Align your content calendar with emerging trends using predictive analytics tools for algorithmic favoritism.</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-pink-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Implementation time: 3-4 weeks</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 hover-grow rounded-xl p-8 border border-gray-800 transition">
            <div className="flex items-start mb-6">
              <div className="bg-blue-900/30 text-blue-400 rounded-lg p-3 mr-4">
                <i className="fas fa-coins text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">NFT-Backed Loyalty Perks</h3>
                <p className="text-gray-400">Reward super fans with verifiable digital assets that unlock exclusive benefits and community status.</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-blue-400">
              <i className="fas fa-clock mr-2"></i>
              <span>Implementation time: 4+ weeks</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
            Get All 12 Advanced Hacks <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Platform Specific Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">PLATFORM STRATEGIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4"><span className="gradient-text">Platform-Specific</span> Influencer Tactics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Optimized strategies for each major platform in 2025's creator landscape.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-indigo-900/20 text-indigo-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-tiktok"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">TikTok Dominance</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i>
                <span>Micro-hooks in first 0.5 seconds</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i>
                <span>Use auto-captions for accessibility</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i>
                <span>Cross-pollinate with micro-niches</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-pink-900/20 text-pink-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Instagram Evolution</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-pink-500 mt-1 mr-2"></i>
                <span>Strategic Story Highlights</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-pink-500 mt-1 mr-2"></i>
                <span>Create two-way engagement loops</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-pink-500 mt-1 mr-2"></i>
                <span>Leverage interactive stickers daily</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-red-900/20 text-red-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">YouTube Authority</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                <span>Optimize for watch time over views</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                <span>Use clickable timestamps</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-500 mt-1 mr-2"></i>
                <span>Create predictable content rhythms</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition text-center">
            <div className="mb-6">
              <div className="platform-icon bg-blue-900/20 text-blue-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
                <i className="fab fa-twitter"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Twitter/X Engagement</h3>
            <ul className="text-gray-400 space-y-3 text-left">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Post threaded content</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Quote tweets strategically</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Engage in trending topics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">MONETIZATION</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Influencer Marketing <span className="gradient-text">Packages</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Understanding and pricing your influencer marketing packages effectively in 2025.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 hover-grow rounded-xl overflow-hidden border border-gray-800 transition">
            <div className="bg-gray-800 p-6">
              <h3 className="font-bold text-xl text-white">Starter Package</h3>
              <p className="text-indigo-400">For micro-influencers & emerging creators</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">$800-1,500</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-500 mt-1 mr-3"></i>
                  <span>3 TikTok videos (concept + execution)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-500 mt-1 mr-3"></i>
                  <span>5 Instagram Story mentions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-500 mt-1 mr-3"></i>
                  <span>Basic analytics report</span>
                </li>
              </ul>
              <Button className="w-full py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition border border-gray-700">
                Choose Starter
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 hover-grow rounded-xl overflow-hidden border border-purple-800 shadow-lg transform scale-[1.02] z-10 transition">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">Premium Package</h3>
                  <p>For mid-tier influencers with established followings</p>
                </div>
                <span className="bg-white text-purple-800 px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">$2,500-5,000</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>3 TikTok videos + 1 full YouTube review</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>10 Instagram Story mentions with swipe-ups</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>Twitter & email newsletter mention</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-3"></i>
                  <span>Advanced influencer marketing KPIs report</span>
                </li>
              </ul>
              <Button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-md">
                Choose Premium
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 hover-grow rounded-xl overflow-hidden border border-gray-800 transition">
            <div className="bg-black p-6 text-white">
              <h3 className="font-bold text-xl">Elite Package</h3>
              <p>For macro-influencers & top creators</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-4">$8,000-20,000+</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Custom content series across all platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Co-created product or campaign</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Long-term ambassadorship</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Exclusive rights and performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-gray-400 mt-1 mr-3"></i>
                  <span>Custom video production and editing</span>
                </li>
              </ul>
              <Button className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition">
                Contact for Elite
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 italic max-w-3xl mx-auto">Pro Tip: Don't price by follower count—price by audience quality and conversion power. Brands pay for impact, not impressions.</p>
        </div>
      </section>

      {/* KPIs Section */}
      <section id="kpis" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">PERFORMANCE METRICS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Influencer Marketing <span className="gradient-text">KPIs to Track</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Move beyond vanity metrics with these advanced influencer marketing KPIs that matter in 2025.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-400">
                <i className="fas fa-bookmark text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">1:3</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">Saves-to-Likes Ratio</h3>
            <p className="text-gray-400">Indicates content value and repeat viewing potential beyond initial engagement.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400">
                <i className="fas fa-star text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">92%</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">Engagement Quality Score</h3>
            <p className="text-gray-400">Weighted metric considering comment depth and response rates rather than just likes.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-400">
                <i className="fas fa-eye text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text">79%</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400">Audience Retention</h3>
            <p className="text-gray-400">Percentage of viewers who watch your video content through to completion.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400">
                <i className="fas fa-play text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">85%</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">Story Completion Rate</h3>
            <p className="text-gray-400">How often viewers watch your Instagram or Snapchat stories all the way through.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-400">
                <i className="fas fa-exchange-alt text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">3.2x</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">Conversion by Platform</h3>
            <p className="text-gray-400">Relative performance of DMs, link clicks, and coupon usage across different platforms.</p>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400">
                <i className="fas fa-smile text-xl"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">9.5/10</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">Sentiment Score</h3>
            <p className="text-gray-400">AI-analyzed tone and emotion from comments and mentions.</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg">
            <i className="fas fa-download mr-2"></i> Get KPI Dashboard Template
          </Link>
        </div>
      </section>

      {/* The Role Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">TEAM STRATEGY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The Role of an <span className="gradient-text">Influencer Marketing Manager</span></h2>
            <p className="text-gray-400 mb-8">Behind every thriving influencer is often a sharp influencer marketing manager who coordinates the strategic and operational aspects of building a personal brand at scale.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-900/30 text-indigo-400 p-3 rounded-lg mr-4">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Campaign Coordination</h4>
                  <p className="text-gray-400">Negotiates brand deals and ensures alignment with creator's personal brand.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-900/30 text-purple-400 p-3 rounded-lg mr-4">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Data Analysis</h4>
                  <p className="text-gray-400">Tracks KPIs and optimizes content strategy based on performance data.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-900/30 text-pink-400 p-3 rounded-lg mr-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Brand Protection</h4>
                  <p className="text-gray-400">Ensures consistency across all touchpoints and prevents brand dilution.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-900/20 rounded-2xl -z-10"></div>
              <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Influencer marketing manager at work" className="rounded-2xl shadow-lg w-full object-cover" style={{
              minHeight: '400px'
            }} />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Frontier Comparison Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl my-12">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">STRATEGY COMPARISON</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">InfluenceX <span className="gradient-text">Approach Comparison</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">How we tailor influencer marketing strategies differently for various client types.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <h3 className="text-xl font-bold">B2C Clients vs Influencers</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">B2C Strategies</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></i>
                    <span>Funnel-focused with clear conversion paths</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></i>
                    <span>Product positioning and landing page optimization</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-blue-500 mt-2 mr-2"></i>
                    <span>Email automations and retargeting sequences</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">Influencer Strategies</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-indigo-500 mt-2 mr-2"></i>
                    <span>Personal brand narrative development</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-indigo-500 mt-2 mr-2"></i>
                    <span>Engagement-first content planning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-indigo-500 mt-2 mr-2"></i>
                    <span>Platform-native growth hacks (TikTok SEO)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 hover-grow rounded-xl p-6 border border-gray-800 transition">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-xl font-bold">B2B Clients vs Influencers</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">B2B Strategies</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></i>
                    <span>Long-form content like webinars and whitepapers</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></i>
                    <span>LinkedIn-focused organic growth funnels</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-green-500 mt-2 mr-2"></i>
                    <span>Authority building through podcasting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">Influencer Strategies</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-2"></i>
                    <span>Brand/creator partnerships with tech or SaaS</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-2"></i>
                    <span>UGC-based B2B promotion via storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs text-teal-500 mt-2 mr-2"></i>
                    <span>Joint webinars to leverage each other's audiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl my-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master <span className="gradient-text">Influencer Marketing</span> in 2025?</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8">Get our complete 2025 Influencer Marketing Playbook with templates, checklists, and advanced strategies not available publicly.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Download The Playbook <i className="fas fa-download ml-2"></i>
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition">
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* Standard Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="h-8 w-auto" />
              </div>
              <p className="text-slate-400 mb-4">
                Leading digital marketing agency specializing in AI-driven strategies, SEO, and cutting-edge optimization techniques.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/61572896248731" className="text-slate-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/digital_frontier_company/" className="text-slate-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8C4.966 14.436 4.75 13.707 4.75 12.96c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4zm7.718-9.239c-.667 0-1.208-.54-1.208-1.208s.54-1.208 1.208-1.208 1.208.54 1.208 1.208-.541 1.208-1.208 1.208z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@digital_frontier_company" className="text-slate-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                <a href="https://x.com/DigitalFro14616" className="text-slate-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/digital-frontier-company/" className="text-slate-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Digital_FrontierCO" className="text-slate-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/search-engine-optimization" className="text-slate-400 hover:text-white transition-colors">SEO</Link></li>
                <li><Link to="/generative-engine-optimization" className="text-slate-400 hover:text-white transition-colors">GEO</Link></li>
                <li><Link to="/answer-engine-optimization" className="text-slate-400 hover:text-white transition-colors">AEO</Link></li>
                <li><Link to="/crypto-marketing" className="text-slate-400 hover:text-white transition-colors">Crypto Marketing</Link></li>
                <li><Link to="/influencer-marketing-2025" className="text-slate-400 hover:text-white transition-colors">Influencer Marketing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/site-map" className="text-slate-400 hover:text-white transition-colors">Site Map</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Digital Frontier Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default InfluencerMarketing2025;