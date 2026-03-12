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

export const createGitHubRouter = (pool: Pool, githubService: GitHubAPIService) => {
  const router = express.Router();

  /**
   * POST /api/github/publish/:path*
   * Create a pull request with content changes
   */
  router.post(
    '/publish/:path(*)',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;
      const { markdown, commitMessage } = req.body as PublishContentRequest;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      if (!markdown) {
        throw new AppError('Markdown content is required', 400);
      }

      if (!commitMessage) {
        throw new AppError('Commit message is required', 400);
      }

      // Check if user has a lock on the file
      const lockResult = await pool.query(
        'SELECT * FROM file_locks WHERE file_path = $1 AND expires_at > CURRENT_TIMESTAMP',
        [filePath]
      );

      if (lockResult.rows.length > 0 && lockResult.rows[0].user_id !== req.user!.id) {
        throw new AppError('File is locked by another user', 423);
      }

      // Create pull request
      const pr = await githubService.createPR({
        branch: `cms-update-${Date.now()}`,
        files: [
          {
            path: filePath,
            content: markdown,
          },
        ],
        title: commitMessage,
        body: `**Updated by:** ${req.user!.name} (${req.user!.email})

**File:** ${filePath}

**Commit Message:** ${commitMessage}

---
*This PR was created automatically by the Lightning Design System CMS.*`,
      });

      // Delete draft if exists
      await pool.query('DELETE FROM drafts WHERE user_id = $1 AND file_path = $2', [
        req.user!.id,
        filePath,
      ]);

      // Release lock if exists
      await pool.query('DELETE FROM file_locks WHERE file_path = $1 AND user_id = $2', [
        filePath,
        req.user!.id,
      ]);

      const response: PublishContentResponse = {
        success: true,
        pr_url: pr.html_url,
        pr_number: pr.number,
      };

      res.json(response);

      // Log the publish action
      await pool.query(
        'INSERT INTO audit_log (user_id, action, file_path, pr_url, metadata) VALUES ($1, $2, $3, $4, $5)',
        [
          req.user!.id,
          'publish_content',
          filePath,
          pr.html_url,
          JSON.stringify({ pr_number: pr.number, commit_message: commitMessage }),
        ]
      );
    })
  );

  /**
   * POST /api/github/publish-batch
   * Create a pull request with multiple file changes
   */
  router.post(
    '/publish-batch',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { files, title, description } = req.body;

      if (!files || !Array.isArray(files) || files.length === 0) {
        throw new AppError('Files array is required', 400);
      }

      if (!title) {
        throw new AppError('PR title is required', 400);
      }

      // Validate all files
      for (const file of files) {
        if (!file.path || !file.content) {
          throw new AppError('Each file must have path and content', 400);
        }
      }

      // Check for locks on any of the files
      const filePaths = files.map((f: any) => f.path);
      const lockResult = await pool.query(
        `SELECT file_path, user_id FROM file_locks
         WHERE file_path = ANY($1) AND expires_at > CURRENT_TIMESTAMP AND user_id != $2`,
        [filePaths, req.user!.id]
      );

      if (lockResult.rows.length > 0) {
        const lockedFiles = lockResult.rows.map((r) => r.file_path).join(', ');
        throw new AppError(`Files are locked by other users: ${lockedFiles}`, 423);
      }

      // Create pull request
      const pr = await githubService.createPR({
        branch: `cms-batch-update-${Date.now()}`,
        files: files.map((f: any) => ({
          path: f.path,
          content: f.content,
        })),
        title,
        body: `**Updated by:** ${req.user!.name} (${req.user!.email})

**Description:** ${description || 'Batch content update'}

**Files changed:**
${files.map((f: any) => `- ${f.path}`).join('\n')}

---
*This PR was created automatically by the Lightning Design System CMS.*`,
      });

      // Delete drafts and release locks for all files
      for (const filePath of filePaths) {
        await pool.query('DELETE FROM drafts WHERE user_id = $1 AND file_path = $2', [
          req.user!.id,
          filePath,
        ]);
        await pool.query('DELETE FROM file_locks WHERE file_path = $1 AND user_id = $2', [
          filePath,
          req.user!.id,
        ]);
      }

      const response: PublishContentResponse = {
        success: true,
        pr_url: pr.html_url,
        pr_number: pr.number,
      };

      res.json(response);

      // Log the publish action
      await pool.query(
        'INSERT INTO audit_log (user_id, action, pr_url, metadata) VALUES ($1, $2, $3, $4)',
        [
          req.user!.id,
          'publish_batch',
          pr.html_url,
          JSON.stringify({ pr_number: pr.number, files: filePaths, title }),
        ]
      );
    })
  );

  /**
   * GET /api/github/files
   * List markdown files in repository
   */
  router.get(
    '/files',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { path = '' } = req.query;

      const files = await githubService.listFiles(path as string);

      // Filter for markdown files only
      const markdownFiles = files.filter(
        (file) => file.type === 'file' && file.name.endsWith('.md')
      );

      res.json({
        success: true,
        files: markdownFiles,
      });
    })
  );

  /**
   * GET /api/github/search
   * Search for markdown files
   */
  router.get(
    '/search',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { query = '' } = req.query;

      const files = await githubService.searchMarkdownFiles(query as string);

      res.json({
        success: true,
        files,
      });
    })
  );

  /**
   * GET /api/github/repo
   * Get repository information
   */
  router.get(
    '/repo',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const info = await githubService.getRepoInfo();

      res.json({
        success: true,
        repo: info,
      });
    })
  );

  return router;
};

export default createGitHubRouter;
