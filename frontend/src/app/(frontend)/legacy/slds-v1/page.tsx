'use client';

import { useEffect } from 'react';

export default function SldsV1Page() {
  useEffect(() => {
    window.location.href = 'https://v1.lightningdesignsystem.com/';
  }, []);

  return (
    <div className="py-12 text-center">
      <h1 className="text-2xl font-bold mb-4">SLDS v1 Documentation</h1>
      <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
        Redirecting to the Lightning Design System v1 website...
      </p>
      <a
        href="https://v1.lightningdesignsystem.com/"
        className="inline-block px-6 py-3 rounded-lg text-white font-semibold"
        style={{ background: 'var(--slds-blue, #0176d3)' }}
      >
        Go to SLDS v1 →
      </a>
    </div>
  );
}
