
import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, ShoppingCart, Newspaper } from "lucide-react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen df-landing-page">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:mr-6 pl-2">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c9d38052-a83f-47d4-ab89-a00c237a6ff9.png" 
                alt="Digital Frontier Company" 
                className="h-12" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-3 mr-6">
              <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="TikTok">
                {/* Using a custom TikTok icon placeholder since it's not in lucide-react */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8c0 1 1 2 2 2h-2"></path>
                  <path d="M15 2c0 5 3 6 6 6v4c-2 0-4 0-6-2"></path>
                  <path d="M15 12v8"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50">Explore Topics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
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
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50">Digital Marketing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-1 gap-3 p-4 w-[300px]">
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
                      {/* Add new SEO page link */}
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/search-engine-optimization">Search Engine Optimization</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50">Industry</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
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
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50">Ethics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-1 gap-3 p-4 w-[250px]">
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/ai-bias-in-advertising">AI Bias in Advertising</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Add Pricing link with icon */}
                <NavigationMenuItem>
                  <Link to="/pricing" className="flex items-center px-4 py-2 text-sm font-medium hover:text-blue-400 transition-colors">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                {/* Keep Contact as a standalone item */}
                <NavigationMenuItem>
                  <Link to="/contact" className="flex items-center px-4 py-2 text-sm font-medium hover:text-blue-400 transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </NavigationMenuItem>

                {/* Add Newsletter as a standalone item */}
                <NavigationMenuItem>
                  <Link to="/newsletter" className="flex items-center px-4 py-2 text-sm font-medium hover:text-blue-400 transition-colors">
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
              <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="X (Twitter)">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="TikTok">
                {/* Using a custom TikTok icon placeholder since it's not in lucide-react */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50">Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px]">
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
                      {/* Add new SEO page link to mobile menu */}
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
                      {/* Add Newsletter to mobile menu */}
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md bg-blue-900/20">
                        <Link to="/newsletter" className="flex items-center">
                          <Newspaper className="h-4 w-4 mr-2" />
                          Newsletter
                        </Link>
                      </NavigationMenuLink>
                      {/* Add Pricing to mobile menu */}
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/pricing" className="flex items-center">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Pricing
                        </Link>
                      </NavigationMenuLink>
                      {/* Keep Contact in mobile menu */}
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

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; 2025 Digital Frontier Company LLC - All rights reserved. <a href="mailto:info@digitalfrontier.app" className="text-blue-400 hover:underline">info@digitalfrontier.app</a>
            </p>
            
            {/* Social Media Icons in Footer */}
            <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
              <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://www.tiktok.com/@digital_frontier_company" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                {/* Using a custom TikTok icon placeholder since it's not in lucide-react */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8c0 1 1 2 2 2h-2"></path>
                  <path d="M15 2c0 5 3 6 6 6v4c-2 0-4 0-6-2"></path>
                  <path d="M15 12v8"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              {/* Add SEO link to footer */}
              <Link to="/search-engine-optimization" className="text-slate-400 hover:text-blue-400 transition-colors">
                SEO
              </Link>
              {/* Add Newsletter link to footer */}
              <Link to="/newsletter" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                <Newspaper className="h-4 w-4 mr-1" />
                Newsletter
              </Link>
              {/* Add Pricing link to footer */}
              <Link to="/pricing" className="text-slate-400 hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">
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
