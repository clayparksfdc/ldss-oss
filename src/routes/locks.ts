import express, { Response } from 'express';
import { Pool } from 'pg';
import { AuthenticatedRequest, AppError, LockResponse, FileLock } from '../types';
import { requireAuth, requireEditor } from '../middleware/auth';
import { asyncHandler } from '../middleware/error';

export const createLocksRouter = (pool: Pool) => {
  const router = express.Router();

  const LOCK_DURATION_MINUTES = parseInt(process.env.LOCK_DURATION_MINUTES || '30', 10);

  /**
   * GET /api/locks/:path*
   * Check if a file is locked
   */
  router.get(
    '/:path(*)',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      // Clean up expired locks first
      await pool.query('DELETE FROM file_locks WHERE expires_at < CURRENT_TIMESTAMP');

      // Check for active lock
      const result = await pool.query<FileLock>(
        `SELECT fl.*, u.name, u.email
         FROM file_locks fl
         JOIN users u ON fl.user_id = u.id
         WHERE fl.file_path = $1 AND fl.expires_at > CURRENT_TIMESTAMP`,
        [filePath]
      );

      if (result.rows.length === 0) {
        res.json({
          success: true,
          locked: false,
          message: 'File is not locked',
        });
        return;
      }

      const lock = result.rows[0];
      const isOwnLock = lock.user_id === req.user!.id;

      res.json({
        success: true,
        locked: true,
        lock: {
          id: lock.id,
          file_path: lock.file_path,
          user_id: lock.user_id,
          locked_at: lock.locked_at,
          expires_at: lock.expires_at,
          user: {
            name: (lock as any).name,
            email: (lock as any).email,
          },
          is_own_lock: isOwnLock,
        },
      });
    })
  );

  /**
   * POST /api/locks/:path*
   * Acquire a lock on a file
   */
  router.post(
    '/:path(*)',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      // Clean up expired locks
      await pool.query('DELETE FROM file_locks WHERE expires_at < CURRENT_TIMESTAMP');

      // Check for existing lock
      const existingLock = await pool.query(
        'SELECT * FROM file_locks WHERE file_path = $1 AND expires_at > CURRENT_TIMESTAMP',
        [filePath]
      );

      if (existingLock.rows.length > 0) {
        const lock = existingLock.rows[0];

        // If user already owns the lock, extend it
        if (lock.user_id === req.user!.id) {
          const updated = await pool.query<FileLock>(
            `UPDATE file_locks
             SET expires_at = CURRENT_TIMESTAMP + INTERVAL '${LOCK_DURATION_MINUTES} minutes',
                 locked_at = CURRENT_TIMESTAMP
             WHERE id = $1
             RETURNING *`,
            [lock.id]
          );

          const response: LockResponse = {
            success: true,
            lock: updated.rows[0],
            message: 'Lock extended',
          };

          res.json(response);
          return;
        }

        // Lock is held by another user
        throw new AppError('File is locked by another user', 423);
      }

      // Acquire new lock
      const result = await pool.query<FileLock>(
        `INSERT INTO file_locks (file_path, user_id, expires_at)
         VALUES ($1, $2, CURRENT_TIMESTAMP + INTERVAL '${LOCK_DURATION_MINUTES} minutes')
         RETURNING *`,
        [filePath, req.user!.id]
      );

      const response: LockResponse = {
        success: true,
        lock: result.rows[0],
        message: 'Lock acquired',
      };

      res.json(response);

      // Log the lock acquisition
      await pool.query(
        'INSERT INTO audit_log (user_id, action, file_path) VALUES ($1, $2, $3)',
        [req.user!.id, 'acquire_lock', filePath]
      );
    })
  );

  /**
   * DELETE /api/locks/:path*
   * Release a lock on a file
   */
  router.delete(
    '/:path(*)',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const filePath = req.params.path;

      if (!filePath) {
        throw new AppError('File path is required', 400);
      }

      // Delete lock only if owned by current user
      const result = await pool.query(
        'DELETE FROM file_locks WHERE file_path = $1 AND user_id = $2 RETURNING *',
        [filePath, req.user!.id]
      );

      if (result.rows.length === 0) {
        throw new AppError('No lock found or you do not own this lock', 404);
      }

      res.json({
        success: true,
        message: 'Lock released',
      });

      // Log the lock release
      await pool.query(
        'INSERT INTO audit_log (user_id, action, file_path) VALUES ($1, $2, $3)',
        [req.user!.id, 'release_lock', filePath]
      );
    })
  );

  /**
   * GET /api/locks
   * Get all active locks (admin only)
   */
  router.get(
    '/',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      // Clean up expired locks first
      await pool.query('DELETE FROM file_locks WHERE expires_at < CURRENT_TIMESTAMP');

      const result = await pool.query(
        `SELECT fl.*, u.name, u.email
         FROM file_locks fl
         JOIN users u ON fl.user_id = u.id
         WHERE fl.expires_at > CURRENT_TIMESTAMP
         ORDER BY fl.locked_at DESC`
      );

      const locks = result.rows.map((row) => ({
        id: row.id,
        file_path: row.file_path,
        user_id: row.user_id,
        locked_at: row.locked_at,
        expires_at: row.expires_at,
        user: {
          name: row.name,
          email: row.email,
        },
      }));

      res.json({
        success: true,
        locks,
      });
    })
  );

  return router;
};

export default createLocksRouter;
