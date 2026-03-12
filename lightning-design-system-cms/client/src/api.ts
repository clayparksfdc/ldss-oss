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

export async function fetchHealth() {
  const res = await fetch(`${BASE}/health`);
  return res.json();
}

export async function fetchStats(): Promise<DashboardStats> {
  const res = await fetch(`${BASE}/api/dashboard/stats`);
  return res.json();
}

export async function fetchRecentActivity() {
  const res = await fetch(`${BASE}/api/dashboard/recent-activity`);
  return res.json();
}

export async function fetchLocalFiles(): Promise<FileEntry[]> {
  const res = await fetch(`${BASE}/api/local/files`);
  const data = await res.json();
  return data.files || [];
}

export async function fetchLocalFile(filePath: string): Promise<{ content: string; path: string }> {
  const res = await fetch(`${BASE}/api/local/file?path=${encodeURIComponent(filePath)}`);
  if (!res.ok) throw new Error(`Failed to load file: ${res.statusText}`);
  return res.json();
}

export async function saveLocalFile(filePath: string, content: string): Promise<void> {
  const res = await fetch(`${BASE}/api/local/file`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: filePath, content }),
  });
  if (!res.ok) throw new Error(`Failed to save file: ${res.statusText}`);
}

export async function createLocalFile(filePath: string, content: string): Promise<void> {
  const res = await fetch(`${BASE}/api/local/file`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: filePath, content }),
  });
  if (!res.ok) throw new Error(`Failed to create file: ${res.statusText}`);
}

export async function deleteLocalFile(filePath: string): Promise<void> {
  const res = await fetch(`${BASE}/api/local/file?path=${encodeURIComponent(filePath)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete file: ${res.statusText}`);
}
