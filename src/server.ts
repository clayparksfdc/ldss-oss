import express from 'express';
import session from 'express-session';
import 'passport';
import cors from 'cors';
import helmet from 'helmet';
import { Pool } from 'pg';
import connectPgSimple from 'connect-pg-simple';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import authRouter, { initializePassport } from './routes/auth';
import { createContentRouter } from './routes/content';
import { createGitHubRouter } from './routes/github';
import { createNavigationRouter } from './routes/navigation';
import { createLocksRouter } from './routes/locks';
import { createDashboardRouter } from './routes/dashboard';
import { createLocalContentRouter } from './routes/local-content';
import { createTokensRouter } from './routes/tokens';
import path from 'path';

// Import middleware
import { errorHandler, notFoundHandler } from './middleware/error';
import { requireAuth } from './middleware/auth';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully at:', res.rows[0].now);
  }
});

// GitHub repo config (per-user tokens are attached at request time via auth middleware)

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      fontSrc: ["'self'", "https://cdn.jsdelivr.net", "data:"],
      imgSrc: ["'self'", "data:", "blob:", "https://avatars.githubusercontent.com", "https://*.githubusercontent.com", "https://res.cloudinary.com"],
      connectSrc: ["'self'", "http://localhost:*", "https://*.herokuapp.com"],
      workerSrc: ["'self'", "blob:", "https://cdn.jsdelivr.net"],
      frameSrc: ["'self'", "https://*.storybook.js.org", "https://*.chromatic.com", "https://*.herokuapp.com", "https://v1.lightningdesignsystem.com"],
      mediaSrc: ["'self'", "https://res.cloudinary.com"],
    },
  },
}));
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'http://localhost:5173',
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Session configuration
const PgSession = connectPgSimple(session);
app.use(
  session({
    store: new PgSession({
      pool,
      tableName: 'session',
      createTableIfMissing: false,
    }),
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    },
  })
);

// Initialize Passport
const passportInstance = initializePassport(pool);
app.use(passportInstance.initialize());
app.use(passportInstance.session());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// ── Public routes ──
app.use('/auth', authRouter);

// Editor SPA (CMS admin panel)
const editorPath = path.resolve(__dirname, '../public/editor');
app.use('/editor', express.static(editorPath));
app.get('/editor/*', (_req, res) => {
  res.sendFile(path.join(editorPath, 'index.html'));
});

// ── Auth gate: all /api/* routes require a valid GitHub session ──
app.use('/api', (req, res, next) => {
  if (req.user) return next();
  res.status(401).json({ error: 'Authentication required' });
});

// ── Protected API routes ──
app.use('/api/content', createContentRouter(pool));
app.use('/api/github', createGitHubRouter(pool));
app.use('/api/navigation', createNavigationRouter(pool));
app.use('/api/locks', createLocksRouter(pool));
app.use('/api/local', createLocalContentRouter());
app.use('/api/tokens', createTokensRouter());
app.use('/api/dashboard', createDashboardRouter(pool));

app.get('/api/audit', requireAuth, async (req: any, res): Promise<void> => {
  try {
    const limit = parseInt((req.query.limit as string) || '50', 10);
    const offset = parseInt((req.query.offset as string) || '0', 10);

    const result = await pool.query(
      `SELECT al.*, u.name, u.email
       FROM audit_log al
       LEFT JOIN users u ON al.user_id = u.id
       ORDER BY al.created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    res.json({ success: true, logs: result.rows });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ── Static frontend (Next.js export) served at root ──
const frontendOutPath = path.resolve(__dirname, '../frontend/out');
const fs = require('fs');
if (fs.existsSync(frontendOutPath)) {
  app.use('/_next', express.static(path.join(frontendOutPath, '_next'), { maxAge: '1y' }));
  app.use('/assets', express.static(path.join(frontendOutPath, 'assets'), { maxAge: '1d' }));
  app.use('/media', express.static(path.join(frontendOutPath, 'media'), { maxAge: '1d' }));

  app.use(express.static(frontendOutPath, { index: 'index.html' }));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/auth') ||
        req.path.startsWith('/editor') || req.path === '/health') {
      return next();
    }
    const reqPath = req.path;
    const htmlFile = path.join(frontendOutPath, reqPath, 'index.html');
    const directFile = path.join(frontendOutPath, reqPath + '.html');
    if (fs.existsSync(htmlFile)) {
      res.sendFile(htmlFile);
    } else if (fs.existsSync(directFile)) {
      res.sendFile(directFile);
    } else {
      res.sendFile(path.join(frontendOutPath, '404.html'));
    }
  });
} else {
  app.get('/', (_req, res) => res.redirect('/editor'));
  app.use(notFoundHandler);
}

// Global error handler (must be last)
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  console.log(`
🚀 Lightning Design System CMS Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Environment: ${process.env.NODE_ENV || 'development'}
Port: ${PORT}
Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}
GitHub Repo: ${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Server is ready at http://localhost:${PORT}
Health check: http://localhost:${PORT}/health
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    pool.end(() => {
      console.log('Database pool closed');
      process.exit(0);
    });
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    pool.end(() => {
      console.log('Database pool closed');
      process.exit(0);
    });
  });
});

export default app;
