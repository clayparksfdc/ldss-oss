/**
 * Utilities for converting between markdown directive syntax and
 * HTML that Tiptap can consume/emit via the tiptap-markdown extension.
 *
 * Flow:
 *   markdown → preprocessDirectivesForEditor → Tiptap (via tiptap-markdown)
 *   Tiptap → tiptap-markdown → postprocessDirectivesFromEditor → markdown
 */

export interface DirectiveChild {
  type: string;
  attrs: Record<string, string>;
}

export interface DirectiveSchema {
  label: string;
  icon: string;
  color: string;
  isContainer: boolean;
  childType?: string;
  attrs: { name: string; label: string; type: 'text' | 'textarea' | 'url' | 'number'; required?: boolean }[];
  childAttrs?: { name: string; label: string; type: 'text' | 'textarea' | 'url' | 'number'; required?: boolean }[];
}

export const DIRECTIVE_SCHEMAS: Record<string, DirectiveSchema> = {
  'hero-banner': {
    label: 'Hero Banner',
    icon: '🖼',
    color: '#1B3A6B',
    isContainer: false,
    attrs: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'image', label: 'Background Image URL', type: 'url' },
      { name: 'version', label: 'Version', type: 'text' },
      { name: 'updated', label: 'Updated Text', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
    ],
  },
  'video-embed': {
    label: 'Video Embed',
    icon: '🎥',
    color: '#0176D3',
    isContainer: false,
    attrs: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'src', label: 'Video URL', type: 'url', required: true },
    ],
  },
  'card-grid': {
    label: 'Card Grid',
    icon: '🃏',
    color: '#2E844A',
    isContainer: true,
    childType: 'card',
    attrs: [
      { name: 'columns', label: 'Columns', type: 'number' },
    ],
    childAttrs: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'href', label: 'Link URL', type: 'url', required: true },
      { name: 'image', label: 'Image URL', type: 'url' },
      { name: 'gradient', label: 'Gradient', type: 'text' },
    ],
  },
  'link-grid': {
    label: 'Link Grid',
    icon: '🔗',
    color: '#7F5FC5',
    isContainer: true,
    childType: 'link-card',
    attrs: [
      { name: 'columns', label: 'Columns', type: 'number' },
    ],
    childAttrs: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'href', label: 'Link URL', type: 'url', required: true },
      { name: 'gradient', label: 'Gradient', type: 'text' },
    ],
  },
  'callout': {
    label: 'Callout',
    icon: '💡',
    color: '#DD7A01',
    isContainer: false,
    attrs: [
      { name: 'type', label: 'Type (info/warning/error/success)', type: 'text' },
      { name: 'body', label: 'Body', type: 'textarea' },
    ],
  },
};

function parseAttrsString(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const re = /(\w[\w-]*)="([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw))) attrs[m[1]] = m[2];
  return attrs;
}

function attrsToString(attrs: Record<string, string>): string {
  return Object.entries(attrs)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `${k}="${v.replace(/"/g, '\\"')}"`)
    .join(' ');
}

/**
 * Convert directive markdown to HTML `<div data-directive-*>` elements
 * that Tiptap can parse into DirectiveBlock nodes.
 */
export function preprocessDirectivesForEditor(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Container directive: :::name{attrs}
    const containerMatch = line.match(/^:::([\w-]+)\{([^}]*)\}\s*$/);
    if (containerMatch) {
      const [, name, attrsStr] = containerMatch;

      if (name === 'card-grid' || name === 'link-grid') {
        const attrs = parseAttrsString(attrsStr);
        const children: DirectiveChild[] = [];
        i++;
        while (i < lines.length && !lines[i].match(/^:::\s*$/)) {
          const leafMatch = lines[i].match(/^::([\w-]+)\{([^}]*)\}\s*$/);
          if (leafMatch) {
            children.push({ type: leafMatch[1], attrs: parseAttrsString(leafMatch[2]) });
          }
          i++;
        }
        i++; // skip :::
        const el = `<div data-directive-type="${name}" data-directive-attrs='${JSON.stringify(attrs).replace(/'/g, '&#39;')}' data-directive-children='${JSON.stringify(children).replace(/'/g, '&#39;')}'></div>`;
        out.push('', el, '');
        continue;
      }

      if (name === 'callout') {
        const attrs = parseAttrsString(attrsStr);
        const bodyLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].match(/^:::\s*$/)) {
          bodyLines.push(lines[i]);
          i++;
        }
        i++;
        attrs.body = bodyLines.join('\n');
        const el = `<div data-directive-type="callout" data-directive-attrs='${JSON.stringify(attrs).replace(/'/g, '&#39;')}' data-directive-children='[]'></div>`;
        out.push('', el, '');
        continue;
      }

      out.push(line);
      i++;
      continue;
    }

    // Leaf directive: ::name{attrs}
    const leafMatch = line.match(/^::([\w-]+)\{([^}]*)\}\s*$/);
    if (leafMatch) {
      const [, name, attrsStr] = leafMatch;
      if (DIRECTIVE_SCHEMAS[name]) {
        const attrs = parseAttrsString(attrsStr);
        const el = `<div data-directive-type="${name}" data-directive-attrs='${JSON.stringify(attrs).replace(/'/g, '&#39;')}' data-directive-children='[]'></div>`;
        out.push('', el, '');
        i++;
        continue;
      }
    }

    out.push(line);
    i++;
  }

  return out.join('\n');
}

/**
 * Convert HTML `<div data-directive-*>` elements back to directive markdown.
 */
export function postprocessDirectivesFromEditor(md: string): string {
  // Match the HTML divs that tiptap-markdown serialized from our DirectiveBlock nodes
  return md.replace(
    /<div data-directive-type="([\w-]+)" data-directive-attrs='([^']*)' data-directive-children='([^']*)'><\/div>/g,
    (_match, type: string, attrsJson: string, childrenJson: string) => {
      const attrs: Record<string, string> = JSON.parse(attrsJson.replace(/&#39;/g, "'"));
      const children: DirectiveChild[] = JSON.parse(childrenJson.replace(/&#39;/g, "'"));
      return directiveToMarkdown(type, attrs, children);
    },
  );
}

function directiveToMarkdown(
  type: string,
  attrs: Record<string, string>,
  children: DirectiveChild[],
): string {
  const schema = DIRECTIVE_SCHEMAS[type];
  if (!schema) return '';

  if (type === 'callout') {
    const body = attrs.body || '';
    const calloutAttrs = { ...attrs };
    delete calloutAttrs.body;
    return `:::callout{${attrsToString(calloutAttrs)}}\n${body}\n:::`;
  }

  if (schema.isContainer) {
    const containerAttrs = attrsToString(attrs);
    const childLines = children.map(
      c => `::${c.type}{${attrsToString(c.attrs)}}`,
    );
    return `:::${type}{${containerAttrs}}\n${childLines.join('\n')}\n:::`;
  }

  return `::${type}{${attrsToString(attrs)}}`;
}
