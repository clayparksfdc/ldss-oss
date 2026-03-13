'use client';

import { useEffect } from 'react';

function isSiteDark(): boolean {
  return document.documentElement.classList.contains('dark');
}

function applyTheme(embed: HTMLElement, theme: 'light' | 'dark') {
  const btn = embed.querySelector('.storybook-theme-toggle') as HTMLElement | null;
  const iframe = embed.querySelector('iframe') as HTMLIFrameElement | null;
  if (!btn || !iframe) return;

  btn.setAttribute('data-theme', theme);

  const lightIcon = btn.querySelector('.storybook-theme-icon-light') as HTMLElement;
  const darkIcon = btn.querySelector('.storybook-theme-icon-dark') as HTMLElement;
  if (lightIcon) lightIcon.style.display = theme === 'light' ? '' : 'none';
  if (darkIcon) darkIcon.style.display = theme === 'dark' ? '' : 'none';

  embed.setAttribute('data-sb-dark', theme === 'dark' ? 'true' : 'false');

  const baseUrl = embed.getAttribute('data-storybook-url') || '';
  if (!baseUrl) return;

  const sep = baseUrl.includes('?') ? '&' : '?';
  const targetSrc = theme === 'dark'
    ? `${baseUrl}${sep}globals=theme:dark;backgrounds.value:!hex(333333)`
    : baseUrl;

  if (iframe.src !== targetSrc) {
    iframe.src = targetSrc;
  }
}

/**
 * Syncs all Storybook embeds to the site's color mode on mount and when the
 * site theme changes. Each embed can still be individually toggled.
 */
export default function StorybookThemeToggle() {
  useEffect(() => {
    function syncAllToSiteTheme() {
      const theme = isSiteDark() ? 'dark' : 'light';
      document.querySelectorAll<HTMLElement>('.storybook-embed').forEach(embed => {
        applyTheme(embed, theme);
      });
    }

    // Sync on first render
    syncAllToSiteTheme();

    // Watch for site theme changes (the ThemeProvider toggles classes on <html>)
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          syncAllToSiteTheme();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Per-embed manual toggle
    function handleClick(e: Event) {
      const btn = (e.target as HTMLElement).closest('.storybook-theme-toggle') as HTMLElement | null;
      if (!btn) return;

      const embed = btn.closest('.storybook-embed') as HTMLElement | null;
      if (!embed) return;

      const current = btn.getAttribute('data-theme') || 'light';
      applyTheme(embed, current === 'light' ? 'dark' : 'light');
    }

    document.addEventListener('click', handleClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
