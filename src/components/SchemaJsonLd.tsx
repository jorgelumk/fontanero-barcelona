import React from 'react';
import { SITE_INFO } from '@/data/content';

interface SchemaJsonLdProps {
  type: 'Home' | 'Service' | 'FAQ' | 'Breadcrumb';
  data?: {
    serviceName?: string;
    serviceDescription?: string;
    serviceUrl?: string;
    faqs?: { question: string; answer: string }[];
    breadcrumbs?: { name: string; item: string }[];
  };
}

export function SchemaJsonLd({ type, data }: SchemaJsonLdProps) {
  let schemaData: Record<string, unknown> | null = null;

  if (type === 'Home') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': ['Plumber', 'ProfessionalService'],
      '@id': `${SITE_INFO.domain}/#organization`,
      name: SITE_INFO.name,
      legalName: SITE_INFO.legalName,
      url: SITE_INFO.domain,
      telephone: SITE_INFO.phoneRaw,
      email: SITE_INFO.email,
      priceRange: '€€',
      image: `${SITE_INFO.domain}/logo.png`,
      description: 'Servicio urgente de fontaneros en Barcelona las 24 horas. Reparaciones de urgencia, desatascos, calderas, cambio de bañera por ducha y fugas de agua en 30 minutos.',
      areaServed: [
        {
          '@type': 'City',
          name: 'Barcelona',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Área Metropolitana de Barcelona (AMB)',
        },
        {
          '@type': 'City',
          name: "L'Hospitalet de Llobregat",
        },
        {
          '@type': 'City',
          name: 'Badalona',
        },
        {
          '@type': 'City',
          name: 'Santa Coloma de Gramenet',
        },
        {
          '@type': 'City',
          name: 'Sant Cugat del Vallès',
        },
        {
          '@type': 'City',
          name: 'Cornellà de Llobregat',
        },
        {
          '@type': 'City',
          name: 'Esplugues de Llobregat',
        },
        {
          '@type': 'City',
          name: 'Sabadell',
        },
        {
          '@type': 'City',
          name: 'Terrassa',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      knowsAbout: [
        'Fontanería de urgencia 24h',
        'Desatascos de tuberías y bajantes',
        'Reparación de calderas de gas',
        'Cambio de bañera por plato de ducha',
        'Detección de fugas de agua sin romper',
        'Reforma integral de baños',
      ],
    };
  } else if (type === 'Service' && data?.serviceName) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.serviceName,
      description: data.serviceDescription,
      url: data.serviceUrl,
      provider: {
        '@type': 'Plumber',
        '@id': `${SITE_INFO.domain}/#organization`,
        name: SITE_INFO.name,
        telephone: SITE_INFO.phoneRaw,
        url: SITE_INFO.domain,
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Fontanería en Barcelona',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: data.serviceName,
            },
          },
        ],
      },
    };
  } else if (type === 'FAQ' && data?.faqs) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  } else if (type === 'Breadcrumb' && data?.breadcrumbs) {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    };
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
