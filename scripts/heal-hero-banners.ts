/**
 * Insert :::hero-banner directives at the top of category landing pages.
 *
 * Category landing pages are the "cover" pages for each section of the site —
 * they currently render with no visual identity. The zh source has gradient
 * hero banners on these pages.
 *
 * For each landing page (path like /<category>/<category>.md or known specific
 * landing pages), inject a hero-banner with title + tagline + Cloudinary
 * image when one is available, or a gradient fallback when not.
 *
 * Run with --dry-run first.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const LOCAL_MAP_PATH = path.join(__dirname, 'local-cloudinary-map.json');
const REPORT_PATH = path.join(REPO, 'docs', 'heal-hero-banners-report.md');

interface CloudinaryEntry {
  cloudinaryUrl: string;
  publicId: string;
  width: number;
  height: number;
  bytes: number;
  format: string;
  uploadedAt: string;
  originalPath: string;
}

interface HeroSpec {
  filePath: string;     // relative to content/
  title: string;
  tagline: string;
  imageMediaPath: string | null;  // /media/<file>.jpg, looked up in local-cloudinary-map
  gradient?: string;    // fallback if no image
}

// Map of category landing pages → hero metadata
const HEROES: HeroSpec[] = [
  {
    filePath: 'get-started/get-started.md',
    title: 'Get Started',
    tagline: 'Start building with Lightning Design System 2.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
  },
  {
    filePath: 'get-started/admins.md',
    title: 'Admins',
    tagline: 'Adopt Salesforce Cosmos to get the new design and SLDS 2 features.',
    imageMediaPath: '/media/admins.jpg',
  },
  {
    filePath: 'get-started/designers.md',
    title: 'Designers',
    tagline: 'Connect to essential components and tools to create great experiences.',
    imageMediaPath: '/media/designers.jpg',
  },
  {
    filePath: 'get-started/developers.md',
    title: 'Developers',
    tagline: 'Access the framework for building consistent and scalable interfaces.',
    imageMediaPath: '/media/developers.jpg',
  },
  {
    filePath: 'general/ai-and-slds-2.md',
    title: 'AI and SLDS 2',
    tagline: 'Re-imagining design systems for the agentic era.',
    imageMediaPath: '/media/ai-and-slds-2.jpg',
  },
  {
    filePath: 'foundation/foundations.md',
    title: 'Foundations',
    tagline: 'The visual building blocks of Lightning Design System 2.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)',
  },
  {
    filePath: 'develop/develop.md',
    title: 'Develop',
    tagline: 'Build modern, accessible interfaces with SLDS 2.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 50%, #06B6D4 100%)',
  },
  {
    filePath: 'component/components.md',
    title: 'Components',
    tagline: 'Reusable UI primitives that match Salesforce design language.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #064E3B 0%, #0E7490 50%, #0EA5E9 100%)',
  },
  {
    filePath: 'pattern/patterns.md',
    title: 'Patterns',
    tagline: 'Proven solutions for common design problems.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #831843 0%, #BE185D 50%, #F97316 100%)',
  },
  {
    filePath: 'accessibility/accessibility.md',
    title: 'Accessibility',
    tagline: 'Build inclusive experiences for everyone.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #14532D 0%, #16A34A 50%, #84CC16 100%)',
  },
  {
    filePath: 'tools/tools.md',
    title: 'Tools',
    tagline: 'Validate, migrate, and create with SLDS tooling.',
    imageMediaPath: null,
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 50%, #6366F1 100%)',
  },
];

function loadLocalMap(): Record<string, CloudinaryEntry> {
  if (!fs.existsSync(LOCAL_MAP_PATH)) return {};
  return JSON.parse(fs.readFileSync(LOCAL_MAP_PATH, 'utf-8'));
}

function escapeAttr(s: string): string {
  return s.replace(/"/g, '&quot;');
}

function buildHeroBlock(spec: HeroSpec, map: Record<string, CloudinaryEntry>): string {
  const attrs: Record<string, string> = {
    title: spec.title,
    tagline: spec.tagline,
    version: 'SLDS 2',
  };
  if (spec.imageMediaPath && map[spec.imageMediaPath]) {
    attrs.image = map[spec.imageMediaPath].cloudinaryUrl;
  } else if (spec.gradient) {
    attrs.gradient = spec.gradient;
  }

  // Use the existing data-directive-type div format used on home.md
  const attrsJson = JSON.stringify(attrs).replace(/"/g, '&quot;');
  return `<div data-directive-type="hero-banner" data-directive-attrs="${attrsJson}" data-directive-children="[]">\n</div>`;
}

interface FileReport {
  filePath: string;
  status: 'inserted' | 'already-has-hero' | 'file-missing';
  hasImage: boolean;
}

function processFile(spec: HeroSpec, map: Record<string, CloudinaryEntry>, dryRun: boolean): FileReport {
  const abs = path.join(CONTENT_DIR, spec.filePath);
  if (!fs.existsSync(abs)) {
    return { filePath: spec.filePath, status: 'file-missing', hasImage: false };
  }

  const content = fs.readFileSync(abs, 'utf-8');
  if (content.includes('data-directive-type="hero-banner"') || content.includes(':::hero-banner')) {
    return { filePath: spec.filePath, status: 'already-has-hero', hasImage: !!spec.imageMediaPath };
  }

  // Find end of frontmatter
  const fmMatch = content.match(/^---\n[\s\S]*?\n---\n/);
  const fmEnd = fmMatch ? fmMatch[0].length : 0;
  const fm = content.slice(0, fmEnd);
  const body = content.slice(fmEnd);

  const heroBlock = buildHeroBlock(spec, map);
  const newContent = `${fm}\n${heroBlock}\n${body.replace(/^\n+/, '')}`;

  if (!dryRun) {
    fs.writeFileSync(abs, newContent);
  }
  return {
    filePath: spec.filePath,
    status: 'inserted',
    hasImage: !!(spec.imageMediaPath && map[spec.imageMediaPath]),
  };
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const map = loadLocalMap();
  const reports: FileReport[] = [];
  for (const spec of HEROES) reports.push(processFile(spec, map, dryRun));

  const inserted = reports.filter(r => r.status === 'inserted').length;
  const skipped = reports.filter(r => r.status === 'already-has-hero').length;
  const missing = reports.filter(r => r.status === 'file-missing').length;

  const lines: string[] = [];
  lines.push('# Hero banner insertion report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Heroes configured: **${HEROES.length}**`);
  lines.push(`- Inserted: **${inserted}**`);
  lines.push(`- Skipped (already has hero): **${skipped}**`);
  lines.push(`- File missing: **${missing}**`);
  lines.push('');
  lines.push('| File | Status | Has image |');
  lines.push('|---|---|---|');
  for (const r of reports) {
    lines.push(`| \`content/${r.filePath}\` | ${r.status} | ${r.hasImage ? '✅' : '⚪ gradient'} |`);
  }
  lines.push('');
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Inserted: ${inserted}`);
  console.log(`  Skipped:  ${skipped}`);
  console.log(`  Missing:  ${missing}`);
}

main();
