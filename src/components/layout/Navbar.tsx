'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '@/content/site';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Bar for 24/7 Operations */}
      <div className="bg-[#0B1726] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <Clock className="w-3.5 h-3.5 text-[#F97316]" />
              <strong className="text-white">24/7 Dispatch:</strong> Round-the-clock Abu Dhabi Operations
            </span>
            <span className="flex items-center gap-1.5 text-[#94A3B8] hidden md:flex">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              Fleet Active & On Standby
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-1.5 text-white hover:text-[#F97316] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 text-[#94A3B8] hover:text-white transition-colors hidden lg:flex"
            >
              <Mail className="w-3.5 h-3.5" />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex items-center justify-between">
          {/* Brand Official Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-2">
            <Image
              src="/images/logo-transparent.png"
              alt="OSIA Transport LLC Official Logo"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F172A] uppercase font-display leading-none group-hover:text-[#0284C7] transition-colors">
                OSIA Transport
              </span>
              <span className="text-[10px] tracking-widest text-[#64748B] uppercase font-bold mt-0.5">
                LLC · Abu Dhabi, UAE
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-wider text-[#334155] hover:text-[#0284C7] transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services/"
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-[#334155] hover:text-[#0284C7] transition-colors py-2"
              >
                Services
                <ChevronDown className="w-4 h-4 text-[#64748B]" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E2E8F0] rounded-2xl shadow-xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] border-b border-[#E2E8F0] mb-1">
                    Specialized Solutions
                  </div>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}/`}
                      className="block px-3 py-2 rounded-xl text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#0284C7] transition-colors"
                    >
                      <div className="font-bold">{s.shortTitle}</div>
                      <div className="text-xs text-[#64748B] line-clamp-1">{s.capacitySnippet}</div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-[#E2E8F0] px-3">
                    <Link
                      href="/services/"
                      className="text-xs font-bold text-[#0284C7] hover:underline"
                    >
                      View All 7 Services Hub →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dedicated Page: Fleet */}
            <Link
              href="/fleet/"
              className="text-sm font-bold uppercase tracking-wider text-[#334155] hover:text-[#0284C7] transition-colors"
            >
              Fleet Specs
            </Link>

            {/* Dedicated Page: About */}
            <Link
              href="/about/"
              className="text-sm font-bold uppercase tracking-wider text-[#334155] hover:text-[#0284C7] transition-colors"
            >
              About Us
            </Link>

            {/* Dedicated Page: FAQ */}
            <Link
              href="/faq/"
              className="text-sm font-bold uppercase tracking-wider text-[#334155] hover:text-[#0284C7] transition-colors"
            >
              FAQ
            </Link>

            {/* Dedicated Page: Contact */}
            <Link
              href="/contact/"
              className="text-sm font-bold uppercase tracking-wider text-[#334155] hover:text-[#0284C7] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asLink href="/contact/" variant="cta" size="sm">
              Get Instant Quote
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE_CONFIG.phoneHref}
              className="p-2 rounded-lg bg-[#F4F7FB] text-[#0A1B2E] hover:bg-[#EDF3FA] transition-colors"
              aria-label="Call OSIA Transport"
            >
              <Phone className="w-5 h-5 text-[#EB5E1A]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0A1B2E] hover:bg-[#F4F7FB] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white z-40 overflow-y-auto border-t border-[#E2E8F0] p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-bold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                Home
              </Link>
              <div className="py-2 px-3">
                <div className="text-xs font-extrabold uppercase text-[#64748B] mb-2 tracking-wider">
                  Our Services
                </div>
                <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-[#F97316]">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}/`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 text-sm font-semibold text-[#334155] hover:text-[#0284C7]"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                  <Link
                    href="/services/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 text-xs font-bold text-[#0284C7]"
                  >
                    All Services Hub →
                  </Link>
                </div>
              </div>
              <Link
                href="/fleet/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-bold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                Fleet Specifications
              </Link>
              <Link
                href="/about/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-bold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                About Us
              </Link>
              <Link
                href="/faq/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-bold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                FAQ
              </Link>
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-bold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                Contact & Location
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] space-y-3 pb-20">
            <Button
              asLink
              href="/contact/"
              variant="cta"
              size="lg"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Instant Quote
            </Button>
            <div className="text-center text-xs text-[#64748B]">
              24/7 Hotline: <a href={SITE_CONFIG.phoneHref} className="font-bold text-[#0F172A]">{SITE_CONFIG.phoneDisplay}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
