/**
 * Figma frame snapshot service.
 *
 * Given a Figma URL like:
 *   https://www.figma.com/file/<fileKey>/<title>?node-id=123-456
 *   https://www.figma.com/design/<fileKey>/<title>?node-id=123:456
 *
 * Returns a temporary signed image URL for the referenced node, which we then
 * pipe to Cloudinary for durable hosting.
 *
 * Docs: https://www.figma.com/developers/api#get-images-endpoint
 */

export interface FigmaUrlParts {
  fileKey: string;
  nodeId: string | null;
  fileType: 'file' | 'design' | 'proto';
}

const FIGMA_API = 'https://api.figma.com/v1';

export function parseFigmaUrl(url: string): FigmaUrlParts {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Not a valid URL: ${url}`);
  }

  if (!/figma\.com$/.test(parsed.hostname.replace(/^www\./, ''))) {
    throw new Error(`Not a Figma URL: ${url}`);
  }

  // Path looks like /file/<key>/<slug> or /design/<key>/<slug> or /proto/<key>/<slug>
  const m = parsed.pathname.match(/^\/(file|design|proto)\/([A-Za-z0-9]+)/);
  if (!m) {
    throw new Error(`Could not extract file key from Figma URL: ${url}`);
  }

  const fileType = m[1] as FigmaUrlParts['fileType'];
  const fileKey = m[2];
  // Figma URLs use node-id=12-34 in newer share links; the API accepts 12:34.
  const rawNode = parsed.searchParams.get('node-id');
  const nodeId = rawNode ? rawNode.replace(/-/g, ':') : null;

  return { fileKey, nodeId, fileType };
}

export interface FigmaThumbnail {
  url: string;
  fileKey: string;
  nodeId: string | null;
  scale: number;
  format: 'png' | 'jpg' | 'svg' | 'pdf';
}

/**
 * Fetch a temporary signed image URL from Figma for the given node.
 * If no nodeId is supplied, falls back to the file's overall thumbnail.
 */
export async function fetchFigmaThumbnail(opts: {
  fileKey: string;
  nodeId: string | null;
  scale?: number;
  format?: 'png' | 'jpg' | 'svg' | 'pdf';
  accessToken?: string;
}): Promise<FigmaThumbnail> {
  const token = opts.accessToken ?? process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    throw new Error('FIGMA_ACCESS_TOKEN not configured');
  }

  const scale = opts.scale ?? 2;
  const format = opts.format ?? 'png';

  const headers = { 'X-Figma-Token': token };

  if (opts.nodeId) {
    const url = `${FIGMA_API}/images/${opts.fileKey}?ids=${encodeURIComponent(opts.nodeId)}&scale=${scale}&format=${format}`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Figma /images failed: ${res.status} ${text}`);
    }
    const json = (await res.json()) as { err?: string; images?: Record<string, string | null> };
    if (json.err) throw new Error(`Figma /images error: ${json.err}`);
    const img = json.images?.[opts.nodeId];
    if (!img) {
      throw new Error(`Figma did not return an image for node ${opts.nodeId}`);
    }
    return { url: img, fileKey: opts.fileKey, nodeId: opts.nodeId, scale, format };
  }

  // Fall back to the file-level thumbnail.
  const fileRes = await fetch(`${FIGMA_API}/files/${opts.fileKey}?depth=1`, { headers });
  if (!fileRes.ok) {
    const text = await fileRes.text();
    throw new Error(`Figma /files failed: ${fileRes.status} ${text}`);
  }
  const fileJson = (await fileRes.json()) as { thumbnailUrl?: string };
  if (!fileJson.thumbnailUrl) {
    throw new Error('Figma file has no thumbnail and no node-id was provided');
  }
  return { url: fileJson.thumbnailUrl, fileKey: opts.fileKey, nodeId: null, scale, format };
}
