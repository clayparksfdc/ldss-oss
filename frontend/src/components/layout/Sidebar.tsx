"use client"

import { ChevronDown, ChevronRight, Search } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { NavCategory, NavPage } from "@/lib/navigation"

interface SearchResult {
  title: string
  slug: string
  category: string
  url: string
}

interface DynamicSidebarProps {
  navigation: NavCategory[]
}

export function DynamicSidebar({ navigation }: DynamicSidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Listen for toggle-sidebar event from Header hamburger
  useEffect(() => {
    const handler = () => setMobileOpen(prev => !prev)
    document.addEventListener('toggle-sidebar', handler)
    return () => document.removeEventListener('toggle-sidebar', handler)
  }, [])

  // Close mobile sidebar on navigation
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const getActiveParentSlug = () => {
    if (!pathname) return null
    const parts = pathname.split('/')
    const slug = parts[parts.length - 1]
    return slug?.includes('--') ? slug.split('--')[0] : slug
  }

  const getInitialExpanded = () => {
    const expanded = new Set<string>()
    for (const cat of navigation) {
      if (!cat.name) continue
      // Match against both the display-name-derived slug and the actual category slug from navigation data
      const nameSlug = cat.name.toLowerCase().replace(/\s+/g, '-')
      if (
        pathname?.startsWith(`/${nameSlug}/`) ||
        pathname?.startsWith(`/${cat.slug}/`)
      ) {
        expanded.add(cat.name)
      }
    }
    if (expanded.size === 0) expanded.add('Get Started')
    return [...expanded]
  }

  const [expandedItems, setExpandedItems] = useState<string[]>(getInitialExpanded)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)

    if (query.length < 2) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    searchTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/site-search?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        setSearchResults(data.results || [])
      } catch {
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }, 250)
  }, [])

  useEffect(() => {
    const newExpanded = [...expandedItems]
    let changed = false

    for (const cat of navigation) {
      if (!cat.name) continue
      const nameSlug = cat.name.toLowerCase().replace(/\s+/g, '-')
      if (
        (pathname?.startsWith(`/${nameSlug}/`) || pathname?.startsWith(`/${cat.slug}/`)) &&
        !newExpanded.includes(cat.name)
      ) {
        newExpanded.push(cat.name)
        changed = true
      }
    }

    if (changed) setExpandedItems(newExpanded)
  }, [pathname])

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  // Derive category names from the navigation data (order comes from CMS or JSON)
  const mainCategories = navigation
    .filter(c => !c.hidden)
    .map(c => c.name)

  const getPageUrl = (page: NavPage) =>
    `/${page.category?.toLowerCase().replace(/\s+/g, '-')}/${page.slug}`

  const isPageActive = (page: NavPage) => {
    const pageUrl = getPageUrl(page)
    if (pathname === pageUrl) return true
    // Also active if we're on a sub-tab of this page
    const activeParent = getActiveParentSlug()
    return activeParent === page.slug
  }

  const [expandedPages, setExpandedPages] = useState<string[]>(() => {
    if (!pathname) return []
    const slug = pathname.split('/').pop() || ''
    const parentSlug = slug.includes('--') ? slug.split('--')[0] : slug
    return [parentSlug]
  })

  const togglePageExpanded = (slug: string) => {
    setExpandedPages(prev =>
      prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    )
  }

  useEffect(() => {
    if (!pathname) return
    const slug = pathname.split('/').pop() || ''
    const parentSlug = slug.includes('--') ? slug.split('--')[0] : slug
    setExpandedPages(prev =>
      prev.includes(parentSlug) ? prev : [...prev, parentSlug]
    )
  }, [pathname])

  const renderPage = (page: NavPage) => {
    const isActive = isPageActive(page)
    const hasSidebarTabs = page.showTabsInSidebar && page.tabs && page.tabs.length > 0
    const isPageExpanded = expandedPages.includes(page.slug)

    if (hasSidebarTabs) {
      return (
        <div key={page.id}>
          <div className="flex items-center">
            <Link
              href={getPageUrl(page) as any}
              className="flex-1 block pl-4 pr-1 py-[6px] text-[13px] rounded-md transition-colors sidebar-page-link"
              style={{
                backgroundColor: isActive ? "var(--sidebar-active-bg)" : "transparent",
                color: isActive ? "var(--slds-blue)" : "var(--slds-gray-dark)",
                fontWeight: isActive ? 500 : 400,
              }}
              onClick={() => {
                if (!isPageExpanded) togglePageExpanded(page.slug)
              }}
            >
              <span className="truncate">{page.name}</span>
            </Link>
            <button
              onClick={() => togglePageExpanded(page.slug)}
              className="p-1 mr-1 rounded transition-colors flex-shrink-0 sidebar-chevron-btn"
              style={{ color: "var(--slds-gray-text)" }}
            >
              {isPageExpanded ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
          {isPageExpanded && (
            <div className="ml-3 mt-0.5 space-y-0">
              {page.tabs!.map((tab) => {
                const tabActive = pathname === tab.url ||
                  pathname === `/${page.category}/${tab.slug}`
                return (
                  <Link
                    key={tab.slug}
                    href={tab.url as any}
                    className="block pl-4 pr-3 py-[5px] text-[12px] rounded-md transition-colors sidebar-tab-link"
                    style={{
                      color: tabActive ? "var(--slds-blue)" : "var(--slds-gray-text)",
                      fontWeight: tabActive ? 500 : 400,
                    }}
                  >
                    {tab.name}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )
    }

    return (
      <div key={page.id}>
        <Link
          href={getPageUrl(page) as any}
          className="block pl-4 pr-3 py-[6px] text-[13px] rounded-md transition-colors sidebar-page-link"
          style={{
            backgroundColor: isActive ? "var(--sidebar-active-bg)" : "transparent",
            color: isActive ? "var(--slds-blue)" : "var(--slds-gray-dark)",
            fontWeight: isActive ? 500 : 400,
          }}
        >
          <span className="truncate">{page.name}</span>
        </Link>
      </div>
    )
  }

  const renderCategory = (categoryName: string) => {
    const category = navigation.find(c => c.name === categoryName)
    if (!category || category.hidden) return null

    const isExpanded = expandedItems.includes(category.name)
    const hasPages = category.children && category.children.length > 0
    const visibleChildren = category.children?.filter(p => !p.hidden) || []
    const hasActivePage = visibleChildren.some(p => isPageActive(p))

    // Find the landing page for this category (same name as category)
    const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-')
    // Check ALL children (including hidden) for a page with the same slug as the category
    // The landing page may be hidden from sidebar list but still serves as the category link target
    const allChildren = category.children || []
    const landingPage = allChildren.find(p => p.slug === categorySlug)
    const landingUrl = landingPage
      ? `/${categorySlug}/${landingPage.slug}`
      : null

    // Check if the category landing page itself is active
    const isCategoryActive = landingPage
      ? (isPageActive(landingPage) || pathname === `/${categorySlug}/${categorySlug}`)
      : false

    // Filter out the same-named landing page from child list (category header links to it)
    const filteredChildren = landingPage
      ? visibleChildren.filter(p => p.slug !== categorySlug)
      : visibleChildren

    return (
      <div key={category.id} className="mb-0.5">
        <div className="flex items-center">
          {landingUrl ? (
            <Link
              href={landingUrl as any}
              className="flex-1 flex items-center px-3 py-[7px] text-[13px] font-semibold rounded-md transition-colors sidebar-cat-link"
              style={{
                color: "var(--slds-navy)",
                boxShadow: isCategoryActive ? "0 0 0 2px var(--slds-blue)" : "none",
              }}
              onClick={() => {
                if (!isExpanded) toggleExpanded(category.name)
              }}
            >
              <span className="flex-1 text-left">{category.name}</span>
            </Link>
          ) : (
            <button
              className="flex-1 flex items-center px-3 py-[7px] text-[13px] font-semibold rounded-md transition-colors sidebar-cat-link"
              style={{ color: "var(--slds-navy)" }}
              onClick={() => toggleExpanded(category.name)}
            >
              <span className="flex-1 text-left">{category.name}</span>
            </button>
          )}
          {hasPages && (
            <button
              onClick={() => toggleExpanded(category.name)}
              className="p-1 mr-1 rounded transition-colors sidebar-chevron-btn"
              style={{ color: "var(--slds-gray-text)" }}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        {hasPages && isExpanded && (
          <div className="mt-0.5 ml-1 space-y-0">
            {filteredChildren.map(page => renderPage(page))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`
          w-[260px] border-r flex flex-col flex-shrink-0 h-screen sticky top-0
          max-lg:fixed max-lg:z-50 max-lg:top-0 max-lg:left-0 max-lg:h-full
          max-lg:transition-transform max-lg:duration-200
          ${mobileOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}
        `}
        style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
      >
      <div className="px-5 pt-5 pb-3">
        <Link href="/" className="block mb-5">
          <img
            src="/assets/slds-logo.png"
            alt="Lightning Design System"
            className="h-[52px] w-auto"
          />
        </Link>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "var(--slds-gray-text)" }} />
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
            style={{
              backgroundColor: "var(--surface-raised)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--border-strong)",
              color: "var(--foreground)",
            }}
          />
        </div>
      </div>

      {/* Search Results or Navigation */}
      {searchQuery.length >= 2 ? (
        <div className="flex-1 overflow-y-auto px-2 pb-6 pt-2">
          {isSearching ? (
            <div className="px-3 py-4 text-sm" style={{ color: "var(--slds-gray-text)" }}>Searching...</div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-0.5">
              <div className="px-3 py-1 text-xs font-medium" style={{ color: "var(--slds-gray-text)" }}>
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              </div>
              {searchResults.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.url as any}
                  onClick={() => { setSearchQuery(''); setSearchResults([]) }}
                  className="block pl-4 pr-3 py-[6px] text-[13px] rounded-md transition-colors sidebar-page-link"
                  style={{
                    backgroundColor: pathname === result.url ? "var(--sidebar-active-bg)" : "transparent",
                    color: pathname === result.url ? "var(--slds-blue)" : "var(--slds-gray-dark)",
                    fontWeight: pathname === result.url ? 500 : 400,
                  }}
                >
                  <span className="block truncate">{result.title}</span>
                  {result.category && (
                    <span className="block text-[11px] mt-0.5 truncate" style={{ color: "var(--slds-gray-text)" }}>
                      {result.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-3 py-4 text-sm" style={{ color: "var(--slds-gray-text)" }}>No results found</div>
          )}
        </div>
      ) : (
        <nav className="flex-1 overflow-y-auto px-2 pb-6 pt-2">
          {mainCategories.map(categoryName => renderCategory(categoryName))}
        </nav>
      )}
    </aside>
    </>
  )
}
