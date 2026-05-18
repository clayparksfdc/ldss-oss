#!/usr/bin/env node
/**
 * Builds a static JSON search index from all markdown content files.
 * Output: public/search-index.json
 *
 * Each entry includes title, category, url, and a plaintext snippet
 * of the markdown body (HTML tags and frontmatter stripped).
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(__dirname, '..', '..', 'content');
const outPath = path.resolve(__dirname, '..', 'public', 'search-index.json');

function getAllMdFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(full));
    } else if (entry.name.endsWith('.md') && entry.name !== 'navigation.md') {
      results.push(full);
    }
  }
  return results;
}

function stripMarkdown(md) {
  return md
    .replace(/^---[\s\S]*?---/m, '')        // frontmatter
    .replace(/<[^>]+>/g, ' ')               // HTML tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')   // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → text
    .replace(/```[\s\S]*?```/g, '')         // code blocks
    .replace(/`[^`]*`/g, '')               // inline code
    .replace(/#{1,6}\s/g, '')              // headings
    .replace(/[*_~>|]/g, '')               // formatting chars
    .replace(/:::[^\n]*\n/g, '')           // directives
    .replace(/\s+/g, ' ')
    .trim();
}

const files = getAllMdFiles(contentDir);
const index = [];

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const rel = path.relative(contentDir, file).replace(/\\/g, '/');
  const parts = rel.replace(/\.mdx?$/, '').split('/');

  if (parts.length < 2) continue;

  const category = parts[0];
  const slug = parts.slice(1).join('/');
  const title = data.title || slug.split('--').map(s =>
    s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  ).join(' — ');
  const url = `/${category}/${slug}`;
  const body = stripMarkdown(content).slice(0, 500);

  index.push({ title, category, url, body });
}

index.sort((a, b) => a.title.localeCompare(b.title));

fs.writeFileSync(outPath, JSON.stringify(index));
console.log(`Search index: ${index.length} entries → ${outPath}`);
