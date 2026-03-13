/**
 * Fire-and-forget audit logging - does not block the response.
 */
import { Pool } from 'pg';

export function logAudit(
  pool: Pool,
  userId: number,
  action: string,
  extra?: { file_path?: string; pr_url?: string; metadata?: Record<string, unknown> | string }
): void {
  const { file_path, pr_url, metadata } = extra || {};
  const metadataStr = typeof metadata === 'string' ? metadata : metadata ? JSON.stringify(metadata) : null;
  pool.query(
    'INSERT INTO audit_log (user_id, action, file_path, pr_url, metadata) VALUES ($1, $2, $3, $4, $5)',
    [userId, action, file_path ?? null, pr_url ?? null, metadataStr]
  ).catch(err => {
    console.error('[audit] Failed to log:', action, err.message);
  });
}
