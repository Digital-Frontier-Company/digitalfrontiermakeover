import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Target, Clock, TrendingUp } from "lucide-react";

const AIIntegration = () => {
  const location = useLocation();

  const operatorStackSteps = [
    {
      step: "Discover",
      description: "Map jobs-to-be-done, quantify bottlenecks, set KPI tree (time saved, error rate, throughput)."
    },
    {
      step: "Blueprint", 
      description: "Process → model → data → UX → guardrails → analytics."
    },
    {
      step: "Pilot",
      description: "One workflow, one team, one number to move."
    },
    {
      step: "Deploy",
      description: "Integrate in stack (CRM, ERP, helpdesk, comms)."
    },
    {
      step: "Train",
      description: "SOPs, micro-videos, prompts, role-based access."
    },
    {
      step: "Govern",
      description: "Logging, PII policy, evals, red-team tests, drift watch."
    }
  ];

  const useCases = [
    {
      function: "Sales",
      solutions: ["CRM copilot", "Lead scoring", "Proposal draft", "Call summaries→CRM"]
    },
    {
      function: "Support", 
      solutions: ["Answer engine + suggested replies", "Knowledge gap alerts"]
    },
    {
      function: "Ops/Field",
      solutions: ["Dispatch optimization", "Checklists", "Parts lookup (phone-friendly)"]
    },
    {
      function: "Finance",
      solutions: ["Invoice classification", "Anomaly flags", "Collections nudges"]
    }
  ];

  const proofBlocks = [
    "Cut handle time 22% in 45 days",
    "Reduced proposal time 3.2x with CRM copilot",
    "85% first-call resolution with answer engine",
    "Field ops dispatch optimization: 18% faster routes"
  ];

  const faqs = [
    {
      question: "We tried AI; nothing stuck.",
      answer: "Likely scope sprawl. We pick one workflow, one number, and owner."
    },
    {
      question: "Our data is messy.",
      answer: "Good—pilots expose the minimum viable data model, then we fix the 20% that drives 80% of value."
    },
    {
      question: "Security risk?",
      answer: "Vendor-scoped, no training on your data, audit logs, policy guardrails."
    },
    {
      question: "Team adoption?",
      answer: "Role-based training, SOPs, embedded UX in current tools."
    },
    {
      question: "Budget?",
      answer: "Start with a pilot that pays for itself; month-to-month after."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Integration for SMBs | Digital Frontier</title>
        <meta name="description" content="Launch a 30-day AI pilot that pays for itself. Frontier Operator Stack™ connects to your tools, moves one KPI, and scales." />
        <meta name="keywords" content="AI integration, AI implementation, AI pilot, CRM AI copilot, answer engine, RAG, automation consulting, Digital Frontier" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Digital Frontier — Practical AI Integration" />
        <meta property="og:description" content="Diagnose, pilot, deploy, govern. Start with a 10-min AI Fit Audit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedigitalfrontier.ai/ai-integration" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Stop AI Experiments. Start AI ROI." />
        <meta name="twitter:description" content="Frontier Operator Stack™: one workflow, one number, 30 days." />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Integration (Frontier Operator Stack)",
            "provider": {"@type": "Organization", "name": "Digital Frontier"},
            "areaServed": "US",
            "description": "Practical AI integration: diagnose → blueprint → 30-day pilot → deploy → govern.",
            "offers": {"@type": "Offer", "name": "30-Day AI Pilot", "priceCurrency": "USD"}
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <PageLayout
        title="AI Integration for SMBs"
        subtitle="Deploy practical AI that pays for itself"
        currentPath={location.pathname}
        pageType="page"
      >
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              AI That Pays For Itself
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Deploy a pilot in 30 days with our <strong>Frontier Operator Stack™</strong> — data-ready, compliant, and tied to KPIs.
            </p>
          </div>

          {/* Answer-First Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">What is it?</h3>
                <p className="text-muted-foreground">A done-with-you AI integration program: diagnose, blueprint, pilot, deploy, train, govern.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Who is it for?</h3>
                <p className="text-muted-foreground">SMB/mid-market teams with under-used data and manual workflows (sales, ops, support, field).</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">How it works</h3>
                <p className="text-muted-foreground">1) 10-min AI Fit Audit → 2) 90-min Blueprint → 3) 30-day Pilot → 4) Deploy + Train → 5) Govern.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Cost & ROI</h3>
                <p className="text-muted-foreground">ROI target: <strong>&gt;2× within 90 days</strong> or extend at no fee until achieved.*</p>
              </CardContent>
            </Card>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get the 10-min AI Fit Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              See a Pilot Plan in 48 Hours
            </Button>
          </div>

          {/* Risk Reversal */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Migration handled, roll-back plan included, month-to-month after pilot.
          </p>
        </section>

        {/* Frontier Operator Stack */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Unique Mechanism</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frontier Operator Stack™</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't "do AI everywhere." <strong>Prune scope.</strong> Win one workflow, then compound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatorStackSteps.map((step, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{step.step}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Observable Truth */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-destructive/10 to-primary/10 border-destructive/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Observable Truth</h2>
              <p className="text-lg text-muted-foreground">
                Most AI projects stall after a cool demo because data is messy and KPIs are vague.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why AI Fails */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why AI Fails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Unclear ownership",
              "Weak data plumbing", 
              "Proof-of-concept purgatory",
              "No governance"
            ].map((reason, index) => (
              <Card key={index} className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-destructive">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Use Cases by Function</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{useCase.function}</h3>
                  <ul className="space-y-2">
                    {useCase.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Proof Blocks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofBlocks.map((proof, index) => (
              <Card key={index} className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-primary">{proof}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Role-based access",
              "Data boundaries", 
              "Audit logs",
              "Vendor controls",
              "PII policy",
              "Red-team tests"
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Check className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">"{faq.question}"</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Stop Experimenting?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start with a 10-min AI Fit Audit or see your pilot plan in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  Get the 10-min AI Fit Audit
                </Button>
                <Button size="lg" variant="outline">
                  <Target className="mr-2 h-4 w-4" />
                  See Your Pilot Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </PageLayout>
    </>
  );
};

export default AIIntegration;