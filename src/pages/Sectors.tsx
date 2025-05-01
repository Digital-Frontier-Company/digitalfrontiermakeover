
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ShoppingCart, BanknotesIcon, HeartPulse, MessageSquare, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Sectors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              The Digital Frontier
            </h1>
            <p className="text-slate-300 mt-1">Navigating the Future of Technology & Ethics</p>
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
                    <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                      <Link to="/sectors">Sector Spotlights</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                      <Link to="/faq">FAQ</Link>
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
                      <Link to="/">Future Trends</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                      <Link to="/">KPIs</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className="p-2 hover:bg-slate-800/50 rounded-md">
                      <Link to="/faq">FAQ</Link>
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
                        <Link to="/faq">FAQ</Link>
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
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
          <article>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
                Sector Spotlights: AI Ethics in Action Across Industries
              </h2>
              <p className="text-slate-300">AI marketing ethics vary by industry context. Here are key considerations:</p>
            </div>
            
            <div className="space-y-6 mt-8">
              <Card className="bg-slate-800/50 border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-md">
                      <ShoppingCart className="h-6 w-6 text-indigo-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Retail & E-Commerce</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><span className="font-semibold text-indigo-300">Uses:</span> Personalization, recommendations, dynamic pricing, in-store tracking.</p>
                  <p className="mb-2"><span className="font-semibold text-indigo-300">Ethical Challenges:</span> Price discrimination concerns, fairness of dynamic pricing, privacy intrusion (tracking), filter bubbles limiting choice, avoiding stereotypes.</p>
                  <p><span className="font-semibold text-indigo-300">Best Practices:</span> Transparency on pricing/recommendations, opt-outs, careful consent for tracking, avoiding marginalization of customer segments.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-md">
                      <BanknotesIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Financial Services & Fintech</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><span className="font-semibold text-green-300">Uses:</span> Targeting offers (loans, cards), lead scoring, personalized app experiences.</p>
                  <p className="mb-2"><span className="font-semibold text-green-300">Ethical Challenges:</span> High risk of algorithmic bias reinforcing inequality (violating fair lending laws), transparency in recommendations (disclosing commissions), privacy of sensitive financial data.</p>
                  <p><span className="font-semibold text-green-300">Best Practices:</span> Rigorous fairness testing of models, compliance with financial regulations (ECOA), strong data security, using AI for inclusion (finding underbanked creditworthy customers).</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/20 rounded-md">
                      <HeartPulse className="h-6 w-6 text-red-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Healthcare & Pharmaceuticals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><span className="font-semibold text-red-300">Uses:</span> Targeting health content/ads, tailoring messages (doctors vs. patients).</p>
                  <p className="mb-2"><span className="font-semibold text-red-300">Ethical Challenges:</span> Extreme sensitivity of health data (HIPAA), obtaining explicit consent, risk of misinformation from generative AI, fairness in advertising treatments (not excluding based on perceived ability to pay), avoiding exploitative targeting.</p>
                  <p><span className="font-semibold text-red-300">Best Practices:</span> Strict adherence to privacy laws, medical-legal review of all AI content, focus on education over pushiness, prioritizing patient well-being.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-md">
                      <MessageSquare className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Social Media & Ad Tech Platforms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><span className="font-semibold text-blue-300">Uses:</span> Platforms (Google, Meta) provide the AI ad ecosystem, algorithms decide ad delivery.</p>
                  <p className="mb-2"><span className="font-semibold text-blue-300">Ethical Challenges:</span> Platform responsibility for preventing discriminatory targeting (housing, jobs, credit), political ad microtargeting impact, brand safety (ads near harmful content), content moderation failures.</p>
                  <p><span className="font-semibold text-blue-300">Best Practices:</span> Platforms implementing fairness systems (Meta's VRS), restricting sensitive targeting options, brand safety tools (GARM), advertiser use of platform ethical features (Special Ad Categories).</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-md">
                      <Briefcase className="h-6 w-6 text-amber-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">B2B and Professional Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-2"><span className="font-semibold text-amber-300">Uses:</span> Targeting prospects, lead scoring, personalized outreach.</p>
                  <p className="mb-2"><span className="font-semibold text-amber-300">Ethical Challenges:</span> Less personal data but still risks (denying opportunities based on inferred business health), avoiding spam, ensuring accuracy in communications (contracts involved).</p>
                  <p><span className="font-semibold text-amber-300">Best Practices:</span> Focus on accuracy and honesty, maintaining human touch in relationships, respecting communication preferences.</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-slate-300 mt-8 italic">Context matters, but human oversight and ethical judgment are vital across all sectors.</p>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; 2025 The Digital Frontier - <a href="https://thedigitalfrontier.ai" className="text-blue-400 hover:underline">thedigitalfrontier.ai</a>
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

export default Sectors;
