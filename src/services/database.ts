import { Pool, QueryResult } from 'pg';
import { User, Draft, FileLock, AuditLog } from '../types';

/**
 * Database service for common queries
 */
export class DatabaseService {
  constructor(private pool: Pool) {}

  // User queries
  async findUserById(id: number): Promise<User | null> {
    const result = await this.pool.query<User>('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  async findUserBySalesforceId(salesforceId: string): Promise<User | null> {
    const result = await this.pool.query<User>(
      'SELECT * FROM users WHERE salesforce_id = $1',
      [salesforceId]
    );
    return result.rows[0] || null;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const result = await this.pool.query<User>('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    return result.rows[0] || null;
  }

  async createUser(salesforceId: string, email: string, name: string, role: string = 'editor'): Promise<User> {
    const result = await this.pool.query<User>(
      'INSERT INTO users (salesforce_id, email, name, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [salesforceId, email, name, role]
    );
    return result.rows[0];
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const fields = [];
    const values = [];
    let paramCount = 1;

    if (updates.email) {
      fields.push(`email = $${paramCount++}`);
      values.push(updates.email);
    }
    if (updates.name) {
      fields.push(`name = $${paramCount++}`);
      values.push(updates.name);
    }
    if (updates.role) {
      fields.push(`role = $${paramCount++}`);
      values.push(updates.role);
    }

    values.push(id);

    const result = await this.pool.query<User>(
      `UPDATE users SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $${paramCount} RETURNING *`,
      values
    );
    return result.rows[0];
  }

  async listUsers(): Promise<User[]> {
    const result = await this.pool.query<User>(
      'SELECT * FROM users ORDER BY created_at DESC'
    );
    return result.rows;
  }

  // Draft queries
  async findDraft(userId: number, filePath: string): Promise<Draft | null> {
    const result = await this.pool.query<Draft>(
      'SELECT * FROM drafts WHERE user_id = $1 AND file_path = $2',
      [userId, filePath]
    );
    return result.rows[0] || null;
  }

  async saveDraft(userId: number, filePath: string, markdown: string): Promise<Draft> {
    const result = await this.pool.query<Draft>(
      `INSERT INTO drafts (user_id, file_path, markdown, updated_at)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, file_path)
       DO UPDATE SET markdown = $3, updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [userId, filePath, markdown]
    );
    return result.rows[0];
  }

  async deleteDraft(userId: number, filePath: string): Promise<boolean> {
    const result = await this.pool.query(
      'DELETE FROM drafts WHERE user_id = $1 AND file_path = $2',
      [userId, filePath]
    );
    return result.rowCount !== null && result.rowCount > 0;
  }

  async listUserDrafts(userId: number): Promise<Draft[]> {
    const result = await this.pool.query<Draft>(
      'SELECT * FROM drafts WHERE user_id = $1 ORDER BY updated_at DESC',
      [userId]
    );
    return result.rows;
  }

  // Lock queries
  async findActiveLock(filePath: string): Promise<FileLock | null> {
    await this.cleanupExpiredLocks();
    const result = await this.pool.query<FileLock>(
      'SELECT * FROM file_locks WHERE file_path = $1 AND expires_at > CURRENT_TIMESTAMP',
      [filePath]
    );
    return result.rows[0] || null;
  }

  async acquireLock(userId: number, filePath: string, durationMinutes: number): Promise<FileLock> {
    const result = await this.pool.query<FileLock>(
      `INSERT INTO file_locks (file_path, user_id, expires_at)
       VALUES ($1, $2, CURRENT_TIMESTAMP + INTERVAL '${durationMinutes} minutes')
       RETURNING *`,
      [filePath, userId]
    );
    return result.rows[0];
  }

  async extendLock(lockId: number, durationMinutes: number): Promise<FileLock> {
    const result = await this.pool.query<FileLock>(
      `UPDATE file_locks
       SET expires_at = CURRENT_TIMESTAMP + INTERVAL '${durationMinutes} minutes',
           locked_at = CURRENT_TIMESTAMP
       WHERE id = $1
       RETURNING *`,
      [lockId]
    );
    return result.rows[0];
  }

  async releaseLock(userId: number, filePath: string): Promise<boolean> {
    const result = await this.pool.query(
      'DELETE FROM file_locks WHERE file_path = $1 AND user_id = $2',
      [filePath, userId]
    );
    return result.rowCount !== null && result.rowCount > 0;
  }

  async cleanupExpiredLocks(): Promise<void> {
    await this.pool.query('DELETE FROM file_locks WHERE expires_at < CURRENT_TIMESTAMP');
  }

  async listActiveLocks(): Promise<any[]> {
    await this.cleanupExpiredLocks();
    const result = await this.pool.query(
      `SELECT fl.*, u.name, u.email
       FROM file_locks fl
       JOIN users u ON fl.user_id = u.id
       WHERE fl.expires_at > CURRENT_TIMESTAMP
       ORDER BY fl.locked_at DESC`
    );
    return result.rows;
  }

  // Audit log queries
  async logAction(
    userId: number | null,
    action: string,
    filePath?: string,
    prUrl?: string,
    metadata?: Record<string, any>
  ): Promise<AuditLog> {
    const result = await this.pool.query<AuditLog>(
      `INSERT INTO audit_log (user_id, action, file_path, pr_url, metadata)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [userId, action, filePath || null, prUrl || null, metadata ? JSON.stringify(metadata) : null]
    );
    return result.rows[0];
  }

  async getAuditLogs(limit: number = 50, offset: number = 0): Promise<any[]> {
    const result = await this.pool.query(
      `SELECT al.*, u.name, u.email
       FROM audit_log al
       LEFT JOIN users u ON al.user_id = u.id
       ORDER BY al.created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return result.rows;
  }

  async getUserAuditLogs(userId: number, limit: number = 50): Promise<AuditLog[]> {
    const result = await this.pool.query<AuditLog>(
      'SELECT * FROM audit_log WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2',
      [userId, limit]
    );
    return result.rows;
  }

  async getFileAuditLogs(filePath: string, limit: number = 50): Promise<any[]> {
    const result = await this.pool.query(
      `SELECT al.*, u.name, u.email
       FROM audit_log al
       LEFT JOIN users u ON al.user_id = u.id
       WHERE al.file_path = $1
       ORDER BY al.created_at DESC
       LIMIT $2`,
      [filePath, limit]
    );
    return result.rows;
  }

  // Utility queries
  async healthCheck(): Promise<boolean> {
    try {
      await this.pool.query('SELECT 1');
      return true;
    } catch (error) {
      return false;
    }
  }

  async getStats(): Promise<any> {
    const userCount = await this.pool.query('SELECT COUNT(*) FROM users');
    const draftCount = await this.pool.query('SELECT COUNT(*) FROM drafts');
    const lockCount = await this.pool.query(
      'SELECT COUNT(*) FROM file_locks WHERE expires_at > CURRENT_TIMESTAMP'
    );
    const auditCount = await this.pool.query('SELECT COUNT(*) FROM audit_log');

    return {
      users: parseInt(userCount.rows[0].count, 10),
      drafts: parseInt(draftCount.rows[0].count, 10),
      activeLocks: parseInt(lockCount.rows[0].count, 10),
      auditLogs: parseInt(auditCount.rows[0].count, 10),
    };
  }
}
