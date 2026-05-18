/**
 * Generates content/data/design-tokens.json from the @salesforce-ux/design-system-2
 * npm package. SLDS 2 is the source of truth — the bundled cosmos CSS is the
 * canonical surface for the global (`--slds-g-*`) tokens.
 *
 * Run via `npm run tokens:generate` or as a `prebuild` hook.
 */

import fs from 'fs';
import path from 'path';

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

interface Token {
  name: string;
  value: string;
  preview?: string;
}

function categorize(name: string): string {
  const seg = name.replace('--slds-g-', '').split('-')[0];
  return CATEGORY_ORDER.includes(seg) ? seg : 'other';
}

function resolvePreviewColor(val: string): string | null {
  const v = val.trim();
  const hex = v.match(/^#[0-9a-f]{3,8}$/i);
  if (hex) return hex[0];
  const ld = v.match(/^light-dark\(\s*(#[0-9a-f]{3,8})/i);
  if (ld) return ld[1];
  return null;
}

function parseSldsCss(css: string) {
  const re = /(--slds-g-[\w-]+)\s*:\s*([^;]+)/g;
  const tokenMap = new Map<string, string>();
  let m;
  while ((m = re.exec(css)) !== null) {
    if (!tokenMap.has(m[1])) tokenMap.set(m[1], m[2].trim());
  }

  const grouped: Record<string, Token[]> = {};
  for (const cat of CATEGORY_ORDER) grouped[cat] = [];

  for (const [name, value] of tokenMap) {
    const cat = categorize(name);
    const entry: Token = { name, value };
    const preview = resolvePreviewColor(value);
    if (preview) entry.preview = preview;
    grouped[cat].push(entry);
  }
  for (const cat of Object.keys(grouped)) {
    if (grouped[cat].length === 0) delete grouped[cat];
  }

  return { totalTokens: tokenMap.size, categories: grouped };
}

function resolveSldsCssPath(): { cssPath: string; pkgPath: string; version: string } {
  const pkgJsonPath = require.resolve('@salesforce-ux/design-system-2/package.json');
  const pkgPath = path.dirname(pkgJsonPath);
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
  const cssPath = path.join(pkgPath, 'dist', 'css', 'bundled', 'slds2.cosmos.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error(`SLDS 2 cosmos CSS not found at ${cssPath}`);
  }
  return { cssPath, pkgPath, version: pkg.version };
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const outDir = path.join(repoRoot, 'content', 'data');
  const outFile = path.join(outDir, 'design-tokens.json');

  const { cssPath, version } = resolveSldsCssPath();
  const css = fs.readFileSync(cssPath, 'utf-8');
  const { totalTokens, categories } = parseSldsCss(css);

  const output = {
    generatedAt: new Date().toISOString(),
    source: `@salesforce-ux/design-system-2@${version} (dist/css/bundled/slds2.cosmos.css)`,
    sourceVersion: version,
    sourcePackage: '@salesforce-ux/design-system-2',
    totalTokens,
    categories,
  };

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(output, null, 2) + '\n');

  const counts = Object.fromEntries(
    Object.entries(categories).map(([k, v]) => [k, (v as Token[]).length]),
  );
  console.log(`✓ Wrote ${outFile}`);
  console.log(`  Source:  ${output.source}`);
  console.log(`  Tokens:  ${totalTokens}`);
  console.log(`  Counts:  ${JSON.stringify(counts)}`);
}

main();
