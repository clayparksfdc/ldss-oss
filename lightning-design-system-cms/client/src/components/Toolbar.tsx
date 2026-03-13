import { useState, useRef, useEffect } from 'react';
import type { EditorMode } from './EditorPanel';

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

type PublishStatus = 'idle' | 'publishing' | 'published' | 'error';

interface ToolbarProps {
  editorMode: EditorMode;
  onEditorModeChange: (mode: EditorMode) => void;
  onInsertSnippet: (snippet: string) => void;
  onSave: () => void;
  saveStatus: SaveStatus;
  hasChanges: boolean;
  canPublish: boolean;
  publishStatus: PublishStatus;
  lastPrUrl: string | null;
  onPublish: () => void;
}

const SNIPPETS = [
  {
    label: 'Info Callout',
    icon: 'i',
    desc: 'Blue info box',
    snippet: '\n::: callout type="info"\nYour info message here.\n:::\n',
  },
  {
    label: 'Warning Callout',
    icon: '!',
    desc: 'Yellow warning box',
    snippet: '\n::: callout type="warning"\nYour warning message here.\n:::\n',
  },
  {
    label: 'Error Callout',
    icon: 'x',
    desc: 'Red error/danger box',
    snippet: '\n::: callout type="error"\nYour error message here.\n:::\n',
  },
  {
    label: 'Storybook Embed',
    icon: 'S',
    desc: 'Iframe component preview',
    snippet: '\n```storybook\nurl: https://your-storybook-url/iframe.html?id=component--story\ntitle: Component Preview\nheight: 400px\n```\n',
  },
  {
    label: 'Code Block',
    icon: '#',
    desc: 'Syntax highlighted code',
    snippet: '\n```html\n<div class="slds-example">\n  <!-- Your code here -->\n</div>\n```\n',
  },
  {
    label: 'Table',
    icon: 'T',
    desc: 'Markdown table',
    snippet: '\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell 1   | Cell 2   | Cell 3   |\n| Cell 4   | Cell 5   | Cell 6   |\n',
  },
  {
    label: 'Image',
    icon: 'P',
    desc: 'Image with alt text',
    snippet: '\n![Description of image](/assets/images/example.png)\n',
  },
  {
    label: 'Design Tokens',
    icon: 'D',
    desc: 'Auto-generated token table',
    snippet: '\n::: design-tokens category="color" :::\n',
  },
];

export function Toolbar({
  editorMode,
  onEditorModeChange,
  onInsertSnippet,
  onSave,
  saveStatus,
  hasChanges,
  canPublish,
  publishStatus,
  lastPrUrl,
  onPublish,
}: ToolbarProps) {
  const [showPalette, setShowPalette] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setShowPalette(false);
      }
    }
    if (showPalette) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPalette]);

  const statusLabel = {
    idle: '',
    saving: 'Saving...',
    saved: 'Saved',
    error: 'Save failed',
  }[saveStatus];

  return (
    <div className="editor-toolbar">
      {/* Editor mode tabs */}
      <div className="mode-tabs">
        <button
          className={`mode-tab ${editorMode === 'richtext' ? 'active' : ''}`}
          onClick={() => onEditorModeChange('richtext')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          Rich Text
        </button>
        <button
          className={`mode-tab ${editorMode === 'code' ? 'active' : ''}`}
          onClick={() => onEditorModeChange('code')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          Code
        </button>
        <button
          className={`mode-tab ${editorMode === 'preview' ? 'active' : ''}`}
          onClick={() => onEditorModeChange('preview')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Preview
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Insert snippets — only in code mode */}
      {editorMode === 'code' && (
        <>
          <div className="toolbar-group" style={{ position: 'relative' }} ref={paletteRef}>
            <button
              className={`toolbar-btn ${showPalette ? 'active' : ''}`}
              onClick={() => setShowPalette(!showPalette)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              Insert
            </button>

            {showPalette && (
              <div className="palette-popover">
                {SNIPPETS.map(s => (
                  <div
                    key={s.label}
                    className="palette-item"
                    onClick={() => {
                      onInsertSnippet(s.snippet);
                      setShowPalette(false);
                    }}
                  >
                    <div className="palette-item-icon" style={{ background: '#f0f4ff', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      {s.icon}
                    </div>
                    <div className="palette-item-text">
                      <h4>{s.label}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="toolbar-divider" />

          <div className="toolbar-group">
            <button className="toolbar-btn" onClick={() => onInsertSnippet('**bold**')} title="Bold">
              <strong>B</strong>
            </button>
            <button className="toolbar-btn" onClick={() => onInsertSnippet('*italic*')} title="Italic">
              <em>I</em>
            </button>
            <button className="toolbar-btn" onClick={() => onInsertSnippet('`code`')} title="Inline code">
              <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)' }}>&lt;/&gt;</code>
            </button>
            <button className="toolbar-btn" onClick={() => onInsertSnippet('[text](url)')} title="Link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
          </div>
        </>
      )}

      <div className="toolbar-spacer" />

      {statusLabel && (
        <span className={`save-status ${saveStatus}`}>
          {saveStatus === 'saved' && '\u2713'}
          {saveStatus === 'error' && '\u2717'}
          {statusLabel}
        </span>
      )}

      <button
        className={`btn ${hasChanges ? 'btn-primary' : 'btn-outline'}`}
        onClick={onSave}
        disabled={!hasChanges}
        style={{ fontSize: 13, padding: '5px 14px' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
        Save
      </button>

      {canPublish && (
        <>
          <div className="toolbar-divider" />
          <button
            className="btn btn-publish"
            onClick={onPublish}
            disabled={publishStatus === 'publishing' || hasChanges}
            title={hasChanges ? 'Save your changes first before publishing' : 'Create a PR on GitHub'}
            style={{ fontSize: 13, padding: '5px 14px' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            {publishStatus === 'publishing' ? 'Creating PR...' : 'Publish to GitHub'}
          </button>
          {publishStatus === 'published' && lastPrUrl && (
            <a
              href={lastPrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-link"
            >
              View PR &rarr;
            </a>
          )}
          {publishStatus === 'error' && (
            <span className="save-status error">Publish failed</span>
          )}
        </>
      )}
    </div>
  );
}
