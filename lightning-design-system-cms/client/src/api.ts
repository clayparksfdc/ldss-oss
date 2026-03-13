const BASE = '';

export interface FileEntry {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileEntry[];
}

export interface DashboardStats {
  users: number;
  drafts: number;
  activeLocks: number;
  auditEntries: number;
}

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: string;
  github_login: string;
  avatar_url: string;
}

export interface PublishResult {
  success: boolean;
  pr_url: string;
  pr_number: number;
}

// ── Auth ──

export async function fetchCurrentUser(): Promise<AuthUser | null> {
  try {
    const res = await fetch(`${BASE}/auth/user`, { credentials: 'include' });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.user : null;
  } catch {
    return null;
  }
}

export async function logout(): Promise<void> {
  await fetch(`${BASE}/auth/logout`, { method: 'POST', credentials: 'include' });
}

// ── Publish to GitHub (creates branch + commit + PR as the logged-in user) ──

export async function publishFile(
  filePath: string,
  markdown: string,
  commitMessage: string
): Promise<PublishResult> {
  const res = await fetch(`${BASE}/api/github/publish/${encodeURIComponent(filePath)}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ markdown, commitMessage }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error?.message || err.message || 'Publish failed');
  }
  return res.json();
}

// ── Sync with GitHub (fetch remote content, optionally overwrite local) ──

export async function fetchRemoteContent(filePath: string): Promise<string | null> {
  const res = await fetch(`${BASE}/api/github/remote/${encodeURIComponent(filePath)}`, {
    credentials: 'include',
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.notFound ? null : data.content;
}

export async function syncFromGitHub(filePath: string): Promise<string> {
  const res = await fetch(`${BASE}/api/github/sync/${encodeURIComponent(filePath)}`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error?.message || err.message || 'Sync failed');
  }
  const data = await res.json();
  return data.content;
}

// ── Health / Dashboard ──

export async function fetchHealth() {
  const res = await fetch(`${BASE}/health`);
  return res.json();
}

export async function fetchStats(): Promise<DashboardStats> {
  const res = await fetch(`${BASE}/api/dashboard/stats`, { credentials: 'include' });
  return res.json();
}

export async function fetchRecentActivity() {
  const res = await fetch(`${BASE}/api/dashboard/recent-activity`, { credentials: 'include' });
  return res.json();
}

// ── Local file operations (filesystem-based editing) ──

export async function fetchLocalFiles(): Promise<FileEntry[]> {
  const res = await fetch(`${BASE}/api/local/files`, { credentials: 'include' });
  const data = await res.json();
  return data.files || [];
}

export async function fetchLocalFile(filePath: string): Promise<{ content: string; path: string }> {
  const res = await fetch(`${BASE}/api/local/file?path=${encodeURIComponent(filePath)}`, { credentials: 'include' });
  if (!res.ok) throw new Error(`Failed to load file: ${res.statusText}`);
  return res.json();
}

export async function saveLocalFile(filePath: string, content: string): Promise<void> {
  const res = await fetch(`${BASE}/api/local/file`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: filePath, content }),
  });
  if (!res.ok) throw new Error(`Failed to save file: ${res.statusText}`);
}

export async function createLocalFile(filePath: string, content: string): Promise<void> {
  const res = await fetch(`${BASE}/api/local/file`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: filePath, content }),
  });
  if (!res.ok) throw new Error(`Failed to create file: ${res.statusText}`);
}

export async function deleteLocalFile(filePath: string): Promise<void> {
  const res = await fetch(`${BASE}/api/local/file?path=${encodeURIComponent(filePath)}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error(`Failed to delete file: ${res.statusText}`);
}
