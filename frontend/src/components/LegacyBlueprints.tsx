'use client';

import { useEffect, useState, useRef } from 'react';

const THEME_CSS = {
  'lightning-blue': '/assets/styles/salesforce-lightning-design-system.css',
  cosmos: '/assets/sldsPlusTemplate.css',
} as const;

export function LegacyBlueprints() {
  const [content, setContent] = useState<{ html: string; css: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'lightning-blue' | 'cosmos'>('lightning-blue');
  const themeLinkRef = useRef<HTMLLinkElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/assets/vrt-all-components.html')
      .then(r => r.text())
      .then(htmlText => {
        if (cancelled) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // Extract styles and scope body to our wrapper
        const styleEl = doc.querySelector('style');
        let css = styleEl?.textContent || '';
        css = css.replace(/\bbody\s*{/g, '.vrt-viewer-wrapper {');

        // Extract content: skip app-header and script, take the rest
        const body = doc.body;
        const fragments: string[] = [];
        for (const child of body.children) {
          const tag = child.tagName.toLowerCase();
          if (tag === 'header' && child.classList.contains('app-header')) continue;
          if (tag === 'script') continue;
          fragments.push(child.outerHTML);
        }
        const html = fragments.join('\n');
        setContent({ html, css });
      })
      .catch(() => {
        if (!cancelled) setError('Failed to load blueprints.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  // Inject theme CSS link into document head
  useEffect(() => {
    if (themeLinkRef.current) {
      themeLinkRef.current.href = THEME_CSS[theme];
      return;
    }
    const link = document.createElement('link');
    link.id = 'vrt-theme-css';
    link.rel = 'stylesheet';
    link.href = THEME_CSS[theme];
    document.head.appendChild(link);
    themeLinkRef.current = link;
    return () => {
      link.remove();
      themeLinkRef.current = null;
    };
  }, [theme]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-[var(--slds-gray-text)]">
        <div className="w-10 h-10 border-2 border-[var(--slds-gray-border)] border-t-[var(--slds-blue)] rounded-full animate-spin mb-4" />
        <div>Loading component blueprints...</div>
      </div>
    );
  }
  if (error) {
    return <div className="py-24 text-center text-red-600">{error}</div>;
  }
  if (!content) return null;

  return (
    <div className="vrt-legacy-page w-full" style={{ margin: '0 -1rem', width: 'calc(100% + 2rem)' }}>
      {/* Theme switcher bar - matches VRT header style */}
      <div
        className="flex items-center justify-between px-6 h-16 border-b"
        style={{
          background: 'var(--slds-g-color-brand-base-40, #0b5cab)',
          color: 'white',
          borderColor: 'rgba(255,255,255,0.1)',
        }}
      >
        <h2 className="text-lg font-semibold m-0">Legacy Component Blueprints</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold opacity-70">Theme:</span>
          <button
            type="button"
            onClick={() => setTheme('lightning-blue')}
            className="px-3.5 py-1.5 rounded border-2 text-sm font-semibold transition-all"
            style={{
              borderColor: theme === 'lightning-blue' ? 'white' : 'rgba(255,255,255,0.3)',
              background: theme === 'lightning-blue' ? 'rgba(255,255,255,0.15)' : 'transparent',
              color: 'white',
            }}
          >
            Lightning Blue
          </button>
          <button
            type="button"
            onClick={() => setTheme('cosmos')}
            className="px-3.5 py-1.5 rounded border-2 text-sm font-semibold transition-all"
            style={{
              borderColor: theme === 'cosmos' ? 'white' : 'rgba(255,255,255,0.3)',
              background: theme === 'cosmos' ? 'rgba(255,255,255,0.15)' : 'transparent',
              color: 'white',
            }}
          >
            Cosmos
          </button>
        </div>
      </div>

      {/* VRT content with extracted styles */}
      <div className="vrt-viewer-wrapper" style={{ background: 'var(--slds-g-color-neutral-base-95, #f3f3f3)', fontFamily: "'Salesforce Sans', Arial, sans-serif" }}>
        <style dangerouslySetInnerHTML={{ __html: content.css }} />
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </div>
    </div>
  );
}
