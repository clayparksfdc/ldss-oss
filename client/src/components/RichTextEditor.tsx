import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import Placeholder from '@tiptap/extension-placeholder';
import { Markdown } from 'tiptap-markdown';
import type { MarkdownStorage } from 'tiptap-markdown';
import { useEffect, useRef, useState, useCallback } from 'react';
import { DirectiveBlock } from '../extensions/DirectiveBlock';
import {
  preprocessDirectivesForEditor,
  postprocessDirectivesFromEditor,
  DIRECTIVE_SCHEMAS,
} from '../lib/directive-editor-utils';

interface RichTextEditorProps {
  content: string;
  onContentChange: (markdown: string) => void;
}

function extractFrontmatter(md: string): { frontmatter: string; body: string } {
  const match = md.match(/^(---\r?\n[\s\S]*?\r?\n---)\r?\n?/);
  if (match) {
    return { frontmatter: match[1], body: md.slice(match[0].length) };
  }
  return { frontmatter: '', body: md };
}

export function RichTextEditor({ content, onContentChange }: RichTextEditorProps) {
  const skipUpdateRef = useRef(false);
  const [showInsertMenu, setShowInsertMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const insertMenuRef = useRef<HTMLDivElement>(null);
  const insertBtnRef = useRef<HTMLButtonElement>(null);

  const { frontmatter, body } = extractFrontmatter(content);
  const frontmatterRef = useRef(frontmatter);
  frontmatterRef.current = frontmatter;

  const processedContent = useRef(preprocessDirectivesForEditor(body));

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
        codeBlock: { HTMLAttributes: { class: 'richtext-codeblock' } },
      }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'richtext-link' } }),
      Image.configure({ inline: false, allowBase64: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      Placeholder.configure({ placeholder: 'Start writing or type / for commands...' }),
      Markdown.configure({
        html: true,
        transformPastedText: true,
        transformCopiedText: true,
      }),
      DirectiveBlock,
    ],
    content: processedContent.current,
    editorProps: {
      attributes: { class: 'richtext-body' },
    },
    onUpdate({ editor }) {
      if (skipUpdateRef.current) return;
      const store = (editor.storage as unknown as Record<string, MarkdownStorage>);
      const rawMd = store.markdown.getMarkdown();
      const bodyMd = postprocessDirectivesFromEditor(rawMd);
      const fm = frontmatterRef.current;
      const full = fm ? `${fm}\n${bodyMd}` : bodyMd;
      onContentChange(full);
    },
  });

  useEffect(() => {
    if (!editor) return;
    const store = (editor.storage as unknown as Record<string, MarkdownStorage>);
    const currentBodyMd = postprocessDirectivesFromEditor(store.markdown.getMarkdown());
    const { body: incomingBody } = extractFrontmatter(content);
    if (incomingBody !== currentBodyMd) {
      skipUpdateRef.current = true;
      const processed = preprocessDirectivesForEditor(incomingBody);
      editor.commands.setContent(processed);
      skipUpdateRef.current = false;
    }
  }, [content, editor]);

  // Close insert menu on click outside
  useEffect(() => {
    if (!showInsertMenu) return;
    const handler = (e: MouseEvent) => {
      if (insertMenuRef.current && !insertMenuRef.current.contains(e.target as Node)) {
        setShowInsertMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showInsertMenu]);

  const handleInsertDirective = useCallback((directiveType: string) => {
    if (!editor) return;
    editor.chain().focus().insertDirective(directiveType).run();
    setShowInsertMenu(false);
  }, [editor]);

  if (!editor) {
    return <div className="loading-state">Loading editor...</div>;
  }

  return (
    <div className="richtext-editor">
      <BubbleMenu editor={editor} className="bubble-menu">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          S
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          {'</>'}
        </button>
        <span className="bubble-sep" />
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <span className="bubble-sep" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          &bull;
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          1.
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          &ldquo;
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Enter URL:');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          Link
        </button>
      </BubbleMenu>

      <div className="richtext-toolbar-strip">
        <div className="toolbar-group">
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold" style={editor.isActive('bold') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            <strong>B</strong>
          </button>
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic" style={editor.isActive('italic') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            <em>I</em>
          </button>
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Strikethrough" style={editor.isActive('strike') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            <s>S</s>
          </button>
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleCode().run()}
            title="Inline code" style={editor.isActive('code') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)' }}>&lt;/&gt;</code>
          </button>
        </div>
        <div className="toolbar-divider" />
        <div className="toolbar-group">
          {([1, 2, 3] as const).map(lvl => (
            <button key={lvl} className="toolbar-btn"
              onClick={() => editor.chain().focus().toggleHeading({ level: lvl }).run()}
              title={`Heading ${lvl}`}
              style={editor.isActive('heading', { level: lvl }) ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
              H{lvl}
            </button>
          ))}
        </div>
        <div className="toolbar-divider" />
        <div className="toolbar-group">
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet list" style={editor.isActive('bulletList') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            &bull; List
          </button>
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Numbered list" style={editor.isActive('orderedList') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            1. List
          </button>
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleBlockquote().run()}
            title="Blockquote" style={editor.isActive('blockquote') ? { background: 'var(--slds-blue-light)', color: 'var(--slds-blue)' } : {}}>
            &ldquo; Quote
          </button>
        </div>
        <div className="toolbar-divider" />
        <div className="toolbar-group">
          <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Code block">
            Code Block
          </button>
          <button className="toolbar-btn" onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider">
            &mdash; HR
          </button>
          <button className="toolbar-btn" onClick={() => {
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
          }} title="Insert table">
            Table
          </button>
          <button className="toolbar-btn" onClick={() => {
            const url = window.prompt('Image URL:');
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }} title="Insert image">
            Image
          </button>
          <button className="toolbar-btn" onClick={() => {
            const url = window.prompt('Enter URL:');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }} title="Insert link">
            Link
          </button>
        </div>
        <div className="toolbar-divider" />
        <div className="toolbar-group" ref={insertMenuRef}>
          <button
            ref={insertBtnRef}
            className="toolbar-btn toolbar-btn-component"
            onClick={() => {
              if (!showInsertMenu && insertBtnRef.current) {
                const rect = insertBtnRef.current.getBoundingClientRect();
                setMenuPos({ top: rect.bottom + 4, left: rect.left });
              }
              setShowInsertMenu(!showInsertMenu);
            }}
            title="Insert component"
          >
            + Component ▾
          </button>
          {showInsertMenu && (
            <div className="directive-insert-menu" style={{ top: menuPos.top, left: menuPos.left }}>
              {Object.entries(DIRECTIVE_SCHEMAS).map(([key, schema]) => (
                <button
                  key={key}
                  className="directive-insert-item"
                  onClick={() => handleInsertDirective(key)}
                >
                  <span className="directive-insert-icon">{schema.icon}</span>
                  <span className="directive-insert-label">{schema.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <EditorContent editor={editor} className="richtext-content-wrap" />
    </div>
  );
}
