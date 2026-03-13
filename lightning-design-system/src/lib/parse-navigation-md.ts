import fs from 'fs';
import path from 'path';

export interface NavTab {
  name: string;
  slug: string;
  url: string;
}

export interface NavPage {
  id: number;
  name: string;
  slug: string;
  url: string;
  category?: string;
  tabs?: NavTab[];
  hidden: boolean;
  showTabsInSidebar?: boolean;
}

export interface NavCategory {
  id: number;
  name: string;
  slug: string;
  hidden: boolean;
  children: NavPage[];
}

const LINK_RE = /^\[(.+?)\]\((.+?)\)$/;

function parseLink(text: string): { name: string; url: string } | null {
  const m = text.match(LINK_RE);
  if (!m) return null;
  return { name: m[1], url: m[2] };
}

function slugFromUrl(url: string): string {
  const parts = url.replace(/^\//, '').split('/');
  return parts[parts.length - 1];
}

function categoryFromUrl(url: string): string {
  const parts = url.replace(/^\//, '').split('/');
  return parts[0];
}

/**
 * Parse a navigation markdown file into NavCategory[].
 *
 * Format:
 *   - Category Name           (level 0 — plain text = category header)
 *     - [Page Name](/cat/slug)  (level 1 — link = page)
 *       - [Tab Name](/cat/slug--tab) (level 2 — link = sub-tab of parent page)
 */
export function parseNavigationMarkdown(filePath?: string): NavCategory[] {
  const mdPath = filePath ?? path.join(process.env.CONTENT_DIR || path.resolve(process.cwd(), '..', 'content'), 'navigation.md');
  const raw = fs.readFileSync(mdPath, 'utf-8');
  const lines = raw.split('\n');

  const categories: NavCategory[] = [];
  let catId = 0;
  let pageId = 0;

  let currentCategory: NavCategory | null = null;
  let currentPage: NavPage | null = null;

  for (const line of lines) {
    if (!line.trim() || line.startsWith('#')) continue;

    const stripped = line.replace(/\t/g, '  ');
    const indent = stripped.length - stripped.trimStart().length;
    const content = stripped.trim().replace(/^-\s*/, '');

    if (indent < 2) {
      // Level 0 — category header
      const link = parseLink(content);
      currentCategory = {
        id: ++catId,
        name: link ? link.name : content,
        slug: link ? categoryFromUrl(link.url) : content.toLowerCase().replace(/\s+/g, '-'),
        hidden: false,
        children: [],
      };
      categories.push(currentCategory);
      currentPage = null;
    } else if (indent < 4) {
      // Level 1 — page entry
      // Check for {sidebar} flag which means sub-tabs should appear in the sidebar
      const hasSidebarFlag = /\{sidebar\}/.test(content);
      const cleanContent = content.replace(/\s*\{sidebar\}\s*/, '');
      const link = parseLink(cleanContent);
      if (!link || !currentCategory) continue;

      const pageCat = categoryFromUrl(link.url);

      // First child determines the category slug when it was
      // initially derived from the display name.
      if (
        currentCategory.children.length === 0 &&
        currentCategory.slug !== pageCat
      ) {
        currentCategory.slug = pageCat;
      }

      currentPage = {
        id: ++pageId,
        name: link.name,
        slug: slugFromUrl(link.url),
        url: link.url,
        category: pageCat,
        hidden: false,
        showTabsInSidebar: hasSidebarFlag || undefined,
      };
      currentCategory.children.push(currentPage);
    } else {
      // Level 2+ — sub-tab on current page
      const link = parseLink(content);
      if (!link || !currentPage) continue;

      if (!currentPage.tabs) currentPage.tabs = [];
      currentPage.tabs.push({
        name: link.name,
        slug: slugFromUrl(link.url),
        url: link.url,
      });
    }
  }

  return categories;
}
