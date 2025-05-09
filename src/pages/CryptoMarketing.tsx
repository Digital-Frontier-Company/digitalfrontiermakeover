
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CryptoMarketing = () => {
  const location = useLocation();

  const cryptoFAQs: FAQItem[] = [
    {
      question: "Why is specialized UX important for crypto platforms?",
      answer: "Crypto platforms face unique challenges due to the technical complexity and the irreversible nature of transactions. Specialized UX design can reduce the 70% abandonment rate by making complex processes more intuitive and providing proper safeguards for irreversible actions."
    },
    {
      question: "What are the key elements of a successful crypto user experience?",
      answer: "Successful crypto UX includes clear transaction confirmation flows, progressive disclosure of complex information, real-time feedback, familiar patterns adapted for blockchain interactions, and educational elements that build confidence while users navigate the platform."
    },
    {
      question: "How can Digital Frontier help improve our crypto platform's conversion rate?",
      answer: "We implement our battle-tested UX Playbook specifically designed for crypto platforms, including frictionless discovery-to-contract flows, interaction micro-enhancements, ultra-light checkout patterns, and trust-building elements that have been proven to reduce abandonment by 43% and increase retention by 37%."
    },
    {
      question: "What metrics should we track to measure UX improvements in our crypto platform?",
      answer: "Beyond standard conversion metrics, crypto platforms should track time-to-first-transaction, wallet connection success rate, transaction completion rate, support ticket frequency by user journey stage, and user confidence ratings at key interaction points."
    }
  ];

  return (
    <PageLayout
      title="Digital Frontier Marketing for Crypto"
      subtitle="From Friction to Conversion: The UX Playbook for Crypto Success"
      currentPath={location.pathname}
    >
      <Helmet>
        <title>Digital Frontier Marketing for Crypto | Digital Frontier</title>
        <meta name="description" content="Specialized UX solutions for crypto platforms to reduce abandonment and increase conversions. Our battle-tested approach combines growth marketing with user experience design." />
      </Helmet>

      <section className="mb-10">
        <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
          <p className="font-medium mb-2 text-slate-300">The stark reality?</p>
          <p className="text-3xl font-bold text-yellow-300">70% of potential users abandon crypto platforms</p>
          <p className="mt-2 text-slate-300">before completing their first transaction - not because they don't believe in the technology, but because the experience feels unnecessarily complex.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-slate-100">The High-Stakes Journey: Converting Visitors to Loyal Users</h2>
        <p className="mb-6">Our battle-tested approach combines growth marketing with user experience design specifically for legitimate crypto startups.</p>
      
        <div className="space-y-8">
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-900/50 text-cyan-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">1</div>
              <h3 className="text-xl font-bold text-slate-100">Frictionless Discovery-to-Contract Flow</h3>
            </div>
            <p className="ml-14 text-slate-300">The first interaction with your platform sets the tone for everything that follows. We prioritize above-the-fold social proof with real-time industry metrics to establish immediate credibility.</p>
          </div>
          
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-900/50 text-cyan-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">2</div>
              <h3 className="text-xl font-bold text-slate-100">Interaction Micro-Enhancements That Convert</h3>
            </div>
            <p className="ml-14 text-slate-300">Small details make significant differences in crypto UX. Our approach combines side-sliding confirmations, pulse animations after periods of inactivity, and multi-stage button feedback to prevent user uncertainty.</p>
          </div>
          
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-900/50 text-cyan-400 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">3</div>
              <h3 className="text-xl font-bold text-slate-100">Ultra-Light Crypto Checkout Patterns</h3>
            </div>
            <p className="ml-14 text-slate-300">Crypto transactions carry unique anxiety due to their irreversible nature. Our checkout patterns use progressive disclosure, visual confirmation, and familiar patterns adapted for blockchain interactions.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Our Crypto Marketing Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">75+</div>
            <div className="text-slate-300 mt-1">Crypto Brands</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">1M+</div>
            <div className="text-slate-300 mt-1">Users Scaled</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">43%</div>
            <div className="text-slate-300 mt-1">Less Abandonment</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400">37%</div>
            <div className="text-slate-300 mt-1">More Retention</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Strategic Gamification Elements</h2>
        <p className="mb-6">Habit formation drives crypto platform retention. Our approach implements carefully designed gamification elements that increase user engagement.</p>

        <div className="bg-slate-800/50 p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">User Activity</h3>
            <div className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <span className="mr-1">●</span> 3-day streak
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div 
                key={day}
                className={`h-8 rounded flex items-center justify-center ${
                  day >= 3 && day <= 5 ? 'bg-cyan-900/30 border border-cyan-700/50' : 'bg-slate-700/50'
                }`}
              >
                {day >= 3 && day <= 5 && <span className="text-cyan-400 text-xs">✓</span>}
              </div>
            ))}
          </div>
          
          <p className="text-sm text-slate-400 mb-6">Keep using the platform daily to build your streak and earn rewards.</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                  <span className="text-cyan-400">🪙</span>
                </div>
                <div>
                  <div className="font-medium text-slate-200">Daily Check-in</div>
                  <div className="text-sm text-slate-400">Earn 5 XP for logging in today</div>
                </div>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Claim
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                  <span className="text-cyan-400">💱</span>
                </div>
                <div>
                  <div className="font-medium text-slate-200">First Trade</div>
                  <div className="text-sm text-slate-400">Make your first trade to earn 20 XP</div>
                </div>
              </div>
              <button className="bg-slate-600 text-slate-300 px-3 py-1 rounded text-sm cursor-not-allowed">
                Locked
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-100">Contact Digital Frontier for Crypto UX Solutions</h2>
        
        <div className="bg-slate-800/50 p-6 rounded-xl">
          <p className="mb-6">Ready to transform your crypto platform? Contact Digital Frontier today for a comprehensive UX audit and implementation roadmap.</p>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request UX Audit
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" type="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="message" className="text-right">
                    Message
                  </Label>
                  <textarea id="message" className="col-span-3 border rounded-md p-2 h-24"></textarea>
                </div>
              </div>
              <DialogFooter>
                <button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <h3 className="font-bold mb-4">Why Choose Digital Frontier for Crypto?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    ✓
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-slate-300"><span className="font-medium text-slate-200">Crypto-Specific Expertise:</span> Deep understanding of blockchain UX challenges and opportunities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    ✓
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-slate-300"><span className="font-medium text-slate-200">Proven Methodology:</span> Battle-tested framework that delivers measurable results.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                    ✓
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-slate-300"><span className="font-medium text-slate-200">Rapid Implementation:</span> See improvements in weeks, not months.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <FAQSection faqs={cryptoFAQs} title="Crypto Marketing FAQs" />
    </PageLayout>
  );
};

export default CryptoMarketing;
