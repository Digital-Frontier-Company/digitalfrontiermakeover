import React, { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { SEOHead } from '@/components/SEOHead';
import EnhancedBreadcrumb from '@/components/layout/EnhancedBreadcrumb';
import { generateBreadcrumbSchema } from '@/lib/utils';

const ModernContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const contactData = {
        name: formData.get('text-1752650679296-0') as string,
        email: formData.get('text-1752650807996-0') as string,
        socialLink: formData.get('text-1752650925101-0') as string,
        marketingNeeds: formData.get('select-1752651040594-0') as string,
      };

      console.log('Submitting form data:', contactData);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: contactData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Form submitted successfully:', data);
      setSubmitMessage(data.message || 'Thank you! Your message has been sent successfully.');
      
      // Reset form
      formRef.current?.reset();
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitMessage(error.message || 'Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
    { name: "Contact Form", url: "/modern-contact-form" }
  ]);
  
  return (
    <>
      <SEOHead 
        path="/modern-contact-form"
        title="Contact Form - Digital Frontier Company"
        description="Get in touch with our digital marketing experts. Modern contact form for SEO, AEO, GEO, and AI marketing services."
        pageType="website"
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <EnhancedBreadcrumb />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Form Card */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" 
                      alt="Digital Frontier Logo"
                      className="h-20 w-20 rounded-full border-2 border-blue-400/30 p-2 bg-slate-800/50"
                    />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Contact Digital Frontier
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
                  <p className="text-slate-300 text-lg">Transform your digital presence with our expert team</p>
                </div>
                
                {/* Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="text-1752650679296-0"
                      placeholder="Enter your full name" 
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="text-1752650807996-0"
                      placeholder="your@email.com" 
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                    />
                  </div>
                  
                  {/* Social Link Field */}
                  <div className="space-y-2">
                    <label htmlFor="social" className="block text-sm font-medium text-slate-200">
                      Social Media Link <span className="text-red-400">*</span>
                      <span className="text-xs text-slate-400 ml-2">(Facebook, Instagram, LinkedIn, etc.)</span>
                    </label>
                    <input 
                      type="url" 
                      id="social"
                      name="text-1752650925101-0"
                      placeholder="https://your-social-profile.com"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                    />
                  </div>
                  
                  {/* Marketing Needs */}
                  <div className="space-y-2">
                    <label htmlFor="marketing-needs" className="block text-sm font-medium text-slate-200">
                      Marketing Needs & Budget
                    </label>
                    <select 
                      id="marketing-needs"
                      name="select-1752651040594-0"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-300"
                    >
                      <option value="full stack marketing plan ( need to perform a review to price )">Full Service Marketing (Custom Quote)</option>
                      <option value="$89 / Hour">Hourly Consultation ($89/hour)</option>
                      <option value="Pricing starts At $899" selected>Specific Project (Starting at $899)</option>
                    </select>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Sending Message...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
                
                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`mt-6 p-4 rounded-xl text-center border ${
                    submitMessage.includes('error') || submitMessage.includes('Sorry') 
                      ? 'bg-red-900/20 border-red-500/30 text-red-300' 
                      : 'bg-green-900/20 border-green-500/30 text-green-300'
                  }`}>
                    <p>{submitMessage}</p>
                  </div>
                )}
                
                {/* Security badges */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="flex justify-center items-center space-x-6 text-sm text-slate-400">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      <span>AI-Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mt-8 text-center text-slate-400">
              <p className="mb-4">Trusted by businesses worldwide for digital marketing excellence</p>
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-400">24/7</span>
                  <span className="ml-1">Support</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-purple-400">100+</span>
                  <span className="ml-1">Projects</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-green-400">98%</span>
                  <span className="ml-1">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernContactForm;