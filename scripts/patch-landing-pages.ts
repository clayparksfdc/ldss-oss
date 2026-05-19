/**
 * Patch category landing markdown to use the real hero + card cover images
 * from scripts/zh-landing-images.json.
 *
 * For each landing page in the manifest:
 *   1. Find the matching content/<category>/<slug>.md file
 *   2. Replace the existing hero-banner directive's gradient with image=<cloudinary URL>
 *   3. Replace the card-grid block with one built from the manifest's cards
 *      (preserving each card's local-route href when one exists, falling back
 *      to the zh URL otherwise)
 *
 * Mapping from zh slug → local file is hard-coded since the audit work earlier
 * settled the canonical paths.
 *
 * Run with --dry-run first.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const MANIFEST_PATH = path.join(__dirname, 'zh-landing-images.json');
const REPORT_PATH = path.join(REPO, 'docs', 'patch-landing-pages-report.md');

interface Card {
  title: string;
  description: string;
  href: string;
  cover: string | null;
  coverCloudinary: string | null;
}

interface ManifestPage {
  url: string;
  slug: string;
  name: string;
  hero: string | null;
  heroCloudinary: string | null;
  cards: Card[];
}

// zh slug (with uid prefix) → content/ relative path of the landing markdown
const SLUG_TO_FILE: Record<string, string> = {
  '76969d-get-started': 'get-started/get-started.md',
  '771012-admins': 'get-started/admins.md',
  '874349-designers': 'get-started/designers.md',
  '547b38-developers': 'get-started/developers.md',
  '63cfc2-resources': 'get-started/resources.md',
  '8184ad-transition-to-slds-2': 'get-started/transition-to-slds-2.md',
  '52a7c7-ai-and-slds-2': 'ai-and-slds-2/ai-and-slds-2.md',
  '03c548-agentic-patterns': 'ai-and-slds-2/agentic-patterns.md',
  '2337c1-ai-tools': 'ai-and-slds-2/ai-tools.md',
  '897980-interaction-models': 'ai-and-slds-2/interaction-models.md',
  '67a7b2-foundations': 'foundation/foundations.md',
  '958017-develop': 'develop/develop.md',
  '755aff-components': 'component/components.md',
  '355656-patterns': 'pattern/patterns.md',
  '112ac5-accessibility': 'accessibility/accessibility.md',
  '05b46d-tools': 'tools/tools.md',
};

// zh page UID (from our cache) → local route, used to rewrite card hrefs.
const UID_TO_ROUTE: Record<string, string> = {
  '771012': '/get-started/admins',
  '874349': '/get-started/designers',
  '547b38': '/get-started/developers',
  '63cfc2': '/get-started/resources',
  '8184ad': '/get-started/transition-to-slds-2',
  '74034e': '/get-started/learn-more',
  '81aa72': '/get-started/glossary',
  '313db3': '/get-started/faqs',
  '52a7c7': '/ai-and-slds-2/ai-and-slds-2',
  '03c548': '/ai-and-slds-2/agentic-patterns',
  '2337c1': '/ai-and-slds-2/ai-tools',
  '897980': '/ai-and-slds-2/interaction-models',
  '95c37a': '/ai-and-slds-2/agentic-patterns', // zh's "Agentic Experiences" card → our agentic-patterns
  '75a154': '/ai-and-slds-2/vibe-coding-and-slds',
  '0364a5': '/ai-and-slds-2/prompt-design-guide',
  '67a7b2': '/foundation/foundations',
  '958017': '/develop/develop',
  '755aff': '/component/components',
  '355656': '/pattern/patterns',
  '112ac5': '/accessibility/accessibility',
  '05b46d': '/tools/tools',
  '83309d': '/foundation/icons',
  '655b28': '/foundation/color',
  '93288f': '/foundation/typography',
  '03d6b0': '/foundation/spacing-and-sizing',
  '7770b4': '/foundation/borders-and-radius',
  '64b580': '/foundation/shadows',
  '759a28': '/foundation/illustrations',
  '319e5f': '/develop/styling-hook-index',
  '05098e': '/develop/utility-classes',
  '3427aa': '/tools/developer-tools',
  '2963ba': '/tools/designer-tools',
  '528a43': '/develop/best-practices',
};

function rewriteHref(href: string): string {
  // Match zh /p/<uid> patterns (with or without slug suffix)
  const m = href.match(/lightningdesignsystem\.com\/2e1ef8501\/(?:v\/[^/]+\/)?p\/([a-f0-9]+)/);
  if (m) {
    const route = UID_TO_ROUTE[m[1]];
    if (route) return route;
  }
  return href;
}

function escapeAttr(s: string): string {
  return s.replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
}

interface Patch {
  file: string;
  oldHero: string;
  newHero: string;
  oldCardGrid: string | null;
  newCardGrid: string | null;
}

function patchFile(manifestPage: ManifestPage, dryRun: boolean): Patch | null {
  const filename = SLUG_TO_FILE[manifestPage.slug];
  if (!filename) {
    console.log(`  No mapping for ${manifestPage.slug}`);
    return null;
  }
  const abs = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(abs)) {
    console.log(`  ${filename} doesn't exist`);
    return null;
  }
  let content = fs.readFileSync(abs, 'utf-8');
  let oldHero = '';
  let newHero = '';

  // Replace OR insert hero-banner if we have a Cloudinary URL for it
  if (manifestPage.heroCloudinary) {
    const heroRe = /<div data-directive-type="hero-banner" data-directive-attrs="([^"]*)"[^>]*>\s*<\/div>/;
    const m = content.match(heroRe);
    const taglineFromZh = manifestPage.cards.find(c => c.description)?.description || '';
    const newAttrs: any = {
      title: manifestPage.name,
      tagline: '',
      version: 'SLDS 2',
      image: manifestPage.heroCloudinary,
    };

    if (m) {
      oldHero = m[0];
      // Preserve existing title/tagline if present; replace gradient with image
      const decoded = m[1].replace(/&quot;/g, '"');
      try {
        const parsed = JSON.parse(decoded);
        if (parsed.title) newAttrs.title = parsed.title;
        if (parsed.tagline) newAttrs.tagline = parsed.tagline;
      } catch { /* keep defaults */ }
      const attrsStr = JSON.stringify(newAttrs).replace(/"/g, '&quot;');
      newHero = `<div data-directive-type="hero-banner" data-directive-attrs="${attrsStr}" data-directive-children="[]">\n</div>`;
      content = content.replace(m[0], newHero);
    } else {
      // Insert hero between frontmatter and body
      const fmEnd = content.indexOf('\n---\n');
      if (fmEnd === -1) return null;
      const fmEndIdx = fmEnd + 5;
      const attrsStr = JSON.stringify(newAttrs).replace(/"/g, '&quot;');
      newHero = `<div data-directive-type="hero-banner" data-directive-attrs="${attrsStr}" data-directive-children="[]">\n</div>`;
      content = content.slice(0, fmEndIdx) + '\n' + newHero + '\n\n' + content.slice(fmEndIdx).replace(/^\n+/, '');
      oldHero = '(none — inserted)';
    }
  }

  // Build new card-grid from manifest cards
  let oldCardGrid: string | null = null;
  let newCardGrid: string | null = null;
  if (manifestPage.cards.length > 0) {
    // Find existing :::card-grid block (the FIRST one — we replace the primary)
    const gridRe = /:::card-grid\{[^}]*\}\s*\n([\s\S]*?)\n:::/;
    const gm = content.match(gridRe);

    // Determine column count: 3 for >= 3 cards, else card count
    const cols = manifestPage.cards.length >= 3 ? 3 : manifestPage.cards.length;
    const lines = [`:::card-grid{columns="${cols}"}`];
    for (const card of manifestPage.cards) {
      const href = rewriteHref(card.href);
      const parts = [
        `title="${escapeAttr(card.title)}"`,
        `href="${escapeAttr(href)}"`,
      ];
      if (card.description) parts.push(`description="${escapeAttr(card.description)}"`);
      if (card.coverCloudinary) parts.push(`image="${escapeAttr(card.coverCloudinary)}"`);
      lines.push(`::card{${parts.join(' ')}}`);
    }
    lines.push(':::');
    newCardGrid = lines.join('\n');

    if (gm) {
      oldCardGrid = gm[0];
      content = content.replace(gm[0], newCardGrid);
    } else {
      // No existing grid — append after the body (before the next major section if any)
      content = content.trimEnd() + '\n\n' + newCardGrid + '\n';
    }
  }

  if (!dryRun) {
    fs.writeFileSync(abs, content);
  }
  return { file: filename, oldHero, newHero, oldCardGrid, newCardGrid };
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8')) as ManifestPage[];

  const patches: Patch[] = [];
  for (const page of manifest) {
    console.log(`[${page.slug}] ${page.name}`);
    const p = patchFile(page, dryRun);
    if (p) patches.push(p);
  }

  // Report
  const lines: string[] = [];
  lines.push('# Landing-page patch report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push(`- Pages patched: **${patches.length}**`);
  lines.push(`- Heroes updated: **${patches.filter(p => p.newHero).length}**`);
  lines.push(`- Card grids replaced: **${patches.filter(p => p.newCardGrid).length}**`);
  lines.push('');

  for (const p of patches) {
    lines.push(`### \`content/${p.file}\``);
    lines.push('');
    if (p.newHero) lines.push(`- ✓ Hero replaced (${p.newHero.length} chars)`);
    if (p.newCardGrid) lines.push(`- ✓ Card grid: ${p.newCardGrid.split('\n').length - 2} cards`);
    lines.push('');
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));
  console.log(`\n✓ Report: ${REPORT_PATH}`);
  console.log(`  Patches: ${patches.length}`);
  console.log(`  Heroes:  ${patches.filter(p => p.newHero).length}`);
  console.log(`  Grids:   ${patches.filter(p => p.newCardGrid).length}`);
}

main();
