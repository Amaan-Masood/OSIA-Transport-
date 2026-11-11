import { z } from 'zod';

const cleanString = (val: string) => val.replace(/[\u0000-\u001F]/g, '').trim().replace(/\s+/g, ' ');

// UAE mobile pattern or general international phone number (min 7 digits, max 16 digits)
const phoneRegex = /^(?:\+?971|0)?5[0-9]{8}$|^\+?[0-9]{7,16}$/;

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(80, { message: 'Name must not exceed 80 characters.' })
    .transform(cleanString),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number.' })
    .max(20, { message: 'Phone number is too long.' })
    .regex(phoneRegex, { message: 'Please enter a valid UAE or international phone number.' })
    .transform(cleanString),
  service: z
    .string()
    .min(1, { message: 'Please select a required service.' }),
  location: z
    .string()
    .min(2, { message: 'Please enter the site or delivery location.' })
    .max(120, { message: 'Location must not exceed 120 characters.' })
    .transform(cleanString),
  details: z
    .string()
    .max(600, { message: 'Details must not exceed 600 characters.' })
    .optional()
    .transform((val) => (val ? cleanString(val) : '')),
  craneTonnage: z.string().optional(),
  waterType: z.string().optional(),
  tripFrequency: z.string().optional(),
  cargoDetails: z.string().optional().transform((val) => (val ? cleanString(val) : '')),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
