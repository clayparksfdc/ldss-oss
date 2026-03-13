import express, { Response } from 'express';
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
import { Pool } from 'pg';
import { AuthenticatedRequest, User, AppError } from '../types';
import { asyncHandler } from '../middleware/error';

const router = express.Router();

const GH_BASE = process.env.GHE_BASE_URL || 'https://github.com';
const GH_API = GH_BASE === 'https://github.com' ? 'https://api.github.com' : `${GH_BASE}/api/v3`;

export const initializePassport = (pool: Pool) => {
  const strategy = new OAuth2Strategy(
    {
      authorizationURL: `${GH_BASE}/login/oauth/authorize`,
        tokenURL: `${GH_BASE}/login/oauth/access_token`,
      clientID: process.env.GHE_CLIENT_ID || '',
      clientSecret: process.env.GHE_CLIENT_SECRET || '',
      callbackURL: process.env.GHE_CALLBACK_URL || 'http://localhost:4000/auth/github/callback',
    },
    async (accessToken: string, _refreshToken: string, _profile: any, done: any) => {
        try {
          const userRes = await fetch(`${GH_API}/user`, {
            headers: { Authorization: `token ${accessToken}` },
          });

          if (!userRes.ok) {
            return done(new Error('Failed to fetch GitHub Enterprise user info'));
          }

          const ghUser: any = await userRes.json();

          const emailsRes = await fetch(`${GH_API}/user/emails`, {
            headers: { Authorization: `token ${accessToken}` },
          });
          let email = ghUser.email || '';
          if (emailsRes.ok) {
            const emails = (await emailsRes.json()) as any[];
            const primary = emails.find((e: any) => e.primary) || emails[0];
            if (primary) email = primary.email;
          }

          const existing = await pool.query(
            'SELECT * FROM users WHERE github_id = $1',
            [ghUser.id]
          );

          let user: User;

          if (existing.rows.length > 0) {
            const updated = await pool.query(
              `UPDATE users SET email = $1, name = $2, github_login = $3, avatar_url = $4,
               updated_at = CURRENT_TIMESTAMP WHERE github_id = $5 RETURNING *`,
              [email, ghUser.name || ghUser.login, ghUser.login, ghUser.avatar_url || '', ghUser.id]
            );
            user = updated.rows[0];
          } else {
            const created = await pool.query(
              `INSERT INTO users (github_id, github_login, email, name, avatar_url, role)
               VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
              [ghUser.id, ghUser.login, email, ghUser.name || ghUser.login, ghUser.avatar_url || '', 'editor']
            );
            user = created.rows[0];
          }

          await pool.query(
            'INSERT INTO audit_log (user_id, action, metadata) VALUES ($1, $2, $3)',
            [user.id, 'login', JSON.stringify({ email: user.email, github_login: ghUser.login })]
          );

          (user as any)._accessToken = accessToken;
          return done(null, user);
        } catch (error) {
          return done(error as Error);
        }
      }
  );

  // Wrap the internal OAuth2 getOAuthAccessToken to capture detailed errors
  const originalGetToken = (strategy as any)._oauth2.getOAuthAccessToken.bind((strategy as any)._oauth2);
  (strategy as any)._oauth2.getOAuthAccessToken = function(code: string, params: any, cb: any) {
    console.log('[OAuth] Exchanging code for token at:', `${GH_BASE}/login/oauth/access_token`);
    originalGetToken(code, params, (err: any, accessToken: any, refreshToken: any, results: any) => {
      if (err) {
        console.error('[OAuth] Token exchange failed:', {
          statusCode: err.statusCode,
          data: typeof err.data === 'string' ? err.data.substring(0, 500) : err.data,
          message: err.message,
        });
      } else {
        console.log('[OAuth] Token exchange succeeded');
      }
      cb(err, accessToken, refreshToken, results);
    });
  };

  passport.use('github-enterprise', strategy);

  passport.serializeUser((user: any, done) => {
    done(null, { id: user.id, accessToken: user._accessToken });
  });

  passport.deserializeUser(async (data: any, done) => {
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [data.id]);
      if (result.rows.length === 0) {
        return done(new Error('User not found'));
      }
      const user = result.rows[0];
      (user as any)._accessToken = data.accessToken;
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  return passport;
};

router.get(
  '/github',
  passport.authenticate('github-enterprise', {
    scope: ['repo', 'user', 'user:email'],
  })
);

router.get(
  '/github/callback',
  (req, res, next) => {
    passport.authenticate('github-enterprise', (err: any, user: any, info: any) => {
      if (err) {
        console.error('OAuth callback error:', err.message || err);
        return res.status(500).json({ success: false, error: { message: err.message || 'OAuth authentication failed' } });
      }
      if (!user) {
        console.error('OAuth callback: no user returned', info);
        return res.redirect('/editor');
      }
      req.logIn(user, (loginErr) => {
        if (loginErr) {
          console.error('Login error:', loginErr);
          return res.status(500).json({ success: false, error: { message: 'Login failed' } });
        }
        return res.redirect('/editor');
      });
    })(req, res, next);
  }
);

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
        github_login: req.user.github_login,
        avatar_url: req.user.avatar_url,
      },
    });
  })
);

router.post(
  '/logout',
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    req.logout((err) => {
      if (err) {
        throw new AppError('Failed to logout', 500);
      }
      req.session.destroy((err) => {
        if (err) {
          throw new AppError('Failed to destroy session', 500);
        }
        res.json({ success: true, message: 'Logged out successfully' });
      });
    });
  })
);

export default router;
