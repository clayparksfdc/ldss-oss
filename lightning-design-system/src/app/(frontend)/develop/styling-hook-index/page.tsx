import fs from 'fs';
import path from 'path';
import { StylingHookIndex } from './StylingHookIndex';

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

export const metadata = {
  title: 'Global Styling Hooks – Styling Hook Index | Lightning Design System',
  description: 'Browse all SLDS 2 global design tokens (styling hooks) with search, filter, and color swatches.',
};

export default function StylingHookIndexPage() {
  const jsonPath = path.join(process.cwd(), 'content', 'data', 'design-tokens.json');
  let data: TokenData = { generatedAt: '', source: '', totalTokens: 0, categories: {} };
  if (fs.existsSync(jsonPath)) {
    data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  }

  return (
    <div className="max-w-6xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#032D60] mb-2">
          Global Styling Hooks – Styling Hook Index
        </h1>
        <p className="text-lg text-[#706E6B]">
          Browse all {data.totalTokens} SLDS 2 global design tokens. Generated from{' '}
          <code className="text-sm bg-[#F3F3F3] px-1.5 py-0.5 rounded">{data.source}</code>.
        </p>
      </header>

      <StylingHookIndex data={data} />
    </div>
  );
}
