'use client';

import { useState, useCallback, useEffect } from 'react';

interface ComponentDemoProps {
  storybook?: string;
  title?: string;
  height?: string;
}

export default function ComponentDemo({
  storybook,
  title = 'Component Demo',
  height = '400',
}: ComponentDemoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const iframeSrc = useCallback(() => {
    if (!storybook) return '';
    if (!isDark) return storybook;
    const sep = storybook.includes('?') ? '&' : '?';
    return `${storybook}${sep}globals=theme:dark;backgrounds.value:!hex(333333)`;
  }, [storybook, isDark]);

  return (
    <div className="component-demo border border-slds-gray-300 rounded-lg overflow-hidden mb-6">
      <div className="bg-slds-gray-50 border-b border-slds-gray-300 px-4 py-2 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slds-gray-900">{title}</h4>
        {storybook && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setIsDark(!isDark); setIsLoading(true); }}
              className="storybook-theme-toggle"
              data-theme={isDark ? 'dark' : 'light'}
              title="Toggle light/dark mode"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
            <a
              href={storybook}
              target="_blank"
              rel="noopener noreferrer"
              className="storybook-open-link"
              title="Open in new tab"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        )}
      </div>
      <div className="relative" style={{ height: `${height}px`, background: isDark ? '#333' : 'white' }}>
        {storybook ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slds-gray-50">
                <div className="text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-slds-blue-600 border-r-transparent"></div>
                  <p className="mt-2 text-sm text-slds-gray-600">Loading demo...</p>
                </div>
              </div>
            )}
            <iframe
              src={iframeSrc()}
              className="w-full h-full border-0"
              title={title}
              onLoad={() => setIsLoading(false)}
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-slds-gray-500">
              <svg className="mx-auto h-12 w-12 text-slds-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-sm">No demo URL provided</p>
            </div>
          </div>
        )}
      </div>
      {storybook && (
        <div className="bg-slds-gray-50 border-t border-slds-gray-300 px-4 py-2 flex items-center justify-between">
          <a
            href={storybook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slds-blue-600 hover:text-slds-blue-800 inline-flex items-center gap-1"
          >
            Open in new window
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-xs" style={{ color: isDark ? '#f0c54d' : '#706E6B' }}>
            {isDark ? '🌙 Dark' : '☀️ Light'}
          </span>
        </div>
      )}
    </div>
  );
}
