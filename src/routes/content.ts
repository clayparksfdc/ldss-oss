import express, { Response } from 'express';
import { Pool } from 'pg';
import { logAudit } from '../lib/audit';
import {
  AuthenticatedRequest,
  AppError,
  SaveDraftRequest,
  SaveDraftResponse,
  GetContentResponse,
  Draft,
} from '../types';
import { GitHubAPIService } from '../services/github-api';
import { requireAuth, requireEditor } from '../middleware/auth';
import { asyncHandler } from '../middleware/error';

export const createContentRouter = (pool: Pool) => {
  const router = express.Router();

  /**
   * GET /api/content/:path*
   * Get markdown file from GitHub with draft and lock info
   */
  router.get(
    '/:path(*)',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      const ghService = GitHubAPIService.forUser(req.githubToken!);
      const { content, sha } = await ghService.getFile(filePath);

      // Check for user's draft
      const draftResult = await pool.query<Draft>(
        'SELECT * FROM drafts WHERE user_id = $1 AND file_path = $2',
        [req.user!.id, filePath]
      );

      const draft = draftResult.rows[0] || undefined;

      // Check for active lock
      const lockResult = await pool.query(
        `SELECT fl.*, u.name, u.email
         FROM file_locks fl
         JOIN users u ON fl.user_id = u.id
         WHERE fl.file_path = $1 AND fl.expires_at > CURRENT_TIMESTAMP`,
        [filePath]
      );

      const lock = lockResult.rows[0]
        ? {
            id: lockResult.rows[0].id,
            file_path: lockResult.rows[0].file_path,
            user_id: lockResult.rows[0].user_id,
            locked_at: lockResult.rows[0].locked_at,
            expires_at: lockResult.rows[0].expires_at,
            user: {
              name: lockResult.rows[0].name,
              email: lockResult.rows[0].email,
            },
          }
        : undefined;

      const response: GetContentResponse = {
        content,
        sha,
        draft,
        lock,
      };

      res.json({
        success: true,
        data: response,
      });

      logAudit(pool, req.user!.id, 'view_content', { file_path: filePath });
    })
  );

  // PUT /api/content/:path/draft
  // Save draft without publishing to GitHub
  router.put(
    '/:path(*)/draft',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;
      const { markdown } = req.body as SaveDraftRequest;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      if (!markdown) {
        throw new AppError('Markdown content is required', 400);
      }

      const ghService = GitHubAPIService.forUser(req.githubToken!);
      await ghService.getFile(filePath);

      // Upsert draft
      const result = await pool.query<Draft>(
        `INSERT INTO drafts (user_id, file_path, markdown, updated_at)
         VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
         ON CONFLICT (user_id, file_path)
         DO UPDATE SET markdown = $3, updated_at = CURRENT_TIMESTAMP
         RETURNING *`,
        [req.user!.id, filePath, markdown]
      );

      const response: SaveDraftResponse = {
        success: true,
        draft: result.rows[0],
      };

      res.json(response);

      logAudit(pool, req.user!.id, 'save_draft', { file_path: filePath });
    })
  );

  // DELETE /api/content/:path/draft
  // Delete user's draft for a file
  router.delete(
    '/:path(*)/draft',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      const result = await pool.query(
        'DELETE FROM drafts WHERE user_id = $1 AND file_path = $2 RETURNING *',
        [req.user!.id, filePath]
      );

      if (result.rows.length === 0) {
        throw new AppError('Draft not found', 404);
      }

      res.json({
        success: true,
        message: 'Draft deleted successfully',
      });

      logAudit(pool, req.user!.id, 'delete_draft', { file_path: filePath });
    })
  );

  // GET /api/content/drafts/list
  // Get all drafts for the current user
  router.get(
    '/drafts/list',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const result = await pool.query<Draft>(
        'SELECT * FROM drafts WHERE user_id = $1 ORDER BY updated_at DESC',
        [req.user!.id]
      );

      res.json({
        success: true,
        drafts: result.rows,
      });
    })
  );

  return router;
};

export default createContentRouter;
