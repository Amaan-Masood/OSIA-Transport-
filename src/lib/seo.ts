import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/content/site';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://osiatransport.ae';
const isStaging = process.env.DEPLOY_ENV === 'staging';

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage = '/images/og-default.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.shortName} Abu Dhabi`;
  const canonicalUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isStaging
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.legalName,
      locale: 'en_AE',
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.shortName} - Heavy Transport & Equipment Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`],
    },
  };
}
