import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import { requireAuth } from '../middleware/auth';
import { AuthenticatedRequest } from '../types';
import {
  isCloudinaryConfigured,
  uploadBuffer,
  uploadFromUrl,
  listResources,
  deleteResource,
} from '../services/cloudinary';
import { parseFigmaUrl, fetchFigmaThumbnail } from '../services/figma';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB per file
});

function notConfigured(res: express.Response): void {
  res.status(503).json({
    error: 'Cloudinary is not configured',
    hint: 'Set CLOUDINARY_URL in .env (cloudinary://<key>:<secret>@<cloud_name>) or run `heroku addons:create cloudinary:starter`',
  });
}

export const createCloudinaryRouter = () => {
  const router = express.Router();

  router.use(requireAuth);

  router.get('/status', (_req, res) => {
    res.json({
      configured: isCloudinaryConfigured(),
      folder: process.env.CLOUDINARY_UPLOAD_FOLDER || 'ldss-cms',
    });
  });

  router.get('/list', async (req, res) => {
    if (!isCloudinaryConfigured()) return notConfigured(res);
    try {
      const folder = (req.query.folder as string) || undefined;
      const max = req.query.max ? Math.min(parseInt(req.query.max as string, 10), 200) : 50;
      const nextCursor = (req.query.cursor as string) || undefined;
      const result = await listResources({ folder, max, nextCursor });
      res.json(result);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/upload', upload.single('file'), async (req: AuthenticatedRequest, res) => {
    if (!isCloudinaryConfigured()) return notConfigured(res);
    const file = (req as any).file as Express.Multer.File | undefined;
    if (!file) {
      res.status(400).json({ error: 'No file uploaded (expected multipart field "file")' });
      return;
    }
    try {
      const folder = typeof req.body.folder === 'string' ? req.body.folder : undefined;
      const tags = ['ldss-cms', `uploader:${req.user!.github_login}`];
      const result = await uploadBuffer(file.buffer, {
        folder,
        tags,
        context: { uploadedBy: req.user!.github_login },
      });
      res.json({ success: true, ...result });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  router.delete('/resource', async (req, res) => {
    if (!isCloudinaryConfigured()) return notConfigured(res);
    const publicId = (req.query.publicId as string) || (req.body && req.body.publicId);
    if (!publicId) {
      res.status(400).json({ error: 'publicId required' });
      return;
    }
    try {
      const result = await deleteResource(publicId);
      res.json({ success: true, ...result });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  /**
   * Figma → Cloudinary snapshot.
   *
   * Body: { figmaUrl: string }
   * Returns: { secureUrl, publicId, fileKey, nodeId, fingerprint }
   *
   * The fingerprint (sha256 of fileKey:nodeId) lets the markdown directive
   * detect when the same Figma node has been re-imported and re-fetch.
   */
  router.post('/figma-snapshot', async (req: AuthenticatedRequest, res) => {
    if (!isCloudinaryConfigured()) return notConfigured(res);
    const figmaUrl = (req.body && req.body.figmaUrl) as string | undefined;
    if (!figmaUrl) {
      res.status(400).json({ error: 'figmaUrl required' });
      return;
    }
    if (!process.env.FIGMA_ACCESS_TOKEN) {
      res.status(503).json({
        error: 'Figma is not configured',
        hint: 'Set FIGMA_ACCESS_TOKEN in .env (https://www.figma.com/settings → Personal access tokens)',
      });
      return;
    }
    try {
      const parts = parseFigmaUrl(figmaUrl);
      const thumb = await fetchFigmaThumbnail({
        fileKey: parts.fileKey,
        nodeId: parts.nodeId,
      });

      const fingerprint = crypto
        .createHash('sha256')
        .update(`${parts.fileKey}:${parts.nodeId ?? 'file'}`)
        .digest('hex')
        .slice(0, 16);

      const result = await uploadFromUrl(thumb.url, {
        folder: 'figma',
        filename: `${parts.fileKey}-${parts.nodeId?.replace(/:/g, '_') ?? 'file'}-${fingerprint}`,
        tags: ['ldss-cms', 'figma', `uploader:${req.user!.github_login}`],
        context: {
          source: 'figma',
          fileKey: parts.fileKey,
          nodeId: parts.nodeId ?? '',
          uploadedBy: req.user!.github_login,
          originalUrl: figmaUrl,
        },
      });

      res.json({
        success: true,
        ...result,
        fileKey: parts.fileKey,
        nodeId: parts.nodeId,
        fingerprint,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
