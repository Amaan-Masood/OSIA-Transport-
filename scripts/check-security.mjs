import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve('out');
const headers = fs.readFileSync(path.join(root, '.htaccess'), 'utf8');
if (headers.includes('{{SCRIPT_HASHES}}')) throw new Error('Unresolved CSP placeholder');
const policy = headers.match(/Header always set Content-Security-Policy "([^"]+)"/)?.[1];
if (!policy) throw new Error('Missing CSP header');
for (const rule of ["object-src 'none'", "base-uri 'self'", "frame-ancestors 'none'", 'X-Content-Type-Options "nosniff"', 'Strict-Transport-Security', 'Options -Indexes']) {
  if (!headers.includes(rule)) throw new Error(`Missing security rule: ${rule}`);
}
let pages = 0;
function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (/^(?:\.env(?:\.|$)|\.git$|\.aws$|\.ai$|node_modules$|package(?:-lock)?\.json$)|\.(?:map|pem|key|sql|bak)$/i.test(entry.name)) {
      throw new Error(`Private artifact in export: ${file}`);
    }
    if (entry.isDirectory()) scan(file);
    else if (entry.name.endsWith('.html')) {
      pages++;
      const html = fs.readFileSync(file, 'utf8');
      for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (!/(?:^|\s)src\s*=/i.test(match[1]) && match[2]) {
          const hash = crypto.createHash('sha256').update(match[2]).digest('base64');
          if (!policy.includes(`'sha256-${hash}'`)) throw new Error(`Missing inline script CSP hash: ${file}`);
        }
      }
    }
  }
}
scan(root);
console.log(`Security export check passed: ${pages} HTML files, exact CSP hashes and private artifact checks.`);
