import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';
import type { Plugin } from 'unified';

/**
 * Custom directive plugin to transform markdown directives into HTML
 */
function buildCardHast(node: any) {
  const { title, href, icon, image, gradient, description } = node.attributes || {};
  const data = node.data || (node.data = {});
  data.hName = 'a';
  data.hProperties = {
    className: `md-card${gradient ? ' md-card-gradient' : ''}${image ? ' md-card-image' : ''}`,
    href: href || '#',
  };
  const children: any[] = [];
  if (image) {
    children.push({
      type: 'element', tagName: 'div', properties: { className: 'md-card-media' },
      children: [{ type: 'element', tagName: 'img', properties: { src: image, alt: '', loading: 'lazy' }, children: [] }],
    });
  } else if (gradient) {
    children.push({
      type: 'element', tagName: 'div',
      properties: { className: 'md-card-media', style: `background:linear-gradient(135deg, ${gradient.replace(/\s+/g, ', ')})` },
      children: [],
    });
  }
  const bodyChildren: any[] = [];
  if (title) bodyChildren.push({ type: 'element', tagName: 'h3', properties: {}, children: [{ type: 'text', value: title }] });
  if (description) bodyChildren.push({ type: 'element', tagName: 'p', properties: { className: 'md-card-desc' }, children: [{ type: 'text', value: description }] });
  children.push({ type: 'element', tagName: 'div', properties: { className: 'md-card-body' }, children: bodyChildren });
  data.hChildren = children;
}

function buildLinkCardHast(node: any) {
  const { title, href, gradient, icon } = node.attributes || {};
  const data = node.data || (node.data = {});
  data.hName = 'a';
  data.hProperties = {
    className: 'md-link-card',
    href: href || '#',
    target: href?.startsWith('http') ? '_blank' : undefined,
    rel: href?.startsWith('http') ? 'noopener noreferrer' : undefined,
  };
  const gradientStyle = gradient ? `background:linear-gradient(135deg, ${gradient.replace(/\s+/g, ', ')})` : '';
  data.hChildren = [
    { type: 'element', tagName: 'div', properties: { className: 'md-link-card-media', style: gradientStyle },
      children: icon ? [{ type: 'element', tagName: 'span', properties: { className: `md-link-icon md-link-icon-${icon}` }, children: [] }] : [],
    },
    { type: 'element', tagName: 'div', properties: { className: 'md-link-card-body' },
      children: title ? [{ type: 'element', tagName: 'h3', properties: {}, children: [{ type: 'text', value: title }] }] : [],
    },
  ];
}

function buildVideoEmbedHast(node: any) {
  const { src, title } = node.attributes || {};
  const data = node.data || (node.data = {});
  data.hName = 'div';
  data.hProperties = { className: 'video-embed' };
  data.hChildren = [
    ...(title ? [{ type: 'element', tagName: 'h2', properties: {}, children: [{ type: 'text', value: title }] }] : []),
    { type: 'element', tagName: 'div', properties: { className: 'video-embed-wrapper' },
      children: [{
        type: 'element', tagName: 'video', properties: { controls: true, preload: 'metadata' },
        children: [{ type: 'element', tagName: 'source', properties: { src, type: 'video/mp4' }, children: [] }],
      }],
    },
  ];
}

function buildHeroBannerHast(node: any) {
  const { title, image, version, updated, tagline } = node.attributes || {};
  const data = node.data || (node.data = {});
  data.hName = 'div';
  data.hProperties = {
    className: 'hero-banner',
    style: image ? `background-image:url(${image})` : '',
  };
  data.hChildren = [
    { type: 'element', tagName: 'h1', properties: {}, children: [{ type: 'text', value: title || '' }] },
    ...(version ? [{ type: 'element', tagName: 'p', properties: { className: 'hero-version' }, children: [{ type: 'text', value: version }] }] : []),
    ...(updated ? [{ type: 'element', tagName: 'p', properties: { className: 'hero-updated' }, children: [{ type: 'text', value: updated }] }] : []),
    ...(tagline ? [{ type: 'element', tagName: 'p', properties: { className: 'hero-tagline' }, children: [{ type: 'text', value: tagline }] }] : []),
  ];
}

const remarkCustomDirectives: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any) => {
      // Container directives (:::) — used for wrapper elements
      if (node.type === 'containerDirective') {
        const data = node.data || (node.data = {});

        if (node.name === 'callout') {
          const type = node.attributes?.type || 'info';
          data.hName = 'div';
          data.hProperties = { className: `callout callout-${type}`, 'data-type': type };
        }
        if (node.name === 'component-demo') {
          const { storybook, title, height } = node.attributes || {};
          data.hName = 'div';
          data.hProperties = { className: 'component-demo', 'data-storybook': storybook, 'data-title': title, 'data-height': height || '400' };
        }
        if (node.name === 'code-example') {
          const { language } = node.attributes || {};
          data.hName = 'div';
          data.hProperties = { className: 'code-example', 'data-language': language || 'javascript' };
        }
        if (node.name === 'card-grid') {
          data.hName = 'div';
          data.hProperties = { className: `card-grid card-grid-${node.attributes?.columns || '2'}` };
        }
        if (node.name === 'link-grid') {
          data.hName = 'div';
          data.hProperties = { className: `link-grid link-grid-${node.attributes?.columns || '4'}` };
        }
        if (node.name === 'card') buildCardHast(node);
        if (node.name === 'link-card') buildLinkCardHast(node);
        if (node.name === 'video-embed') buildVideoEmbedHast(node);
        if (node.name === 'hero-banner') buildHeroBannerHast(node);
      }

      // Leaf directives (::) — used for self-closing items inside containers
      if (node.type === 'leafDirective') {
        if (node.name === 'card') buildCardHast(node);
        if (node.name === 'link-card') buildLinkCardHast(node);
        if (node.name === 'video-embed') buildVideoEmbedHast(node);
        if (node.name === 'hero-banner') buildHeroBannerHast(node);
      }
    });
  };
};

/**
 * Transform ```storybook fenced blocks in the rendered HTML into styled
 * iframe cards that match the Payload CMS Storybook embed design.
 */
function renderStorybookEmbeds(html: string): string {
  return html.replace(
    /<pre><code class="[^"]*language-storybook[^"]*">([\s\S]*?)<\/code><\/pre>/g,
    (_match, inner: string) => {
      const decoded = inner
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"');
      const url = decoded.match(/^url:\s*(.+)$/m)?.[1]?.trim() ?? '';
      const title = decoded.match(/^title:\s*(.+)$/m)?.[1]?.trim() ?? 'Storybook Preview';
      const height = decoded.match(/^height:\s*(.+)$/m)?.[1]?.trim() ?? '400px';
      const h = height.endsWith('px') ? height : height + 'px';

      if (!url) return '';

      return `<div class="storybook-embed rounded-lg border border-[#E5E5E5] overflow-hidden mb-8 bg-white">
  <div class="flex items-center justify-between px-4 py-2.5 bg-[#F3F3F3] border-b border-[#E5E5E5]">
    <div class="flex items-center gap-3">
      <div class="flex gap-1.5">
        <span class="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
        <span class="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
        <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
      </div>
      <span class="text-[13px] text-[#3E3E3C] font-medium">${title}</span>
    </div>
    <a href="${url}" target="_blank" rel="noopener noreferrer"
       class="text-[#706E6B] hover:text-[#032D60] transition-colors"
       title="Open in new tab">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  </div>
  <iframe src="${url}" style="width:100%;height:${h};border:none;" loading="lazy" title="${title}"></iframe>
</div>`;
    }
  );
}

/**
 * Process markdown content with custom directives
 */
export async function processMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkCustomDirectives)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return renderStorybookEmbeds(String(result));
}

/**
 * Parse markdown frontmatter and content
 */
export interface MarkdownData {
  content: string;
  frontmatter: {
    title?: string;
    description?: string;
    category?: string;
    order?: number;
    [key: string]: any;
  };
}

/**
 * Extract metadata from processed HTML
 */
export function extractMetadata(html: string): {
  callouts: Array<{ type: string }>;
  componentDemos: Array<{ storybook?: string; title?: string; height?: string }>;
  codeExamples: Array<{ language?: string }>;
} {
  const callouts: Array<{ type: string }> = [];
  const componentDemos: Array<{ storybook?: string; title?: string; height?: string }> = [];
  const codeExamples: Array<{ language?: string }> = [];

  // Simple regex-based extraction (in a real app, you'd parse the HTML properly)
  const calloutMatches = html.matchAll(/data-type="([^"]*)"/g);
  for (const match of calloutMatches) {
    callouts.push({ type: match[1] });
  }

  const demoMatches = html.matchAll(/data-storybook="([^"]*)"\s+data-title="([^"]*)"\s+data-height="([^"]*)"/g);
  for (const match of demoMatches) {
    componentDemos.push({
      storybook: match[1],
      title: match[2],
      height: match[3],
    });
  }

  const codeMatches = html.matchAll(/data-language="([^"]*)"/g);
  for (const match of codeMatches) {
    codeExamples.push({ language: match[1] });
  }

  return { callouts, componentDemos, codeExamples };
}
