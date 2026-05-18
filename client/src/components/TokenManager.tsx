import { useState, useEffect, useCallback } from 'react';

interface TokenEntry {
  name: string;
  value: string;
  preview?: string;
}

interface TokenData {
  exists: boolean;
  installedVersion?: string | null;
  generatedAt?: string;
  source?: string;
  sourceVersion?: string;
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
  const [regenerating, setRegenerating] = useState(false);
  const [message, setMessage] = useState('');

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

  const regenerate = useCallback(async () => {
    setRegenerating(true);
    setMessage('');
    try {
      const res = await fetch('/api/tokens/regenerate', { method: 'POST' });
      const json = await res.json();
      if (json.success) {
        setMessage(`Regenerated ${json.totalTokens} tokens from ${json.source}.`);
        loadCurrent();
      } else {
        setMessage(`Error: ${json.error}${json.stderr ? `\n${json.stderr}` : ''}`);
      }
    } catch (err: any) {
      setMessage(`Regenerate failed: ${err.message}`);
    } finally {
      setRegenerating(false);
    }
  }, [loadCurrent]);

  const isStale = data?.exists && data?.sourceVersion && data?.installedVersion && data.sourceVersion !== data.installedVersion;

  return (
    <div className="token-manager" style={{ padding: '2rem', maxWidth: 960 }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Design Token Manager</h1>
      <p style={{ color: '#706E6B', marginBottom: '1.5rem' }}>
        Tokens are generated from <code>@salesforce-ux/design-system-2</code> at build time.
        Bump the package version with <code>npm install @salesforce-ux/design-system-2@&lt;version&gt; --save-dev</code>,
        then regenerate to refresh <code>content/data/design-tokens.json</code>.
      </p>

      {/* SSOT info card */}
      <div style={{
        border: '1px solid #E5E5E5',
        borderRadius: 12,
        padding: '1.25rem 1.5rem',
        background: '#FAFAF9',
        marginBottom: '1.5rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.5, color: '#706E6B', marginBottom: 4 }}>
              Installed npm package
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.9375rem', color: '#032D60' }}>
              @salesforce-ux/design-system-2@{data?.installedVersion ?? '—'}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.5, color: '#706E6B', marginBottom: 4 }}>
              Last generated from
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.9375rem', color: '#032D60' }}>
              v{data?.sourceVersion ?? '—'}
              {data?.generatedAt && (
                <span style={{ color: '#706E6B', fontSize: '0.8125rem', marginLeft: 8 }}>
                  · {new Date(data.generatedAt).toLocaleString()}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={regenerate}
            disabled={regenerating || !data?.installedVersion}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 8,
              border: 'none',
              background: regenerating ? '#A8B7C7' : '#0176D3',
              color: 'white',
              fontWeight: 600,
              cursor: regenerating ? 'wait' : 'pointer',
              fontSize: '0.875rem',
            }}
          >
            {regenerating ? 'Regenerating…' : 'Regenerate from npm'}
          </button>
        </div>
        {isStale && (
          <div style={{
            marginTop: '0.75rem',
            padding: '0.5rem 0.75rem',
            borderRadius: 6,
            background: '#FEF7E0',
            color: '#5C4500',
            fontSize: '0.8125rem',
          }}>
            ⚠ Installed package version differs from the last generated output. Click <strong>Regenerate</strong> to update.
          </div>
        )}
      </div>

      {message && (
        <div style={{
          padding: '0.75rem 1rem',
          borderRadius: 8,
          background: message.startsWith('Error') || message.startsWith('Regenerate failed') ? '#FEF0F3' : '#DEF9F3',
          color: message.startsWith('Error') || message.startsWith('Regenerate failed') ? '#B60554' : '#056764',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          whiteSpace: 'pre-wrap',
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
          No tokens generated yet. Click <strong>Regenerate from npm</strong> above.
        </div>
      )}
    </div>
  );
}
