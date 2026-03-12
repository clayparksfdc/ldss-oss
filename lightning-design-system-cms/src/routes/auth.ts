import express, { Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
import { Pool } from 'pg';
import { AuthenticatedRequest, User, AppError } from '../types';
import { asyncHandler } from '../middleware/error';

const router = express.Router();

/**
 * Initialize Passport with Salesforce OAuth2 strategy
 */
export const initializePassport = (pool: Pool) => {
  // Configure Salesforce OAuth2 Strategy
  passport.use(
    'salesforce',
    new OAuth2Strategy(
      {
        authorizationURL: process.env.SALESFORCE_AUTH_URL || '',
        tokenURL: process.env.SALESFORCE_TOKEN_URL || '',
        clientID: process.env.SALESFORCE_CLIENT_ID || '',
        clientSecret: process.env.SALESFORCE_CLIENT_SECRET || '',
        callbackURL: process.env.SALESFORCE_CALLBACK_URL || '',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Fetch user info from Salesforce
          const userInfoResponse = await fetch(
            `${process.env.SALESFORCE_AUTH_URL?.replace('/authorize', '')}/userinfo`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          const userInfo: any = await userInfoResponse.json();

          // Find or create user in database
          const existingUser = await pool.query(
            'SELECT * FROM users WHERE salesforce_id = $1',
            [userInfo.user_id]
          );

          let user: User;

          if (existingUser.rows.length > 0) {
            // Update existing user
            const updated = await pool.query(
              'UPDATE users SET email = $1, name = $2, updated_at = CURRENT_TIMESTAMP WHERE salesforce_id = $3 RETURNING *',
              [userInfo.email, userInfo.name, userInfo.user_id]
            );
            user = updated.rows[0];
          } else {
            // Create new user with default role
            const created = await pool.query(
              'INSERT INTO users (salesforce_id, email, name, role) VALUES ($1, $2, $3, $4) RETURNING *',
              [userInfo.user_id, userInfo.email, userInfo.name, 'editor']
            );
            user = created.rows[0];
          }

          // Log the authentication
          await pool.query(
            'INSERT INTO audit_log (user_id, action, metadata) VALUES ($1, $2, $3)',
            [user.id, 'login', JSON.stringify({ email: user.email })]
          );

          return done(null, user);
        } catch (error) {
          return done(error as Error);
        }
      }
    )
  );

  // Serialize user to session
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  // Deserialize user from session
  passport.deserializeUser(async (id: number, done) => {
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return done(new Error('User not found'));
      }
      done(null, result.rows[0]);
    } catch (error) {
      done(error);
    }
  });

  return passport;
};

/**
 * POST /auth/salesforce
 * Initiate Salesforce OAuth flow
 */
router.get(
  '/salesforce',
  passport.authenticate('salesforce', {
    scope: ['openid', 'email', 'profile'],
  })
);

/**
 * GET /auth/salesforce/callback
 * Salesforce OAuth callback
 */
router.get(
  '/salesforce/callback',
  passport.authenticate('salesforce', { failureRedirect: '/login' }),
  (req: AuthenticatedRequest, res: Response) => {
    // Successful authentication
    res.redirect(process.env.FRONTEND_URL || 'http://localhost:3000');
  }
);

/**
 * GET /auth/user
 * Get current authenticated user
 */
router.get(
  '/user',
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
      throw new AppError('Not authenticated', 401);
    }

    res.json({
      success: true,
      user: {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
      },
    });
  })
);

/**
 * POST /auth/logout
 * Logout user and destroy session
 */
router.post(
  '/logout',
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id;

    req.logout((err) => {
      if (err) {
        throw new AppError('Failed to logout', 500);
      }

      req.session.destroy((err) => {
        if (err) {
          throw new AppError('Failed to destroy session', 500);
        }

        res.json({
          success: true,
          message: 'Logged out successfully',
        });
      });
    });
  })
);

export default router;
