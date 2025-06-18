import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  useEffect(() => {
    // Load HubSpot tracking script if configured
    const hubspotId = localStorage.getItem('hubspot_id');
    const enableTracking = localStorage.getItem('hubspot_enable_tracking') === 'true';
    if (hubspotId && enableTracking) {
      const script = document.createElement('script');
      script.src = `//js.hs-scripts.com/${hubspotId}.js`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(`script[src*="${hubspotId}"]`);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);
  return <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="h-8 w-auto" />
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400">Digital Marketing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900 border border-slate-700">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-blue-700/20 p-6 no-underline outline-none focus:shadow-md text-slate-100 hover:text-white" to="/search-engine-optimization">
                            <div className="mb-2 mt-4 text-lg font-medium text-slate-100">
                              SEO Services
                            </div>
                            <p className="text-sm leading-tight text-slate-300">
                              Search Engine Optimization strategies to boost your visibility
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/generative-engine-optimization" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">GEO</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Generative Engine Optimization
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/answer-engine-optimization" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">AEO</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Answer Engine Optimization
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/crypto-marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Crypto Marketing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Web3 and cryptocurrency marketing
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/influencer-marketing-2025" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Influencer Marketing 2025</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Next-gen creator strategies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/ad-funnel-blueprint" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Ad Funnel Blueprint</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              High-converting ad strategies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/ai-and-digital-marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">AI & Digital Marketing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              AI-powered marketing strategies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900 border border-slate-700">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Latest insights and strategies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/content-creation-agent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Content Creation Agent</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              AI-powered content tools
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/psychological-digital-marketing-insights" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Psychology Insights</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Consumer behavior analysis
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/ai-bias-in-advertising" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">AI Bias in Advertising</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Understanding algorithmic bias
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">FAQ</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Frequently asked questions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-900 border border-slate-700">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-6 no-underline outline-none focus:shadow-md text-slate-100 hover:text-white" to="/about-us">
                            <div className="mb-2 mt-4 text-lg font-medium text-slate-100">
                              About Digital Frontier
                            </div>
                            <p className="text-sm leading-tight text-slate-300">
                              Learn about our mission and team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/pricing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Pricing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Our service packages
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
                            <div className="text-sm font-medium leading-none text-slate-100">Contact</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Get in touch with us
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="h-8 w-auto" />
                <span className="font-bold text-lg text-slate-100">Digital Frontier</span>
              </div>
              <p className="text-slate-400 mb-4">
                Leading digital marketing agency specializing in AI-driven strategies, SEO, and cutting-edge optimization techniques.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
export default MainLayout;