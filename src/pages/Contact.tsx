import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/utils";

const Contact = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.thedigitalfrontier.ai${location.pathname}`;
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.thedigitalfrontier.ai" },
    { name: "Contact", url: canonicalUrl }
  ]);

  return (
    <>
      <Helmet>
        <title>Contact Digital Frontier Company | Get AI Marketing Consultation</title>
        <meta name="description" content="Contact Digital Frontier Company for AI-powered marketing solutions. Get expert consultation on Answer Engine Optimization, crypto marketing, and digital transformation." />
        <meta name="keywords" content="contact Digital Frontier Company, AI marketing consultation, Answer Engine Optimization contact, crypto marketing experts, digital marketing consultation" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Digital Frontier Company | AI Marketing Consultation" />
        <meta property="og:description" content="Get expert consultation on AI-powered marketing solutions and digital transformation strategies." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Digital Frontier Company" />
        <meta name="twitter:description" content="Get expert consultation on AI-powered marketing solutions." />
        <meta name="twitter:image" content="https://thedigitalfrontier.ai/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageLayout 
        title="Contact Digital Frontier Company"
        subtitle="Get in touch with our AI marketing experts for personalized consultation"
        currentPath={location.pathname}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg">Send us a message</CardTitle>
              <CardDescription className="text-slate-400">
                We'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Input type="text" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="grid gap-2">
                <Textarea placeholder="Your Message" />
              </div>
              <Button>Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
              <CardDescription className="text-slate-400">
                Reach out to us through these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@thedigitalfrontier.ai" className="text-slate-300 hover:text-blue-400">
                  info@thedigitalfrontier.ai
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+15551234567" className="text-slate-300 hover:text-green-400">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-slate-300">
                  123 Main Street, Anytown, USA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-purple-400" />
                <a href="https://twitter.com/DigitalFro14616" className="text-slate-300 hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                  @DigitalFro14616
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    </>
  );
};

export default Contact;
