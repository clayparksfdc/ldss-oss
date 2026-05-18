/**
 * Extracts component sections from vrt-all-components.html and generates
 * individual markdown pages for each legacy component.
 *
 * Run: npx ts-node scripts/extract-legacy-components.ts
 * (from ldss-oss root, or set paths accordingly)
 */

import fs from 'fs';
import path from 'path';

const VRT_PATH = path.join(
  __dirname,
  '../frontend/public/assets/vrt-all-components.html'
);
const CONTENT_DIR = path.join(__dirname, '../content');
const LEGACY_CATEGORY = 'legacy-slds1';
const LEGACY_COMPONENTS_DIR = path.join(
  CONTENT_DIR,
  LEGACY_CATEGORY,
  'legacy-components'
);

interface Example {
  id: string;
  title: string;
  html: string;
}

interface Component {
  id: string;
  name: string;
  examples: Example[];
}

function fixAssetPaths(html: string): string {
  return html
    .replace(/\s(href|src|xlink:href)="assets\//g, ' $1="/assets/')
    .replace(/\s(href|src|xlink:href)='assets\//g, " $1='/assets/");
}

function extractPreviewHtml(html: string, startIndex: number): { html: string; endIndex: number } {
  const openTag = '<div class="vrt-preview">';
  const idx = html.indexOf(openTag, startIndex);
  if (idx === -1) return { html: '', endIndex: -1 };

  const contentStart = idx + openTag.length;
  let depth = 1;
  let i = contentStart;

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        return {
          html: html.slice(contentStart, nextClose).trim(),
          endIndex: nextClose + 6,
        };
      }
      i = nextClose + 6;
    }
  }

  return { html: '', endIndex: -1 };
}

function extractComponents(html: string): Component[] {
  const components: Component[] = [];
  const sectionRe = /<section class="vrt-component" id="component-([^"]+)">\s*<h2 class="vrt-component-title">([^<]+)<\/h2>/g;

  let sectionMatch;
  const sections: { slug: string; name: string; start: number }[] = [];

  while ((sectionMatch = sectionRe.exec(html)) !== null) {
    sections.push({
      slug: sectionMatch[1],
      name: sectionMatch[2].trim(),
      start: sectionMatch.index,
    });
  }

  for (let i = 0; i < sections.length; i++) {
    const current = sections[i];
    const nextSection = sections[i + 1];
    const sectionEnd = nextSection ? nextSection.start : html.length;
    const sectionHtml = html.slice(current.start, sectionEnd);

    const examples: Example[] = [];
    const exampleRe = /<div class="vrt-example" id="([^"]+)">\s*<h3 class="vrt-example-title">([^<]+)<\/h3>\s*<div class="vrt-preview">/g;

    let exMatch;
    while ((exMatch = exampleRe.exec(sectionHtml)) !== null) {
      const { html: previewHtml, endIndex } = extractPreviewHtml(sectionHtml, exMatch.index);
      if (previewHtml) {
        examples.push({
          id: exMatch[1],
          title: exMatch[2].trim(),
          html: fixAssetPaths(previewHtml),
        });
      }
    }

    if (examples.length > 0) {
      components.push({
        id: current.slug,
        name: current.name,
        examples,
      });
    }
  }

  return components;
}

function escapeForMarkdown(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
}

function generateMarkdown(component: Component): string {
  const lines: string[] = [
    '---',
    `title: ${component.name}`,
    '---',
    '',
    `SLDS 1 blueprint examples for **${component.name}**.`,
    '',
  ];

  for (const ex of component.examples) {
    lines.push(`::: legacy-component-example title="${ex.title.replace(/"/g, '\\"')}"`);
    lines.push(ex.html);
    lines.push(':::');
    lines.push('');
  }

  return lines.join('\n');
}

function main() {
  console.log('Reading VRT file...');
  const vrtHtml = fs.readFileSync(VRT_PATH, 'utf-8');

  console.log('Extracting components...');
  const components = extractComponents(vrtHtml);
  console.log(`Found ${components.length} components`);

  fs.mkdirSync(LEGACY_COMPONENTS_DIR, { recursive: true });

  for (const comp of components) {
    const mdPath = path.join(LEGACY_COMPONENTS_DIR, `${comp.id}.md`);
    const md = generateMarkdown(comp);
    fs.writeFileSync(mdPath, md, 'utf-8');
    console.log(`  Wrote ${comp.name} (${comp.examples.length} examples) -> ${mdPath}`);
  }

  console.log(`\nDone. Generated ${components.length} markdown files.`);
  console.log(`Output directory: ${LEGACY_COMPONENTS_DIR}`);
}

main();
