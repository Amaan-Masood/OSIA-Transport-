import { SITE_CONFIG } from '@/content/site';

export interface QuotePayload {
  name: string;
  phone: string;
  service: string;
  location: string;
  details?: string;
  // Service-specific optional details
  craneTonnage?: string;
  waterType?: string;
  tripFrequency?: string;
  cargoDetails?: string;
}

/**
 * Builds a structured, professional WhatsApp message for lead dispatch
 */
export function buildMessage(payload: QuotePayload): string {
  const parts: string[] = [
    `*New Quote Request — ${SITE_CONFIG.legalName}*`,
    `Name: ${payload.name.trim()}`,
    `Phone: ${payload.phone.trim()}`,
    `Service: ${payload.service}`,
    `Location / Area: ${payload.location.trim()}`,
  ];

  if (payload.craneTonnage) {
    parts.push(`Crane Capacity: ${payload.craneTonnage}`);
  }
  if (payload.waterType) {
    parts.push(`Water Specification: ${payload.waterType}`);
  }
  if (payload.tripFrequency) {
    parts.push(`Frequency: ${payload.tripFrequency}`);
  }
  if (payload.cargoDetails) {
    parts.push(`Cargo Spec: ${payload.cargoDetails.trim()}`);
  }
  if (payload.details && payload.details.trim().length > 0) {
    parts.push(`Additional Details: ${payload.details.trim()}`);
  }

  parts.push(`Source: Website Quote Form`);
  return parts.join('\n');
}

/**
 * Generates the clean wa.me URL for the quote payload
 */
export function buildWhatsAppUrl(payload: QuotePayload): string {
  const message = buildMessage(payload);
  return `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates direct one-click WhatsApp message for service pre-fill
 */
export function buildDirectServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Hello OSIA Transport! I would like to request an immediate quote for: *${serviceTitle}* in Abu Dhabi.`;
  return `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Quick generic inquiry WhatsApp link
 */
export function buildGeneralWhatsAppUrl(): string {
  const text = `Hello OSIA Transport! I am inquiring about transport and equipment rental services in Abu Dhabi.`;
  return `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
