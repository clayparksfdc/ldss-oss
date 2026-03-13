import { NodeViewWrapper } from '@tiptap/react';
import type { NodeViewProps } from '@tiptap/react';
import { useState, useCallback } from 'react';
import { DIRECTIVE_SCHEMAS, type DirectiveChild } from '../lib/directive-editor-utils';

export function DirectiveBlockView(props: NodeViewProps) {
  const { node, updateAttributes, deleteNode, selected } = props;
  const { directiveType, directiveAttrs, directiveChildren } = node.attrs;
  const schema = DIRECTIVE_SCHEMAS[directiveType];
  const [editing, setEditing] = useState(false);
  const [childEditing, setChildEditing] = useState<number | null>(null);

  const label = schema?.label || directiveType;
  const icon = schema?.icon || '📦';
  const color = schema?.color || '#666';

  const handleAttrChange = useCallback((key: string, value: string) => {
    updateAttributes({ directiveAttrs: { ...directiveAttrs, [key]: value } });
  }, [directiveAttrs, updateAttributes]);

  const handleChildAttrChange = useCallback((idx: number, key: string, value: string) => {
    const newChildren = [...directiveChildren];
    newChildren[idx] = { ...newChildren[idx], attrs: { ...newChildren[idx].attrs, [key]: value } };
    updateAttributes({ directiveChildren: newChildren });
  }, [directiveChildren, updateAttributes]);

  const addChild = useCallback(() => {
    if (!schema?.childType) return;
    const newChild: DirectiveChild = { type: schema.childType, attrs: {} };
    updateAttributes({ directiveChildren: [...directiveChildren, newChild] });
    setChildEditing(directiveChildren.length);
  }, [schema, directiveChildren, updateAttributes]);

  const removeChild = useCallback((idx: number) => {
    const newChildren = directiveChildren.filter((_: DirectiveChild, i: number) => i !== idx);
    updateAttributes({ directiveChildren: newChildren });
    setChildEditing(null);
  }, [directiveChildren, updateAttributes]);

  const moveChild = useCallback((from: number, to: number) => {
    if (to < 0 || to >= directiveChildren.length) return;
    const arr = [...directiveChildren];
    const [moved] = arr.splice(from, 1);
    arr.splice(to, 0, moved);
    updateAttributes({ directiveChildren: arr });
    setChildEditing(to);
  }, [directiveChildren, updateAttributes]);

  return (
    <NodeViewWrapper
      className={`directive-block-wrapper ${selected ? 'is-selected' : ''}`}
      data-drag-handle=""
    >
      <div className="directive-block" style={{ '--directive-color': color } as React.CSSProperties}>
        {/* Header */}
        <div className="directive-block-header">
          <span className="directive-drag-handle" contentEditable={false} draggable data-drag-handle="">⋮⋮</span>
          <span className="directive-block-icon">{icon}</span>
          <span className="directive-block-label">{label}</span>
          <div className="directive-block-actions">
            <button
              className="directive-btn"
              onClick={() => { setEditing(!editing); setChildEditing(null); }}
              title="Edit"
            >
              {editing ? '✕' : '✎'}
            </button>
            <button className="directive-btn directive-btn-danger" onClick={deleteNode} title="Delete">🗑</button>
          </div>
        </div>

        {/* Visual Preview */}
        {!editing && (
          <div className="directive-block-preview">
            <DirectivePreview type={directiveType} attrs={directiveAttrs} children={directiveChildren} />
          </div>
        )}

        {/* Edit Panel */}
        {editing && (
          <div className="directive-block-editor">
            {schema?.attrs.map(field => (
              <div key={field.name} className="directive-field">
                <label>{field.label}{field.required && <span className="directive-required">*</span>}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    value={directiveAttrs[field.name] || ''}
                    onChange={e => handleAttrChange(field.name, e.target.value)}
                    rows={3}
                  />
                ) : (
                  <input
                    type={field.type === 'number' ? 'number' : 'text'}
                    value={directiveAttrs[field.name] || ''}
                    onChange={e => handleAttrChange(field.name, e.target.value)}
                    placeholder={field.label}
                  />
                )}
              </div>
            ))}

            {/* Container Children */}
            {schema?.isContainer && (
              <div className="directive-children-section">
                <div className="directive-children-header">
                  <strong>Items ({directiveChildren.length})</strong>
                  <button className="directive-btn directive-btn-add" onClick={addChild}>+ Add Item</button>
                </div>
                <div className="directive-children-list">
                  {directiveChildren.map((child: DirectiveChild, idx: number) => (
                    <div key={idx} className={`directive-child-item ${childEditing === idx ? 'is-editing' : ''}`}>
                      <div className="directive-child-header">
                        <button className="directive-btn directive-btn-move" onClick={() => moveChild(idx, idx - 1)} disabled={idx === 0}>↑</button>
                        <button className="directive-btn directive-btn-move" onClick={() => moveChild(idx, idx + 1)} disabled={idx === directiveChildren.length - 1}>↓</button>
                        <span className="directive-child-title">{child.attrs.title || `Item ${idx + 1}`}</span>
                        <button className="directive-btn" onClick={() => setChildEditing(childEditing === idx ? null : idx)}>
                          {childEditing === idx ? '▼' : '▶'}
                        </button>
                        <button className="directive-btn directive-btn-danger" onClick={() => removeChild(idx)}>✕</button>
                      </div>
                      {childEditing === idx && (
                        <div className="directive-child-fields">
                          {schema.childAttrs?.map(field => (
                            <div key={field.name} className="directive-field">
                              <label>{field.label}{field.required && <span className="directive-required">*</span>}</label>
                              {field.type === 'textarea' ? (
                                <textarea
                                  value={child.attrs[field.name] || ''}
                                  onChange={e => handleChildAttrChange(idx, field.name, e.target.value)}
                                  rows={2}
                                />
                              ) : (
                                <input
                                  type={field.type === 'number' ? 'number' : 'text'}
                                  value={child.attrs[field.name] || ''}
                                  onChange={e => handleChildAttrChange(idx, field.name, e.target.value)}
                                  placeholder={field.label}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
}

/* ── Visual Preview Sub-components ── */

function DirectivePreview({
  type,
  attrs,
  children,
}: {
  type: string;
  attrs: Record<string, string>;
  children: DirectiveChild[];
}) {
  switch (type) {
    case 'hero-banner':
      return <HeroBannerPreview attrs={attrs} />;
    case 'video-embed':
      return <VideoEmbedPreview attrs={attrs} />;
    case 'card-grid':
      return <CardGridPreview attrs={attrs} children={children} />;
    case 'link-grid':
      return <LinkGridPreview attrs={attrs} children={children} />;
    case 'callout':
      return <CalloutPreview attrs={attrs} />;
    default:
      return <div style={{ padding: 12, color: '#999', fontSize: 13 }}>Unknown directive: {type}</div>;
  }
}

function HeroBannerPreview({ attrs }: { attrs: Record<string, string> }) {
  return (
    <div style={{
      backgroundImage: attrs.image ? `url(${attrs.image})` : undefined,
      backgroundColor: '#1B3A6B',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: 160,
      padding: '1.5rem',
      borderRadius: '0 0 0.5rem 0.5rem',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>{attrs.title || 'Hero Title'}</h3>
      {attrs.version && <span style={{ color: '#93c5fd', fontSize: 12, marginTop: 4 }}>{attrs.version}</span>}
      {attrs.tagline && <span style={{ color: 'white', fontSize: 14, fontWeight: 600, marginTop: 8 }}>{attrs.tagline}</span>}
    </div>
  );
}

function VideoEmbedPreview({ attrs }: { attrs: Record<string, string> }) {
  return (
    <div style={{ padding: '12px 16px' }}>
      {attrs.title && <p style={{ fontSize: 14, fontWeight: 600, color: '#032D60', margin: '0 0 8px' }}>{attrs.title}</p>}
      <div style={{ background: '#000', borderRadius: 6, aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 180, overflow: 'hidden' }}>
        {attrs.src ? (
          <video src={attrs.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ color: '#666', fontSize: 13 }}>No video URL set</span>
        )}
        <div style={{ position: 'absolute', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: 18 }}>▶</span>
        </div>
      </div>
    </div>
  );
}

function CardGridPreview({ attrs, children }: { attrs: Record<string, string>; children: DirectiveChild[] }) {
  const cols = Math.min(Number(attrs.columns) || 2, 3);
  if (children.length === 0) {
    return <div style={{ padding: 16, color: '#999', fontSize: 13, textAlign: 'center' }}>No cards added yet. Click edit to add items.</div>;
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 10, padding: 12 }}>
      {children.map((child, i) => (
        <div key={i} style={{ border: '1px solid #E5E5E5', borderRadius: 8, overflow: 'hidden', background: 'white' }}>
          {child.attrs.image && (
            <div style={{ height: 80, background: '#F3F3F3', overflow: 'hidden' }}>
              <img src={child.attrs.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          {child.attrs.gradient && (
            <div style={{ height: 80, background: `linear-gradient(135deg, ${child.attrs.gradient.replace(/\s+/g, ', ')})` }} />
          )}
          <div style={{ padding: '8px 10px' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#032D60', margin: 0 }}>{child.attrs.title || 'Untitled'}</p>
            {child.attrs.description && (
              <p style={{ fontSize: 11, color: '#706E6B', margin: '3px 0 0', lineHeight: 1.4 }}>{child.attrs.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function LinkGridPreview({ attrs, children }: { attrs: Record<string, string>; children: DirectiveChild[] }) {
  const cols = Math.min(Number(attrs.columns) || 4, 4);
  if (children.length === 0) {
    return <div style={{ padding: 16, color: '#999', fontSize: 13, textAlign: 'center' }}>No links added yet. Click edit to add items.</div>;
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 8, padding: 12 }}>
      {children.map((child, i) => (
        <div key={i} style={{ border: '1px solid #E5E5E5', borderRadius: 8, overflow: 'hidden', background: 'white', textAlign: 'center' }}>
          <div style={{ height: 50, background: child.attrs.gradient ? `linear-gradient(135deg, ${child.attrs.gradient.replace(/\s+/g, ', ')})` : '#F3F3F3' }} />
          <div style={{ padding: '6px 8px' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#3E3E3C', margin: 0 }}>{child.attrs.title || 'Untitled'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CalloutPreview({ attrs }: { attrs: Record<string, string> }) {
  const type = attrs.type || 'info';
  const colors: Record<string, { bg: string; border: string; icon: string }> = {
    info:    { bg: '#EEF4FF', border: '#0176D3', icon: 'ℹ' },
    warning: { bg: '#FFF8E1', border: '#DD7A01', icon: '⚠' },
    error:   { bg: '#FEF0F3', border: '#B60554', icon: '✕' },
    success: { bg: '#DEF9F3', border: '#056764', icon: '✓' },
  };
  const c = colors[type] || colors.info;
  return (
    <div style={{ padding: '10px 14px', borderLeft: `4px solid ${c.border}`, background: c.bg, borderRadius: '0 0.25rem 0.25rem 0', margin: '0 12px 0 12px', fontSize: 13, color: '#333' }}>
      <span style={{ marginRight: 6 }}>{c.icon}</span>
      {attrs.body || 'Callout content...'}
    </div>
  );
}
