#!/usr/bin/env node

/**
 * Parse --slds-g-* custom property definitions from a CSS file
 * and emit content/data/design-tokens.json grouped by category.
 *
 * Usage:
 *   node scripts/parse-design-tokens.js [path-to-css]
 *
 * Defaults to public/assets/styles/sldsPlusTemplate.css when no path is given.
 */

const fs = require('fs');
const path = require('path');

const cssPath = process.argv[2]
  || path.join(__dirname, '..', 'public', 'assets', 'styles', 'sldsPlusTemplate.css');

const outPath = path.join(__dirname, '..', 'content', 'data', 'design-tokens.json');

const CATEGORY_ORDER = [
  'color',
  'spacing',
  'sizing',
  'shadow',
  'radius',
  'ratio',
  'font',
  'duration',
  'link',
  'other',
];

function categorize(name) {
  const seg = name.replace('--slds-g-', '').split('-')[0];
  if (CATEGORY_ORDER.includes(seg)) return seg;
  return 'other';
}

function isColorValue(val) {
  if (!val) return false;
  const v = val.trim();
  return /^#[0-9a-f]{3,8}$/i.test(v)
    || v.startsWith('rgb')
    || v.startsWith('hsl')
    || v.startsWith('light-dark(');
}

function resolvePreviewColor(val) {
  if (!val) return null;
  const v = val.trim();
  const hex = v.match(/^#[0-9a-f]{3,8}$/i);
  if (hex) return hex[0];
  const ld = v.match(/^light-dark\(\s*(#[0-9a-f]{3,8})/i);
  if (ld) return ld[1];
  return null;
}

function run() {
  if (!fs.existsSync(cssPath)) {
    console.error('CSS file not found:', cssPath);
    process.exit(1);
  }

  const css = fs.readFileSync(cssPath, 'utf-8');
  const re = /(--slds-g-[\w-]+)\s*:\s*([^;]+)/g;
  const tokenMap = new Map();

  let m;
  while ((m = re.exec(css)) !== null) {
    const name = m[1];
    const value = m[2].trim();
    if (!tokenMap.has(name)) {
      tokenMap.set(name, value);
    }
  }

  const grouped = {};
  for (const cat of CATEGORY_ORDER) grouped[cat] = [];

  for (const [name, value] of tokenMap) {
    const cat = categorize(name);
    const entry = { name, value };
    const preview = resolvePreviewColor(value);
    if (preview) entry.preview = preview;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(entry);
  }

  for (const cat of Object.keys(grouped)) {
    if (grouped[cat].length === 0) delete grouped[cat];
  }

  const output = {
    generatedAt: new Date().toISOString(),
    source: path.basename(cssPath),
    totalTokens: tokenMap.size,
    categories: grouped,
  };

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Wrote ${tokenMap.size} tokens to ${outPath}`);

  for (const [cat, tokens] of Object.entries(grouped)) {
    console.log(`  ${cat}: ${tokens.length}`);
  }
}

run();
