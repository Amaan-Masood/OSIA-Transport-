'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const ConsentBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('osia_cookie_consent');
      if (!consent) {
        setShow(true);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem('osia_cookie_consent', 'accepted');
    } catch {}
    setShow(false);
  };

  const decline = () => {
    try {
      localStorage.setItem('osia_cookie_consent', 'declined');
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#0B1726] text-white p-5 rounded-2xl border border-white/15 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
            Privacy &amp; Transparency
          </span>
        </div>
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          We use minimal analytics to measure call and WhatsApp lead performance. We do not track or sell personal data. See our{' '}
          <Link href="/privacy-policy/" className="text-white underline hover:text-[#38BDF8]">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={accept}
            className="flex-1 px-4 py-2 rounded-xl bg-[#0284C7] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#0369A1] transition-colors cursor-pointer"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={decline}
            className="px-4 py-2 rounded-xl border border-white/20 text-[#94A3B8] text-xs font-semibold hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
