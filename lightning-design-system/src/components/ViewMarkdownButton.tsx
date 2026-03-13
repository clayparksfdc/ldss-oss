'use client';

import { useState, useCallback } from 'react';

interface ViewMarkdownButtonProps {
  markdown: string;
}

export function ViewMarkdownButton({ markdown }: ViewMarkdownButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [markdown]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="View page markdown"
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full border shadow-md flex items-center justify-center opacity-40 hover:opacity-100 hover:shadow-lg transition-all cursor-pointer"
        style={{ backgroundColor: "var(--surface-raised)", borderColor: "var(--border)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--slds-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="rounded-xl shadow-2xl w-[90vw] max-w-3xl max-h-[80vh] flex flex-col"
            style={{ backgroundColor: "var(--surface-raised)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="text-sm font-semibold" style={{ color: "var(--slds-navy)" }}>Page Markdown Source</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-medium rounded-md text-white transition-colors cursor-pointer"
                  style={{ backgroundColor: "var(--slds-blue)" }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer sidebar-chevron-btn"
                  style={{ color: "var(--foreground)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-5">
              <pre className="text-[13px] leading-relaxed font-mono whitespace-pre-wrap break-words" style={{ color: "var(--slds-gray-dark)" }}>
                {markdown}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
