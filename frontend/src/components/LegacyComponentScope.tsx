'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SLDS_CSS_HREF = '/assets/sldsTemplate.css';

let _sheetPromise: Promise<CSSStyleSheet | null> | null = null;

function getSLDSSheet(): Promise<CSSStyleSheet | null> {
  if (!_sheetPromise) {
    _sheetPromise = fetch(SLDS_CSS_HREF)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((css) => {
        const sheet = new CSSStyleSheet();
        return sheet.replace(css);
      })
      .catch(() => null);
  }
  return _sheetPromise;
}

/**
 * Scopes SLDS 1 CSS to .legacy-component-example-preview elements via Shadow DOM.
 * Uses fetch + adoptedStyleSheets (Constructable Stylesheets) so the CSS
 * reliably applies inside the shadow root, unlike <link> which can silently fail.
 */
export default function LegacyComponentScope() {
  const pathname = usePathname();
  const isLegacy = pathname?.startsWith('/legacy-slds1');

  useEffect(() => {
    if (!isLegacy) return;

    const previews = document.querySelectorAll('.legacy-component-example-preview');
    if (previews.length === 0) return;

    getSLDSSheet().then((sheet) => {
      previews.forEach((el) => {
        if ((el as HTMLElement).dataset.scoped === 'true') return;

        const html = el.innerHTML;
        (el as HTMLElement).dataset.scoped = 'true';
        el.innerHTML = '';

        const shadow = el.attachShadow({ mode: 'open' });

        if (sheet) {
          shadow.adoptedStyleSheets = [sheet];
        }

        const wrapper = document.createElement('div');
        wrapper.style.background = '#fff';
        wrapper.style.padding = '1rem';
        wrapper.style.minHeight = '2rem';

        const content = document.createElement('div');
        content.innerHTML = html;

        shadow.appendChild(wrapper);
        wrapper.appendChild(content);
      });
    });
  }, [pathname, isLegacy]);

  return null;
}
