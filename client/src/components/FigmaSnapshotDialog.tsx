import { useState } from 'react';

interface Props {
  onClose: () => void;
  onInsert: (snippet: string) => void;
}

export function FigmaSnapshotDialog({ onClose, onInsert }: Props) {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<{ secureUrl: string } | null>(null);

  const snapshot = async () => {
    setBusy(true);
    setError('');
    setPreview(null);
    try {
      const res = await fetch('/api/cloudinary/figma-snapshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ figmaUrl }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || data.hint || `HTTP ${res.status}`);
      }
      setPreview({ secureUrl: data.secureUrl });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const insert = () => {
    if (!preview) return;
    const attrs = [
      `src="${preview.secureUrl}"`,
      `url="${figmaUrl}"`,
      caption ? `caption="${caption.replace(/"/g, '\\"')}"` : null,
    ].filter(Boolean).join(' ');
    onInsert(`\n:::figma{${attrs}}\n:::\n`);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: 'white', borderRadius: 12, width: 'min(560px, 90vw)', maxHeight: '85vh', overflow: 'auto' }}
      >
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Insert Figma snapshot</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#706E6B' }}>×</button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          <p style={{ margin: '0 0 1rem', fontSize: 13, color: '#706E6B' }}>
            Paste a Figma file or design URL. We fetch the frame thumbnail and host it on Cloudinary
            so the page stays fast and the asset stays live even if the Figma file is moved.
          </p>

          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
            Figma URL
          </label>
          <input
            type="url"
            placeholder="https://www.figma.com/design/<key>/<title>?node-id=12-34"
            value={figmaUrl}
            onChange={e => setFigmaUrl(e.target.value)}
            style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 6, border: '1px solid #D8D8D8', fontSize: 14, marginBottom: '1rem' }}
          />

          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
            Caption <span style={{ color: '#706E6B', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            type="text"
            placeholder="What does this frame show?"
            value={caption}
            onChange={e => setCaption(e.target.value)}
            style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 6, border: '1px solid #D8D8D8', fontSize: 14, marginBottom: '1rem' }}
          />

          {error && (
            <div style={{ padding: '0.75rem', background: '#FEF0F3', color: '#B60554', borderRadius: 6, marginBottom: '1rem', fontSize: 13, whiteSpace: 'pre-wrap' }}>
              {error}
            </div>
          )}

          {preview && (
            <div style={{ marginBottom: '1rem' }}>
              <img
                src={preview.secureUrl}
                alt=""
                style={{ width: '100%', borderRadius: 8, border: '1px solid #E5E5E5' }}
              />
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={onClose}
              style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #D8D8D8', borderRadius: 6, fontSize: 13, cursor: 'pointer' }}
            >
              Cancel
            </button>
            {!preview && (
              <button
                onClick={snapshot}
                disabled={!figmaUrl || busy}
                style={{ padding: '0.5rem 1rem', background: busy || !figmaUrl ? '#A8B7C7' : '#0176D3', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: busy || !figmaUrl ? 'wait' : 'pointer' }}
              >
                {busy ? 'Snapshotting…' : 'Generate snapshot'}
              </button>
            )}
            {preview && (
              <button
                onClick={insert}
                style={{ padding: '0.5rem 1rem', background: '#0176D3', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
              >
                Insert into markdown
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
