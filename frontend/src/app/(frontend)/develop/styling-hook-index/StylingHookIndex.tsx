'use client';

import { useState, useMemo } from 'react';

interface TokenEntry {
  name: string;
  value: string;
  preview?: string;
}

interface TokenData {
  generatedAt: string;
  source: string;
  totalTokens: number;
  categories: Record<string, TokenEntry[]>;
}

const CATEGORY_LABELS: Record<string, string> = {
  color: 'Color',
  spacing: 'Spacing',
  sizing: 'Sizing',
  shadow: 'Shadow',
  radius: 'Border Radius',
  ratio: 'Aspect Ratio',
  font: 'Font / Typography',
  duration: 'Duration / Motion',
  link: 'Link',
  other: 'Other',
};

function ColorSwatch({ color }: { color: string }) {
  return (
    <span
      className="inline-block w-5 h-5 rounded border border-[#E5E5E5] shrink-0"
      style={{ backgroundColor: color }}
      title={color}
    />
  );
}

function TokenRow({ token, onCopy }: { token: TokenEntry; onCopy: (t: string) => void }) {
  return (
    <tr className="border-b border-[#E5E5E5] hover:bg-[#F9F9F9] transition-colors">
      <td className="px-4 py-2.5 font-mono text-[13px] text-[#032D60]">
        <button
          className="text-left hover:text-[#0176D3] transition-colors cursor-pointer"
          onClick={() => onCopy(token.name)}
          title="Copy token name"
        >
          {token.name}
        </button>
      </td>
      <td className="px-4 py-2.5 font-mono text-[13px] text-[#706E6B] max-w-md truncate">
        {token.value}
      </td>
      <td className="px-4 py-2.5 text-center">
        {token.preview && <ColorSwatch color={token.preview} />}
      </td>
    </tr>
  );
}

export function StylingHookIndex({ data }: { data: TokenData }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copied, setCopied] = useState('');

  const categories = Object.keys(data.categories);

  const filtered = useMemo(() => {
    const result: Record<string, TokenEntry[]> = {};
    const q = search.toLowerCase();

    for (const [cat, tokens] of Object.entries(data.categories)) {
      if (activeCategory && cat !== activeCategory) continue;
      const matched = tokens.filter(
        (t) => t.name.toLowerCase().includes(q) || t.value.toLowerCase().includes(q),
      );
      if (matched.length > 0) result[cat] = matched;
    }
    return result;
  }, [data.categories, search, activeCategory]);

  const totalVisible = Object.values(filtered).reduce((s, arr) => s + arr.length, 0);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 1500);
  }

  return (
    <>
      {/* Search + Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 min-w-[220px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#706E6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search tokens…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-[#E5E5E5] rounded-lg text-sm focus:outline-none focus:border-[#0176D3] focus:ring-1 focus:ring-[#0176D3]"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeCategory
                ? 'bg-[#0176D3] text-white'
                : 'bg-[#F3F3F3] text-[#3E3E3C] hover:bg-[#E5E5E5]'
            }`}
          >
            All ({data.totalTokens})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#0176D3] text-white'
                  : 'bg-[#F3F3F3] text-[#3E3E3C] hover:bg-[#E5E5E5]'
              }`}
            >
              {CATEGORY_LABELS[cat] || cat} ({data.categories[cat].length})
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-[#706E6B] mb-4">
        Showing {totalVisible} token{totalVisible !== 1 ? 's' : ''}
        {search && ` matching "${search}"`}
      </p>

      {copied && (
        <div className="fixed bottom-6 right-6 bg-[#032D60] text-white text-sm px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
          Copied: {copied}
        </div>
      )}

      {/* Token tables grouped by category */}
      {Object.entries(filtered).map(([cat, tokens]) => (
        <section key={cat} className="mb-10">
          <h2 className="text-xl font-bold text-[#032D60] mb-3 capitalize">
            {CATEGORY_LABELS[cat] || cat}
            <span className="ml-2 text-sm font-normal text-[#706E6B]">({tokens.length})</span>
          </h2>
          <div className="overflow-x-auto border border-[#E5E5E5] rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F3F3F3] border-b border-[#E5E5E5]">
                  <th className="px-4 py-2.5 text-xs font-semibold text-[#3E3E3C] uppercase tracking-wider">Token Name</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-[#3E3E3C] uppercase tracking-wider">Value</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-[#3E3E3C] uppercase tracking-wider text-center w-16">Preview</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token) => (
                  <TokenRow key={token.name} token={token} onCopy={handleCopy} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  );
}
