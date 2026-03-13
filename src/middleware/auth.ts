import { Response, NextFunction } from 'express';
import { AuthenticatedRequest, AppError } from '../types';

export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    throw new AppError('Authentication required', 401);
  }
  req.githubToken = (req.user as any)._accessToken;
  next();
};

export const requireRole = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new AppError('Authentication required', 401);
    }
    if (!roles.includes(req.user.role)) {
      throw new AppError('Insufficient permissions', 403);
    }
    req.githubToken = (req.user as any)._accessToken;
    next();
  };
};

export const requireAdmin = requireRole('admin');

export const requireEditor = requireRole('admin', 'editor');

export const optionalAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (req.user) {
    req.githubToken = (req.user as any)._accessToken;
  }
  next();
};
