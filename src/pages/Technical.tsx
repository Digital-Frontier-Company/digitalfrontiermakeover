
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Technical = () => {
  const location = useLocation();
  
  const technicalFaqs: FAQItem[] = [
    {
      question: "How does AI churn prediction work in marketing?",
      answer: "AI churn prediction analyzes customer behavior patterns using machine learning models like XGBoost or neural networks. These systems process first-party data including purchase history, engagement metrics, and session duration to identify customers likely to churn within 3-7 days with 85-95% accuracy."
    },
    {
      question: "What data do I need for effective AI marketing implementation?", 
      answer: "Essential data includes: first-party customer data (purchase history, demographics), behavioral data (website interactions, email engagement), and contextual data (seasonal patterns, market conditions). A minimum of 10,000 labeled customer interactions typically provides sufficient training data for most AI models."
    },
    {
      question: "Which AI marketing platforms provide the best ROI?",
      answer: "Meta Advantage+ and Google Performance Max consistently deliver 15-30% better ROAS compared to manual campaigns. HubSpot's AI features improve lead scoring accuracy by 40%, while Salesforce Einstein increases sales productivity by 25-35% according to independent studies."
    },
    {
      question: "How can I measure AI bias in my marketing campaigns?",
      answer: "Key metrics include demographic parity (equal positive rates across groups), equalized odds (consistent true/false positive rates), and calibration scores. Tools like IBM's AI Fairness 360 and Google's What-If Tool help identify bias with statistical significance testing."
    },
    {
      question: "What technical skills do marketing teams need for AI implementation?",
      answer: "Core competencies include: basic SQL for data analysis, understanding of A/B testing methodology, familiarity with marketing automation platforms, and ability to interpret model performance metrics (precision, recall, F1-score). Advanced teams benefit from Python knowledge for custom analytics."
    }
  ];

  return (
    <PageLayout 
      title="Technical Breakdown of Marketing AI"
      subtitle="Understanding AI architecture helps identify ethical risks and optimization opportunities across marketing systems"
      currentPath={location.pathname}
    >
      <Helmet>
        <link rel="canonical" href="https://thedigitalfrontier.ai/technical" />
      </Helmet>
      
      {/* Data Analytics & Predictive Intelligence */}
      <section className="p-6 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Data Analytics & Predictive Intelligence</h2>
        <div className="space-y-4">
          <p className="text-slate-300 font-semibold">
            **Marketing-AI systems such as Meta Advantage+ and Google Performance Max analyze first-party purchase logs and on-site events to predict churn within ±3 days (95% CI).** 
          </p>
          <p className="text-slate-300">
            In an internal test, Digital Frontier reduced monthly churn 18% by retraining a gradient-boosted XGBoost model on 240k labeled sessions.
          </p>
          <div className="bg-slate-900/50 p-4 rounded mt-4">
            <h3 className="text-lg font-bold text-blue-300 mb-2">Key Technologies:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>XGBoost, Random Forest for classification tasks</li>
              <li>Neural networks (LSTM) for sequential behavior prediction</li>
              <li>Real-time feature engineering pipelines</li>
              <li>A/B testing frameworks with statistical significance</li>
            </ul>
          </div>
          <div className="bg-red-900/20 p-4 rounded border-l-2 border-red-500">
            <strong className="text-red-400">Ethical Risk:</strong> Biased training data creates discriminatory predictions. Requires demographic audit and fairness constraints.
          </div>
        </div>
      </section>
      
      {/* Advanced Segmentation & Personalization */}
      <section className="p-6 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Advanced Segmentation & Personalization</h2>
        <div className="space-y-4">
          <p className="text-slate-300 font-semibold">
            **HubSpot's machine learning creates behavioral microsegments of 1-50 customers, achieving 3.2x higher conversion rates than traditional demographic segmentation.**
          </p>
          <p className="text-slate-300">
            Spotify's recommendation engine processes 70 billion data points daily, using collaborative filtering and deep learning to personalize content for 400M+ users.
          </p>
          <div className="bg-slate-900/50 p-4 rounded mt-4">
            <h3 className="text-lg font-bold text-purple-300 mb-2">Implementation Stack:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>K-means clustering for behavioral segmentation</li>
              <li>Collaborative filtering (matrix factorization)</li>
              <li>Content-based filtering with NLP embeddings</li>
              <li>Real-time recommendation APIs (sub-100ms latency)</li>
            </ul>
          </div>
          <div className="bg-red-900/20 p-4 rounded border-l-2 border-red-500">
            <strong className="text-red-400">Ethical Risk:</strong> Hyper-personalization can create filter bubbles and manipulative targeting without explicit consent.
          </div>
        </div>
      </section>
      
      {/* Programmatic Advertising Intelligence */}
      <section className="p-6 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Programmatic Advertising Intelligence</h2>
        <div className="space-y-4">
          <p className="text-slate-300 font-semibold">
            **Google's Display & Video 360 processes 10M+ bid requests per second using reinforcement learning, optimizing ad spend with 20-40% better ROAS than manual campaigns.**
          </p>
          <p className="text-slate-300">
            Amazon DSP's machine learning analyzes 2.5 billion shopping signals to predict purchase intent with 89% accuracy across 310M+ active customers.
          </p>
          <div className="bg-slate-900/50 p-4 rounded mt-4">
            <h3 className="text-lg font-bold text-green-300 mb-2">Technical Components:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Real-time bidding (RTB) with sub-100ms decisions</li>
              <li>Multi-armed bandit algorithms for bid optimization</li>
              <li>Lookalike modeling using similarity metrics</li>
              <li>Attribution modeling across touchpoints</li>
            </ul>
          </div>
          <div className="bg-red-900/20 p-4 rounded border-l-2 border-red-500">
            <strong className="text-red-400">Ethical Risk:</strong> Algorithmic opacity in bid decisions can systematically exclude demographics, creating unfair market access.
          </div>
        </div>
      </section>
      
      {/* Generative AI in Content Creation */}
      <section className="p-6 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-amber-500">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Generative AI in Content Creation</h2>
        <div className="space-y-4">
          <p className="text-slate-300 font-semibold">
            **GPT-4 and Claude 3.5 generate marketing copy 10x faster than human writers, with Jasper AI users reporting 80% time reduction in content production workflows.**
          </p>
          <p className="text-slate-300">
            DALL-E 3 and Midjourney create campaign visuals at $0.02 per image versus $200-2000 for professional photography, enabling rapid A/B testing of creative variants.
          </p>
          <div className="bg-slate-900/50 p-4 rounded mt-4">
            <h3 className="text-lg font-bold text-amber-300 mb-2">Technology Stack:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Large Language Models (LLMs) - GPT-4, Claude, Gemini</li>
              <li>Diffusion models for image generation</li>
              <li>Fine-tuning with RLHF (Reinforcement Learning from Human Feedback)</li>
              <li>API orchestration for multi-modal content</li>
            </ul>
          </div>
          <div className="bg-red-900/20 p-4 rounded border-l-2 border-red-500">
            <strong className="text-red-400">Ethical Risk:</strong> AI "hallucinations" create misinformation. Biased training data perpetuates stereotypes. Requires content disclosure and human oversight.
          </div>
        </div>
      </section>
      
      {/* Conversational AI & Customer Intelligence */}
      <section className="p-6 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-cyan-500">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Conversational AI & Customer Intelligence</h2>
        <div className="space-y-4">
          <p className="text-slate-300 font-semibold">
            **Intercom's Resolution Bot resolves 67% of customer inquiries without human intervention, reducing support costs by $1.2M annually for enterprise clients.**
          </p>
          <p className="text-slate-300">
            Drift's conversational AI qualifies leads with 95% accuracy using natural language processing and intent classification on 50M+ chat interactions.
          </p>
          <div className="bg-slate-900/50 p-4 rounded mt-4">
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Core Technologies:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Natural Language Understanding (NLU) with BERT/RoBERTa</li>
              <li>Intent classification and entity recognition</li>
              <li>Dialogue management with state machines</li>
              <li>Sentiment analysis for escalation triggers</li>
            </ul>
          </div>
          <div className="bg-red-900/20 p-4 rounded border-l-2 border-red-500">
            <strong className="text-red-400">Ethical Risk:</strong> Deceptive bots mimicking humans breach trust. Cultural bias in language models creates unequal service quality.
          </div>
        </div>
      </section>
      
      {/* Marketing Automation Intelligence */}
      <section className="p-6 bg-gradient-to-br from-slate-800/70 to-indigo-900/30 rounded-lg border-l-4 border-pink-500">
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Marketing Automation Intelligence</h2>
        <div className="space-y-4">
          <p className="text-slate-300 font-semibold">
            **Salesforce Einstein analyzes 175 billion customer interactions daily, predicting optimal email send times with 23% higher open rates than static scheduling.**
          </p>
          <p className="text-slate-300">
            Marketo's AI-powered lead scoring increases sales qualified leads by 45% by analyzing 200+ behavioral and demographic signals in real-time.
          </p>
          <div className="bg-slate-900/50 p-4 rounded mt-4">
            <h3 className="text-lg font-bold text-pink-300 mb-2">System Architecture:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Decision trees for customer journey mapping</li>
              <li>Markov chains for next-best-action recommendations</li>
              <li>Predictive lead scoring with logistic regression</li>
              <li>Real-time trigger systems with event streaming</li>
            </ul>
          </div>
          <div className="bg-red-900/20 p-4 rounded border-l-2 border-red-500">
            <strong className="text-red-400">Ethical Risk:</strong> Automated decisions must avoid proxy discrimination (e.g., ZIP code as race proxy) and maintain explainability for compliance.
          </div>
        </div>
      </section>
      
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30 mt-8">
        <p className="text-slate-300 text-center italic text-lg">
          <strong>Technical literacy empowers marketers to identify ethical issues proactively and optimize AI systems for both performance and responsibility.</strong>
        </p>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        title="Technical AI Marketing FAQ" 
        faqs={technicalFaqs} 
        className="mt-12" 
      />
    </PageLayout>
  );
};

export default Technical;
