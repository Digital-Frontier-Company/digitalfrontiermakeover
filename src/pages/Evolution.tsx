
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Evolution = () => {
  const location = useLocation();

  return (
    <PageLayout 
      title="Historical Evolution of AI in Marketing"
      subtitle="Understanding the history highlights why ethical considerations are critical today."
      currentPath={location.pathname}
    >
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
    </PageLayout>
  );
};

export default Evolution;
