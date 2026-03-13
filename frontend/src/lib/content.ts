import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { processMarkdown } from './markdown';

const contentDirectory = process.env.CONTENT_DIR || path.resolve(process.cwd(), '..', 'content');

export interface ContentMetadata {
  title: string;
  description?: string;
  category?: string;
  order?: number;
  slug: string;
  [key: string]: any;
}

export interface ContentFile {
  metadata: ContentMetadata;
  content: string;
  html: string;
  rawMarkdown: string;
}

/**
 * Get all content files recursively from the content directory
 */
export function getAllContentFiles(dir: string = contentDirectory): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files: string[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllContentFiles(fullPath));
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Get content by file path
 */
export async function getContentByPath(filePath: string): Promise<ContentFile | null> {
  const fullPath = path.join(contentDirectory, filePath);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const html = await processMarkdown(content);

  const relativePath = path.relative(contentDirectory, fullPath);
  const slug = relativePath
    .replace(/\.mdx?$/, '')
    .replace(/\\/g, '/');

  return {
    metadata: {
      ...data,
      slug,
      title: data.title || 'Untitled',
    } as ContentMetadata,
    content,
    html,
    rawMarkdown: fileContents,
  };
}

/**
 * Get content by slug (category/slug format)
 */
export async function getContentBySlug(category: string, slug?: string[]): Promise<ContentFile | null> {
  const slugPath = slug ? slug.join('/') : 'index';
  const filePath = `${category}/${slugPath}.md`;

  let content = await getContentByPath(filePath);

  if (!content) {
    const mdxPath = `${category}/${slugPath}.mdx`;
    content = await getContentByPath(mdxPath);
  }

  // Fall back: search other category directories for the same slug
  if (!content && slugPath !== 'index') {
    const dirs = fs.readdirSync(contentDirectory, { withFileTypes: true })
      .filter(d => d.isDirectory() && d.name !== category)
      .map(d => d.name);
    for (const dir of dirs) {
      content = await getContentByPath(`${dir}/${slugPath}.md`);
      if (content) break;
      content = await getContentByPath(`${dir}/${slugPath}.mdx`);
      if (content) break;
    }
  }

  return content;
}

/**
 * Get all content files with their metadata
 */
export async function getAllContent(): Promise<ContentFile[]> {
  const files = getAllContentFiles();
  const contentPromises = files.map(async (filePath) => {
    const relativePath = path.relative(contentDirectory, filePath);
    return getContentByPath(relativePath);
  });

  const results = await Promise.all(contentPromises);
  return results.filter((item): item is ContentFile => item !== null);
}

/**
 * Get content by category
 */
export async function getContentByCategory(category: string): Promise<ContentFile[]> {
  const allContent = await getAllContent();
  return allContent
    .filter((item) => item.metadata.category === category || item.metadata.slug.startsWith(`${category}/`))
    .sort((a, b) => (a.metadata.order || 999) - (b.metadata.order || 999));
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allContent = await getAllContent();
  const categories = new Set<string>();

  for (const item of allContent) {
    if (item.metadata.category) {
      categories.add(item.metadata.category);
    } else {
      // Extract category from slug
      const parts = item.metadata.slug.split('/');
      if (parts.length > 1) {
        categories.add(parts[0]);
      }
    }
  }

  return Array.from(categories).sort();
}
