import { Response, NextFunction } from 'express';
import { AuthenticatedRequest, AppError } from '../types';

/**
 * Middleware to check if user is authenticated
 */
export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    throw new AppError('Authentication required', 401);
  }
  next();
};

/**
 * Middleware to check if user has a specific role
 */
export const requireRole = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new AppError('Authentication required', 401);
    }

    if (!roles.includes(req.user.role)) {
      throw new AppError('Insufficient permissions', 403);
    }

    next();
  };
};

/**
 * Middleware to check if user is an admin
 */
export const requireAdmin = requireRole('admin');

/**
 * Middleware to check if user can edit content
 */
export const requireEditor = requireRole('admin', 'editor');

/**
 * Optional auth - sets user if authenticated but doesn't require it
 */
export const optionalAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  // User will be set by passport if authenticated
  next();
};
