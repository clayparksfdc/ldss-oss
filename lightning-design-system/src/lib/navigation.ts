/**
 * Navigation utilities
 *
 * All navigation is driven by content/navigation.md — a plain markdown list.
 * Edit that file to add, remove, reorder, or nest pages and categories.
 */

import {
  parseNavigationMarkdown,
  type NavCategory,
  type NavPage,
} from './parse-navigation-md';

export type { NavCategory, NavPage };

let _cached: NavCategory[] | null = null;

function load(): NavCategory[] {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev || !_cached) _cached = parseNavigationMarkdown();
  return _cached;
}

export function getNavigation(): NavCategory[] {
  return load();
}

export function getAllPages(): NavPage[] {
  return load().flatMap(c => c.children);
}

export function getAllCategories(): NavCategory[] {
  return load();
}

export function getPageBySlug(slug: string): NavPage | undefined {
  return getAllPages().find(p => p.slug === slug);
}

export function getPagesByCategory(category: string): NavPage[] {
  return getAllPages().filter(p => p.category === category);
}

export function getCategoryBySlug(slug: string): NavCategory | undefined {
  return load().find(c => c.slug === slug);
}

export function getBreadcrumbs(slug: string): { name: string; url: string }[] {
  const page = getPageBySlug(slug);
  if (!page) return [];

  const breadcrumbs: { name: string; url: string }[] = [];

  if (page.category) {
    const category = getCategoryBySlug(page.category);
    if (category) {
      breadcrumbs.push({ name: category.name, url: `/${category.slug}` });
    }
  }

  breadcrumbs.push({ name: page.name, url: page.url });
  return breadcrumbs;
}

export function getAdjacentPages(slug: string): {
  prev: NavPage | null;
  next: NavPage | null;
} {
  const page = getPageBySlug(slug);
  if (!page?.category) return { prev: null, next: null };

  const categoryPages = getPagesByCategory(page.category);
  const idx = categoryPages.findIndex(p => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };

  return {
    prev: idx > 0 ? categoryPages[idx - 1] : null,
    next: idx < categoryPages.length - 1 ? categoryPages[idx + 1] : null,
  };
}

/**
 * Given a slug (e.g. "accordion" or "accordion--usage"), return the parent
 * page and its tab list — all derived from navigation.md.
 *
 * The first tab (typically "Usage") links to the parent page URL so that
 * /component/accordion and /component/accordion--usage both resolve to the
 * same visual "Usage" tab.
 */
export function getTabContext(slug: string): {
  parent: NavPage;
  tabs: { name: string; url: string; active: boolean }[];
} | null {
  const parentSlug = slug.includes('--') ? slug.split('--')[0] : slug;
  const allPages = getAllPages();
  const parent = allPages.find(p => p.slug === parentSlug && p.tabs && p.tabs.length > 0);
  if (!parent) return null;

  const isOnParent = slug === parentSlug;

  const tabs = parent.tabs!.map((t, i) => {
    const isFirstTab = i === 0;
    const url = isFirstTab ? parent.url : t.url;
    const active = isFirstTab
      ? (isOnParent || t.slug === slug)
      : t.slug === slug;
    return { name: t.name, url, active };
  });

  return { parent, tabs };
}

export async function buildNavigation(): Promise<NavCategory[]> {
  return getNavigation();
}
