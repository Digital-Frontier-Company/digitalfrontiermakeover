
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Target, Shield, Users, LineChart, Scale, AlertCircle, CheckCircle2 } from "lucide-react";

const KPIs = () => {
  const location = useLocation();

  const kpis = [
    {
      id: 1,
      title: "Marketing Performance Metrics",
      description: "Standard metrics (ROI, CTR, CAC, CLV) remain relevant but must be balanced with ethical considerations. Example: An AI model with high CTR but demographic skew requires adjustment.",
      icon: <BarChart2 className="h-6 w-6 text-blue-400" />
    },
    {
      id: 2,
      title: "AI-Specific Technical KPIs",
      description: "Accuracy, precision, recall of ML models. AI hallucination rate. Speed of content generation. Training data representativeness score. Algorithmic confidence intervals.",
      icon: <Target className="h-6 w-6 text-purple-400" />
    },
    {
      id: 3,
      title: "Privacy & Data Usage Metrics",
      description: "Consent rate (opt-in %). Data minimization score. PII usage reduction %. Data retention compliance. DSAR resolution time. Encryption coverage %.",
      icon: <Shield className="h-6 w-6 text-green-400" />
    },
    {
      id: 4,
      title: "Fairness & Inclusion Metrics",
      description: "Demographic parity across segments. Equal opportunity measures. Disparate impact scores. Accessibility compliance %. Readability scores for AI-generated content.",
      icon: <Users className="h-6 w-6 text-amber-400" />
    },
    {
      id: 5,
      title: "Transparency & Trust Measurements",
      description: "AI disclosure compliance. Explanation quality score. Customer trust index. Feedback resolution time. Ethics support ticket volume/resolution.",
      icon: <LineChart className="h-6 w-6 text-cyan-400" />
    },
    {
      id: 6,
      title: "Governance & Compliance Metrics",
      description: "Ethics training completion %. Policy compliance score. Risk assessment completion rate. Ethics review turnaround time. Audit findings resolution rate.",
      icon: <Scale className="h-6 w-6 text-pink-400" />
    },
    {
      id: 7,
      title: "Incident & Response Metrics",
      description: "AI ethics incidents per quarter. Mean time to detection/resolution. Post-mortem completion rate. Recurring issue prevention score.",
      icon: <AlertCircle className="h-6 w-6 text-red-400" />
    },
    {
      id: 8,
      title: "Stakeholder Impact Metrics",
      description: "Employee ethics satisfaction. Customer experience scores. Social impact measurements. Investor ESG alignment scores. Community perception index.",
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />
    },
  ];

  return (
    <PageLayout 
      title="Key Performance Indicators for Ethical AI Marketing"
      subtitle="Measuring both business and ethical performance is essential. Key metrics include:"
      currentPath={location.pathname}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kpis.map((kpi) => (
          <Card key={kpi.id} className="bg-slate-800/80 border-slate-700 hover:border-[#00BFFF] transition-colors group">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-700/50 rounded-md group-hover:bg-[#00BFFF]/20 transition-colors">
                  {kpi.icon}
                </div>
                <CardTitle className="text-lg text-slate-100 group-hover:text-[#00BFFF] transition-colors">
                  {kpi.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <p className="text-slate-300 mt-6 text-center italic">
        Balanced measurement frameworks ensure ethical AI creates sustainable business value.
      </p>
    </PageLayout>
  );
};

export default KPIs;
