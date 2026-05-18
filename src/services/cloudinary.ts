import { v2 as cloudinary } from 'cloudinary';

let configured = false;

export function configureCloudinary(): boolean {
  if (configured) return true;
  const url = process.env.CLOUDINARY_URL;
  if (!url) return false;
  // The SDK auto-parses CLOUDINARY_URL on import; calling .config() with no args confirms it.
  cloudinary.config({ secure: true });
  configured = true;
  return true;
}

export function isCloudinaryConfigured(): boolean {
  return !!process.env.CLOUDINARY_URL;
}

export function getUploadFolder(subPath?: string): string {
  const base = process.env.CLOUDINARY_UPLOAD_FOLDER || 'ldss-cms';
  return subPath ? `${base}/${subPath}` : base;
}

export interface UploadResult {
  publicId: string;
  url: string;
  secureUrl: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  resourceType: string;
}

function toResult(res: any): UploadResult {
  return {
    publicId: res.public_id,
    url: res.url,
    secureUrl: res.secure_url,
    format: res.format,
    width: res.width,
    height: res.height,
    bytes: res.bytes,
    resourceType: res.resource_type,
  };
}

export async function uploadBuffer(
  buffer: Buffer,
  opts: { folder?: string; filename?: string; tags?: string[]; context?: Record<string, string> } = {},
): Promise<UploadResult> {
  configureCloudinary();
  const folder = getUploadFolder(opts.folder);

  const result = await new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: opts.filename,
        tags: opts.tags,
        context: opts.context,
        resource_type: 'auto',
        overwrite: true,
        invalidate: true,
      },
      (err, res) => (err ? reject(err) : resolve(res)),
    );
    stream.end(buffer);
  });

  return toResult(result);
}

export async function uploadFromUrl(
  sourceUrl: string,
  opts: { folder?: string; filename?: string; tags?: string[]; context?: Record<string, string> } = {},
): Promise<UploadResult> {
  configureCloudinary();
  const folder = getUploadFolder(opts.folder);

  const result = await cloudinary.uploader.upload(sourceUrl, {
    folder,
    public_id: opts.filename,
    tags: opts.tags,
    context: opts.context,
    resource_type: 'auto',
    overwrite: true,
    invalidate: true,
  });

  return toResult(result);
}

export interface ListedResource {
  publicId: string;
  url: string;
  secureUrl: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  createdAt: string;
  tags?: string[];
}

export async function listResources(opts: { folder?: string; max?: number; nextCursor?: string } = {}): Promise<{
  resources: ListedResource[];
  nextCursor?: string;
}> {
  configureCloudinary();
  const folder = getUploadFolder(opts.folder);
  const result = await cloudinary.search
    .expression(`folder:${folder}/*`)
    .with_field('tags')
    .with_field('context')
    .sort_by('created_at', 'desc')
    .max_results(opts.max ?? 50)
    .next_cursor(opts.nextCursor as any)
    .execute();

  return {
    resources: (result.resources || []).map((r: any) => ({
      publicId: r.public_id,
      url: r.url,
      secureUrl: r.secure_url,
      format: r.format,
      width: r.width,
      height: r.height,
      bytes: r.bytes,
      createdAt: r.created_at,
      tags: r.tags || [],
    })),
    nextCursor: result.next_cursor,
  };
}

export async function deleteResource(publicId: string): Promise<{ result: string }> {
  configureCloudinary();
  return cloudinary.uploader.destroy(publicId, { invalidate: true });
}
