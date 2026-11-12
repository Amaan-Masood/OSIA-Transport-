import { z } from 'zod';
import { SERVICES } from '@/content/site';

// Preserve free-form Unicode; reject oversized values before normalization.
const cleanString = (value: string) => value.replace(/[\u0000-\u001F\u007F]/g, '').trim().replace(/\s+/g, ' ');
const text = (max: number) => z.string().max(max, 'This field is too long.').transform(cleanString);
const requiredText = (max: number, message: string) => text(max).pipe(z.string().min(2, message));
const phoneRegex = /^(?:\+?971|0)?5[0-9]{8}$|^\+?[0-9]{7,16}$/;

export const quoteFormSchema = z.object({
  name: requiredText(80, 'Name must be at least 2 characters.'),
  phone: text(20).transform((value) => value.replace(/[\s()-]/g, '')).pipe(z.string().regex(phoneRegex, 'Please enter a valid UAE or international phone number.')),
  service: text(160).refine((value) => SERVICES.some((service) => service.title === value), 'Please select a listed service.'),
  location: requiredText(120, 'Please enter the site or delivery location.'),
  details: text(600).optional(),
  craneTonnage: text(80).optional(),
  waterType: text(80).optional(),
  tripFrequency: text(80).optional(),
  cargoDetails: text(600).optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
