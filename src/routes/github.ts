import express, { Response } from 'express';
import { Pool } from 'pg';
import {
  AuthenticatedRequest,
  AppError,
  PublishContentRequest,
  PublishContentResponse,
} from '../types';
import { GitHubAPIService } from '../services/github-api';
import { requireEditor } from '../middleware/auth';
import { asyncHandler } from '../middleware/error';

const CONTENT_PREFIX = process.env.GITHUB_CONTENT_PATH || '';

function toRepoPath(localPath: string): string {
  if (!CONTENT_PREFIX) return localPath;
  return `${CONTENT_PREFIX}/${localPath}`.replace(/\/+/g, '/');
}

function getUserGitHub(req: AuthenticatedRequest): GitHubAPIService {
  if (!req.githubToken) {
    throw new AppError('GitHub token not available — please log in again', 401);
  }
  return GitHubAPIService.forUser(req.githubToken);
}

export const createGitHubRouter = (pool: Pool) => {
  const router = express.Router();

  router.post(
    '/publish/:path(*)',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;
      const { markdown, commitMessage } = req.body as PublishContentRequest;

      if (!filePath) throw new AppError('File path is required', 400);
      if (!markdown) throw new AppError('Markdown content is required', 400);
      if (!commitMessage) throw new AppError('Commit message is required', 400);

      const lockResult = await pool.query(
        'SELECT * FROM file_locks WHERE file_path = $1 AND expires_at > CURRENT_TIMESTAMP',
        [filePath]
      );
      if (lockResult.rows.length > 0 && lockResult.rows[0].user_id !== req.user!.id) {
        throw new AppError('File is locked by another user', 423);
      }

      const repoPath = toRepoPath(filePath);
      const ghService = getUserGitHub(req);
      const pr = await ghService.createPR({
        branch: `cms-update-${Date.now()}`,
        files: [{ path: repoPath, content: markdown }],
        title: commitMessage,
        body: `**Updated by:** ${req.user!.name} (@${req.user!.github_login})

**File:** \`${repoPath}\`

---
*This PR was created via the Lightning Design System CMS.*`,
      });

      await pool.query('DELETE FROM drafts WHERE user_id = $1 AND file_path = $2', [
        req.user!.id, filePath,
      ]);
      await pool.query('DELETE FROM file_locks WHERE file_path = $1 AND user_id = $2', [
        filePath, req.user!.id,
      ]);

      const response: PublishContentResponse = {
        success: true,
        pr_url: pr.html_url,
        pr_number: pr.number,
      };
      res.json(response);

      await pool.query(
        'INSERT INTO audit_log (user_id, action, file_path, pr_url, metadata) VALUES ($1, $2, $3, $4, $5)',
        [req.user!.id, 'publish_content', filePath, pr.html_url,
         JSON.stringify({ pr_number: pr.number, commit_message: commitMessage })]
      );
    })
  );

  router.post(
    '/publish-batch',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { files, title, description } = req.body;

      if (!files || !Array.isArray(files) || files.length === 0) {
        throw new AppError('Files array is required', 400);
      }
      if (!title) throw new AppError('PR title is required', 400);

      for (const file of files) {
        if (!file.path || !file.content) {
          throw new AppError('Each file must have path and content', 400);
        }
      }

      const filePaths = files.map((f: any) => f.path);
      const lockResult = await pool.query(
        `SELECT file_path FROM file_locks
         WHERE file_path = ANY($1) AND expires_at > CURRENT_TIMESTAMP AND user_id != $2`,
        [filePaths, req.user!.id]
      );
      if (lockResult.rows.length > 0) {
        const lockedFiles = lockResult.rows.map((r) => r.file_path).join(', ');
        throw new AppError(`Files are locked by other users: ${lockedFiles}`, 423);
      }

      const ghService = getUserGitHub(req);
      const repoFiles = files.map((f: any) => ({ path: toRepoPath(f.path), content: f.content }));
      const pr = await ghService.createPR({
        branch: `cms-batch-${Date.now()}`,
        files: repoFiles,
        title,
        body: `**Updated by:** ${req.user!.name} (@${req.user!.github_login})

**Description:** ${description || 'Batch content update'}

**Files changed:**
${repoFiles.map((f) => `- \`${f.path}\``).join('\n')}

---
*This PR was created via the Lightning Design System CMS.*`,
      });

      for (const fp of filePaths) {
        await pool.query('DELETE FROM drafts WHERE user_id = $1 AND file_path = $2', [req.user!.id, fp]);
        await pool.query('DELETE FROM file_locks WHERE file_path = $1 AND user_id = $2', [fp, req.user!.id]);
      }

      const response: PublishContentResponse = {
        success: true,
        pr_url: pr.html_url,
        pr_number: pr.number,
      };
      res.json(response);

      await pool.query(
        'INSERT INTO audit_log (user_id, action, pr_url, metadata) VALUES ($1, $2, $3, $4)',
        [req.user!.id, 'publish_batch', pr.html_url,
         JSON.stringify({ pr_number: pr.number, files: filePaths, title })]
      );
    })
  );

  // Fetch the file from the repo default branch and overwrite the local copy
  router.post(
    '/sync/:path(*)',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const localPath = req.params.path;
      if (!localPath) throw new AppError('File path is required', 400);

      const repoPath = toRepoPath(localPath);
      const ghService = getUserGitHub(req);
      const { content } = await ghService.getFile(repoPath);

      // Overwrite the local file with what's on the default branch
      const fs = await import('fs');
      const path = await import('path');
      const contentDir = process.env.CONTENT_DIR || path.default.resolve(__dirname, '../../content');
      const resolved = path.default.resolve(contentDir, localPath);

      if (!resolved.startsWith(contentDir)) {
        throw new AppError('Access denied', 403);
      }

      fs.default.mkdirSync(path.default.dirname(resolved), { recursive: true });
      fs.default.writeFileSync(resolved, content, 'utf-8');

      // Clear any drafts for this file
      await pool.query('DELETE FROM drafts WHERE user_id = $1 AND file_path = $2', [
        req.user!.id, localPath,
      ]);

      res.json({ success: true, content, path: localPath });
    })
  );

  // Get the file content from the repo (without overwriting local) for comparison
  router.get(
    '/remote/:path(*)',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const localPath = req.params.path;
      if (!localPath) throw new AppError('File path is required', 400);

      const repoPath = toRepoPath(localPath);
      const ghService = getUserGitHub(req);

      try {
        const { content } = await ghService.getFile(repoPath);
        res.json({ success: true, content });
      } catch (err: any) {
        if (err.statusCode === 404) {
          res.json({ success: true, content: null, notFound: true });
          return;
        }
        throw err;
      }
    })
  );

  router.get(
    '/files',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { path = '' } = req.query;
      const ghService = getUserGitHub(req);
      const files = await ghService.listFiles(path as string);
      const markdownFiles = files.filter(
        (file) => file.type === 'file' && file.name.endsWith('.md')
      );
      res.json({ success: true, files: markdownFiles });
    })
  );

  router.get(
    '/search',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { query = '' } = req.query;
      const ghService = getUserGitHub(req);
      const files = await ghService.searchMarkdownFiles(query as string);
      res.json({ success: true, files });
    })
  );

  router.get(
    '/repo',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const ghService = getUserGitHub(req);
      const info = await ghService.getRepoInfo();
      res.json({ success: true, repo: info });
    })
  );

  return router;
};

export default createGitHubRouter;
