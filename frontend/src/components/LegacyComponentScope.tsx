'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SLDS_CSS_HREF = '/assets/sldsPlusTemplate.css';

/**
 * Scopes SLDS 1 CSS to only .legacy-component-example-preview elements using Shadow DOM.
 * Keeps headlines and code snippets unaffected. Applies white background for examples.
 */
export default function LegacyComponentScope() {
  const pathname = usePathname();
  const isLegacy = pathname?.startsWith('/legacy-slds1');

  useEffect(() => {
    if (!isLegacy) return;

    const previews = document.querySelectorAll('.legacy-component-example-preview');
    previews.forEach((el) => {
      if ((el as HTMLElement).dataset.scoped === 'true') return;

      const html = el.innerHTML;
      (el as HTMLElement).dataset.scoped = 'true';
      el.innerHTML = '';

      const shadow = el.attachShadow({ mode: 'open' });
      const wrapper = document.createElement('div');
      wrapper.style.background = '#fff';
      wrapper.style.padding = '1rem';
      wrapper.style.minHeight = '2rem';

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = SLDS_CSS_HREF;

      const content = document.createElement('div');
      content.innerHTML = html;

      shadow.appendChild(link);
      shadow.appendChild(wrapper);
      wrapper.appendChild(content);
    });
  }, [pathname, isLegacy]);

  return null;
}
