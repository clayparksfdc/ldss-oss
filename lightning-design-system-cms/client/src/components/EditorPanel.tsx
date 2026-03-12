import { useState, useEffect, useRef, useCallback } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { marked } from 'marked';
import { fetchLocalFile, saveLocalFile } from '../api';
import { Toolbar } from './Toolbar';
import { RichTextEditor } from './RichTextEditor';
import { preprocessDirectives } from '../lib/directive-preview';

interface EditorPanelProps {
  filePath: string;
}

export type EditorMode = 'code' | 'richtext' | 'preview';
type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

export function EditorPanel({ filePath }: EditorPanelProps) {
  const [content, setContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [editorMode, setEditorMode] = useState<EditorMode>('richtext');
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const [previewHtml, setPreviewHtml] = useState('');
  const editorRef = useRef<any>(null);
  const saveTimeoutRef = useRef<number>(0);

  useEffect(() => {
    setLoading(true);
    setSaveStatus('idle');
    fetchLocalFile(filePath)
      .then(data => {
        setContent(data.content);
        setOriginalContent(data.content);
        updatePreview(data.content);
      })
      .catch(() => {
        setContent('');
        setOriginalContent('');
      })
      .finally(() => setLoading(false));
  }, [filePath]);

  const updatePreview = useCallback((md: string) => {
    try {
      const processed = preprocessDirectives(md);
      const html = marked.parse(processed, { async: false }) as string;
      setPreviewHtml(html);
    } catch {
      setPreviewHtml('<p style="color:red">Preview error</p>');
    }
  }, []);

  const handleContentChange = useCallback((value: string) => {
    setContent(value);
    updatePreview(value);

    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = window.setTimeout(() => {
      autoSave(value);
    }, 1500);
  }, [filePath, updatePreview]);

  const handleMonacoChange = useCallback((value: string | undefined) => {
    handleContentChange(value ?? '');
  }, [handleContentChange]);

  const autoSave = useCallback(async (value: string) => {
    try {
      setSaveStatus('saving');
      await saveLocalFile(filePath, value);
      setOriginalContent(value);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch {
      setSaveStatus('error');
    }
  }, [filePath]);

  const handleSave = useCallback(async () => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    try {
      setSaveStatus('saving');
      await saveLocalFile(filePath, content);
      setOriginalContent(content);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch {
      setSaveStatus('error');
    }
  }, [filePath, content]);

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.addAction({
      id: 'save-file',
      label: 'Save File',
      keybindings: [2048 | 49],
      run: () => handleSave(),
    });
  };

  const insertSnippet = useCallback((snippet: string) => {
    if (editorMode !== 'code') return;
    const editor = editorRef.current;
    if (!editor) return;
    const selection = editor.getSelection();
    if (selection) {
      editor.executeEdits('insert-snippet', [{
        range: selection,
        text: snippet,
        forceMoveMarkers: true,
      }]);
    }
    editor.focus();
  }, [editorMode]);

  const hasChanges = content !== originalContent;

  if (loading) {
    return <div className="loading-state">Loading file...</div>;
  }

  return (
    <div className="editor-panel">
      <Toolbar
        editorMode={editorMode}
        onEditorModeChange={setEditorMode}
        onInsertSnippet={insertSnippet}
        onSave={handleSave}
        saveStatus={saveStatus}
        hasChanges={hasChanges}
      />
      <div className="editor-body">
        {editorMode === 'code' && (
          <div className="editor-pane">
            <div className="editor-pane-header">
              Markdown Source
              {hasChanges && <span style={{ marginLeft: 8, color: 'var(--slds-yellow)' }}>&#9679;</span>}
            </div>
            <div className="editor-pane-body">
              <Editor
                height="100%"
                language="markdown"
                theme="vs-light"
                value={content}
                onChange={handleMonacoChange}
                onMount={handleEditorMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: "var(--font-mono)",
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  wrappingStrategy: 'advanced',
                  scrollBeyondLastLine: false,
                  padding: { top: 12, bottom: 12 },
                  renderLineHighlight: 'line',
                  bracketPairColorization: { enabled: true },
                  tabSize: 2,
                }}
              />
            </div>
          </div>
        )}

        {editorMode === 'richtext' && (
          <div className="editor-pane">
            <RichTextEditor
              content={content}
              onContentChange={handleContentChange}
            />
          </div>
        )}

        {editorMode === 'preview' && (
          <div className="editor-pane">
            <div className="editor-pane-header">Preview</div>
            <div className="editor-pane-body">
              <div
                className="preview-content"
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
