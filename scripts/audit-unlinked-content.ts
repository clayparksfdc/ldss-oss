/**
 * Find content/*.md files that are not referenced by content/navigation.md.
 *
 * The site routes pages by their navigation entry. Files not in nav are
 * unreachable through normal browsing — they're either:
 *   - Duplicates from earlier migration passes
 *   - Old versions superseded by a re-categorized file
 *   - Drafts/leftovers
 *
 * For each unlinked file, we check whether a "preferred" version exists
 * (same slug in a different category that IS linked). If so, the unlinked
 * one is a redundant duplicate — safe to delete.
 *
 * Output: docs/unlinked-content-audit.md with three groups:
 *   - Duplicates (slug exists elsewhere AND that elsewhere IS in nav)
 *   - Orphans (slug exists nowhere in nav — true orphans, may need new nav entry)
 *   - Sub-tabs (file ends with `--<tab>` and the parent IS in nav — these are legit
 *     because nav uses `{sidebar}` flag to surface sub-tabs)
 *
 * Does NOT delete anything. Designer reviews the report and runs the actual deletion.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const NAV_PATH = path.join(CONTENT_DIR, 'navigation.md');
const REPORT_PATH = path.join(REPO, 'docs', 'unlinked-content-audit.md');

interface ContentFile {
  rel: string;          // content/foo/bar.md
  abs: string;
  category: string;     // first dir segment
  slug: string;         // basename without .md
  size: number;
  isSubTab: boolean;    // slug contains --
  parentSlug: string | null;  // if subTab, the parent slug
}

function* walkContent(dir: string, base = ''): Generator<{ rel: string; abs: string }> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkContent(full, path.join(base, e.name));
    else if (e.name.endsWith('.md') && e.name !== 'navigation.md') {
      yield { rel: path.join('content', base, e.name), abs: full };
    }
  }
}

function loadFiles(): ContentFile[] {
  const out: ContentFile[] = [];
  for (const f of walkContent(CONTENT_DIR)) {
    const parts = f.rel.split(path.sep);
    // parts[0] = "content", parts[1] = category (or top-level file like home.md)
    const category = parts.length >= 3 ? parts[1] : '';
    const slug = path.basename(f.abs, '.md');
    const subTabMatch = slug.match(/^(.+)--[^-]+$/);
    out.push({
      rel: f.rel,
      abs: f.abs,
      category,
      slug,
      size: fs.statSync(f.abs).size,
      isSubTab: !!subTabMatch,
      parentSlug: subTabMatch ? subTabMatch[1] : null,
    });
  }
  return out;
}

function loadLinkedRoutes(): Set<string> {
  const nav = fs.readFileSync(NAV_PATH, 'utf-8');
  const routes = new Set<string>();
  for (const m of nav.matchAll(/\[[^\]]+\]\((\/[a-zA-Z0-9_/-]+)\)/g)) {
    routes.add(m[1]);
  }
  return routes;
}

interface Audit {
  duplicates: Array<{ file: ContentFile; preferredFile: ContentFile }>;
  orphans: ContentFile[];
  subTabs: ContentFile[];
  linked: ContentFile[];
}

function audit(files: ContentFile[], linkedRoutes: Set<string>): Audit {
  // Map slug → list of files with that slug
  const bySlug = new Map<string, ContentFile[]>();
  for (const f of files) {
    if (!bySlug.has(f.slug)) bySlug.set(f.slug, []);
    bySlug.get(f.slug)!.push(f);
  }

  // Map slug → which routes link to it
  const slugToLinkedRoute = new Map<string, string>();
  for (const r of linkedRoutes) {
    const parts = r.split('/').filter(Boolean);
    if (parts.length === 0) continue;
    const lastSlug = parts[parts.length - 1];
    slugToLinkedRoute.set(lastSlug, r);
  }

  const result: Audit = { duplicates: [], orphans: [], subTabs: [], linked: [] };

  for (const f of files) {
    // Compute the route this file would map to: /<category>/<slug>
    const route = `/${f.category}/${f.slug}`;

    if (linkedRoutes.has(route)) {
      result.linked.push(f);
      continue;
    }

    // Sub-tab detection: parent is linked AND parent has {sidebar} flag in nav
    if (f.isSubTab && f.parentSlug) {
      const parentRoute = `/${f.category}/${f.parentSlug}`;
      if (linkedRoutes.has(parentRoute)) {
        result.subTabs.push(f);
        continue;
      }
    }

    // Is the same slug linked from a different category?
    const linkedRoute = slugToLinkedRoute.get(f.slug);
    if (linkedRoute && linkedRoute !== route) {
      // Find the file at that linked route
      const linkedParts = linkedRoute.split('/').filter(Boolean);
      const preferred = files.find(o => o.category === linkedParts[0] && o.slug === f.slug);
      if (preferred) {
        result.duplicates.push({ file: f, preferredFile: preferred });
        continue;
      }
    }

    result.orphans.push(f);
  }

  return result;
}

function main() {
  const files = loadFiles();
  const linkedRoutes = loadLinkedRoutes();
  const result = audit(files, linkedRoutes);

  const lines: string[] = [];
  lines.push('# Unlinked content audit');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Total .md files: **${files.length}**`);
  lines.push(`- Linked from \`navigation.md\` directly: **${result.linked.length}**`);
  lines.push(`- Sub-tabs of a linked parent (legit, kept): **${result.subTabs.length}**`);
  lines.push(`- **Duplicates (delete candidate)**: **${result.duplicates.length}**`);
  lines.push(`- Orphans (no nav entry anywhere): **${result.orphans.length}**`);
  lines.push('');

  lines.push('## ❗ Duplicates (safe to delete)');
  lines.push('');
  lines.push('These files have a slug that IS linked from navigation, but the file is in the wrong category. The file at the linked route is the canonical version.');
  lines.push('');
  lines.push('| Delete | Keep | Slug |');
  lines.push('|---|---|---|');
  for (const d of result.duplicates.sort((a, b) => a.file.rel.localeCompare(b.file.rel))) {
    lines.push(`| \`${d.file.rel}\` | \`${d.preferredFile.rel}\` | ${d.file.slug} |`);
  }
  lines.push('');

  lines.push('## ⚠️ Orphans (no nav entry)');
  lines.push('');
  lines.push('These files have no nav entry. Either:');
  lines.push('- They should be added to navigation.md');
  lines.push('- They\'re drafts/leftovers and should be deleted');
  lines.push('- They\'re sub-tab content for a slug structure we don\'t recognize');
  lines.push('');
  lines.push('| File | Category | Slug |');
  lines.push('|---|---|---|');
  for (const o of result.orphans.sort((a, b) => a.rel.localeCompare(b.rel))) {
    lines.push(`| \`${o.rel}\` | ${o.category} | ${o.slug} |`);
  }
  lines.push('');

  lines.push('## ✅ Sub-tabs (kept)');
  lines.push('');
  lines.push('These are sub-tabs of a linked parent (e.g. `button--usage.md` is the Usage tab of the Button page). Kept as-is.');
  lines.push('');
  lines.push(`Count: ${result.subTabs.length}`);
  lines.push('');

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Linked:     ${result.linked.length}`);
  console.log(`  Sub-tabs:   ${result.subTabs.length}`);
  console.log(`  Duplicates: ${result.duplicates.length}`);
  console.log(`  Orphans:    ${result.orphans.length}`);

  // Output a duplicates list for the deletion script
  if (result.duplicates.length > 0) {
    const dupListPath = path.join(__dirname, 'unlinked-duplicates.json');
    fs.writeFileSync(dupListPath, JSON.stringify(result.duplicates.map(d => d.file.rel), null, 2));
    console.log(`✓ Duplicate list: ${dupListPath}`);
  }
}

main();
