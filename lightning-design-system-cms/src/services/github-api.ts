import { Octokit } from '@octokit/rest';
import { GitHubFile, CreatePROptions, PullRequest, AppError } from '../types';

export class GitHubAPIService {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(token: string, owner: string, repo: string) {
    this.octokit = new Octokit({ auth: token });
    this.owner = owner;
    this.repo = repo;
  }

  /**
   * Get a file from the repository
   */
  async getFile(path: string): Promise<{ content: string; sha: string }> {
    try {
      const response = await this.octokit.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      });

      if (Array.isArray(response.data) || response.data.type !== 'file') {
        throw new AppError(`Path ${path} is not a file`, 400);
      }

      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      return {
        content,
        sha: response.data.sha,
      };
    } catch (error: any) {
      if (error.status === 404) {
        throw new AppError(`File not found: ${path}`, 404);
      }
      throw new AppError(`Failed to fetch file: ${error.message}`, 500);
    }
  }

  /**
   * Update a file in the repository (creates a commit)
   */
  async updateFile(
    path: string,
    content: string,
    message: string,
    branch: string,
    sha?: string
  ): Promise<{ commit: string; sha: string }> {
    try {
      const response = await this.octokit.repos.createOrUpdateFileContents({
        owner: this.owner,
        repo: this.repo,
        path,
        message,
        content: Buffer.from(content).toString('base64'),
        branch,
        ...(sha && { sha }),
      });

      return {
        commit: response.data.commit.sha || '',
        sha: response.data.content?.sha || '',
      };
    } catch (error: any) {
      throw new AppError(`Failed to update file: ${error.message}`, 500);
    }
  }

  /**
   * Create a new branch from the base branch
   */
  async createBranch(branchName: string, baseBranch: string = 'main'): Promise<string> {
    try {
      // Get the base branch reference
      const baseRef = await this.octokit.git.getRef({
        owner: this.owner,
        repo: this.repo,
        ref: `heads/${baseBranch}`,
      });

      // Create the new branch
      const response = await this.octokit.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: `refs/heads/${branchName}`,
        sha: baseRef.data.object.sha,
      });

      return response.data.ref;
    } catch (error: any) {
      if (error.status === 422) {
        throw new AppError(`Branch ${branchName} already exists`, 409);
      }
      throw new AppError(`Failed to create branch: ${error.message}`, 500);
    }
  }

  /**
   * Create a pull request with multiple file changes
   */
  async createPR(options: CreatePROptions): Promise<PullRequest> {
    const { branch: _branch, files, title, body, base = 'main' } = options;

    try {
      // Create a new branch
      const branchName = `cms-update-${Date.now()}`;
      await this.createBranch(branchName, base);

      // Update all files in the branch
      for (const file of files) {
        try {
          // Try to get the existing file SHA
          const { sha } = await this.getFile(file.path);
          await this.updateFile(file.path, file.content, `Update ${file.path}`, branchName, sha);
        } catch (error: any) {
          if (error.statusCode === 404) {
            // File doesn't exist, create it without SHA
            await this.updateFile(file.path, file.content, `Create ${file.path}`, branchName);
          } else {
            throw error;
          }
        }
      }

      // Create the pull request
      const prResponse = await this.octokit.pulls.create({
        owner: this.owner,
        repo: this.repo,
        title,
        body,
        head: branchName,
        base,
      });

      return {
        number: prResponse.data.number,
        title: prResponse.data.title,
        html_url: prResponse.data.html_url,
        state: prResponse.data.state,
        created_at: prResponse.data.created_at,
        user: {
          login: prResponse.data.user?.login || 'unknown',
        },
      };
    } catch (error: any) {
      throw new AppError(`Failed to create pull request: ${error.message}`, 500);
    }
  }

  /**
   * List files in a directory
   */
  async listFiles(path: string = ''): Promise<GitHubFile[]> {
    try {
      const response = await this.octokit.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      });

      if (!Array.isArray(response.data)) {
        return [response.data as any];
      }

      return response.data.map((item: any) => ({
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
      if (error.status === 404) {
        throw new AppError(`Directory not found: ${path}`, 404);
      }
      throw new AppError(`Failed to list files: ${error.message}`, 500);
    }
  }

  /**
   * Search for markdown files in the repository
   */
  async searchMarkdownFiles(query: string = ''): Promise<GitHubFile[]> {
    try {
      const searchQuery = query
        ? `repo:${this.owner}/${this.repo} extension:md ${query}`
        : `repo:${this.owner}/${this.repo} extension:md`;

      const response = await this.octokit.search.code({
        q: searchQuery,
        per_page: 100,
      });

      return response.data.items.map((item: any) => ({
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

  /**
   * Get repository information
   */
  async getRepoInfo() {
    try {
      const response = await this.octokit.repos.get({
        owner: this.owner,
        repo: this.repo,
      });

      return {
        name: response.data.name,
        full_name: response.data.full_name,
        description: response.data.description,
        default_branch: response.data.default_branch,
        html_url: response.data.html_url,
      };
    } catch (error: any) {
      throw new AppError(`Failed to get repository info: ${error.message}`, 500);
    }
  }
}
