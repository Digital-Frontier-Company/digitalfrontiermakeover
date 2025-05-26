import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Typed from 'typed.js';

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const menuAnimation = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let typed: Typed | null = null;

    // Only initialize Typed.js if the element exists and we're not on mobile
    if (menuAnimation.current && !isMobile) {
      typed = new Typed(menuAnimation.current, {
        strings: ['AI-Powered Ad Funnel Blueprint', 'Generative Engine Optimization', 'Answer Engine Optimization', 'AI and Digital Marketing', 'Search Engine Optimization', 'Crypto Marketing'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2500,
        startDelay: 1000,
        loop: true,
        showCursor: false
      });
    }
    return () => {
      // Only destroy if typed was initialized
      if (typed) {
        typed.destroy();
      }
    };
  }, [isMobile]);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* Fixed header */}
      <header className="w-full backdrop-blur-lg bg-slate-900/80 border-b border-slate-800 fixed top-0 z-50 shadow-lg shadow-slate-900/20">
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <div className="mb-5 md:mb-0 md:mr-6 pl-1">
              <Link to="/" className="flex items-center">
                <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="h-90" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-1">
                <li>
                  <Link to="/" className={`px-3 py-2 rounded-md text-sm hover:bg-slate-800 transition-colors ${location.pathname === "/" ? "text-blue-400 font-semibold" : "text-slate-300"}`}>
                    Home
                  </Link>
                </li>
                <li className="group relative">
                  <button className="px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors flex items-center">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 hidden group-hover:block z-50">
                    <div className="bg-slate-900 border border-slate-700 rounded-md shadow-lg py-1">
                      <Link to="/ad-funnel-blueprint" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        AI-Powered Ad Funnel Blueprint
                      </Link>
                      <Link to="/generative-engine-optimization" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Generative Engine Optimization
                      </Link>
                      <Link to="/answer-engine-optimization" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Answer Engine Optimization
                      </Link>
                      <Link to="/search-engine-optimization" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Search Engine Optimization
                      </Link>
                      <Link to="/crypto-marketing" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Crypto Marketing
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="group relative">
                  <button className="px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors flex items-center">
                    Resources
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 hidden group-hover:block z-50">
                    <div className="bg-slate-900 border border-slate-700 rounded-md shadow-lg py-1">
                      <Link to="/blog" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Blog
                      </Link>
                      <Link to="/resources/content-creation-agent" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Content Creation Agent
                      </Link>
                      <Link to="/ai-bias-in-advertising" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        AI Bias in Advertising
                      </Link>
                      <Link to="/ai-and-digital-marketing" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        AI & Digital Marketing
                      </Link>
                      <Link to="/psychological-digital-marketing-insights" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                        Psychological Digital Marketing
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/about-us" className={`px-3 py-2 rounded-md text-sm hover:bg-slate-800 transition-colors ${location.pathname === "/about-us" ? "text-blue-400 font-semibold" : "text-slate-300"}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className={`px-3 py-2 rounded-md text-sm hover:bg-slate-800 transition-colors ${location.pathname === "/pricing" ? "text-blue-400 font-semibold" : "text-slate-300"}`}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className={`px-3 py-2 rounded-md text-sm hover:bg-slate-800 transition-colors ${location.pathname === "/faq" ? "text-blue-400 font-semibold" : "text-slate-300"}`}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`px-3 py-2 rounded-md text-sm hover:bg-slate-800 transition-colors ${location.pathname === "/contact" ? "text-blue-400 font-semibold" : "text-slate-300"}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Action buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/newsletter" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                Newsletter
              </Link>
              <div className="h-5 w-px bg-slate-700 mx-1"></div>
              <Link to="/contact" className="px-4 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={handleMobileMenuToggle} className="text-slate-400 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-slate-900 border-t border-slate-800 py-4 px-4`}>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Home
            </Link>
            <Link to="/ad-funnel-blueprint" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              AI-Powered Ad Funnel Blueprint
            </Link>
            <Link to="/generative-engine-optimization" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Generative Engine Optimization
            </Link>
            <Link to="/answer-engine-optimization" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Answer Engine Optimization
            </Link>
            <Link to="/search-engine-optimization" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Search Engine Optimization
            </Link>
            <Link to="/crypto-marketing" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Crypto Marketing
            </Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Blog
            </Link>
            <Link to="/resources/content-creation-agent" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Content Creation Agent
            </Link>
            <Link to="/ai-bias-in-advertising" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              AI Bias in Advertising
            </Link>
            <Link to="/ai-and-digital-marketing" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              AI & Digital Marketing
            </Link>
            <Link to="/psychological-digital-marketing-insights" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Psychological Digital Marketing
            </Link>
            <Link to="/about-us" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              About
            </Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Pricing
            </Link>
            <Link to="/faq" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Contact
            </Link>
            <Link to="/newsletter" className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              Newsletter
            </Link>
          </nav>
          <div className="mt-4">
            <Link to="/contact" className="block px-4 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-700 transition-colors text-center">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main content with padding for fixed header */}
      <main className="flex-grow pt-24">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <a href="http://digitalfrontier.app" target="_blank" rel="noopener noreferrer">
                <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="h-14 mb-4" />
              </a>
              <p className="text-slate-400 mb-4 text-sm">
                Leading the way in AI-powered marketing solutions and digital transformation strategies.
              </p>
              <div className="flex space-x-2">
                <Link to="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <span className="sr-only">X / Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link to="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link to="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link to="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <span className="sr-only">TikTok</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.321 5.562a5.122 5.122 0 01-3.414-1.267 5.111 5.111 0 01-1.468-1.968h-3.165v13.579c0 1.124-.92 2.03-2.055 2.03a2.057 2.057 0 01-2.058-2.03 2.057 2.057 0 012.058-2.032c.218 0 .426.035.621.097V10.3a5.63 5.63 0 00-.621-.034c-2.796 0-5.076 2.267-5.076 5.047 0 2.781 2.28 5.048 5.076 5.048 2.795 0 5.075-2.267 5.075-5.048V9.469c1.065.812 2.373 1.322 3.804 1.322v-3.183a5.145 5.145 0 01-1.951.381 5.122 5.122 0 003.171-1.615V5.562z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ad-funnel-blueprint" className="text-slate-400 hover:text-blue-400 text-sm">AI-Powered Ad Funnel Blueprint</Link>
                </li>
                <li>
                  <Link to="/generative-engine-optimization" className="text-slate-400 hover:text-blue-400 text-sm">Generative Engine Optimization</Link>
                </li>
                <li>
                  <Link to="/answer-engine-optimization" className="text-slate-400 hover:text-blue-400 text-sm">Answer Engine Optimization</Link>
                </li>
                <li>
                  <Link to="/search-engine-optimization" className="text-slate-400 hover:text-blue-400 text-sm">Search Engine Optimization</Link>
                </li>
                <li>
                  <Link to="/crypto-marketing" className="text-slate-400 hover:text-blue-400 text-sm">Crypto Marketing</Link>
                </li>
                <li>
                  <Link to="/ai-and-digital-marketing" className="text-slate-400 hover:text-blue-400 text-sm">AI & Digital Marketing</Link>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-slate-400 hover:text-blue-400 text-sm">Blog</Link>
                </li>
                <li>
                  <Link to="/resources/content-creation-agent" className="text-slate-400 hover:text-blue-400 text-sm">Content Creation Agent</Link>
                </li>
                <li>
                  <Link to="/ai-bias-in-advertising" className="text-slate-400 hover:text-blue-400 text-sm">AI Bias in Advertising</Link>
                </li>
                <li>
                  <Link to="/newsletter" className="text-slate-400 hover:text-blue-400 text-sm">Newsletter</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-slate-400 hover:text-blue-400 text-sm">FAQ</Link>
                </li>
                <li>
                  <Link to="/site-map" className="text-slate-400 hover:text-blue-400 text-sm">Site Map</Link>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us" className="text-slate-400 hover:text-blue-400 text-sm">About Us</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-400 hover:text-blue-400 text-sm">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-blue-400 text-sm">Contact</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-slate-400 hover:text-blue-400 text-sm">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-slate-400 hover:text-blue-400 text-sm">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              &copy; 2025 Digital Frontier Company. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-sm">Terms</Link>
              <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-sm">Privacy</Link>
              <Link to="/cookies" className="text-slate-500 hover:text-slate-300 text-sm">Cookies</Link>
              <Link to="/site-map" className="text-slate-500 hover:text-slate-300 text-sm">Site Map</Link>
            </div>
          </div>
        </div>
        
        {/* SEO Juice Script */}
        <script type="text/javascript" src="https://cdn.seojuice.io/suggestions.v1.js" defer></script>
      </footer>
    </div>;
};

export default MainLayout;
