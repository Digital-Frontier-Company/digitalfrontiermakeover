
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen df-landing-page">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" 
                alt="Digital Frontier Company" 
                className="h-12 mr-3" 
              />
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                The Digital Frontier
              </h1>
              <p className="text-slate-300 mt-1">Navigating the Future of Technology & Ethics</p>
            </div>
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
                      <Link to="/technical">How Marketing AI Works</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                      <Link to="/evolution">Evolution</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                      <Link to="/regulations">Regulations</Link>
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
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <div className="md:hidden">
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
                        <Link to="/technical">How Marketing AI Works</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/evolution">Evolution</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                        <Link to="/regulations">Regulations</Link>
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
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="df-hero-section">
        <div className="container">
          {/* Digital Frontier Logo */}
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company" className="df-logo" width="220" />
          </div>

          <div className="hero-content">
            <h1>With Answer Engine Optimization, Your Website Isn't Just a Website — It's a <span className="highlight">Money‑Making Machine</span></h1>
            <h2>Stop paying for pretty pixels. Your site should print money. At Digital Frontier we redesign pages around the only metric that matters—pipeline revenue.</h2>
            <div className="text-center mt-4">
              <a href="#contact" className="df-cta-button">Get Your Free Review</a>
            </div>

            <div className="df-trust-badges">
              <div className="df-trust-badge">
                <div className="df-trust-number"><span className="df-stat-counter">200</span>+</div>
                <div className="df-trust-label">Websites Analyzed</div>
              </div>
              <div className="df-trust-badge">
                <div className="df-trust-number"><span className="df-stat-counter">98</span>%</div>
                <div className="df-trust-label">Satisfaction Rate</div>
              </div>
              <div className="df-trust-badge">
                <div className="df-trust-number">+<span className="df-stat-counter">85</span>%</div>
                <div className="df-trust-label">Avg. Traffic Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
          <article>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
                The High-Stakes Ethics of AI-Powered Marketing in 2025
              </h2>
              <p className="text-slate-400 italic">Published: May 1, 2025</p>
            </div>
            
            <Tabs defaultValue="executive" className="mb-12">
              <TabsList className="bg-slate-800/50">
                <TabsTrigger value="executive">Executive Snapshot</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="pitfalls">Ethical Pitfalls</TabsTrigger>
              </TabsList>
              
              {/* Executive Snapshot */}
              <TabsContent value="executive" className="mt-6 text-slate-300">
                <div className="p-5 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Executive Snapshot</h3>
                  <p className="mb-4">By 2025, AI is a cornerstone of marketing, boosting ROI but raising ethical concerns around trust, bias, and regulation. Responsible AI strategies are crucial.</p>
                  
                  <h4 className="text-xl font-semibold text-slate-200 mb-2">Key Takeaways:</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <span className="font-semibold text-blue-300">Personalization & ROI:</span> AI drives hyper-personalized content and efficiency.
                    </li>
                    <li>
                      <span className="font-semibold text-blue-300">Ethical Pitfalls:</span> Bias, lack of transparency, and data misuse erode trust. Consumer trust lags behind marketer optimism.
                    </li>
                    <li>
                      <span className="font-semibold text-blue-300">Regulations & Reputation:</span> Global rules like the EU AI Act and consumer scrutiny demand ethical frameworks.
                    </li>
                  </ul>
                  <p className="mt-4">Success requires balancing innovation with responsibility.</p>
                </div>
              </TabsContent>
              
              {/* Benefits */}
              <TabsContent value="benefits" className="mt-6 text-slate-300">
                <div className="p-5 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">The Bottom-Line Benefits (Why Ethics Matter)</h3>
                  <p className="mb-4">
                    AI supercharges marketing via efficiency, scale, hyper-personalization, better decision-making, and innovative experiences. However, these benefits are only sustainable if consumer trust is maintained.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="p-3 bg-slate-800/40 rounded-md">Ethical personalization respects privacy.</li>
                    <li className="p-3 bg-slate-800/40 rounded-md">Data-driven decisions need checks for bias.</li>
                    <li className="p-3 bg-slate-800/40 rounded-md">Transparency about AI use is key.</li>
                    <li className="p-3 bg-slate-800/40 rounded-md">Investing in ethical oversight protects ROI.</li>
                    <li className="p-3 bg-slate-800/40 rounded-md">Ethical practices build brand loyalty and a competitive edge.</li>
                  </ul>
                </div>
              </TabsContent>
              
              {/* Ethical Pitfalls */}
              <TabsContent value="pitfalls" className="mt-6 text-slate-300">
                <div className="p-5 bg-gradient-to-br from-slate-800/50 to-indigo-900/30 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Ethical Pitfalls of AI-Powered Marketing</h3>
                  <p className="mb-4">AI reflects human biases at scale. Major issues include:</p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-800/40 rounded-md border-l-4 border-red-500">
                      <h4 className="text-lg font-semibold text-white mb-1">Bias and Discrimination</h4>
                      <p>Algorithms can unfairly target or exclude groups (e.g., digital redlining, biased job ads). Mitigation involves diverse data and testing.</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/40 rounded-md border-l-4 border-orange-500">
                      <h4 className="text-lg font-semibold text-white mb-1">Privacy and Data Misuse</h4>
                      <p>AI can infer sensitive data, raising privacy concerns. GDPR and other laws mandate consent and careful handling. A privacy-by-design approach is vital.</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/40 rounded-md border-l-4 border-yellow-500">
                      <h4 className="text-lg font-semibold text-white mb-1">Lack of Transparency ("Black Box")</h4>
                      <p>Uninterpretable AI decisions erode trust. Disclosing AI-generated content is becoming expected and legally required. Transparency boosts trust.</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/40 rounded-md border-l-4 border-green-500">
                      <h4 className="text-lg font-semibold text-white mb-1">Misinformation and Content Integrity</h4>
                      <p>Generative AI can produce errors ("hallucinations") or biased/offensive content. Fact-checking and human oversight are crucial.</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/40 rounded-md border-l-4 border-blue-500">
                      <h4 className="text-lg font-semibold text-white mb-1">Accountability Gaps</h4>
                      <p>Responsibility lies with the deployer, not the algorithm. Governance frameworks are needed.</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/40 rounded-md border-l-4 border-purple-500">
                      <h4 className="text-lg font-semibold text-white mb-1">Consumer Trust Erosion</h4>
                      <p>All pitfalls damage trust, the core currency. Skepticism is high. Openness can rebuild trust.</p>
                    </div>
                  </div>
                  
                  <p className="mt-4">Proactive ethical management is essential to avoid legal/reputational damage.</p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-3">Explore further:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/technical" className="p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span>How Marketing AI Works</span>
                </Link>
                
                <Link to="/evolution" className="p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>The History of AI in Marketing</span>
                </Link>
                
                <Link to="/regulations" className="p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-500/20 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span>Regulations & Governance</span>
                </Link>
                
                <Link to="/ai-bias-in-advertising" className="p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-500/20 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span>AI Bias in Advertising</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; 2025 Digital Frontier Company - <a href="https://thedigitalfrontier.ai" className="text-blue-400 hover:underline">thedigitalfrontier.ai</a>
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
