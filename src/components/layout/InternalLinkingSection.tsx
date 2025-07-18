import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getContextualLinks, generateCTALinks } from "@/utils/internalLinking";

interface InternalLinkingSectionProps {
  currentPath: string;
  contentType?: string;
  showCTAs?: boolean;
  className?: string;
}

const InternalLinkingSection: React.FC<InternalLinkingSectionProps> = ({
  currentPath,
  contentType = 'marketing-strategy',
  showCTAs = true,
  className = ""
}) => {
  const relatedLinks = getContextualLinks(contentType, currentPath);
  const ctaLinks = generateCTALinks(currentPath);
  
  if (relatedLinks.length === 0 && !showCTAs) {
    return null;
  }
  
  return (
    <section className={`bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 ${className}`}>
      {/* Related Content Links */}
      {relatedLinks.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ExternalLink className="w-6 h-6 mr-3 text-blue-400" />
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {relatedLinks.map((link, index) => (
              <Link
                key={link.url}
                to={link.url}
                className="group p-4 bg-slate-800/40 border border-slate-600/30 rounded-xl hover:border-blue-500/50 hover:bg-slate-700/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {link.text}
                    </h4>
                    {link.description && (
                      <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">
                        {link.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-3 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Call-to-Action Section */}
      {showCTAs && (
        <div className="border-t border-slate-700/50 pt-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Ready to Take Action?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link
              to={ctaLinks.primary.url}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                {ctaLinks.primary.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
            
            {/* Secondary CTA */}
            <Link
              to={ctaLinks.secondary.url}
              className="group border-2 border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center"
            >
              <span className="flex items-center justify-center">
                {ctaLinks.secondary.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
          
          {/* CTA Descriptions */}
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-400">
              {ctaLinks.primary.description} • {ctaLinks.secondary.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default InternalLinkingSection;