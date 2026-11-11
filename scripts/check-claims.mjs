import fs from 'node:fs';
import path from 'node:path';

const siteConfigPath = path.resolve('src/content/site.ts');

if (!fs.existsSync(siteConfigPath)) {
  console.error(`Site config not found at ${siteConfigPath}`);
  process.exit(1);
}

const content = fs.readFileSync(siteConfigPath, 'utf8');

// Banned unconfirmed claims from brief §4
const bannedPatterns = [
  { pattern: /10,?000\s*(?:gal|gallon)/i, reason: 'Tanker gallon capacity unconfirmed by client' },
  { pattern: /aggregateRating/i, reason: 'Fake review rating prohibited' },
  { pattern: /"Sarah"|"John"|"Ahmed Al"/i, reason: 'Invented fake testimonials prohibited' },
  { pattern: /Al Ain|Ruwais|Saadiyat/i, reason: 'Unconfirmed service areas outside phase 1' },
];

let failed = false;

for (const { pattern, reason } of bannedPatterns) {
  if (pattern.test(content)) {
    console.error(`CLAIMS GATE FAILED: Found prohibited claim matching ${pattern}: ${reason}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log('CLAIMS GATE PASSED: Content truth table verified. No unconfirmed claims detected.');
