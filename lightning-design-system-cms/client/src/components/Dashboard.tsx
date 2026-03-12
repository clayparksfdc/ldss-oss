import { useState, useEffect } from 'react';
import { fetchStats, fetchHealth, type DashboardStats } from '../api';

export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    fetchStats().then(setStats).catch(() => {});
    fetchHealth().then(setHealth).catch(() => {});
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Lightning Design System CMS</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="label">Server Status</div>
          <div className="value" style={{ color: health?.status === 'ok' ? 'var(--slds-green)' : 'var(--slds-red)', fontSize: 22 }}>
            {health?.status === 'ok' ? 'Online' : 'Checking...'}
          </div>
        </div>
        <div className="stat-card">
          <div className="label">Registered Users</div>
          <div className="value">{stats?.users ?? '-'}</div>
        </div>
        <div className="stat-card">
          <div className="label">Active Drafts</div>
          <div className="value">{stats?.drafts ?? '-'}</div>
        </div>
        <div className="stat-card">
          <div className="label">Active Locks</div>
          <div className="value">{stats?.activeLocks ?? '-'}</div>
        </div>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--slds-blue-dark)', marginBottom: 16 }}>
        Getting Started
      </h2>

      <div className="quick-actions">
        <div className="action-card">
          <h3>Browse Content</h3>
          <p>Use the file browser on the left to navigate and open markdown files for editing.</p>
        </div>
        <div className="action-card">
          <h3>Edit with Monaco</h3>
          <p>Click any .md file to open it in the split-pane Monaco editor with live preview.</p>
        </div>
        <div className="action-card">
          <h3>Insert Components</h3>
          <p>Use the "Insert" toolbar button to add callouts, Storybook embeds, tables, and more.</p>
        </div>
        <div className="action-card">
          <h3>Auto-Save</h3>
          <p>Changes are automatically saved after 1.5 seconds of inactivity. Use Cmd+S for manual save.</p>
        </div>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--slds-blue-dark)', marginBottom: 16 }}>
        Keyboard Shortcuts
      </h2>

      <div style={{
        background: 'white',
        border: '1px solid var(--slds-gray-200)',
        borderRadius: 12,
        padding: 20,
        fontSize: 14,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid var(--slds-gray-200)', color: 'var(--slds-gray-500)', fontSize: 12 }}>
                Shortcut
              </th>
              <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid var(--slds-gray-200)', color: 'var(--slds-gray-500)', fontSize: 12 }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Cmd/Ctrl + S', 'Save file'],
              ['Cmd/Ctrl + B', 'Toggle bold'],
              ['Cmd/Ctrl + I', 'Toggle italic'],
              ['Cmd/Ctrl + Shift + V', 'Toggle preview'],
              ['Tab', 'Indent'],
              ['Shift + Tab', 'Outdent'],
            ].map(([key, action]) => (
              <tr key={key}>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--slds-gray-200)' }}>
                  <kbd style={{
                    background: 'var(--slds-gray-100)',
                    border: '1px solid var(--slds-gray-300)',
                    borderRadius: 4,
                    padding: '2px 8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                  }}>{key}</kbd>
                </td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--slds-gray-200)', color: 'var(--slds-gray-700)' }}>
                  {action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
