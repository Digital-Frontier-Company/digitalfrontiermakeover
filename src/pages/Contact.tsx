import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/layout/MainLayout';
import ModernContactForm from '@/components/ModernContactForm';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Contact Us - Digital Frontier</title>
        <meta name="description" content="Get in touch with Digital Frontier. Transform your vision with our cutting-edge digital marketing and web development solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <ModernContactForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;