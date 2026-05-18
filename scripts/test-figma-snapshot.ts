/**
 * One-shot end-to-end test of the Figma → Cloudinary snapshot pipeline.
 * Run with: npx ts-node --transpile-only scripts/test-figma-snapshot.ts <figma-url>
 */
import 'dotenv/config';
import { parseFigmaUrl, fetchFigmaThumbnail } from '../src/services/figma';
import { uploadFromUrl } from '../src/services/cloudinary';

async function main() {
  const url = process.argv[2] || 'https://www.figma.com/design/cF1EiQRGgfvFLYXWMv1AVa/Free-Wireframe-Kit--Community-?node-id=0-1';

  const me = await fetch('https://api.figma.com/v1/me', {
    headers: { 'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN || '' },
  }).then(r => r.json() as Promise<{ email: string; handle: string }>);
  console.log(`Figma identity: ${me.email} (${me.handle})`);
  console.log(`Test URL:       ${url}`);

  const parts = parseFigmaUrl(url);
  console.log(`Parsed:         fileKey=${parts.fileKey}, nodeId=${parts.nodeId}`);

  const thumb = await fetchFigmaThumbnail({ fileKey: parts.fileKey, nodeId: parts.nodeId });
  console.log(`Figma thumbnail signed URL fetched (${thumb.url.length} chars)`);

  const result = await uploadFromUrl(thumb.url, {
    folder: 'figma-test',
    filename: `e2e-${Date.now()}`,
    tags: ['e2e-test'],
  });
  console.log(`✓ Cloudinary upload: ${result.secureUrl}`);
  console.log(`  ${result.width}×${result.height}, ${(result.bytes / 1024).toFixed(0)}KB, format ${result.format}`);
}

main().catch(err => { console.error(err); process.exit(1); });
