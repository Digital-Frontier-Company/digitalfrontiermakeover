
import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, ShoppingCart, Newspaper, Link as LinkIcon, BookOpen } from "lucide-react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen df-landing-page">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 relative z-50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:mr-6 pl-2">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/0766a10f-5459-46d2-976d-baebe7dc52cd.png" 
                alt="Digital Frontier Company" 
                className="h-14" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-3 mr-6">
              <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="Facebook">
                <Facebook size={22} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="X (Twitter)">
                <Twitter size={22} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="YouTube">
                <Youtube size={22} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="TikTok">
                {/* TikTok icon with consistent styling */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8c0 1 1 2 2 2h-2"></path>
                  <path d="M15 2c0 5 3 6 6 6v4c-2 0-4 0-6-2"></path>
                  <path d="M15 12v8"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="Instagram">
                <Instagram size={22} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="LinkedIn">
                <Linkedin size={22} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
            </div>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-800/80 hover:bg-slate-700/80">Explore Topics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px] bg-slate-900 shadow-xl">
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/">Home</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/about-us">About Us</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/technical">How Marketing AI Works</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/evolution">Evolution</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/newsletter" className="flex items-center">
                          <Newspaper className="h-4 w-4 mr-2" />
                          Newsletter
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-800/80 hover:bg-slate-700/80">Digital Marketing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-1 gap-3 p-4 w-[300px] bg-slate-900 shadow-xl">
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ad-funnel-blueprint">Ad Funnel Blueprint</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/generative-engine-optimization">Generative Engine Optimization</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/answer-engine-optimization">Answer Engine Optimization</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ai-and-digital-marketing">AI & Digital Marketing</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/search-engine-optimization">Search Engine Optimization</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-800/80 hover:bg-slate-700/80">Industry</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px] bg-slate-900 shadow-xl">
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/sectors">Sector Spotlights</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/future">Future Trends</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/kpis">KPIs</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/faq">FAQ</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/crypto-marketing">Crypto Marketing</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-800/80 hover:bg-slate-700/80">Ethics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-1 gap-3 p-4 w-[250px] bg-slate-900 shadow-xl">
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ai-bias-in-advertising">AI Bias in Advertising</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Blog link with icon */}
                <NavigationMenuItem>
                  <Link to="/blog" className="flex items-center px-4 py-2 text-sm font-medium bg-slate-800/80 hover:bg-slate-700/80 rounded-md text-white">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Blog
                  </Link>
                </NavigationMenuItem>
                
                {/* Pricing link with icon */}
                <NavigationMenuItem>
                  <Link to="/pricing" className="flex items-center px-4 py-2 text-sm font-medium bg-slate-800/80 hover:bg-slate-700/80 rounded-md text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                {/* Contact link */}
                <NavigationMenuItem>
                  <Link to="/contact" className="flex items-center px-4 py-2 text-sm font-medium bg-slate-800/80 hover:bg-slate-700/80 rounded-md text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </NavigationMenuItem>

                {/* Newsletter link */}
                <NavigationMenuItem>
                  <Link to="/newsletter" className="flex items-center px-4 py-2 text-sm font-medium bg-slate-800/80 hover:bg-slate-700/80 rounded-md text-white">
                    <Newspaper className="h-4 w-4 mr-2" />
                    Newsletter
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Mobile social icons */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="X (Twitter)">
                <Twitter size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="YouTube">
                <Youtube size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              </a>
              <a href="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                 aria-label="TikTok">
                {/* TikTok icon with consistent styling */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8c0 1 1 2 2 2h-2"></path>
                  <path d="M15 2c0 5 3 6 6 6v4c-2 0-4 0-6-2"></path>
                  <path d="M15 12v8"></path>
                </svg>
              </a>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-800/90 hover:bg-slate-700/90">Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px] bg-slate-900 shadow-xl">
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/">Home</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/about-us">About Us</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/technical">How AI Works</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/evolution">Evolution</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/regulations">Regulations</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ad-funnel-blueprint">Ad Funnel Blueprint</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/generative-engine-optimization">Generative Engine Optimization</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/answer-engine-optimization">Answer Engine Optimization</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ai-and-digital-marketing">AI & Digital Marketing</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/search-engine-optimization">Search Engine Optimization</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/sectors">Sector Spotlights</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/future">Future Trends</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/kpis">KPIs</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/faq">FAQ</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ai-bias-in-advertising">AI Bias in Advertising</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/crypto-marketing">Crypto Marketing</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/blog" className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Blog
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/newsletter" className="flex items-center">
                          <Newspaper className="h-4 w-4 mr-2" />
                          Newsletter
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/pricing" className="flex items-center">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Pricing
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/contact" className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Us
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer - Cleaned up and Enhanced */}
      <footer className="mt-12 py-10 border-t border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img 
                src="/lovable-uploads/0766a10f-5459-46d2-976d-baebe7dc52cd.png" 
                alt="Digital Frontier Company" 
                className="h-12 mb-4" 
              />
              <p className="text-slate-400 mb-4 text-sm">
                Leading the way in AI-powered marketing solutions and digital transformation strategies.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" 
                   className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-all hover:scale-110"
                   aria-label="Facebook">
                  <Facebook size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                </a>
                <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" 
                   className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-all hover:scale-110"
                   aria-label="X (Twitter)">
                  <Twitter size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                </a>
                <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-all hover:scale-110"
                   aria-label="YouTube">
                  <Youtube size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                </a>
                <a href="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-all hover:scale-110"
                   aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8c0 1 1 2 2 2h-2"></path>
                    <path d="M15 2c0 5 3 6 6 6v4c-2 0-4 0-6-2"></path>
                    <path d="M15 12v8"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-all hover:scale-110"
                   aria-label="Instagram">
                  <Instagram size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                </a>
                <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-all hover:scale-110"
                   aria-label="LinkedIn">
                  <Linkedin size={18} strokeWidth={1.5} className="hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</Link>
                <Link to="/about-us" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link>
                <Link to="/technical" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">How AI Works</Link>
                <Link to="/evolution" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Evolution</Link>
                <Link to="/sectors" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Sectors</Link>
                <Link to="/future" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Future Trends</Link>
                <Link to="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link>
                <Link to="/search-engine-optimization" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">SEO</Link>
                <Link to="/crypto-marketing" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Crypto Marketing</Link>
                <Link to="/newsletter" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Newsletter</Link>
                <Link to="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Pricing</Link>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
              <a href="mailto:info@digitalfrontier.app" className="text-cyan-400 hover:underline flex items-center mb-3 text-sm">
                <Mail size={16} className="mr-2" />
                info@digitalfrontier.app
              </a>
              <Link to="/contact" className="inline-flex items-center px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-md hover:bg-cyan-500/30 transition-colors text-sm">
                <LinkIcon size={14} className="mr-2" />
                Get in Touch
              </Link>
              <p className="text-slate-400 text-sm mt-4">
                Digital Frontier Company LLC<br />
                © 2025 - All rights reserved
              </p>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-xs mb-4 md:mb-0">
              Harnessing the power of AI for next-generation digital marketing
            </p>
            
            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Use
              </a>
              <Link to="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Blog
              </Link>
              <Link to="/search-engine-optimization" className="text-slate-400 hover:text-cyan-400 transition-colors">
                SEO
              </Link>
              <Link to="/crypto-marketing" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Crypto
              </Link>
              <Link to="/newsletter" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center">
                <Newspaper className="h-3 w-3 mr-1" />
                Newsletter
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
