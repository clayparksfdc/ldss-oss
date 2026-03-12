import express from 'express';
import session from 'express-session';
import type {} from 'passport';
import cors from 'cors';
import helmet from 'helmet';
import { Pool } from 'pg';
import connectPgSimple from 'connect-pg-simple';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import services
import { GitHubAPIService } from './services/github-api';

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

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully at:', res.rows[0].now);
  }
});

// Initialize GitHub service
const githubService = new GitHubAPIService(
  process.env.GITHUB_TOKEN || '',
  process.env.GITHUB_OWNER || '',
  process.env.GITHUB_REPO || ''
);

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      fontSrc: ["'self'", "https://cdn.jsdelivr.net", "data:"],
      imgSrc: ["'self'", "data:", "blob:"],
      connectSrc: ["'self'", "http://localhost:*"],
      workerSrc: ["'self'", "blob:", "https://cdn.jsdelivr.net"],
    },
  },
}));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
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

// API Routes
app.use('/auth', authRouter);
app.use('/api/content', createContentRouter(pool, githubService));
app.use('/api/github', createGitHubRouter(pool, githubService));
app.use('/api/navigation', createNavigationRouter(pool, githubService));
app.use('/api/locks', createLocksRouter(pool));
app.use('/api/local', createLocalContentRouter());
app.use('/api/tokens', createTokensRouter());
app.use('/', createDashboardRouter(pool));

// Serve the built CMS editor SPA
const editorPath = path.resolve(__dirname, '../public/editor');
app.use('/editor', express.static(editorPath));
app.get('/editor/*', (_req, res) => {
  res.sendFile(path.join(editorPath, 'index.html'));
});

// Audit log endpoint (admin only could be added with middleware)
app.get('/api/audit', async (req: any, res): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

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

    res.json({
      success: true,
      logs: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 404 handler
app.use(notFoundHandler);

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
