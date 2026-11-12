import test from 'node:test';
import assert from 'node:assert/strict';
import { SITE_CONFIG, SERVICES, AREAS } from '@/content/site';
import { 
  buildMessage, 
  buildWhatsAppUrl, 
  buildDirectServiceWhatsAppUrl, 
  buildGeneralWhatsAppUrl 
} from '@/lib/whatsapp';
import { quoteFormSchema } from '@/lib/validation';

test('WhatsApp Integration (ADR_03)', async (t) => {
  await t.test('formats structured quote message with all parameters', () => {
    const payload = {
      name: 'Ahmed Tariq',
      phone: '+971 50 123 4567',
      service: 'Mobile Crane Rental (25T, 50T, 100T & 200T)',
      location: 'Musaffah Industrial Sector 14',
      craneTonnage: '50 Ton Mobile Crane',
      details: 'Lifting precast concrete units onto second floor',
    };

    const msg = buildMessage(payload);
    assert.ok(msg.includes(`*New Quote Request — ${SITE_CONFIG.legalName}*`));
    assert.ok(msg.includes('Name: Ahmed Tariq'));
    assert.ok(msg.includes('Phone: +971 50 123 4567'));
    assert.ok(msg.includes('Service: Mobile Crane Rental (25T, 50T, 100T & 200T)'));
    assert.ok(msg.includes('Location / Area: Musaffah Industrial Sector 14'));
    assert.ok(msg.includes('Crane Capacity: 50 Ton Mobile Crane'));
    assert.ok(msg.includes('Additional Details: Lifting precast concrete units onto second floor'));
    assert.ok(msg.includes('Source: Website Quote Form'));
  });

  await t.test('builds clean encoded WhatsApp URL with correct phone number', () => {
    const payload = {
      name: 'Site Foreman',
      phone: '0504127930',
      service: 'Sweet Water Supply (Drinking / Potable)',
      location: 'Khalifa City',
    };

    const url = buildWhatsAppUrl(payload);
    assert.ok(url.startsWith(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=`));
    assert.ok(url.includes(encodeURIComponent('Name: Site Foreman')));
  });

  await t.test('generates pre-filled direct service link', () => {
    const url = buildDirectServiceWhatsAppUrl('Mobile Crane Rental');
    assert.ok(url.includes(encodeURIComponent('Mobile Crane Rental')));
    assert.ok(url.startsWith(`https://wa.me/${SITE_CONFIG.whatsappRaw}`));
  });

  await t.test('generates general inquiry WhatsApp link', () => {
    const url = buildGeneralWhatsAppUrl();
    assert.ok(url.includes(encodeURIComponent('OSIA Transport')));
  });
});

test('Quote Form Validation (Zod Schema)', async (t) => {
  await t.test('validates correct form submission data', () => {
    const validData = {
      name: 'Khalid Al Mansoori',
      phone: '+971504127930',
      service: 'Low Bed Trailer Heavy Equipment Transport',
      location: 'MBZ City Sector 10',
      details: 'Urgent transport for Komatsu excavator tomorrow morning',
    };

    const result = quoteFormSchema.safeParse(validData);
    assert.equal(result.success, true);
    if (result.success) {
      assert.equal(result.data.name, 'Khalid Al Mansoori');
      assert.equal(result.data.phone, '+971504127930');
    }
  });

  await t.test('rejects short names or missing required fields', () => {
    const invalidData = {
      name: 'A',
      phone: '123',
      service: '',
      location: '',
    };

    const result = quoteFormSchema.safeParse(invalidData);
    assert.equal(result.success, false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      assert.ok(errors.name);
      assert.ok(errors.phone);
      assert.ok(errors.location);
    }
  });

  await t.test('sanitizes control characters from inputs', () => {
    const dirtyData = {
      name: 'John\u0000Doe\u001F',
      phone: '0504127930',
      service: 'Wastewater Collection & Septic Tank Drainage',
      location: 'Musaffah   Industrial',
      details: 'Testing\u0007cleaning',
    };

    const result = quoteFormSchema.safeParse(dirtyData);
    assert.equal(result.success, true);
    if (result.success) {
      assert.equal(result.data.name, 'JohnDoe');
      assert.equal(result.data.location, 'Musaffah Industrial');
      assert.equal(result.data.details, 'Testingcleaning');
    }
  });
});

test('Content Truth & Anti-Hallucination Gate (TRD §9)', async (t) => {
  await t.test('enforces NAP phone and email consistency', () => {
    assert.equal(SITE_CONFIG.phoneDisplay, '+971 50 412 7930');
    assert.equal(SITE_CONFIG.whatsappRaw, '971504127930');
    assert.equal(SITE_CONFIG.email, 'osiatransportllc@gmail.com');
  });

  await t.test('verifies all 7 core services are flagged confirmed', () => {
    assert.equal(SERVICES.length, 7);
    for (const service of SERVICES) {
      assert.equal(service.confirmed, true);
      assert.ok(service.slug);
      assert.ok(service.title);
    }
  });

  await t.test('verifies confirmed areas only in phase 1', () => {
    assert.ok(AREAS.length >= 3);
    for (const area of AREAS) {
      assert.equal(area.confirmed, true);
    }
  });

  await t.test('verifies confirmed crane capacities match client specifications', () => {
    const craneService = SERVICES.find((s) => s.id === 'crane-rental');
    assert.ok(craneService);
    assert.ok(craneService?.capacitySnippet.includes('25 Ton – 200 Ton'));
  });
});


test('Service cards use a different photograph for every service', async () => {
  const { SERVICE_VISUALS } = await import('../src/content/fleetVisuals');
  const images = SERVICES.map((service) => SERVICE_VISUALS[service.id]?.src);
  assert.ok(images.every(Boolean), 'Every service needs a photograph');
  assert.equal(new Set(images).size, SERVICES.length, 'Service photographs must not repeat');
});
