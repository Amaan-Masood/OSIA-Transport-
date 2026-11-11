'use client';

import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { SERVICES, SITE_CONFIG } from '@/content/site';
import { quoteFormSchema, type QuoteFormData } from '@/lib/validation';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

interface QuoteFormProps {
  initialServiceId?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialServiceId, className = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    service: initialServiceId ? SERVICES.find((s) => s.id === initialServiceId)?.title || SERVICES[0].title : SERVICES[0].title,
    location: '',
    details: '',
    craneTonnage: '',
    waterType: 'Potable Drinking Sweet Water',
    tripFrequency: 'One-off Urgent Delivery',
    cargoDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Helper to determine active category
  const selectedServiceItem = SERVICES.find((s) => s.title === formData.service) || SERVICES[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = quoteFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    // Build the WhatsApp message URL
    const url = buildWhatsAppUrl(result.data);
    setSubmittedUrl(url);
    setIsSuccess(true);

    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xl ${className}`}>
      {isSuccess && submittedUrl ? (
        <div className="space-y-6 text-center py-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0] flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
              Quote Request Prepared!
            </h3>
            <p className="text-sm text-[#475569] max-w-md mx-auto">
              Your inquiry has been formatted. If WhatsApp didn’t open automatically, tap below to send it to our 24/7 dispatch team:
            </p>
          </div>

          <div className="pt-2">
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#22C55E] text-[#0B1726] font-extrabold text-sm uppercase tracking-wider hover:bg-[#16A34A] shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-[#0B1726]" />
              <span>Open in WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-2">
            <p className="font-semibold text-[#0F172A]">Or contact dispatch immediately via:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={SITE_CONFIG.phoneHref} className="font-bold text-[#0284C7] hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> Call {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#0284C7] hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setSubmittedUrl(null);
              }}
              className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] underline cursor-pointer"
            >
              ← Submit another quote request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-[#E2E8F0] pb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
              Request An Instant Quote
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Select your required service. We will generate your structured specifications for immediate WhatsApp dispatch.
            </p>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="quote-service" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm font-semibold text-[#0F172A] focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-none transition-all"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic Service Specific Fields */}
          {selectedServiceItem.category === 'heavy-lifting' && (
            <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-xl p-4 space-y-3 animate-in fade-in duration-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1] block">
                Mobile Crane Specifications
              </span>
              <div>
                <label htmlFor="craneTonnage" className="block text-xs font-bold text-[#0F172A] mb-1">
                  Required Crane Capacity
                </label>
                <select
                  id="craneTonnage"
                  name="craneTonnage"
                  value={formData.craneTonnage}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A]"
                >
                  <option value="">Select Tonnage (or ask engineer)</option>
                  <option value="25 Ton Mobile Crane">25 Ton Mobile Crane</option>
                  <option value="50 Ton Mobile Crane">50 Ton Mobile Crane</option>
                  <option value="100 Ton Mobile Crane">100 Ton Mobile Crane</option>
                  <option value="200 Ton Mobile Crane">200 Ton Mobile Crane</option>
                  <option value="Unsure - Need Site Assessment">Unsure - Need Site Assessment</option>
                </select>
              </div>
            </div>
          )}

          {selectedServiceItem.category === 'water' && (
            <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-xl p-4 space-y-3 animate-in fade-in duration-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1] block">
                Water Delivery Specifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="waterType" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Water Specification
                  </label>
                  <select
                    id="waterType"
                    name="waterType"
                    value={formData.waterType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-xs sm:text-sm text-[#0F172A]"
                  >
                    <option value="Drinking Sweet Water (Potable)">Drinking Sweet Water (Potable)</option>
                    <option value="Non-Drinking Construction Water">Non-Drinking Construction Water</option>
                    <option value="Salt Water for Compaction">Salt Water for Compaction</option>
                    <option value="Wastewater / Septic Removal">Wastewater / Septic Removal</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tripFrequency" className="block text-xs font-bold text-[#0F172A] mb-1">
                    Delivery Frequency
                  </label>
                  <select
                    id="tripFrequency"
                    name="tripFrequency"
                    value={formData.tripFrequency}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-xs sm:text-sm text-[#0F172A]"
                  >
                    <option value="One-off Urgent Trip">One-off Urgent Trip</option>
                    <option value="Daily Scheduled Delivery">Daily Scheduled Delivery</option>
                    <option value="Weekly / Monthly Contract">Weekly / Monthly Contract</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {selectedServiceItem.category === 'haulage' && (
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 space-y-3 animate-in fade-in duration-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] block">
                Trailer Cargo Specifications
              </span>
              <div>
                <label htmlFor="cargoDetails" className="block text-xs font-bold text-[#0F172A] mb-1">
                  Cargo Type &amp; Estimated Weight
                </label>
                <input
                  type="text"
                  id="cargoDetails"
                  name="cargoDetails"
                  value={formData.cargoDetails}
                  onChange={handleChange}
                  placeholder="e.g. 30T Excavator / 12m Steel Beams / Precast"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A]"
                />
              </div>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                Your Name / Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="quote-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Engineer Tariq / Al Futtaim Site"
                aria-invalid={!!errors.name}
                className={`w-full px-3.5 py-3 rounded-xl border text-sm text-[#0F172A] focus:outline-none transition-all ${
                  errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="quote-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 050 412 7930"
                aria-invalid={!!errors.phone}
                className={`w-full px-3.5 py-3 rounded-xl border text-sm text-[#0F172A] focus:outline-none transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="quote-location" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
              Delivery / Site Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="quote-location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Musaffah Sector 14 / Khalifa City Villa / Yas South"
              aria-invalid={!!errors.location}
              className={`w-full px-3.5 py-3 rounded-xl border text-sm text-[#0F172A] focus:outline-none transition-all ${
                errors.location ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20'
              }`}
            />
            {errors.location && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.location}
              </p>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="quote-details" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1">
              Project Details / Specific Timing (Optional)
            </label>
            <textarea
              id="quote-details"
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              placeholder="Provide any additional specifications, site constraints, or urgent timing requirements..."
              className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 focus:outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button type="submit" variant="cta" size="lg" className="w-full flex items-center justify-center gap-2 font-extrabold text-base py-4 shadow-lg">
              <span>Submit &amp; Open In WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-center text-[11px] text-[#64748B] mt-2">
              Instant 24/7 routing to OSIA Transport operations desk in Abu Dhabi. No spam, no server storage.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
