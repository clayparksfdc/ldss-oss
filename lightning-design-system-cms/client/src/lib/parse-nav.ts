export interface NavTab {
  id: string;
  name: string;
  url: string;
}

export interface NavPage {
  id: string;
  name: string;
  url: string;
  tabs: NavTab[];
  showTabsInSidebar?: boolean;
}

export interface NavCategory {
  id: string;
  name: string;
  pages: NavPage[];
  collapsed?: boolean;
}

export interface NavTree {
  categories: NavCategory[];
}

let _nextId = 1;
function genId(): string {
  return `nav_${_nextId++}`;
}

export function parseNavigationMd(markdown: string): NavTree {
  _nextId = 1;
  const lines = markdown.split('\n');
  const categories: NavCategory[] = [];
  let currentCategory: NavCategory | null = null;
  let currentPage: NavPage | null = null;

  for (const line of lines) {
    if (line.startsWith('#') || line.trim() === '') continue;

    const stripped = line.replace(/^(\s*)- /, '$1');
    const indent = line.match(/^(\s*)/)?.[1]?.length ?? 0;
    const linkMatch = stripped.trim().match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (indent === 0) {
      const name = linkMatch ? linkMatch[1] : stripped.trim().replace(/^- /, '');
      currentCategory = { id: genId(), name, pages: [] };
      currentPage = null;
      categories.push(currentCategory);
    } else if (indent <= 2 && currentCategory) {
      const hasSidebarFlag = /\{sidebar\}/.test(stripped);
      const cleanStripped = stripped.replace(/\s*\{sidebar\}\s*/, '').trim();
      const cleanLinkMatch = cleanStripped.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (cleanLinkMatch) {
        currentPage = { id: genId(), name: cleanLinkMatch[1], url: cleanLinkMatch[2], tabs: [], showTabsInSidebar: hasSidebarFlag || undefined };
        currentCategory.pages.push(currentPage);
      } else {
        const name = cleanStripped.replace(/^- /, '');
        currentPage = { id: genId(), name, url: '', tabs: [] };
        currentCategory.pages.push(currentPage);
      }
    } else if (indent >= 4 && currentPage) {
      if (linkMatch) {
        currentPage.tabs.push({ id: genId(), name: linkMatch[1], url: linkMatch[2] });
      }
    }
  }

  return { categories };
}

export function serializeNavigationMd(tree: NavTree): string {
  let lines: string[] = ['# Navigation', ''];

  for (const cat of tree.categories) {
    lines.push(`- ${cat.name}`);
    for (const page of cat.pages) {
      const sidebarSuffix = page.showTabsInSidebar ? ' {sidebar}' : '';
      if (page.url) {
        lines.push(`  - [${page.name}](${page.url})${sidebarSuffix}`);
      } else {
        lines.push(`  - ${page.name}`);
      }
      for (const tab of page.tabs) {
        lines.push(`    - [${tab.name}](${tab.url})`);
      }
    }
  }

  return lines.join('\n') + '\n';
}
