import { useState, useEffect, useCallback, useRef } from 'react';

interface CloudinaryResource {
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

interface PickerProps {
  onClose: () => void;
  onPick: (resource: { secureUrl: string; alt?: string }) => void;
}

export function CloudinaryPicker({ onClose, onPick }: PickerProps) {
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [resources, setResources] = useState<CloudinaryResource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selected, setSelected] = useState<CloudinaryResource | null>(null);
  const [altText, setAltText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/cloudinary/status', { credentials: 'include' });
      const data = await res.json();
      setConfigured(!!data.configured);
    } catch {
      setConfigured(false);
    }
  }, []);

  const loadResources = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/cloudinary/list', { credentials: 'include' });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setResources(data.resources || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadStatus(); }, [loadStatus]);
  useEffect(() => { if (configured) loadResources(); }, [configured, loadResources]);

  const upload = useCallback(async (file: File) => {
    setUploading(true);
    setError('');
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: form,
        credentials: 'include',
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Upload failed: ${res.status}`);
      }
      const data = await res.json();
      const newResource: CloudinaryResource = {
        publicId: data.publicId,
        url: data.url,
        secureUrl: data.secureUrl,
        format: data.format,
        width: data.width,
        height: data.height,
        bytes: data.bytes,
        createdAt: new Date().toISOString(),
      };
      setResources(prev => [newResource, ...prev]);
      setSelected(newResource);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }, []);

  const filtered = resources.filter(r =>
    !search || r.publicId.toLowerCase().includes(search.toLowerCase()),
  );

  const insert = () => {
    if (!selected) return;
    onPick({ secureUrl: selected.secureUrl, alt: altText || undefined });
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white', borderRadius: 12, width: 'min(900px, 90vw)',
          maxHeight: '85vh', display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Insert image</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#706E6B' }}>×</button>
        </div>

        {configured === false && (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#706E6B' }}>
            <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: '#181818' }}>Cloudinary not configured</p>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Set <code>CLOUDINARY_URL</code> in <code>.env</code>, or run{' '}
              <code>heroku addons:create cloudinary:starter</code>.
            </p>
          </div>
        )}

        {configured && (
          <>
            <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid #E5E5E5', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search by name…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ flex: 1, padding: '0.5rem 0.75rem', borderRadius: 6, border: '1px solid #D8D8D8', fontSize: 14 }}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                style={{ padding: '0.5rem 1rem', background: '#0176D3', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: uploading ? 'wait' : 'pointer' }}
              >
                {uploading ? 'Uploading…' : '+ Upload new'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => {
                  const f = e.target.files?.[0];
                  if (f) upload(f);
                  e.target.value = '';
                }}
              />
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
              {error && (
                <div style={{ padding: '0.75rem', background: '#FEF0F3', color: '#B60554', borderRadius: 6, marginBottom: '1rem', fontSize: 13 }}>
                  {error}
                </div>
              )}
              {loading && <p style={{ color: '#706E6B' }}>Loading…</p>}
              {!loading && filtered.length === 0 && (
                <p style={{ color: '#706E6B', textAlign: 'center', padding: '2rem 0' }}>
                  No images yet. Upload one to get started.
                </p>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                {filtered.map(r => (
                  <div
                    key={r.publicId}
                    onClick={() => setSelected(r)}
                    style={{
                      border: `2px solid ${selected?.publicId === r.publicId ? '#0176D3' : '#E5E5E5'}`,
                      borderRadius: 8,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: 'white',
                    }}
                  >
                    <div style={{ aspectRatio: '1 / 1', background: '#F3F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <img
                        src={r.secureUrl}
                        alt=""
                        loading="lazy"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div style={{ padding: '0.5rem', fontSize: 11, color: '#706E6B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {r.publicId.split('/').pop()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selected && (
              <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #E5E5E5', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Alt text (describe the image)"
                  value={altText}
                  onChange={e => setAltText(e.target.value)}
                  style={{ flex: 1, padding: '0.5rem 0.75rem', borderRadius: 6, border: '1px solid #D8D8D8', fontSize: 14 }}
                />
                <button
                  onClick={insert}
                  style={{ padding: '0.5rem 1rem', background: '#0176D3', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
                >
                  Insert
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
