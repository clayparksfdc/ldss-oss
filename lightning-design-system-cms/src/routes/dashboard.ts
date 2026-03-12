import express from 'express';
import { Pool } from 'pg';

export const createDashboardRouter = (pool: Pool) => {
  const router = express.Router();

  router.get('/api/dashboard/stats', async (_req, res) => {
    try {
      const [users, drafts, locks, audits] = await Promise.all([
        pool.query('SELECT COUNT(*) as count FROM users'),
        pool.query('SELECT COUNT(*) as count FROM drafts'),
        pool.query('SELECT COUNT(*) as count FROM file_locks WHERE expires_at > CURRENT_TIMESTAMP'),
        pool.query('SELECT COUNT(*) as count FROM audit_log'),
      ]);

      res.json({
        users: parseInt(users.rows[0].count),
        drafts: parseInt(drafts.rows[0].count),
        activeLocks: parseInt(locks.rows[0].count),
        auditEntries: parseInt(audits.rows[0].count),
      });
    } catch (err: any) {
      res.json({ users: 0, drafts: 0, activeLocks: 0, auditEntries: 0 });
    }
  });

  router.get('/api/dashboard/recent-activity', async (_req, res) => {
    try {
      const result = await pool.query(
        `SELECT al.action, al.file_path, al.created_at, u.name, u.email
         FROM audit_log al
         LEFT JOIN users u ON al.user_id = u.id
         ORDER BY al.created_at DESC
         LIMIT 20`
      );
      res.json(result.rows);
    } catch {
      res.json([]);
    }
  });

  router.get('/', (_req, res) => {
    res.send(dashboardHTML);
  });

  return router;
};

const dashboardHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LDSS CMS - Admin Dashboard</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f4f6f9;
      color: #1a1a2e;
      line-height: 1.6;
    }
    .topbar {
      background: #032D60;
      color: white;
      padding: 16px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .topbar h1 { font-size: 18px; font-weight: 600; letter-spacing: 0.3px; }
    .topbar .badge {
      background: #27ae60;
      color: white;
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .container { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }
    .stat-card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      border: 1px solid #e8ecf1;
    }
    .stat-card .label { font-size: 13px; color: #706E6B; font-weight: 500; margin-bottom: 8px; }
    .stat-card .value { font-size: 32px; font-weight: 700; color: #032D60; }

    .section { margin-bottom: 32px; }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #032D60;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e8ecf1;
    }

    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      border: 1px solid #e8ecf1;
      overflow: hidden;
    }

    .endpoint-list { list-style: none; }
    .endpoint-list li {
      padding: 14px 20px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
    }
    .endpoint-list li:last-child { border-bottom: none; }
    .method {
      font-size: 11px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      min-width: 52px;
      text-align: center;
      font-family: 'SF Mono', Menlo, monospace;
    }
    .method.get { background: #dff6dd; color: #1e7e34; }
    .method.post { background: #d4e6ff; color: #0056b3; }
    .method.put { background: #fff3cd; color: #856404; }
    .method.delete { background: #f8d7da; color: #721c24; }
    .endpoint-path {
      font-family: 'SF Mono', Menlo, monospace;
      font-size: 13px;
      color: #333;
    }
    .endpoint-desc { color: #706E6B; font-size: 13px; margin-left: auto; }

    .activity-table { width: 100%; border-collapse: collapse; }
    .activity-table th {
      text-align: left;
      padding: 12px 20px;
      background: #f8f9fb;
      font-size: 12px;
      font-weight: 600;
      color: #706E6B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .activity-table td {
      padding: 12px 20px;
      border-top: 1px solid #f0f0f0;
      font-size: 13px;
    }
    .activity-table .empty {
      text-align: center;
      padding: 40px;
      color: #999;
    }
    .action-badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      font-family: 'SF Mono', Menlo, monospace;
    }
    .action-badge.view { background: #e8f4fd; color: #0176D3; }
    .action-badge.save { background: #fff3cd; color: #856404; }
    .action-badge.publish { background: #dff6dd; color: #1e7e34; }
    .action-badge.delete { background: #f8d7da; color: #721c24; }
    .action-badge.lock { background: #e2e3e5; color: #383d41; }

    .config-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }
    .config-item {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
    }
    .config-item:last-child { border-bottom: none; }
    .config-key { font-size: 13px; color: #706E6B; font-weight: 500; }
    .config-val {
      font-family: 'SF Mono', Menlo, monospace;
      font-size: 13px;
      color: #032D60;
      background: #f4f6f9;
      padding: 2px 8px;
      border-radius: 4px;
    }

    .loading { color: #999; font-style: italic; padding: 20px; text-align: center; }

    @media (max-width: 600px) {
      .topbar { padding: 12px 16px; }
      .container { padding: 16px; }
      .endpoint-desc { display: none; }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <h1>Lightning Design System CMS</h1>
    <div style="display:flex;align-items:center;gap:12px">
      <a href="/editor/" style="background:#0176D3;color:white;text-decoration:none;padding:6px 16px;border-radius:6px;font-size:13px;font-weight:600">Open Editor</a>
      <span class="badge" id="status-badge">Checking...</span>
    </div>
  </div>

  <div class="container">
    <div class="stats-grid" id="stats-grid">
      <div class="stat-card"><div class="label">Registered Users</div><div class="value" id="stat-users">-</div></div>
      <div class="stat-card"><div class="label">Active Drafts</div><div class="value" id="stat-drafts">-</div></div>
      <div class="stat-card"><div class="label">Active Locks</div><div class="value" id="stat-locks">-</div></div>
      <div class="stat-card"><div class="label">Audit Log Entries</div><div class="value" id="stat-audits">-</div></div>
    </div>

    <div class="section">
      <div class="section-title">API Endpoints</div>
      <div class="card">
        <ul class="endpoint-list">
          <li><span class="method get">GET</span><span class="endpoint-path">/health</span><span class="endpoint-desc">Server health check</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/content/:path</span><span class="endpoint-desc">Read markdown from GitHub</span></li>
          <li><span class="method put">PUT</span><span class="endpoint-path">/api/content/:path/draft</span><span class="endpoint-desc">Save draft locally</span></li>
          <li><span class="method delete">DEL</span><span class="endpoint-path">/api/content/:path/draft</span><span class="endpoint-desc">Delete a draft</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/content/drafts/list</span><span class="endpoint-desc">List your drafts</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/github/repo</span><span class="endpoint-desc">Repository info</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/github/files?path=docs</span><span class="endpoint-desc">List files from GitHub</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/github/files/:path/history</span><span class="endpoint-desc">File commit history</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/navigation</span><span class="endpoint-desc">Get site navigation</span></li>
          <li><span class="method put">PUT</span><span class="endpoint-path">/api/navigation</span><span class="endpoint-desc">Update navigation</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/locks/:path</span><span class="endpoint-desc">Check file lock</span></li>
          <li><span class="method post">POST</span><span class="endpoint-path">/api/locks/:path</span><span class="endpoint-desc">Acquire file lock</span></li>
          <li><span class="method delete">DEL</span><span class="endpoint-path">/api/locks/:path</span><span class="endpoint-desc">Release file lock</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/api/audit</span><span class="endpoint-desc">View audit log</span></li>
          <li><span class="method get">GET</span><span class="endpoint-path">/auth/salesforce</span><span class="endpoint-desc">Salesforce SSO login</span></li>
        </ul>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Recent Activity</div>
      <div class="card">
        <table class="activity-table">
          <thead><tr><th>Action</th><th>File</th><th>User</th><th>Time</th></tr></thead>
          <tbody id="activity-body">
            <tr><td class="empty" colspan="4">Loading...</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Server Configuration</div>
      <div class="card" id="config-list"></div>
    </div>
  </div>

  <script>
    async function loadDashboard() {
      try {
        const healthRes = await fetch('/health');
        const health = await healthRes.json();
        var badge = document.getElementById('status-badge');
        badge.textContent = health.status === 'ok' ? 'Online' : 'Error';
        badge.style.background = health.status === 'ok' ? '#27ae60' : '#e74c3c';

        var configEl = document.getElementById('config-list');
        configEl.innerHTML = [
          { k: 'Environment', v: health.environment },
          { k: 'Timestamp', v: new Date(health.timestamp).toLocaleString() },
          { k: 'Frontend URL', v: '${process.env.FRONTEND_URL || 'http://localhost:3000'}' },
          { k: 'GitHub Repo', v: '${process.env.GITHUB_OWNER || '-'}/${process.env.GITHUB_REPO || '-'}' },
        ].map(function(c) {
          return '<div class="config-item"><span class="config-key">' + c.k + '</span><span class="config-val">' + c.v + '</span></div>';
        }).join('');
      } catch (e) {
        var badge = document.getElementById('status-badge');
        badge.textContent = 'Offline';
        badge.style.background = '#e74c3c';
      }

      try {
        var statsRes = await fetch('/api/dashboard/stats');
        var stats = await statsRes.json();
        document.getElementById('stat-users').textContent = stats.users;
        document.getElementById('stat-drafts').textContent = stats.drafts;
        document.getElementById('stat-locks').textContent = stats.activeLocks;
        document.getElementById('stat-audits').textContent = stats.auditEntries;
      } catch (e) {
        ['stat-users','stat-drafts','stat-locks','stat-audits'].forEach(function(id) {
          document.getElementById(id).textContent = '0';
        });
      }

      try {
        var actRes = await fetch('/api/dashboard/recent-activity');
        var activity = await actRes.json();
        var tbody = document.getElementById('activity-body');
        if (!activity.length) {
          tbody.innerHTML = '<tr><td class="empty" colspan="4">No activity recorded yet</td></tr>';
        } else {
          tbody.innerHTML = activity.map(function(a) {
            var cls = 'view';
            if (a.action && a.action.includes('save')) cls = 'save';
            if (a.action && a.action.includes('publish')) cls = 'publish';
            if (a.action && a.action.includes('delete')) cls = 'delete';
            if (a.action && a.action.includes('lock')) cls = 'lock';
            return '<tr>'
              + '<td><span class="action-badge ' + cls + '">' + (a.action || '-') + '</span></td>'
              + '<td style="font-family:monospace;font-size:12px">' + (a.file_path || '-') + '</td>'
              + '<td>' + (a.name || a.email || '-') + '</td>'
              + '<td>' + (a.created_at ? new Date(a.created_at).toLocaleString() : '-') + '</td>'
              + '</tr>';
          }).join('');
        }
      } catch (e) {
        document.getElementById('activity-body').innerHTML = '<tr><td class="empty" colspan="4">Could not load activity</td></tr>';
      }
    }

    loadDashboard();
  </script>
</body>
</html>`;
