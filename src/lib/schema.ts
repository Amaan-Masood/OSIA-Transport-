import { SITE_CONFIG, ServiceItem, FaqItem } from '@/content/site';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://osiatransport.ae';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.shortName,
    description: SITE_CONFIG.tagline,
    url: BASE_URL,
    telephone: SITE_CONFIG.phoneDisplay,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Abu Dhabi',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'United Arab Emirates',
      },
    ],
    openingHoursSpecification: {
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
    priceRange: '$$',
  };
}

export function getServiceSchema(service: ServiceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.legalName,
      url: BASE_URL,
      telephone: SITE_CONFIG.phoneDisplay,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Abu Dhabi, UAE',
    },
    description: service.summary,
    url: `${BASE_URL}/services/${service.slug}/`,
  };
}

export function getFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}
