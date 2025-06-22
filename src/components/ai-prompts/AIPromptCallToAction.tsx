
import React from "react";
import { Link } from "react-router-dom";

const AIPromptCallToAction = () => {
  return (
    <div className="py-12 px-12 rounded-lg bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-800/50 text-center mb-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dominate Memphis Marketing with AI?</h2>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
        These AI prompt templates are just the beginning. Our Answer Engine Optimization services 
        help Memphis businesses get featured in ChatGPT responses and AI search results.
      </p>
      <div className="bg-slate-800/40 p-4 rounded-lg mb-8 max-w-xl mx-auto">
        <p className="text-purple-200 font-medium">
          Memphis businesses using our AEO + AI prompt strategy see 290% increase in AI citations 
          and 180% boost in featured snippets.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/answer-engine-optimization"
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors text-lg"
        >
          Learn About Answer Engine Optimization
        </Link>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-lg">
          Get Custom AI Prompts for Your Business
        </button>
      </div>
      <p className="text-slate-400 mt-4 text-sm">
        Free consultation includes personalized Memphis AI marketing prompts
      </p>
    </div>
  );
};

export default AIPromptCallToAction;
