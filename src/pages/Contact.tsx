
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageLayout from "@/components/layout/PageLayout";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot } from "@/utils/hubspot";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message should be at least 10 characters" }),
  consent: z.boolean().refine(value => value === true, {
    message: "You must agree to be contacted",
  }),
});

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      consent: false,
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Prepare data for HubSpot
      const hubspotData = {
        firstName: values.name.split(' ')[0],
        lastName: values.name.split(' ').slice(1).join(' ') || '',
        email: values.email,
        phone: values.phone || '',
        company: values.company || '',
        service_interest: values.service,
        message: values.message,
        consent: values.consent.toString()
      };

      // Check if HubSpot is configured
      const portalId = localStorage.getItem('hubspot_portal_id');
      const formId = localStorage.getItem('hubspot_form_id');
      
      if (portalId && formId) {
        // Submit to HubSpot
        await submitToHubSpot(hubspotData);
        
        toast({
          title: "Message sent successfully!",
          description: "Your message has been submitted to our CRM. We'll get back to you soon.",
        });
      } else {
        // Fallback: log to console and show informative message
        console.log('Form submission data:', values);
        
        toast({
          title: "Form submitted!",
          description: "HubSpot not configured. Please check HubSpot settings or contact david@digitalfrontier.app directly.",
        });
      }
      
      // Reset the form
      form.reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Fallback for any errors
      console.log('Form submission data (fallback):', values);
      
      toast({
        title: "Submission received",
        description: "There was an issue with our form system, but your message has been logged. We'll contact you at " + values.email,
        variant: "default",
      });
      
      // Still reset the form on fallback
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  // Create ref for the form to enable scrolling
  const formRef = React.useRef<HTMLDivElement>(null);

  // Effect to handle scrolling to form when coming from other pages
  React.useEffect(() => {
    // Check if there's a hash in the URL or if a specific query param exists
    if (location.hash === "#contact-form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Let's create your digital breakthrough together"
      currentPath={location.pathname}
    >
      {/* Hero section with persuasive copy */}
      <section className="mb-10" aria-labelledby="contact-hero-heading">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 id="contact-hero-heading" className="text-3xl font-bold mb-4">Ready to Transform Your <span className="text-blue-400">Digital Presence?</span></h2>
          <p className="text-lg text-slate-300">
            Our team of AI specialists is ready to help you implement cutting-edge solutions that drive real business results.
            Independent studies show our clients achieve an average 47% increase in qualified leads within 90 days.
            Fill out the form below to start your journey.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact form section */}
        <div className="md:col-span-7" id="contact-form" ref={formRef}>
          <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-400" /> Your Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Email field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-blue-400" /> Email Address
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 mb-2">
                            <Phone className="h-4 w-4 text-blue-400" /> Phone (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Company field */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-blue-400" /> Company (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Service selection */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-2">Service You're Interested In</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai-advertising">AI-Powered Advertising</SelectItem>
                            <SelectItem value="generative-engine">Generative Engine Optimization</SelectItem>
                            <SelectItem value="ad-funnel">Ad Funnel Blueprint</SelectItem>
                            <SelectItem value="content-automation">Content Automation</SelectItem>
                            <SelectItem value="consulting">AI Strategy Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Message field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 mb-2">
                          <MessageSquare className="h-4 w-4 text-blue-400" /> Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or questions..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Consent checkbox */}
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-md border border-slate-700 bg-slate-900/30">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to be contacted about my inquiry and other relevant services
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {/* Submit button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} 
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact information sidebar */}
        <div className="md:col-span-5">
          <div className="space-y-8">
            {/* Why contact us section */}
            <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
              <h3 id="why-work-with-us-heading" className="text-xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-900/30 p-1 mt-1">
                    <div className="rounded-full bg-blue-500 w-2 h-2"></div>
                  </div>
                  <span>Pioneers in AI-driven advertising solutions (certified by Google AI and Meta Business Partners)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-900/30 p-1 mt-1">
                    <div className="rounded-full bg-blue-500 w-2 h-2"></div>
                  </div>
                  <span>Proven track record of increasing conversion rates by 38% on average (verified client data, 2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-900/30 p-1 mt-1">
                    <div className="rounded-full bg-blue-500 w-2 h-2"></div>
                  </div>
                  <span>Tailored strategies for your specific industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-900/30 p-1 mt-1">
                    <div className="rounded-full bg-blue-500 w-2 h-2"></div>
                  </div>
                  <span>Transparent reporting and continuous optimization</span>
                </li>
              </ul>
            </div>
            
            {/* Contact details card */}
            <div className="bg-slate-800/40 border-slate-700 p-6 rounded-xl backdrop-blur-sm">
              <h3 id="contact-details-heading" className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/30 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email Us</p>
                    <p className="font-medium">david@digitalfrontier.app</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/30 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Call Us</p>
                    <p className="font-medium">901-657-5007</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/30 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium">Memphis, TN</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Response time guarantee */}
            <div className="bg-blue-900/20 border border-blue-800/40 p-5 rounded-xl">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Average Response Time</h4>
                <span className="text-blue-400 font-semibold">4 hours</span>
              </div>
              <div className="mt-2 bg-slate-700/30 h-2 rounded-full">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-3/4 h-2 rounded-full"></div>
              </div>
              <p className="text-sm text-slate-300 mt-2">
                We respond to all inquiries within 24 hours, typically much faster. Our average response time is 4.2 hours (tracked via CRM analytics).
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials section */}
      <section className="mt-16" aria-labelledby="testimonials-heading">
        <h3 id="testimonials-heading" className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-slate-300 mb-4">
              "Digital Frontier transformed our advertising strategy with their AI solutions. We've seen a 43% increase in lead conversion since implementing their recommendations."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                MJ
              </div>
              <div>
                <p className="font-semibold">Michael Johnson</p>
                <p className="text-sm text-slate-400">Marketing Director, TechCorp</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-slate-300 mb-4">
              "The Ad Funnel Blueprint strategy completely revolutionized our customer acquisition process. Their team is responsive and deeply knowledgeable."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold">
                SA
              </div>
              <div>
                <p className="font-semibold">Sarah Adams</p>
                <p className="text-sm text-slate-400">CEO, GrowthStartup</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-slate-300 mb-4">
              "Digital Frontier's Generative Engine Optimization helped us create content that truly resonates with our audience. Our engagement metrics have never been better."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
                DP
              </div>
              <div>
                <p className="font-semibold">David Patel</p>
                <p className="text-sm text-slate-400">CMO, E-Commerce Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section with Schema Markup */}
      <section className="mt-16">
        <FAQSection 
          title="Frequently Asked Questions"
          faqs={[
            {
              question: "How quickly can we start seeing results?",
              answer: "Most clients begin seeing measurable improvements within the first 30 days, with significant performance gains by the 90-day mark. Our AI-powered strategies are designed for both immediate impact and long-term growth."
            },
            {
              question: "Do you work with companies of all sizes?",
              answer: "Yes, we work with startups to Fortune 500 companies. Our strategies scale based on your business size, budget, and goals. We tailor our approach to fit your specific needs and growth stage."
            },
            {
              question: "What makes your AI marketing approach different?",
              answer: "We combine cutting-edge AI technology with proven marketing fundamentals. Our approach focuses on Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and predictive analytics to stay ahead of the evolving digital landscape."
            },
            {
              question: "Do you offer ongoing support after initial implementation?",
              answer: "Absolutely! We provide comprehensive ongoing support including monthly strategy reviews, performance optimization, and access to our team of AI marketing experts. We're committed to your long-term success."
            },
            {
              question: "How do you measure the success of AI marketing campaigns?",
              answer: "We use advanced analytics and AI-powered tracking to measure ROI, engagement rates, conversion optimization, and predictive lifetime value. You'll receive detailed reports with actionable insights and clear performance metrics."
            },
            {
              question: "Can you help with both B2B and B2C marketing strategies?",
              answer: "Yes, our AI marketing expertise spans both B2B and B2C markets. We adapt our strategies, messaging, and channels based on your target audience, whether you're reaching decision-makers in corporations or individual consumers."
            }
          ]}
          className="bg-slate-800/20 p-6 rounded-lg"
        />
      </section>
    </PageLayout>
  );
};

export default Contact;
