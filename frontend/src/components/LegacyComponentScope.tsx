'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SLDS_CSS_HREF = '/assets/sldsTemplate.css';

const RESET_CSS = `:host { all: initial; display: block; }`;

let _sheetsPromise: Promise<CSSStyleSheet[]> | null = null;

function getSLDSSheets(): Promise<CSSStyleSheet[]> {
  if (!_sheetsPromise) {
    _sheetsPromise = (async () => {
      const resetSheet = new CSSStyleSheet();
      await resetSheet.replace(RESET_CSS);

      try {
        const res = await fetch(SLDS_CSS_HREF);
        if (!res.ok) return [resetSheet];
        const css = await res.text();
        const sldsSheet = new CSSStyleSheet();
        await sldsSheet.replace(css);
        return [resetSheet, sldsSheet];
      } catch {
        return [resetSheet];
      }
    })();
  }
  return _sheetsPromise;
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

    getSLDSSheets().then((sheets) => {
      previews.forEach((el) => {
        if ((el as HTMLElement).dataset.scoped === 'true') return;

        const html = el.innerHTML;
        (el as HTMLElement).dataset.scoped = 'true';
        el.innerHTML = '';

        const shadow = el.attachShadow({ mode: 'open' });
        shadow.adoptedStyleSheets = sheets;

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
