/**
 * Client-side preprocessor that transforms remark-directive syntax
 * into single-line HTML blocks so `marked` passes them through to
 * the CMS preview panel untouched.
 */

function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const re = /(\w[\w-]*)="([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw))) attrs[m[1]] = m[2];
  return attrs;
}

function compact(html: string): string {
  return html.replace(/\n\s*/g, '');
}

function escapeHtml(s: string): string {
  if (s == null || s === undefined) return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderLeafDirective(name: string, attrsStr: string): string {
  const a = parseAttrs(attrsStr);

  if (name === 'hero-banner') {
    const bg = a.image ? `background-image:url(${a.image});` : '';
    return compact(`<div style="${bg}background-size:cover;background-position:center;min-height:280px;padding:2.5rem;border-radius:0.75rem;color:white;display:flex;flex-direction:column;justify-content:flex-end;margin-bottom:2rem;background-color:#1B3A6B;">
      <h1 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;color:white">${a.title || ''}</h1>
      ${a.version ? `<p style="color:#93c5fd;font-size:0.875rem;margin:0 0 0.25rem">${a.version}</p>` : ''}
      ${a.updated ? `<p style="color:rgba(255,255,255,0.7);font-size:0.75rem;margin:0 0 1rem">${a.updated}</p>` : ''}
      ${a.tagline ? `<p style="color:white;font-size:1.125rem;font-weight:600;margin:0">${a.tagline}</p>` : ''}
    </div>`);
  }

  if (name === 'video-embed') {
    return compact(`<div style="margin-bottom:2rem">
      ${a.title ? `<h2 style="font-size:1.25rem;font-weight:700;color:#032D60;margin-bottom:1rem">${a.title}</h2>` : ''}
      <div style="width:100%;aspect-ratio:16/9;background:#000;border-radius:0.5rem;overflow:hidden">
        <video controls preload="metadata" style="width:100%;height:100%"><source src="${a.src || ''}" type="video/mp4"/></video>
      </div>
    </div>`);
  }

  if (name === 'card') {
    const imgPart = a.image
      ? `<div style="height:10rem;overflow:hidden;background:#F3F3F3"><img src="${a.image}" alt="" style="width:100%;height:100%;object-fit:cover"/></div>`
      : '';
    const gradPart = !a.image && a.gradient
      ? `<div style="height:10rem;background:linear-gradient(135deg,${a.gradient.replace(/\s+/g,',')})"></div>`
      : '';
    return compact(`<a href="${a.href || '#'}" style="display:block;border:1px solid #E5E5E5;border-radius:0.75rem;overflow:hidden;background:white;text-decoration:none;color:inherit">
      ${imgPart}${gradPart}
      <div style="padding:1rem">
        ${a.title ? `<h3 style="font-size:1rem;font-weight:600;color:#032D60;margin:0 0 0.25rem">${a.title}</h3>` : ''}
        ${a.description ? `<p style="font-size:0.8125rem;color:#706E6B;margin:0;line-height:1.5">${a.description}</p>` : ''}
      </div>
    </a>`);
  }

  if (name === 'link-card') {
    const bgStyle = a.gradient
      ? `background:linear-gradient(135deg,${a.gradient.replace(/\s+/g,',')});`
      : 'background:#F3F3F3;';
    const ext = a.href?.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return compact(`<a href="${a.href || '#'}" style="display:block;border:1px solid #E5E5E5;border-radius:0.75rem;overflow:hidden;background:white;text-decoration:none;color:inherit"${ext}>
      <div style="height:5rem;${bgStyle}display:flex;align-items:center;justify-content:center"></div>
      <div style="padding:0.75rem 1rem">
        ${a.title ? `<h3 style="font-size:0.875rem;font-weight:600;color:#3E3E3C;margin:0">${a.title}</h3>` : ''}
      </div>
    </a>`);
  }

  return '';
}

/**
 * Strip YAML frontmatter from markdown so it isn't rendered as content.
 */
export function stripFrontmatter(md: string): string {
  const fmMatch = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  return fmMatch ? fmMatch[2] : md;
}

/**
 * Pre-process markdown, replacing directive syntax with HTML blocks.
 * Each HTML block is on a single line, surrounded by blank lines,
 * so `marked` treats it as raw HTML and passes it through.
 */
export function preprocessDirectives(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Container directive: :::name{attrs} or ::: name attr="val" attr2="val2"
    const braceMatch = line.match(/^:::([\w-]+)\{([^}]*)\}\s*$/);
    const spaceMatch = line.match(/^:::\s+([\w-]+)\s*(.*)$/);
    const name = braceMatch?.[1] ?? spaceMatch?.[1];
    const attrsStr = braceMatch?.[2] ?? spaceMatch?.[2] ?? '';
    if (name) {
      const a = parseAttrs(attrsStr);

      if (name === 'card-grid' || name === 'link-grid') {
        const cols = a.columns || (name === 'link-grid' ? '4' : '2');
        const cards: string[] = [];
        i++;
        while (i < lines.length && !lines[i].match(/^:::\s*$/)) {
          const leafMatch = lines[i].match(/^::([\w-]+)\{([^}]*)\}\s*$/);
          if (leafMatch) cards.push(renderLeafDirective(leafMatch[1], leafMatch[2]));
          i++;
        }
        i++; // skip :::

        const gridStyle = `display:grid;grid-template-columns:repeat(${Math.min(Number(cols), 3)},1fr);gap:1.25rem;margin:1.5rem 0 2rem`;
        out.push('', `<div style="${gridStyle}">${cards.join('')}</div>`, '');
        continue;
      }

      if (name === 'callout') {
        const type = a.type || 'info';
        const colors: Record<string, { bg: string; border: string }> = {
          info:    { bg: '#EEF4FF', border: '#0176D3' },
          warning: { bg: '#FFF8E1', border: '#DD7A01' },
          error:   { bg: '#FEF0F3', border: '#B60554' },
          success: { bg: '#DEF9F3', border: '#056764' },
        };
        const c = colors[type] || colors.info;
        const bodyLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].match(/^:::\s*$/)) {
          bodyLines.push(lines[i]);
          i++;
        }
        i++;
        const calloutStyle = `padding:1rem 1.25rem;border-radius:0.5rem;margin-bottom:1rem;border-left:4px solid ${c.border};background:${c.bg}`;
        out.push('', `<div style="${calloutStyle}">`, ...bodyLines, '</div>', '');
        continue;
      }

      if (name === 'component-demo') {
        const storybook = a.storybook || '';
        const title = a.title || 'Component Demo';
        const height = a.height || '400';
        const h = height.endsWith('px') ? height : height + 'px';
        i++; // skip directive line
        while (i < lines.length && !lines[i].match(/^:::\s*$/)) i++;
        i++; // skip :::
        if (storybook) {
          const demoHtml = compact(`<div class="component-demo-preview" style="border:1px solid #E5E5E5;border-radius:0.5rem;overflow:hidden;margin-bottom:1.5rem">
            <div style="background:#F4F6F9;border-bottom:1px solid #E5E5E5;padding:8px 16px;display:flex;align-items:center;justify-content:space-between">
              <span style="font-size:14px;font-weight:600;color:#032D60">${escapeHtml(title)}</span>
              <a href="${escapeHtml(storybook)}" target="_blank" rel="noopener noreferrer" style="font-size:12px;color:#0176D3;text-decoration:none">Open ↗</a>
            </div>
            <iframe src="${escapeHtml(storybook)}" style="width:100%;height:${h};border:none" loading="lazy" title="${escapeHtml(title)}"></iframe>
          </div>`);
          out.push('', demoHtml, '');
        } else {
          out.push('', '<div style="padding:16px;background:#FEF0F3;border:1px solid #B60554;border-radius:8px;color:#721c24;font-size:14px">No Storybook URL provided for component-demo</div>', '');
        }
        continue;
      }

      if (name === 'code-example') {
        const lang = a.language || 'javascript';
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].match(/^:::\s*$/)) {
          codeLines.push(lines[i]);
          i++;
        }
        i++;
        const code = escapeHtml(codeLines.join('\n'));
        out.push('', `<pre style="margin:1rem 0;padding:1rem;background:#1e1e1e;color:#d4d4d4;border-radius:8px;overflow:auto;font-size:13px;line-height:1.5"><code class="language-${escapeHtml(lang)}">${code}</code></pre>`, '');
        continue;
      }

      out.push(line);
      i++;
      continue;
    }

    // Standalone leaf directive: ::name{attrs}
    const leafMatch = line.match(/^::([\w-]+)\{([^}]*)\}\s*$/);
    if (leafMatch) {
      const html = renderLeafDirective(leafMatch[1], leafMatch[2]);
      if (html) {
        out.push('', html, '');
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
 * Expand <div data-directive-type="..."> blocks (from RTE) into rendered HTML.
 * Uses same logic as frontend markdown.ts renderDataDirectives.
 */
export function renderDataDirectives(html: string): string {
  return html.replace(
    /<div\s+data-directive-type="([^"]+)"\s+data-directive-attrs="([^"]*)"\s+data-directive-children="([^"]*)"[^>]*>\s*<\/div>/g,
    (_match, type: string, attrsEncoded: string, childrenEncoded: string) => {
      const attrs = parseJsonAttr(attrsEncoded);
      const children: Array<{ type: string; attrs: Record<string, string> }> = parseJsonAttr(childrenEncoded) || [];

      switch (type) {
        case 'hero-banner': {
          const { title, image, version, updated, tagline } = attrs;
          const style = image ? `background-image:url(${escapeHtml(image)});background-size:cover;background-position:center;` : '';
          const base = 'min-height:200px;padding:2rem;border-radius:0.5rem;color:white;display:flex;flex-direction:column;justify-content:flex-end;margin-bottom:1.5rem;background-color:#1B3A6B;';
          return `<div style="${base}${style}"><h1 style="font-size:1.75rem;font-weight:700;margin:0 0 0.5rem;color:white">${escapeHtml(title || '')}</h1>${version ? `<p style="color:#93c5fd;font-size:0.875rem;margin:0 0 0.25rem">${escapeHtml(version)}</p>` : ''}${updated ? `<p style="color:rgba(255,255,255,0.7);font-size:0.75rem;margin:0 0 0.5rem">${escapeHtml(updated)}</p>` : ''}${tagline ? `<p style="color:white;font-size:1rem;font-weight:600;margin:0">${escapeHtml(tagline)}</p>` : ''}</div>`;
        }
        case 'video-embed': {
          const { src, title } = attrs;
          if (!src) return '';
          const h = title ? `<h2 style="font-size:1.125rem;font-weight:600;color:#032D60;margin-bottom:0.75rem">${escapeHtml(title)}</h2>` : '';
          return `<div style="margin-bottom:1.5rem">${h}<div style="width:100%;aspect-ratio:16/9;background:#000;border-radius:0.5rem;overflow:hidden"><video controls preload="metadata" style="width:100%;height:100%"><source src="${escapeHtml(src)}" type="video/mp4"/></video></div></div>`;
        }
        case 'card-grid': {
          const cols = Math.min(children.filter((c: any) => c.type === 'card').length, 3);
          const cards = children
            .filter((c: any) => c.type === 'card')
            .map((c: any) => renderCardInline(c.attrs))
            .join('');
          return `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:1rem;margin:1rem 0 1.5rem">${cards}</div>`;
        }
        case 'link-grid': {
          const cols = Math.min(children.length, 4);
          const links = children
            .filter((c: any) => c.type === 'link-card')
            .map((c: any) => renderLinkCardInline(c.attrs))
            .join('');
          return `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:1rem;margin:1rem 0 1.5rem">${links}</div>`;
        }
        case 'callout': {
          const typeVal = attrs.type || 'info';
          const colors: Record<string, { bg: string; border: string }> = {
            info: { bg: '#EEF4FF', border: '#0176D3' },
            warning: { bg: '#FFF8E1', border: '#DD7A01' },
            error: { bg: '#FEF0F3', border: '#B60554' },
            success: { bg: '#DEF9F3', border: '#056764' },
          };
          const c = colors[typeVal] || colors.info;
          const body = escapeHtml(attrs.body || '');
          return `<div style="padding:1rem 1.25rem;border-radius:0.5rem;margin-bottom:1rem;border-left:4px solid ${c.border};background:${c.bg}">${body.replace(/\n/g, '<br/>')}</div>`;
        }
        default:
          return _match;
      }
    }
  );
}

function parseJsonAttr(encoded: string): any {
  if (!encoded) return {};
  try {
    const decoded = encoded
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'");
    return JSON.parse(decoded);
  } catch {
    return {};
  }
}

function renderCardInline(a: Record<string, string>): string {
  const media = a.image
    ? `<div style="height:8rem;overflow:hidden;background:#F3F3F3"><img src="${escapeHtml(a.image)}" alt="" style="width:100%;height:100%;object-fit:cover"/></div>`
    : a.gradient
      ? `<div style="height:8rem;background:linear-gradient(135deg,${a.gradient.replace(/\s+/g, ',')})"></div>`
      : '';
  const titleHtml = a.title ? `<h3 style="font-size:0.9375rem;font-weight:600;color:#032D60;margin:0 0 0.25rem">${escapeHtml(a.title)}</h3>` : '';
  const descHtml = a.description ? `<p style="font-size:0.8125rem;color:#706E6B;margin:0;line-height:1.5">${escapeHtml(a.description)}</p>` : '';
  return `<a href="${escapeHtml(a.href || '#')}" style="display:block;border:1px solid #E5E5E5;border-radius:0.5rem;overflow:hidden;background:white;text-decoration:none;color:inherit">${media}<div style="padding:0.75rem 1rem">${titleHtml}${descHtml}</div></a>`;
}

function renderLinkCardInline(a: Record<string, string>): string {
  const bgStyle = a.gradient ? `background:linear-gradient(135deg,${a.gradient.replace(/\s+/g, ',')})` : 'background:#F3F3F3';
  const ext = a.href?.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${escapeHtml(a.href || '#')}"${ext} style="display:block;border:1px solid #E5E5E5;border-radius:0.5rem;overflow:hidden;background:white;text-decoration:none;color:inherit"><div style="height:4rem;${bgStyle};display:flex;align-items:center;justify-content:center"></div><div style="padding:0.5rem 0.75rem"><span style="font-size:0.8125rem;font-weight:600;color:#3E3E3C">${escapeHtml(a.title || '')}</span></div></a>`;
}

/**
 * Post-process HTML to render ```storybook fenced blocks as iframe embeds.
 */
export function renderStorybookEmbeds(html: string): string {
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
      return `<div class="component-demo-preview" style="border:1px solid #E5E5E5;border-radius:0.5rem;overflow:hidden;margin-bottom:1.5rem">
        <div style="background:#F4F6F9;border-bottom:1px solid #E5E5E5;padding:8px 16px;display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:14px;font-weight:600;color:#032D60">${escapeHtml(title)}</span>
          <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" style="font-size:12px;color:#0176D3;text-decoration:none">Open ↗</a>
        </div>
        <iframe src="${escapeHtml(url)}" style="width:100%;height:${h};border:none" loading="lazy" title="${escapeHtml(title)}"></iframe>
      </div>`;
    }
  );
}
