
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "./MainLayout";

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
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default PageLayout;
