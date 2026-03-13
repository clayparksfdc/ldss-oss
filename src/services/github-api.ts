import { Octokit } from '@octokit/rest';
import { AppError, CreatePROptions, GitHubFile, PullRequest } from '../types';

const GH_BASE = process.env.GHE_BASE_URL || 'https://github.com';
const CUSTOM_API_URL = (GH_BASE !== 'https://github.com') ? `${GH_BASE}/api/v3` : undefined;

export class GitHubAPIService {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(token: string, owner: string, repo: string) {
    this.octokit = new Octokit({
      auth: token,
      ...(CUSTOM_API_URL && { baseUrl: CUSTOM_API_URL }),
    });
    this.owner = owner;
    this.repo = repo;
  }

  static forUser(userToken: string): GitHubAPIService {
    return new GitHubAPIService(
      userToken,
      process.env.GITHUB_OWNER || '',
      process.env.GITHUB_REPO || ''
    );
  }

  async getFile(path: string): Promise<{ content: string; sha: string }> {
    try {
      const { data } = await this.octokit.repos.getContent({
        owner: this.owner, repo: this.repo, path,
      });

      if (Array.isArray(data) || data.type !== 'file') {
        throw new AppError(`Path ${path} is not a file`, 400);
      }

      return {
        content: Buffer.from(data.content, 'base64').toString('utf-8'),
        sha: data.sha,
      };
    } catch (error: any) {
      if (error.status === 404) throw new AppError(`File not found: ${path}`, 404);
      if (error instanceof AppError) throw error;
      throw new AppError(`Failed to fetch file: ${error.message}`, 500);
    }
  }

  /**
   * Create a PR with an atomic multi-file commit using the Git Trees API.
   * This mirrors what octokit-plugin-create-pull-request does internally:
   *   1. Resolve base branch HEAD
   *   2. Create blobs for each changed file
   *   3. Build a new tree referencing those blobs
   *   4. Create a commit on that tree
   *   5. Create a branch ref pointing to the commit
   *   6. Open the pull request
   */
  async createPR(options: CreatePROptions): Promise<PullRequest> {
    const { files, title, body } = options;
    const branchName = `cms/${Date.now()}`;

    try {
      // Resolve the base branch: explicit option → env var → repo default
      let base = options.base;
      if (!base) {
        base = process.env.GITHUB_BASE_BRANCH;
      }
      if (!base) {
        const { data: repo } = await this.octokit.repos.get({
          owner: this.owner, repo: this.repo,
        });
        base = repo.default_branch;
      }

      const { data: baseRef } = await this.octokit.git.getRef({
        owner: this.owner, repo: this.repo,
        ref: `heads/${base}`,
      });
      const baseSha = baseRef.object.sha;

      const { data: baseCommit } = await this.octokit.git.getCommit({
        owner: this.owner, repo: this.repo,
        commit_sha: baseSha,
      });

      const treeItems = await Promise.all(
        files.map(async (file) => {
          const { data: blob } = await this.octokit.git.createBlob({
            owner: this.owner, repo: this.repo,
            content: Buffer.from(file.content).toString('base64'),
            encoding: 'base64',
          });
          return {
            path: file.path,
            mode: '100644' as const,
            type: 'blob' as const,
            sha: blob.sha,
          };
        })
      );

      const { data: tree } = await this.octokit.git.createTree({
        owner: this.owner, repo: this.repo,
        base_tree: baseCommit.tree.sha,
        tree: treeItems,
      });

      const { data: commit } = await this.octokit.git.createCommit({
        owner: this.owner, repo: this.repo,
        message: title,
        tree: tree.sha,
        parents: [baseSha],
      });

      await this.octokit.git.createRef({
        owner: this.owner, repo: this.repo,
        ref: `refs/heads/${branchName}`,
        sha: commit.sha,
      });

      const { data: pr } = await this.octokit.pulls.create({
        owner: this.owner, repo: this.repo,
        title, body,
        head: branchName,
        base,
      });

      return {
        number: pr.number,
        title: pr.title,
        html_url: pr.html_url,
        state: pr.state,
        created_at: pr.created_at,
        user: { login: pr.user?.login || 'unknown' },
      };
    } catch (error: any) {
      if (error instanceof AppError) throw error;
      throw new AppError(`Failed to create pull request: ${error.message}`, 500);
    }
  }

  async listFiles(path: string = ''): Promise<GitHubFile[]> {
    try {
      const { data } = await this.octokit.repos.getContent({
        owner: this.owner, repo: this.repo, path,
      });

      const items = Array.isArray(data) ? data : [data];
      return items.map((item: any) => ({
        name: item.name,
        path: item.path,
        sha: item.sha,
        size: item.size,
        url: item.url,
        html_url: item.html_url,
        git_url: item.git_url,
        download_url: item.download_url,
        type: item.type,
      }));
    } catch (error: any) {
      if (error.status === 404) throw new AppError(`Directory not found: ${path}`, 404);
      throw new AppError(`Failed to list files: ${error.message}`, 500);
    }
  }

  async searchMarkdownFiles(query: string = ''): Promise<GitHubFile[]> {
    try {
      const q = query
        ? `repo:${this.owner}/${this.repo} extension:md ${query}`
        : `repo:${this.owner}/${this.repo} extension:md`;

      const { data } = await this.octokit.search.code({ q, per_page: 100 });

      return data.items.map((item: any) => ({
        name: item.name,
        path: item.path,
        sha: item.sha,
        size: 0,
        url: item.url,
        html_url: item.html_url,
        git_url: item.git_url,
        download_url: '',
        type: 'file' as const,
      }));
    } catch (error: any) {
      throw new AppError(`Failed to search files: ${error.message}`, 500);
    }
  }

  async getRepoInfo() {
    try {
      const { data } = await this.octokit.repos.get({
        owner: this.owner, repo: this.repo,
      });

      return {
        name: data.name,
        full_name: data.full_name,
        description: data.description,
        default_branch: data.default_branch,
        html_url: data.html_url,
      };
    } catch (error: any) {
      throw new AppError(`Failed to get repository info: ${error.message}`, 500);
    }
  }
}
