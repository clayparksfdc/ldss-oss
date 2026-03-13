'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = 'javascript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block border border-slds-gray-300 rounded-lg overflow-hidden mb-6">
      <div className="bg-slds-gray-800 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-sm font-medium">{filename}</span>
          )}
          <span className="text-xs text-slds-gray-400">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-xs bg-slds-gray-700 hover:bg-slds-gray-600 rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <span className="inline-flex items-center gap-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copied
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </span>
          )}
        </button>
      </div>
      <div className="bg-slds-gray-900 overflow-x-auto">
        <pre className="p-4 text-sm text-white">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
