import express from 'express';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

interface Token {
  name: string;
  value: string;
  preview?: string;
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

function resolveRepoRoot(): string {
  // dist/routes when compiled, src/routes in dev
  const candidates = [
    path.resolve(__dirname, '../..'),
    process.cwd(),
  ];
  for (const c of candidates) {
    if (fs.existsSync(path.join(c, 'package.json'))) return c;
  }
  return candidates[0];
}

function resolveSldsVersion(): string | null {
  try {
    const repoRoot = resolveRepoRoot();
    const pkgPath = path.join(repoRoot, 'node_modules', '@salesforce-ux', 'design-system-2', 'package.json');
    if (!fs.existsSync(pkgPath)) return null;
    return JSON.parse(fs.readFileSync(pkgPath, 'utf-8')).version || null;
  } catch {
    return null;
  }
}

export const createTokensRouter = () => {
  const router = express.Router();

  router.get('/current', (_req, res) => {
    try {
      const jsonPath = path.join(resolveContentDir(), 'data', 'design-tokens.json');
      const installedVersion = resolveSldsVersion();
      if (!fs.existsSync(jsonPath)) {
        res.json({ exists: false, installedVersion });
        return;
      }
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      res.json({ exists: true, installedVersion, ...data });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/regenerate', (_req, res) => {
    const repoRoot = resolveRepoRoot();
    const scriptPath = path.join(repoRoot, 'scripts', 'build-tokens.ts');
    if (!fs.existsSync(scriptPath)) {
      res.status(500).json({ error: `build-tokens.ts not found at ${scriptPath}` });
      return;
    }

    const child = spawn(
      'npx',
      ['--no-install', 'ts-node', '--transpile-only', scriptPath],
      { cwd: repoRoot, env: process.env },
    );

    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (d) => { stdout += d.toString(); });
    child.stderr.on('data', (d) => { stderr += d.toString(); });
    child.on('error', (err) => {
      res.status(500).json({ error: err.message, stdout, stderr });
    });
    child.on('close', (code) => {
      if (code !== 0) {
        res.status(500).json({ error: `build-tokens exited with code ${code}`, stdout, stderr });
        return;
      }
      try {
        const jsonPath = path.join(resolveContentDir(), 'data', 'design-tokens.json');
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        const counts = Object.fromEntries(
          Object.entries(data.categories || {}).map(([k, v]) => [k, (v as Token[]).length]),
        );
        res.json({ success: true, totalTokens: data.totalTokens, source: data.source, categoryCounts: counts, log: stdout });
      } catch (err: any) {
        res.status(500).json({ error: err.message, stdout, stderr });
      }
    });
  });

  return router;
};
