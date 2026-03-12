import express, { Response } from 'express';
import { Pool } from 'pg';
import { AuthenticatedRequest, AppError } from '../types';
import { GitHubAPIService } from '../services/github-api';
import { requireAuth, requireEditor } from '../middleware/auth';
import { asyncHandler } from '../middleware/error';

export const createNavigationRouter = (pool: Pool, githubService: GitHubAPIService) => {
  const router = express.Router();

  /**
   * GET /api/navigation
   * Get navigation structure from GitHub
   */
  router.get(
    '/',
    requireAuth,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const navigationPath = 'navigation.json'; // or whatever path is used

      try {
        const { content } = await githubService.getFile(navigationPath);
        const navigation = JSON.parse(content);

        res.json({
          success: true,
          navigation,
        });
      } catch (error: any) {
        if (error.statusCode === 404) {
          // Return empty navigation if file doesn't exist
          res.json({
            success: true,
            navigation: { items: [] },
          });
        } else {
          throw error;
        }
      }
    })
  );

  /**
   * PUT /api/navigation
   * Update navigation structure
   */
  router.put(
    '/',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { navigation } = req.body;

      if (!navigation) {
        throw new AppError('Navigation data is required', 400);
      }

      const navigationPath = 'navigation.json';

      // Validate navigation structure
      if (!navigation.items || !Array.isArray(navigation.items)) {
        throw new AppError('Navigation must have an items array', 400);
      }

      // Create a pull request with the updated navigation
      const pr = await githubService.createPR({
        branch: `cms-nav-update-${Date.now()}`,
        files: [
          {
            path: navigationPath,
            content: JSON.stringify(navigation, null, 2),
          },
        ],
        title: 'Update navigation structure',
        body: `**Updated by:** ${req.user!.name} (${req.user!.email})

**Description:** Navigation structure has been updated.

---
*This PR was created automatically by the Lightning Design System CMS.*`,
      });

      res.json({
        success: true,
        pr_url: pr.html_url,
        pr_number: pr.number,
      });

      // Log the action
      await pool.query(
        'INSERT INTO audit_log (user_id, action, file_path, pr_url, metadata) VALUES ($1, $2, $3, $4, $5)',
        [
          req.user!.id,
          'update_navigation',
          navigationPath,
          pr.html_url,
          JSON.stringify({ pr_number: pr.number }),
        ]
      );
    })
  );

  /**
   * GET /api/navigation/tree
   * Get file tree structure for navigation building
   */
  router.get(
    '/tree',
    requireEditor,
    asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
      const { path = '' } = req.query;

      const files = await githubService.listFiles(path as string);

      // Build tree structure
      const tree = files.map((file) => ({
        name: file.name,
        path: file.path,
        type: file.type,
        isMarkdown: file.name.endsWith('.md'),
      }));

      res.json({
        success: true,
        tree,
      });
    })
  );

  return router;
};

export default createNavigationRouter;
