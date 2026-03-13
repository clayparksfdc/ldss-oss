const BASE = '';

function handleAuthFailure(status: number): void {
  if (status === 401 || status === 500) {
    window.location.href = status === 500 ? '/editor?auth_error=1' : '/editor';
  }
}

async function fetchWithAuth(url: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(url, { ...init, credentials: 'include' });
  if (res.status === 401 || res.status === 500) {
    handleAuthFailure(res.status);
    throw new Error(res.status === 401 ? 'Session expired' : 'Session timed out');
  }
  return res;
}

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
  await fetchWithAuth(`${BASE}/auth/logout`, { method: 'POST' });
}

// ── Publish to GitHub (creates branch + commit + PR as the logged-in user) ──

export async function publishFile(
  filePath: string,
  markdown: string,
  commitMessage: string
): Promise<PublishResult> {
  const res = await fetchWithAuth(`${BASE}/api/github/publish/${encodeURIComponent(filePath)}`, {
    method: 'POST',
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
  const res = await fetchWithAuth(`${BASE}/api/github/remote/${encodeURIComponent(filePath)}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.notFound ? null : data.content;
}

export async function syncFromGitHub(filePath: string): Promise<string> {
  const res = await fetchWithAuth(`${BASE}/api/github/sync/${encodeURIComponent(filePath)}`, {
    method: 'POST',
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
  const res = await fetchWithAuth(`${BASE}/api/dashboard/stats`);
  return res.json();
}

export async function fetchRecentActivity() {
  const res = await fetchWithAuth(`${BASE}/api/dashboard/recent-activity`);
  return res.json();
}

// ── Local file operations (filesystem-based editing) ──

const FILES_CACHE_KEY = 'ldss-cms-files';
const FILES_CACHE_TTL_MS = 15_000;

export async function fetchLocalFiles(useCache = true): Promise<FileEntry[]> {
  if (useCache && typeof sessionStorage !== 'undefined') {
    try {
      const cached = sessionStorage.getItem(FILES_CACHE_KEY);
      if (cached) {
        const { files, at } = JSON.parse(cached);
        if (Date.now() - at < FILES_CACHE_TTL_MS) return files;
      }
    } catch { /* ignore */ }
  }
  const res = await fetchWithAuth(`${BASE}/api/local/files`);
  const data = await res.json();
  const files = data.files || [];
  if (typeof sessionStorage !== 'undefined') {
    try {
      sessionStorage.setItem(FILES_CACHE_KEY, JSON.stringify({ files, at: Date.now() }));
    } catch { /* ignore */ }
  }
  return files;
}

export function invalidateFilesCache(): void {
  try {
    sessionStorage?.removeItem(FILES_CACHE_KEY);
  } catch { /* ignore */ }
}

export async function fetchLocalFile(filePath: string): Promise<{ content: string; path: string }> {
  const res = await fetchWithAuth(`${BASE}/api/local/file?path=${encodeURIComponent(filePath)}`);
  if (!res.ok) throw new Error(`Failed to load file: ${res.statusText}`);
  return res.json();
}

export async function saveLocalFile(filePath: string, content: string): Promise<void> {
  const res = await fetchWithAuth(`${BASE}/api/local/file`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: filePath, content }),
  });
  if (!res.ok) throw new Error(`Failed to save file: ${res.statusText}`);
}

export async function createLocalFile(filePath: string, content: string): Promise<void> {
  const res = await fetchWithAuth(`${BASE}/api/local/file`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: filePath, content }),
  });
  if (!res.ok) throw new Error(`Failed to create file: ${res.statusText}`);
}

export async function deleteLocalFile(filePath: string): Promise<void> {
  const res = await fetchWithAuth(`${BASE}/api/local/file?path=${encodeURIComponent(filePath)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete file: ${res.statusText}`);
}
