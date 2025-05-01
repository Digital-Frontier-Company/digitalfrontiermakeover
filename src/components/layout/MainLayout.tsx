
import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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

      {/* Main Content */}
      {children}

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

export default MainLayout;
