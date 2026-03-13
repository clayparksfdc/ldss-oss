import express from 'express';
import fs from 'fs';
import path from 'path';

interface FileEntry {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileEntry[];
}

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

const MARKDOWN_EXT = /\.(md|mdx)$/i;

function readTree(dir: string, relativeTo: string, markdownOnly = false): FileEntry[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !e.name.startsWith('.') && !e.name.startsWith('_'))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  const result: FileEntry[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(relativeTo, fullPath);

    if (entry.isDirectory()) {
      result.push({
        name: entry.name,
        path: relPath,
        type: 'directory',
        children: readTree(fullPath, relativeTo, markdownOnly),
      });
    } else if (!markdownOnly || MARKDOWN_EXT.test(entry.name)) {
      result.push({
        name: entry.name,
        path: relPath,
        type: 'file',
      });
    }
  }
  return result;
}

export const createLocalContentRouter = () => {
  const router = express.Router();
  const contentDir = resolveContentDir();

  const CACHE_TTL_MS = 10_000;
  let filesCache: { tree: FileEntry[]; at: number } | null = null;

  router.get('/files', (_req, res) => {
    try {
      const now = Date.now();
      if (filesCache && now - filesCache.at < CACHE_TTL_MS) {
        return res.json({ files: filesCache.tree, contentDir });
      }
      const tree = readTree(contentDir, contentDir, true);
      filesCache = { tree, at: now };
      res.json({ files: tree, contentDir });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.get('/file', (req, res) => {
    try {
      const filePath = req.query.path as string;
      if (!filePath) {
        res.status(400).json({ error: 'path query parameter required' });
        return;
      }

      const resolved = path.resolve(contentDir, filePath);
      if (!resolved.startsWith(contentDir)) {
        res.status(403).json({ error: 'Access denied' });
        return;
      }

      if (!fs.existsSync(resolved)) {
        res.status(404).json({ error: 'File not found' });
        return;
      }

      const content = fs.readFileSync(resolved, 'utf-8');
      res.json({ content, path: filePath });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.put('/file', (req, res) => {
    try {
      const { path: filePath, content } = req.body;
      if (!filePath || content === undefined) {
        res.status(400).json({ error: 'path and content required' });
        return;
      }

      const resolved = path.resolve(contentDir, filePath);
      if (!resolved.startsWith(contentDir)) {
        res.status(403).json({ error: 'Access denied' });
        return;
      }

      fs.mkdirSync(path.dirname(resolved), { recursive: true });
      fs.writeFileSync(resolved, content, 'utf-8');
      filesCache = null;
      res.json({ success: true, path: filePath });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/file', (req, res) => {
    try {
      const { path: filePath, content } = req.body;
      if (!filePath) {
        res.status(400).json({ error: 'path required' });
        return;
      }

      const resolved = path.resolve(contentDir, filePath);
      if (!resolved.startsWith(contentDir)) {
        res.status(403).json({ error: 'Access denied' });
        return;
      }

      if (fs.existsSync(resolved)) {
        res.status(409).json({ error: 'File already exists' });
        return;
      }

      fs.mkdirSync(path.dirname(resolved), { recursive: true });
      fs.writeFileSync(resolved, content || '', 'utf-8');
      filesCache = null;
      res.json({ success: true, path: filePath });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.delete('/file', (req, res) => {
    try {
      const filePath = req.query.path as string;
      if (!filePath) {
        res.status(400).json({ error: 'path query parameter required' });
        return;
      }

      const resolved = path.resolve(contentDir, filePath);
      if (!resolved.startsWith(contentDir)) {
        res.status(403).json({ error: 'Access denied' });
        return;
      }

      if (!fs.existsSync(resolved)) {
        res.status(404).json({ error: 'File not found' });
        return;
      }

      fs.unlinkSync(resolved);
      filesCache = null;
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
