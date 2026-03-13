import { Request } from 'express';

export interface User {
  id: number;
  github_id: number;
  github_login: string;
  email: string;
  name: string;
  avatar_url: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: Date;
  updated_at: Date;
}

export interface AuthenticatedRequest extends Request {
  user?: User;
  githubToken?: string;
}

// Draft types
export interface Draft {
  id: number;
  user_id: number;
  file_path: string;
  markdown: string;
  updated_at: Date;
}

// File lock types
export interface FileLock {
  id: number;
  file_path: string;
  user_id: number;
  locked_at: Date;
  expires_at: Date;
}

// Audit log types
export interface AuditLog {
  id: number;
  user_id: number | null;
  action: string;
  file_path?: string;
  pr_url?: string;
  metadata?: Record<string, any>;
  created_at: Date;
}

// GitHub API types
export interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: 'file' | 'dir';
  content?: string;
  encoding?: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
}

export interface PullRequest {
  number: number;
  title: string;
  html_url: string;
  state: string;
  created_at: string;
  user: {
    login: string;
  };
}

export interface CreatePROptions {
  branch: string;
  files: Array<{
    path: string;
    content: string;
  }>;
  title: string;
  body: string;
  base?: string;
}

// API Request/Response types
export interface SaveDraftRequest {
  markdown: string;
}

export interface SaveDraftResponse {
  success: boolean;
  draft: Draft;
}

export interface PublishContentRequest {
  markdown: string;
  commitMessage: string;
}

export interface PublishContentResponse {
  success: boolean;
  pr_url: string;
  pr_number: number;
}

export interface GetContentResponse {
  content: string;
  sha: string;
  draft?: Draft;
  lock?: FileLock & { user: { name: string; email: string } };
}

export interface LockResponse {
  success: boolean;
  lock?: FileLock;
  message?: string;
}

// Error types
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

declare module 'express-session' {
  interface SessionData {
    userId?: number;
    githubAccessToken?: string;
  }
}

export interface EnvConfig {
  NODE_ENV: string;
  PORT: string;
  SESSION_SECRET: string;
  FRONTEND_URL: string;
  DATABASE_URL: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BASE_BRANCH: string;
  GHE_CLIENT_ID: string;
  GHE_CLIENT_SECRET: string;
  GHE_CALLBACK_URL: string;
  GHE_BASE_URL: string;
  LOCK_DURATION_MINUTES: string;
}
