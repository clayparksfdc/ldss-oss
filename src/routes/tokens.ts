import express from 'express';
import fs from 'fs';
import path from 'path';

interface Token {
  name: string;
  value: string;
  preview?: string;
}

const CATEGORY_ORDER = ['color', 'spacing', 'sizing', 'shadow', 'radius', 'ratio', 'font', 'duration', 'link', 'other'];

function resolveContentDir(): string {
  if (process.env.CONTENT_DIR) return process.env.CONTENT_DIR;
  const candidates = [
    path.resolve(__dirname, '../../content'),
    path.resolve(process.cwd(), 'content'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return candidates[0];
}

function categorize(name: string): string {
  const seg = name.replace('--slds-g-', '').split('-')[0];
  return CATEGORY_ORDER.includes(seg) ? seg : 'other';
}

function resolvePreviewColor(val: string): string | null {
  const v = val.trim();
  const hex = v.match(/^#[0-9a-f]{3,8}$/i);
  if (hex) return hex[0];
  const ld = v.match(/^light-dark\(\s*(#[0-9a-f]{3,8})/i);
  if (ld) return ld[1];
  return null;
}

function parseSldsCss(css: string) {
  const re = /(--slds-g-[\w-]+)\s*:\s*([^;]+)/g;
  const tokenMap = new Map<string, string>();
  let m;
  while ((m = re.exec(css)) !== null) {
    if (!tokenMap.has(m[1])) tokenMap.set(m[1], m[2].trim());
  }

  const grouped: Record<string, Token[]> = {};
  for (const cat of CATEGORY_ORDER) grouped[cat] = [];

  for (const [name, value] of tokenMap) {
    const cat = categorize(name);
    const entry: Token = { name, value };
    const preview = resolvePreviewColor(value);
    if (preview) entry.preview = preview;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(entry);
  }
  for (const cat of Object.keys(grouped)) {
    if (grouped[cat].length === 0) delete grouped[cat];
  }

  return { totalTokens: tokenMap.size, categories: grouped };
}

export const createTokensRouter = () => {
  const router = express.Router();

  router.get('/current', (_req, res) => {
    try {
      const jsonPath = path.join(resolveContentDir(), 'data', 'design-tokens.json');
      if (!fs.existsSync(jsonPath)) {
        res.json({ exists: false });
        return;
      }
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      res.json({ exists: true, ...data });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/upload', express.text({ type: '*/*', limit: '20mb' }), (req, res) => {
    try {
      const css = req.body as string;
      if (!css || typeof css !== 'string') {
        res.status(400).json({ error: 'CSS content required' });
        return;
      }

      const { totalTokens, categories } = parseSldsCss(css);
      const output = {
        generatedAt: new Date().toISOString(),
        source: 'cms-upload',
        totalTokens,
        categories,
      };

      const outDir = path.join(resolveContentDir(), 'data');
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'design-tokens.json'), JSON.stringify(output, null, 2));

      res.json({ success: true, totalTokens, categoryCounts: Object.fromEntries(
        Object.entries(categories).map(([k, v]) => [k, (v as Token[]).length]),
      )});
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
