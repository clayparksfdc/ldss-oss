'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SLDS_HREF = '/assets/sldsPlusTemplate.css';

/**
 * Injects SLDS 1 stylesheet when viewing legacy-slds1 pages.
 * Keeps legacy component blueprint styles scoped to those routes only.
 */
export default function LegacySldsStylesheet() {
  const pathname = usePathname();
  const isLegacy = pathname?.startsWith('/legacy-slds1');

  useEffect(() => {
    if (!isLegacy) return;

    const existing = document.querySelector(`link[href="${SLDS_HREF}"]`);
    if (existing) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = SLDS_HREF;
    link.setAttribute('data-legacy-slds', 'true');
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [isLegacy]);

  return null;
}
