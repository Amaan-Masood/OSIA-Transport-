import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, copyFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { quoteFormSchema } from '../src/lib/validation';
import { buildWhatsAppUrl } from '../src/lib/whatsapp';
import { serializeJsonLd } from '../src/lib/serializeJsonLd';
import { JsonLd } from '../src/components/seo/JsonLd';
import { SERVICES } from '../src/content/site';

const valid = { name: 'Site Engineer', phone: '0504127930', service: SERVICES[0].title, location: 'Abu Dhabi' };

test('required fields are checked after whitespace and control normalization', () => {
  for (const field of ['name', 'location']) {
    assert.equal(quoteFormSchema.safeParse({ ...valid, [field]: ' \u0000\t ' }).success, false);
  }
  assert.equal(quoteFormSchema.safeParse({ ...valid, service: 'unlisted service' }).success, false);
});

test('all optional quote fields have size limits, including direct URL callers', () => {
  for (const field of ['details', 'cargoDetails', 'craneTonnage', 'waterType', 'tripFrequency']) {
    assert.equal(quoteFormSchema.safeParse({ ...valid, [field]: 'x'.repeat(2000) }).success, false);
    assert.throws(() => buildWhatsAppUrl({ ...valid, [field]: 'x'.repeat(2000) }));
  }
});

test('Unicode and injection-shaped text remain data in a single WhatsApp parameter', () => {
  const details = `<script>alert(1)</script> ' OR 1=1; -- &phone=attacker # ????? ??`;
  const url = new URL(buildWhatsAppUrl({ ...valid, details }));
  assert.equal(url.origin, 'https://wa.me');
  assert.deepEqual([...url.searchParams.keys()], ['text']);
  assert.ok(url.searchParams.get('text')!.includes(details));
  assert.equal(quoteFormSchema.parse({ ...valid, phone: '+971 50 412 7930' }).phone, '+971504127930');
});

test('JSON-LD cannot close its script element and still round trips as JSON', () => {
  const payload = { name: '</script><img src=x onerror=alert(1)> & \u2028\u2029' };
  const serialized = serializeJsonLd(payload);
  assert.ok(!serialized.includes('<'));
  assert.deepEqual(JSON.parse(serialized), payload);
  const html = renderToStaticMarkup(React.createElement(JsonLd, { data: payload }));
  assert.equal((html.match(/<script/g) || []).length, 1);
  assert.equal((html.match(/<\/script>/g) || []).length, 1);
  assert.ok(!html.includes('<img'));
  assert.deepEqual(JSON.parse(html.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '')), payload);
});

test('CSP generator hashes exact bytes, including leading and trailing whitespace', () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'osia-csp-'));
  try {
    mkdirSync(path.join(dir, 'out'));
    mkdirSync(path.join(dir, 'deploy'));
    copyFileSync('deploy/htaccess.template', path.join(dir, 'deploy/htaccess.template'));
    const body = '\n  window.example = "src=inside-data"; \n';
    writeFileSync(path.join(dir, 'out/index.html'), `<script>${body}</script>`);
    execFileSync(process.execPath, [path.resolve('scripts/build-htaccess.mjs')], { cwd: dir });
    const headers = readFileSync(path.join(dir, 'out/.htaccess'), 'utf8');
    const hash = createHash('sha256').update(body).digest('base64');
    const policy = headers.match(/Header always set Content-Security-Policy "([^"]+)"/)?.[1];
    assert.ok(policy?.includes(`'sha256-${hash}'`));
    assert.ok(!headers.includes('{{SCRIPT_HASHES}}'));
    execFileSync(process.execPath, [path.resolve('scripts/check-security.mjs')], { cwd: dir });
    writeFileSync(path.join(dir, 'out/.env'), 'TEST_ONLY=fixture');
    assert.throws(() => execFileSync(process.execPath, [path.resolve('scripts/check-security.mjs')], { cwd: dir, stdio: 'pipe' }));
    assert.ok(headers.includes("object-src 'none'"));
    assert.ok(headers.includes("frame-ancestors 'none'"));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
