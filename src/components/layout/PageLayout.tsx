
import React from "react";
import { Link } from "react-router-dom";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  currentPath: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  currentPath
}) => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/technical", label: "Technical Breakdown" },
    { path: "/evolution", label: "Evolution" },
    { path: "/regulations", label: "Regulations" },
    { path: "/sectors", label: "Sectors" },
    { path: "/future", label: "Future Trends" },
    { path: "/kpis", label: "KPIs" },
    { path: "/ai-bias-in-advertising", label: "AI Bias in Advertising" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000014] via-[#000020] to-[#000033]">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              The Digital Frontier
            </h1>
            <p className="text-slate-300 mt-1">Navigating the Future of Technology & Ethics</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={currentPath === link.path 
                  ? "text-[#00BFFF] border-b border-[#00BFFF]" 
                  : "text-slate-300 hover:text-[#00BFFF] transition-colors"}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select 
              className="bg-slate-800 text-slate-300 rounded-md border border-slate-700 px-2 py-1"
              onChange={(e) => window.location.href = e.target.value}
              defaultValue={currentPath}
            >
              {navLinks.map((link) => (
                <option key={link.path} value={link.path}>
                  {link.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-4">
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">
          <article>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
                {title}
              </h2>
              {subtitle && (
                <p className="text-slate-300 mt-4 mb-6">
                  {subtitle}
                </p>
              )}
            </div>
            
            <div className="space-y-8">
              {children}
            </div>
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

export default PageLayout;
