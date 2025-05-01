
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Evolution = () => {
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
            <Link to="/technical" className="text-slate-300 hover:text-blue-400 transition-colors">Technical Breakdown</Link>
            <Link to="/evolution" className="text-blue-400 border-b border-blue-400">Evolution</Link>
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
              defaultValue="/evolution"
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
                Historical Evolution of AI in Marketing
              </h2>
              <p className="text-slate-300 mt-4 mb-6">
                Understanding the history highlights why ethical considerations are critical today.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Timeline Section */}
              <section className="p-5 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Timeline of AI & Marketing Milestones vs. Ethical Turning Points</h3>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700">
                        <TableHead className="bg-slate-800 text-slate-200 font-bold w-1/5">Era</TableHead>
                        <TableHead className="bg-slate-800 text-slate-200 font-bold w-2/5">AI & Marketing Milestones</TableHead>
                        <TableHead className="bg-slate-800 text-slate-200 font-bold w-2/5">Ethical Turning Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-semibold text-blue-300">2010s</TableCell>
                        <TableCell className="text-slate-300">Rise of Big Data, ML for basic targeting/recommendations. Programmatic ads emerge.</TableCell>
                        <TableCell className="text-slate-300">Early privacy/profiling concerns (e.g., Target pregnancy prediction).</TableCell>
                      </TableRow>
                      <TableRow className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-semibold text-purple-300">2016-2018</TableCell>
                        <TableCell className="text-slate-300">Sophisticated social media algorithms, AI campaign optimization common.</TableCell>
                        <TableCell className="text-slate-300">Cambridge Analytica scandal (2018) spotlights data misuse & microtargeting risks.</TableCell>
                      </TableRow>
                      <TableRow className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-semibold text-green-300">2019-2021</TableCell>
                        <TableCell className="text-slate-300">Personalization 2.0 (dynamic pricing, chatbots). Pandemic accelerates AI adoption. A/B testing AI mainstream.</TableCell>
                        <TableCell className="text-slate-300">GDPR (2018) enforces consent. Bias issues emerge (e.g., discriminatory ad targeting). Responsible AI gains traction.</TableCell>
                      </TableRow>
                      <TableRow className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-semibold text-amber-300">2022-2023</TableCell>
                        <TableCell className="text-slate-300">Generative AI (GPT, DALL-E) explodes. Marketers experiment with AI content/influencers.</TableCell>
                        <TableCell className="text-slate-300">Deepfakes blur reality. AI ad bias becomes hot topic. Industry ethics codes published. Govts draft AI laws (EU AI Act).</TableCell>
                      </TableRow>
                      <TableRow className="border-slate-700 hover:bg-slate-800/50">
                        <TableCell className="font-semibold text-cyan-300">2025 (Today)</TableCell>
                        <TableCell className="text-slate-300">AI deeply embedded in marketing stacks. Advanced AI optimizes entire funnel.</TableCell>
                        <TableCell className="text-slate-300">High-stakes ethics: Consumer skepticism. Global regulations imminent. Governance frameworks essential.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </section>
              
              <p className="text-slate-300 mt-6 text-center italic">
                As AI's role grew, so did calls for ethical guardrails to protect consumer rights and societal values.
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

export default Evolution;
