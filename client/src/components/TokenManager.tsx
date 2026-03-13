import { useState, useEffect, useCallback, useRef } from 'react';

interface TokenEntry {
  name: string;
  value: string;
  preview?: string;
}

interface TokenData {
  exists: boolean;
  generatedAt?: string;
  source?: string;
  totalTokens?: number;
  categories?: Record<string, TokenEntry[]>;
}

const CATEGORY_LABELS: Record<string, string> = {
  color: 'Color',
  spacing: 'Spacing',
  sizing: 'Sizing',
  shadow: 'Shadow',
  radius: 'Border Radius',
  ratio: 'Aspect Ratio',
  font: 'Font / Typography',
  duration: 'Duration / Motion',
  link: 'Link',
  other: 'Other',
};

export function TokenManager() {
  const [data, setData] = useState<TokenData | null>(null);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadCurrent = useCallback(async () => {
    try {
      const res = await fetch('/api/tokens/current');
      const json = await res.json();
      setData(json);
    } catch {
      setData({ exists: false });
    }
  }, []);

  useEffect(() => { loadCurrent(); }, [loadCurrent]);

  const uploadCss = useCallback(async (css: string) => {
    setUploading(true);
    setMessage('');
    try {
      const res = await fetch('/api/tokens/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: css,
      });
      const json = await res.json();
      if (json.success) {
        setMessage(`Parsed ${json.totalTokens} tokens successfully.`);
        loadCurrent();
      } else {
        setMessage(`Error: ${json.error}`);
      }
    } catch (err: any) {
      setMessage(`Upload failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  }, [loadCurrent]);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.name.endsWith('.css')) {
      setMessage('Please upload a .css file');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) uploadCss(e.target.result as string);
    };
    reader.readAsText(file);
  }, [uploadCss]);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragActive(true); };
  const handleDragLeave = () => setDragActive(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="token-manager" style={{ padding: '2rem', maxWidth: 960 }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Design Token Manager</h1>
      <p style={{ color: '#706E6B', marginBottom: '1.5rem' }}>
        Upload an SLDS CSS file to extract <code>--slds-g-*</code> design tokens and generate
        the <code>design-tokens.json</code> data file used by the frontend.
      </p>

      {/* Upload area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: `2px dashed ${dragActive ? '#0176D3' : '#D8D8D8'}`,
          borderRadius: 12,
          padding: '3rem 2rem',
          textAlign: 'center',
          cursor: 'pointer',
          background: dragActive ? '#EEF4FF' : '#FAFAF9',
          transition: 'all .15s',
          marginBottom: '1.5rem',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".css"
          style={{ display: 'none' }}
          onChange={(e) => handleFiles(e.target.files)}
        />
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#706E6B" strokeWidth="1.5" style={{ margin: '0 auto 1rem' }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p style={{ fontWeight: 600, marginBottom: 4 }}>
          {uploading ? 'Uploading…' : 'Drop CSS file here or click to browse'}
        </p>
        <p style={{ fontSize: '0.8125rem', color: '#706E6B' }}>
          Accepts <code>.css</code> files (e.g. sldsPlusTemplate.css)
        </p>
      </div>

      {message && (
        <div style={{
          padding: '0.75rem 1rem',
          borderRadius: 8,
          background: message.startsWith('Error') || message.startsWith('Upload failed') ? '#FEF0F3' : '#DEF9F3',
          color: message.startsWith('Error') || message.startsWith('Upload failed') ? '#B60554' : '#056764',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
        }}>
          {message}
        </div>
      )}

      {/* Current data */}
      {data?.exists && data.categories && (
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            Current Tokens ({data.totalTokens})
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#706E6B', marginBottom: '1rem' }}>
            Source: <code>{data.source}</code> — Generated: {data.generatedAt ? new Date(data.generatedAt).toLocaleString() : 'unknown'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {Object.entries(data.categories).map(([cat, tokens]) => (
              <div
                key={cat}
                style={{
                  border: '1px solid #E5E5E5',
                  borderRadius: 8,
                  padding: '1rem',
                  background: 'white',
                }}
              >
                <div style={{ fontWeight: 600, textTransform: 'capitalize', marginBottom: 4 }}>
                  {CATEGORY_LABELS[cat] || cat}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0176D3' }}>
                  {tokens.length}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#706E6B' }}>tokens</div>
                {cat === 'color' && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 8 }}>
                    {tokens.slice(0, 20).map((t) =>
                      t.preview ? (
                        <span
                          key={t.name}
                          title={t.name}
                          style={{
                            display: 'inline-block',
                            width: 14,
                            height: 14,
                            borderRadius: 3,
                            backgroundColor: t.preview,
                            border: '1px solid #E5E5E5',
                          }}
                        />
                      ) : null,
                    )}
                    {tokens.length > 20 && (
                      <span style={{ fontSize: '0.625rem', color: '#706E6B', lineHeight: '14px' }}>
                        +{tokens.length - 20}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {data && !data.exists && (
        <div style={{ textAlign: 'center', color: '#706E6B', padding: '2rem' }}>
          No design tokens have been parsed yet. Upload a CSS file above to get started.
        </div>
      )}
    </div>
  );
}
