import { notFound } from 'next/navigation';
import { getContentBySlug } from '@/lib/content';
import { getCategoryBySlug, getPagesByCategory, getTabContext } from '@/lib/navigation';
import { TabBar } from '@/components/layout/TabBar';
import { ViewMarkdownButton } from '@/components/ViewMarkdownButton';
import Link from 'next/link';

interface ContentPageProps {
  params: Promise<{
    category: string;
    slug?: string[];
  }>;
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { category, slug } = await params;
  let content = await getContentBySlug(category, slug);

  if (!content) {
    notFound();
  }

  const slugPath = slug ? slug.join('/') : category;
  const cat = getCategoryBySlug(category);
  const categoryPages = getPagesByCategory(category);
  const currentIndex = categoryPages.findIndex(p => p.slug === slugPath);

  const prev = currentIndex > 0 ? categoryPages[currentIndex - 1] : null;
  const next = currentIndex < categoryPages.length - 1 ? categoryPages[currentIndex + 1] : null;

  const tabCtx = getTabContext(slugPath);

  // When the base page is empty and has tabs, load the first tab's content
  if (tabCtx && !content.html.trim() && tabCtx.tabs.length > 0) {
    const firstTab = tabCtx.parent.tabs?.[0];
    if (firstTab) {
      const tabCat = firstTab.url.replace(/^\//, '').split('/')[0];
      const tabSlug = firstTab.url.replace(/^\//, '').split('/').slice(1);
      const tabContent = await getContentBySlug(tabCat, tabSlug);
      if (tabContent && tabContent.html.trim()) {
        content = tabContent;
      }
    }
  }

  const displayTitle = tabCtx ? tabCtx.parent.name : content.metadata.title;
  const displayDescription = tabCtx
    ? (slugPath === tabCtx.parent.slug ? content.metadata.description : undefined)
    : content.metadata.description;

  const breadcrumbTitle = tabCtx ? tabCtx.parent.name : content.metadata.title;
  const parentCat = tabCtx?.parent.category
    ? getCategoryBySlug(tabCtx.parent.category)
    : cat;
  const breadcrumbs = [
    ...(parentCat ? [{ name: parentCat.name, url: `/${parentCat.slug}` }] : []),
    { name: breadcrumbTitle, url: tabCtx ? tabCtx.parent.url : `/${category}/${slugPath}` },
  ];

  return (
    <div className="max-w-4xl">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={`${crumb.url}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="h-4 w-4"
                  style={{ color: "var(--slds-gray-text)" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span style={{ color: "var(--slds-gray-text)" }}>{crumb.name}</span>
              ) : (
                <Link
                  href={crumb.url as any}
                  style={{ color: "var(--slds-blue)" }}
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Page Header */}
      <header className={tabCtx ? 'mb-4' : 'mb-8'}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--slds-navy)" }}>
          {displayTitle}
        </h1>
        {displayDescription && (
          <p className="text-lg" style={{ color: "var(--slds-gray-text)" }}>
            {displayDescription}
          </p>
        )}
      </header>

      {/* Tab Bar — driven by navigation.md */}
      {tabCtx && <TabBar tabs={tabCtx.tabs} />}

      {/* Main Content */}
      <article
        className="content-blocks mb-12"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />

      {/* View Markdown */}
      <ViewMarkdownButton markdown={content.rawMarkdown} />

      {/* Navigation */}
      {(prev || next) && (
        <nav className="flex items-center justify-between border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <div className="flex-1">
            {prev && (
              <Link
                href={`/${category}/${prev.slug}` as any}
                className="group block p-4 rounded-lg border hover:shadow-md transition-all"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-xs mb-1" style={{ color: "var(--slds-gray-text)" }}>Previous</div>
                <div className="font-medium" style={{ color: "var(--slds-blue)" }}>
                  {prev.name}
                </div>
              </Link>
            )}
          </div>
          <div className="flex-1 text-right">
            {next && (
              <Link
                href={`/${category}/${next.slug}` as any}
                className="group inline-block p-4 rounded-lg border hover:shadow-md transition-all"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-xs mb-1" style={{ color: "var(--slds-gray-text)" }}>Next</div>
                <div className="font-medium" style={{ color: "var(--slds-blue)" }}>
                  {next.name}
                </div>
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const { parseNavigationMarkdown } = await import('@/lib/parse-navigation-md');
  const { getAllContentFiles } = await import('@/lib/content');
  const pathMod = await import('path');

  const params: { category: string; slug?: string[] }[] = [];
  const seen = new Set<string>();

  const nav = parseNavigationMarkdown();
  for (const cat of nav) {
    for (const page of cat.children) {
      const url = page.url.replace(/^\//, '');
      const parts = url.split('/');
      const category = parts[0];
      const slug = parts.length > 1 ? parts.slice(1) : undefined;
      const key = `${category}/${slug ? slug.join('/') : ''}`;
      if (!seen.has(key)) {
        seen.add(key);
        params.push({ category, slug });
      }
      if (page.tabs) {
        for (const tab of page.tabs) {
          const tabUrl = tab.url.replace(/^\//, '');
          const tabParts = tabUrl.split('/');
          const tabCat = tabParts[0];
          const tabSlug = tabParts.length > 1 ? tabParts.slice(1) : undefined;
          const tabKey = `${tabCat}/${tabSlug ? tabSlug.join('/') : ''}`;
          if (!seen.has(tabKey)) {
            seen.add(tabKey);
            params.push({ category: tabCat, slug: tabSlug });
          }
        }
      }
    }
  }

  const contentDir = process.env.CONTENT_DIR || pathMod.resolve(process.cwd(), '..', 'content');
  const files = getAllContentFiles(contentDir);
  for (const file of files) {
    const rel = pathMod.relative(contentDir, file).replace(/\.mdx?$/, '').replace(/\\/g, '/');
    if (rel === 'home' || rel === 'navigation') continue;
    const parts = rel.split('/');
    const category = parts[0];
    const slug = parts.length > 1 ? parts.slice(1) : undefined;
    const key = `${category}/${slug ? slug.join('/') : ''}`;
    if (!seen.has(key)) {
      seen.add(key);
      params.push({ category, slug });
    }
  }

  return params;
}
