
import { Link } from "react-router-dom";

const Technical = () => {
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/technical" className="text-blue-400 border-b border-blue-400">Technical Breakdown</Link>
            <Link to="/evolution" className="text-slate-300 hover:text-blue-400 transition-colors">Evolution</Link>
            <Link to="/regulations" className="text-slate-300 hover:text-blue-400 transition-colors">Regulations</Link>
            <Link to="/sectors" className="text-slate-300 hover:text-blue-400 transition-colors">Sectors</Link>
            <Link to="/future" className="text-slate-300 hover:text-blue-400 transition-colors">Future Trends</Link>
            <Link to="/kpis" className="text-slate-300 hover:text-blue-400 transition-colors">KPIs</Link>
            <Link to="/faq" className="text-slate-300 hover:text-blue-400 transition-colors">FAQ</Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select 
              className="bg-slate-800 text-slate-300 rounded-md border border-slate-700 px-2 py-1"
              onChange={(e) => window.location.href = e.target.value}
              defaultValue="/technical"
            >
              <option value="/">Home</option>
              <option value="/technical">Technical Breakdown</option>
              <option value="/evolution">Evolution</option>
              <option value="/regulations">Regulations</option>
              <option value="/sectors">Sectors</option>
              <option value="/future">Future Trends</option>
              <option value="/kpis">KPIs</option>
              <option value="/faq">FAQ</option>
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
                Technical Breakdown of Marketing AI
              </h2>
              <p className="text-slate-300 mt-4 mb-6">
                Understanding how AI works in marketing helps identify ethical risks. It's a suite of technologies:
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Data Crunching & Predictive Analytics */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Data Crunching & Predictive Analytics</h3>
                <p className="text-slate-300">
                  AI analyzes big data (customer history, behavior) for insights like churn prediction. 
                  Uses machine learning models (regression, neural networks). Ethical risk: Biased input 
                  data leads to biased predictions. Need representative data.
                </p>
              </section>
              
              {/* Segmentation & Personalization Algorithms */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Segmentation & Personalization Algorithms</h3>
                <p className="text-slate-300">
                  AI creates micro-segments, even of one. Recommendation engines analyze behavior to tailor 
                  content/products. Uses clustering, collaborative filtering. Ethical risk: Balancing relevance 
                  vs. intrusion; avoiding sensitive attributes without consent.
                </p>
              </section>
              
              {/* Programmatic Advertising & Media Buying */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Programmatic Advertising & Media Buying</h3>
                <p className="text-slate-300">
                  AI handles real-time bidding for ad impressions, optimizing campaigns. Uses reinforcement learning. 
                  Ethical risks: Opaqueness, potential bias leading to under-serving groups, brand safety issues.
                </p>
              </section>
              
              {/* Generative AI in Creative & Content */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Generative AI in Creative & Content</h3>
                <p className="text-slate-300">
                  AI creates text, images, video (e.g., GPT-4, DALL-E). Turbocharges content production. 
                  Ethical risks: Misinformation ("hallucinations"), authenticity, biased outputs, lack of 
                  transparency (should AI content be disclosed?). Requires human oversight.
                </p>
              </section>
              
              {/* Chatbots & Conversational AI */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Chatbots & Conversational AI</h3>
                <p className="text-slate-300">
                  AI bots handle inquiries, recommend products, run promotions using NLP. Ethical risks: 
                  Bots pretending to be human, potential for poor service or bias, accessibility issues.
                </p>
              </section>
              
              {/* Marketing Automation & Decision Engines */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Marketing Automation & Decision Engines</h3>
                <p className="text-slate-300">
                  AI orchestrates customer journeys, making autonomous micro-decisions. Ethical risk: 
                  Ensuring decisions align with guidelines, avoiding proxy bias (e.g., location as proxy for race). 
                  Accountability and explainability needed.
                </p>
              </section>
              
              <p className="text-slate-300 mt-6 text-center italic">
                Technical literacy helps marketers identify potential ethical issues proactively.
              </p>
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

export default Technical;
