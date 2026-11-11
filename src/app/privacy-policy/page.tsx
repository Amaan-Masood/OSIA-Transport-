import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | UAE PDPL Compliance',
  description: 'Privacy Policy for OSIA Transport LLC SPC in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.',
  path: '/privacy-policy/',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#0A1B2E] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="orange">Legal & Compliance</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#B8C6D6]">
              Last updated: November 2026 · Compliant with UAE Personal Data Protection Law (PDPL)
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-[#52667B] leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              1. Overview
            </h2>
            <p>
              {SITE_CONFIG.legalName} (&quot;OSIA Transport&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL). This policy explains our data practices regarding our brochure and inquiry website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              2. No Server-Side Storage of Quote Requests
            </h2>
            <p>
              When you submit a quote request on our website, your information (name, phone number, service specifications, location) is processed entirely on your device browser to format a direct inquiry for WhatsApp or telephone dialling. <strong>We do not maintain a database or store form submissions on web servers.</strong>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              3. Analytics & Cookies
            </h2>
            <p>
              We utilize anonymized Google Analytics (GA4) exclusively after you grant explicit consent via our cookie banner. Analytics cookies collect non-personally identifiable metrics (such as aggregate page views, device categories, and whether contact buttons were tapped) to optimize site performance. You may decline cookies at any time without impacting your access to our website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              4. Contact Channels
            </h2>
            <p>
              Communications initiated through WhatsApp, email, or telephone are handled through standard secure telecommunication channels for operational scheduling, billing, and contract execution.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A1B2E]">
              5. Contact Us
            </h2>
            <p>
              For questions regarding our privacy practices, contact us at:
              <br />
              <strong>{SITE_CONFIG.legalName}</strong>
              <br />
              Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#1391E5] underline">{SITE_CONFIG.email}</a>
              <br />
              Telephone: {SITE_CONFIG.phoneDisplay}
              <br />
              Abu Dhabi, United Arab Emirates
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
