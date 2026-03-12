'use client';

import { useState } from 'react';

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

  return (
    <div className="component-demo border border-slds-gray-300 rounded-lg overflow-hidden mb-6">
      <div className="bg-slds-gray-50 border-b border-slds-gray-300 px-4 py-2">
        <h4 className="text-sm font-semibold text-slds-gray-900">{title}</h4>
      </div>
      <div className="relative bg-white" style={{ height: `${height}px` }}>
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
              src={storybook}
              className="w-full h-full border-0"
              title={title}
              onLoad={() => setIsLoading(false)}
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-slds-gray-500">
              <svg
                className="mx-auto h-12 w-12 text-slds-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-2 text-sm">No demo URL provided</p>
            </div>
          </div>
        )}
      </div>
      {storybook && (
        <div className="bg-slds-gray-50 border-t border-slds-gray-300 px-4 py-2">
          <a
            href={storybook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slds-blue-600 hover:text-slds-blue-800 inline-flex items-center gap-1"
          >
            Open in new window
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
