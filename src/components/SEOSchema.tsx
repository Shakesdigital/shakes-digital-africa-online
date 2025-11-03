import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOSchemaProps {
  type?: 'Organization' | 'Service' | 'FAQPage' | 'Article' | 'Person' | 'CaseStudy';
  title: string;
  description: string;
  url: string;
  image?: string;
  faq?: Array<{ question: string; answer: string }>;
  article?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    author: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOSchema: React.FC<SEOSchemaProps> = ({
  type = 'Organization',
  title,
  description,
  url,
  image = 'https://shakesdigital.com/hero-mobile-app.png',
  faq,
  article,
  breadcrumbs
}) => {
  // Organization Schema (Always Include)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://shakesdigital.com/#organization",
    "name": "Shakes Digital",
    "alternateName": "Shakes Digital Africa",
    "url": "https://shakesdigital.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shakesdigital.com/shakes-logo.png",
      "width": 250,
      "height": 250
    },
    "image": "https://shakesdigital.com/hero-mobile-app.png",
    "description": "Africa's leading digital agency specializing in Custom Software Development, Web Development, and Mobile Applications for African businesses",
    "founder": {
      "@type": "Person",
      "@id": "https://shakesdigital.com/#founder",
      "name": "Dan Mugisa Byenkya",
      "jobTitle": "Founder & Digital Innovation Expert",
      "description": "Expert in African market digital solutions and business transformation",
      "url": "https://shakesdigital.com/about-us"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressCountry": "UG",
      "addressRegion": "Central Region"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.3476",
      "longitude": "32.5825"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Uganda"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "Country",
        "name": "Tanzania"
      },
      {
        "@type": "Country",
        "name": "Rwanda"
      },
      {
        "@type": "Continent",
        "name": "Africa"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "0.3476",
        "longitude": "32.5825"
      },
      "geoRadius": "5000000"
    },
    "knowsAbout": [
      "Custom Software Development",
      "Web Development",
      "Mobile Application Development",
      "Digital Transformation",
      "Enterprise Software Solutions",
      "E-commerce Platforms",
      "Fintech Applications",
      "Business Process Automation"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "description": "Custom software development, web development, and mobile applications for African businesses"
    },
    "sameAs": [
      "https://twitter.com/shakesdigital",
      "https://www.linkedin.com/company/shakes-digital"
    ]
  };

  // Service Schema
  const serviceSchema = type === 'Service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@id": "https://shakesdigital.com/#organization"
    },
    "areaServed": {
      "@type": "Continent",
      "name": "Africa"
    },
    "serviceType": "Digital Solutions & Software Development",
    "audience": {
      "@type": "Audience",
      "audienceType": "African Businesses, Startups, NGOs, Educational Institutions, Healthcare Organizations"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development & E-commerce"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development"
          }
        }
      ]
    }
  } : null;

  // FAQ Schema
  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Article Schema
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": description,
    "image": image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://shakesdigital.com/about-us"
    },
    "publisher": {
      "@id": "https://shakesdigital.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOSchema;
