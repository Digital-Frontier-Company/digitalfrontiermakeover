import { Helmet } from 'react-helmet-async';

export default function SEOSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Frontier Marketing",
    "url": "https://digitalfrontier.marketing",
    "logo": "https://digitalfrontier.marketing/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png",
    "description": "AI-powered marketing agency specializing in Answer Engine Optimization and data-driven growth for B2B tech companies.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://digitalfrontier.marketing/contact"
    },
    "sameAs": [
      "https://linkedin.com/company/digitalfrontier",
      "https://twitter.com/digitalfrontier"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Digital Frontier Marketing"
    },
    "description": "Comprehensive AI-powered marketing services including Answer Engine Optimization, predictive analytics, and automated growth systems.",
    "serviceType": "Digital Marketing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Answer Engine Optimization",
          "description": "Optimize content for AI-powered search engines and voice assistants"
        },
        {
          "@type": "Offer",
          "name": "AI Marketing Automation",
          "description": "Deploy advanced AI systems to automate and optimize marketing campaigns"
        },
        {
          "@type": "Offer",
          "name": "Data-Driven Insights",
          "description": "Transform marketing data into actionable business intelligence"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes your AI marketing different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't just use AI tools—we build custom AI systems for each client. Our proprietary Answer Engine Optimization (AEO) methodology positions you to dominate AI-powered search results, giving you a massive first-mover advantage that most agencies can't replicate."
        }
      },
      {
        "@type": "Question", 
        "name": "How quickly can we expect to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see initial improvements within 30 days, with significant results by 90 days. However, our AI systems continuously learn and optimize, meaning your results compound over time."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your Answer Engine Optimization service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO includes optimizing your content for AI search engines like ChatGPT, Claude, and voice assistants. We restructure your content for featured snippets, implement schema markup, create AI-friendly content formats, and position your brand as the definitive answer to industry questions."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://digitalfrontier.marketing"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}