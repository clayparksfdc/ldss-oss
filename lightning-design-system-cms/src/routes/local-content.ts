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
    path.resolve(__dirname, '../../../content'),
    path.resolve(process.cwd(), '../content'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return candidates[0];
}

function readTree(dir: string, relativeTo: string): FileEntry[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !e.name.startsWith('.') && !e.name.startsWith('_'))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  return entries.map(entry => {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(relativeTo, fullPath);

    if (entry.isDirectory()) {
      return {
        name: entry.name,
        path: relPath,
        type: 'directory' as const,
        children: readTree(fullPath, relativeTo),
      };
    }
    return {
      name: entry.name,
      path: relPath,
      type: 'file' as const,
    };
  });
}

export const createLocalContentRouter = () => {
  const router = express.Router();
  const contentDir = resolveContentDir();

  router.get('/files', (_req, res) => {
    try {
      const files = readTree(contentDir, contentDir);
      res.json({ files, contentDir });
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
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
