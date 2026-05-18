import type { RepoPermission } from '../types';

const WRITE_LEVEL: ReadonlySet<RepoPermission> = new Set(['admin', 'maintain', 'write']);

export function hasWriteAccess(permission: RepoPermission | null | undefined): boolean {
  return !!permission && WRITE_LEVEL.has(permission);
}

/**
 * Fetch a user's permission on the configured target repo.
 *
 * Uses GitHub's `/repos/{owner}/{repo}/collaborators/{username}/permission` endpoint,
 * which returns one of: admin, maintain, write, triage, read, none.
 *
 * Returns null when the API responds 404 (user is not a collaborator) — callers
 * should treat null the same as 'none'.
 */
export async function fetchRepoPermission(opts: {
  accessToken: string;
  apiBase: string;
  owner: string;
  repo: string;
  username: string;
}): Promise<RepoPermission | null> {
  const { accessToken, apiBase, owner, repo, username } = opts;
  const url = `${apiBase}/repos/${owner}/${repo}/collaborators/${username}/permission`;

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`GitHub permission check failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as { permission?: string };
  const perm = (data.permission || 'none') as RepoPermission;
  return perm;
}
