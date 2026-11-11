import type { Metadata } from 'next';
import '@/styles/globals.css';
import { SITE_CONFIG } from '@/content/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { ConsentBanner } from '@/components/layout/ConsentBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://osiatransport.ae'),
  title: {
    default: `${SITE_CONFIG.shortName} | Heavy Transport, Water Tankers & Crane Rental Abu Dhabi`,
    template: `%s | ${SITE_CONFIG.shortName} Abu Dhabi`,
  },
  description: SITE_CONFIG.heroSubheadline,
  keywords: [
    'water tanker Abu Dhabi',
    'sweet water supply Abu Dhabi',
    'potable water delivery UAE',
    'non-drinking water supply Abu Dhabi',
    'salt water supply UAE',
    'wastewater collection Abu Dhabi',
    'septic tank cleaning Abu Dhabi',
    'mobile crane rental Abu Dhabi',
    'crane rental 50 ton 100 ton 200 ton',
    'low bed trailer rental Abu Dhabi',
    'flatbed trailer transportation UAE',
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: SITE_CONFIG.legalName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#22354A]">
        {/* Skip to Content Accessibility Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#0A1B2E] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Global Conversion Bars */}
        <MobileBottomBar />
        <FloatingWhatsApp />
        <ConsentBanner />
      </body>
    </html>
  );
}
