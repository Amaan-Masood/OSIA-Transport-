import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const OUT_DIR = path.resolve('out');
const TEMPLATE_FILE = path.resolve('deploy/htaccess.template');
const TARGET_FILE = path.join(OUT_DIR, '.htaccess');

if (!fs.existsSync(OUT_DIR)) {
  console.log('out/ directory does not exist yet. Skipping .htaccess generation.');
  process.exit(0);
}

if (!fs.existsSync(TEMPLATE_FILE)) {
  console.error(`deploy/htaccess.template not found at ${TEMPLATE_FILE}`);
  process.exit(1);
}

// Recursively find all html files in out/
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(OUT_DIR);
const hashes = new Set();
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  let match;
  while ((match = scriptRegex.exec(content)) !== null) {
    const scriptBody = match[1].trim();
    // Only hash inline scripts that have content and no external src
    const fullTag = match[0];
    if (scriptBody.length > 0 && !fullTag.includes('src=')) {
      const hash = crypto.createHash('sha256').update(scriptBody).digest('base64');
      hashes.add(`'sha256-${hash}'`);
    }
  }
}

const scriptHashesString = Array.from(hashes).join(' ');
console.log(`Discovered ${hashes.size} unique inline script hashes for CSP.`);

let template = fs.readFileSync(TEMPLATE_FILE, 'utf8');
const finalHtaccess = template.replace('{{SCRIPT_HASHES}}', scriptHashesString);

fs.writeFileSync(TARGET_FILE, finalHtaccess, 'utf8');
console.log(`Generated hardened ${TARGET_FILE} with strict CSP.`);
