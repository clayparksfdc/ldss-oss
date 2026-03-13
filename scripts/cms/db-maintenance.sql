-- Database Maintenance Scripts
-- Lightning Design System CMS

-- ============================================
-- CLEANUP OPERATIONS
-- ============================================

-- Clean up expired locks
DELETE FROM file_locks WHERE expires_at < CURRENT_TIMESTAMP;

-- Clean up old sessions (older than 30 days)
DELETE FROM session WHERE expire < CURRENT_TIMESTAMP - INTERVAL '30 days';

-- Clean up old audit logs (optional - keep last 6 months)
-- DELETE FROM audit_log WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '6 months';

-- ============================================
-- STATISTICS AND MONITORING
-- ============================================

-- Get database statistics
SELECT
    'users' as table_name,
    COUNT(*) as row_count,
    pg_size_pretty(pg_total_relation_size('users')) as total_size
FROM users
UNION ALL
SELECT
    'session' as table_name,
    COUNT(*) as row_count,
    pg_size_pretty(pg_total_relation_size('session')) as total_size
FROM session
UNION ALL
SELECT
    'drafts' as table_name,
    COUNT(*) as row_count,
    pg_size_pretty(pg_total_relation_size('drafts')) as total_size
FROM drafts
UNION ALL
SELECT
    'file_locks' as table_name,
    COUNT(*) as row_count,
    pg_size_pretty(pg_total_relation_size('file_locks')) as total_size
FROM file_locks
UNION ALL
SELECT
    'audit_log' as table_name,
    COUNT(*) as row_count,
    pg_size_pretty(pg_total_relation_size('audit_log')) as total_size
FROM audit_log;

-- ============================================
-- USER ACTIVITY REPORTS
-- ============================================

-- Most active users (last 30 days)
SELECT
    u.name,
    u.email,
    COUNT(*) as action_count,
    MAX(al.created_at) as last_activity
FROM audit_log al
JOIN users u ON al.user_id = u.id
WHERE al.created_at > CURRENT_TIMESTAMP - INTERVAL '30 days'
GROUP BY u.id, u.name, u.email
ORDER BY action_count DESC
LIMIT 10;

-- Most edited files (last 30 days)
SELECT
    file_path,
    COUNT(*) as edit_count,
    COUNT(DISTINCT user_id) as unique_editors,
    MAX(created_at) as last_edit
FROM audit_log
WHERE file_path IS NOT NULL
    AND action IN ('save_draft', 'publish_content')
    AND created_at > CURRENT_TIMESTAMP - INTERVAL '30 days'
GROUP BY file_path
ORDER BY edit_count DESC
LIMIT 20;

-- ============================================
-- DRAFT MANAGEMENT
-- ============================================

-- List drafts older than 30 days (potential cleanup candidates)
SELECT
    d.id,
    d.file_path,
    u.name as user_name,
    u.email as user_email,
    d.updated_at,
    AGE(CURRENT_TIMESTAMP, d.updated_at) as age
FROM drafts d
JOIN users u ON d.user_id = u.id
WHERE d.updated_at < CURRENT_TIMESTAMP - INTERVAL '30 days'
ORDER BY d.updated_at;

-- Count of drafts per user
SELECT
    u.name,
    u.email,
    COUNT(*) as draft_count
FROM drafts d
JOIN users u ON d.user_id = u.id
GROUP BY u.id, u.name, u.email
ORDER BY draft_count DESC;

-- ============================================
-- LOCK ANALYSIS
-- ============================================

-- Currently active locks
SELECT
    fl.file_path,
    u.name,
    u.email,
    fl.locked_at,
    fl.expires_at,
    AGE(fl.expires_at, CURRENT_TIMESTAMP) as time_remaining
FROM file_locks fl
JOIN users u ON fl.user_id = u.id
WHERE fl.expires_at > CURRENT_TIMESTAMP
ORDER BY fl.locked_at DESC;

-- Lock history (last 7 days)
SELECT
    file_path,
    COUNT(*) as lock_count,
    COUNT(DISTINCT user_id) as unique_users,
    MAX(created_at) as last_locked
FROM audit_log
WHERE action = 'acquire_lock'
    AND created_at > CURRENT_TIMESTAMP - INTERVAL '7 days'
GROUP BY file_path
ORDER BY lock_count DESC;

-- ============================================
-- AUDIT LOG ANALYSIS
-- ============================================

-- Action breakdown (last 7 days)
SELECT
    action,
    COUNT(*) as count,
    COUNT(DISTINCT user_id) as unique_users
FROM audit_log
WHERE created_at > CURRENT_TIMESTAMP - INTERVAL '7 days'
GROUP BY action
ORDER BY count DESC;

-- Failed PR attempts (if tracking failures)
SELECT
    al.file_path,
    u.name,
    u.email,
    al.created_at,
    al.metadata
FROM audit_log al
JOIN users u ON al.user_id = u.id
WHERE al.action = 'publish_content'
    AND al.pr_url IS NULL
    AND al.created_at > CURRENT_TIMESTAMP - INTERVAL '7 days'
ORDER BY al.created_at DESC;

-- ============================================
-- INDEX MAINTENANCE
-- ============================================

-- Analyze table statistics (run periodically)
ANALYZE users;
ANALYZE session;
ANALYZE drafts;
ANALYZE file_locks;
ANALYZE audit_log;

-- Check for missing indexes (query takes longer to execute)
SELECT
    schemaname,
    tablename,
    attname,
    n_distinct,
    correlation
FROM pg_stats
WHERE schemaname = 'public'
    AND tablename IN ('users', 'drafts', 'file_locks', 'audit_log')
ORDER BY tablename, attname;

-- ============================================
-- VACUUM OPERATIONS (for maintenance windows)
-- ============================================

-- Regular vacuum
-- VACUUM ANALYZE users;
-- VACUUM ANALYZE session;
-- VACUUM ANALYZE drafts;
-- VACUUM ANALYZE file_locks;
-- VACUUM ANALYZE audit_log;

-- Full vacuum (requires exclusive lock - use during maintenance)
-- VACUUM FULL audit_log;

-- ============================================
-- BACKUP VERIFICATION
-- ============================================

-- Show last modification times
SELECT
    'users' as table_name,
    MAX(updated_at) as last_modified
FROM users
UNION ALL
SELECT
    'drafts' as table_name,
    MAX(updated_at) as last_modified
FROM drafts
UNION ALL
SELECT
    'audit_log' as table_name,
    MAX(created_at) as last_modified
FROM audit_log;

-- ============================================
-- USER MANAGEMENT
-- ============================================

-- List all users with their stats
SELECT
    u.id,
    u.name,
    u.email,
    u.role,
    u.created_at,
    (SELECT COUNT(*) FROM drafts WHERE user_id = u.id) as draft_count,
    (SELECT COUNT(*) FROM audit_log WHERE user_id = u.id) as action_count,
    (SELECT MAX(created_at) FROM audit_log WHERE user_id = u.id) as last_activity
FROM users u
ORDER BY u.created_at DESC;

-- Inactive users (no activity in 90 days)
SELECT
    u.id,
    u.name,
    u.email,
    u.role,
    u.created_at,
    MAX(al.created_at) as last_activity,
    AGE(CURRENT_TIMESTAMP, MAX(al.created_at)) as inactive_for
FROM users u
LEFT JOIN audit_log al ON u.id = al.user_id
GROUP BY u.id, u.name, u.email, u.role, u.created_at
HAVING MAX(al.created_at) < CURRENT_TIMESTAMP - INTERVAL '90 days'
    OR MAX(al.created_at) IS NULL
ORDER BY last_activity DESC NULLS LAST;

-- ============================================
-- ADMIN TASKS
-- ============================================

-- Change user role
-- UPDATE users SET role = 'admin' WHERE email = 'admin@salesforce.com';

-- Force release all locks for a user (emergency)
-- DELETE FROM file_locks WHERE user_id = (SELECT id FROM users WHERE email = 'user@example.com');

-- Delete user and associated data (cascade will handle it)
-- DELETE FROM users WHERE email = 'olduser@example.com';

-- Clear all drafts for a specific file
-- DELETE FROM drafts WHERE file_path = 'path/to/file.md';
