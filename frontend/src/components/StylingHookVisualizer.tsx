'use client';

import { useEffect, useState, useCallback } from 'react';
import { CSSVariableParser, type VariableData } from '@/lib/css-variable-parser';
import styles from './StylingHookVisualizer.module.css';

export function StylingHookVisualizer() {
  const [data, setData] = useState<VariableData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'global' | 'semantic' | 'reference'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [sldsCSS, tokensCSS, plusCSS] = await Promise.all([
          fetch('/assets/styles/salesforce-lightning-design-system.css').then(r => r.text()),
          fetch('/assets/styles/designTokens.css').then(r => r.text()),
          fetch('/assets/styles/sldsPlusTemplate.css').then(r => r.text()),
        ]);
        if (cancelled) return;
        const combinedSldsCSS = sldsCSS + '\n' + tokensCSS;
        const parser = new CSSVariableParser();
        parser.parseCSS(combinedSldsCSS, parser.sldsVars);
        parser.parseCSS(plusCSS, parser.plusVars);
        parser.parseAllVars(combinedSldsCSS, parser.sldsAllVars);
        parser.parseAllVars(plusCSS, parser.plusAllVars);
        for (const [k, v] of parser.sldsAllVars) parser.allVars.set(k, v);
        for (const [k, v] of parser.plusAllVars) parser.allVars.set(k, v);
        setData(parser.getCombinedData());
      } catch (e) {
        if (!cancelled) setError('Failed to load CSS files.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const filteredData = data.filter(v => {
    if (search) {
      const s = search.toLowerCase();
      if (!v.name.toLowerCase().includes(s) &&
          !(v.sldsRef?.toLowerCase().includes(s)) &&
          !(v.plusRef?.toLowerCase().includes(s))) return false;
    }
    if (typeFilter !== 'all' && v.type !== typeFilter) return false;
    if (categoryFilter !== 'all' && v.category !== categoryFilter) return false;
    return true;
  });

  const truncate = (s: string | null, len = 80) =>
    !s ? '' : s.length > len ? s.slice(0, len - 3) + '...' : s;
  const escape = (s: string) => {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  };

  const createPreview = useCallback((v: VariableData, value: string | null, isPlus: boolean, mode: 'light' | 'dark') => {
    if (!value) return <span className={styles.noPreview}>N/A</span>;
    let raw: string | null;
    if (mode === 'dark') raw = isPlus ? v.plusDark : v.sldsDark;
    else if (mode === 'light' && (isPlus ? v.plusLight : v.sldsLight)) raw = isPlus ? v.plusLight : v.sldsLight;
    else raw = isPlus ? v.plusRaw : v.sldsRaw;
    if (!raw) return <span className={styles.noPreview}>-</span>;
    switch (v.category) {
      case 'color':
        return <div className={styles.colorPreview}><div className={styles.swatch} style={{ background: raw }} /></div>;
      case 'radius':
        return <div className={styles.radiusPreview} style={{ borderRadius: raw }} />;
      case 'shadow':
        return raw === 'none' ? <span className={styles.noPreview}>none</span> : <div className={styles.shadowPreview} style={{ boxShadow: raw }} />;
      case 'spacing': {
        const n = parseFloat(raw);
        const w = Math.min(Math.max(n * 16, 2), 32);
        return <div className={styles.spacingPreview}><div className={styles.bar} style={{ width: w }} /></div>;
      }
      case 'sizing': {
        let n = parseFloat(raw);
        const u = raw.replace(/[\d.]+/, '').trim();
        if (u === 'ch') n *= 0.5; else if (u === 'rem') n *= 16;
        const sz = Math.min(Math.max(n, 4), 32);
        return <div className={styles.sizingPreview}><div style={{ width: sz, height: sz }} /></div>;
      }
      case 'font':
        if (v.name.includes('weight'))
          return <div className={styles.fontWeightPreview} style={{ fontWeight: raw }}>Aa</div>;
        const fs = Math.min(Math.max(parseFloat(raw) * 16, 10), 24);
        return <div className={styles.fontSizePreview}><span style={{ fontSize: fs }}>A</span></div>;
      default:
        return <span className={styles.noPreview}>-</span>;
    }
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <div>Loading and parsing CSS files...</div>
      </div>
    );
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const categories = ['color', 'spacing', 'sizing', 'font', 'radius', 'shadow', 'other'] as const;
  const typeCounts = { all: data.length, global: data.filter(v => v.type === 'global').length, semantic: data.filter(v => v.type === 'semantic').length, reference: data.filter(v => v.type === 'reference').length };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3>Search</h3>
            <div className={styles.searchWrap}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
              <input type="text" className={styles.searchInput} placeholder="Search variables..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
          <div className={styles.sidebarSection}>
            <h3>Variable Type</h3>
            <div className={styles.filterGroup}>
              {(['all', 'global', 'semantic', 'reference'] as const).map(f => (
                <button key={f} className={`${styles.filterBtn} ${typeFilter === f ? styles.active : ''}`} onClick={() => setTypeFilter(f)} data-filter={f}>
                  {f === 'all' ? 'All Variables' : f === 'global' ? 'Global (--slds-g)' : f === 'semantic' ? 'Shared (--slds-s)' : 'Reference (--slds-r)'}
                  <span className={styles.count}>{typeCounts[f]}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.sidebarSection}>
            <h3>Category</h3>
            <div className={styles.filterGroup}>
              <button className={`${styles.filterBtn} ${categoryFilter === 'all' ? styles.active : ''}`} onClick={() => setCategoryFilter('all')}>All Categories <span className={styles.count}>{data.length}</span></button>
              {categories.map(c => (
                <button key={c} className={`${styles.filterBtn} ${categoryFilter === c ? styles.active : ''}`} onClick={() => setCategoryFilter(c)} data-category={c}>
                  {c === 'font' ? 'Typography' : c === 'radius' ? 'Border Radius' : c.charAt(0).toUpperCase() + c.slice(1)}
                  <span className={styles.count}>{data.filter(v => v.category === c).length}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
        <main className={styles.main}>
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <h2>Variable Comparison</h2>
            </div>
            <div className={styles.tableScroll}>
              {filteredData.length === 0 ? (
                <div className={styles.emptyState}><h3>No variables found</h3><p>Try adjusting your search or filters</p></div>
              ) : (
                <table className={styles.variableTable}>
                  <thead>
                    <tr>
                      <th>Variable Name</th>
                      <th>Tags</th>
                      <th className={styles.valueCell}>Lightning Blue</th>
                      <th className={styles.valueCell}>Cosmos</th>
                      <th className={styles.previewCell}>Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map(v => {
                      const sldsLD = v.sldsLight && v.sldsDark;
                      const plusLD = v.plusLight && v.plusDark;
                      return (
                        <tr key={v.name}>
                          <td><code className={styles.varName}>{v.name}</code></td>
                          <td>
                            <span className={`${styles.typeBadge} ${styles[v.type]}`}>{v.type}</span>
                            <span className={`${styles.categoryBadge} ${styles[v.category]}`}>{v.category}</span>
                          </td>
                          <td className={styles.valueCell}>
                            <div className={styles.valueWrapper}>
                              {v.sldsRef ? (
                                <>
                                  <div><span className={styles.valueLabel}>Reference:</span><div className={styles.varValueRef}>{escape(truncate(v.sldsRef))}</div></div>
                                  <div><span className={styles.valueLabel}>Resolved:</span><div className={styles.varValueRaw}>{escape(truncate(v.sldsRaw || ''))}</div></div>
                                  {sldsLD && <><div><span className={styles.valueLabel}>Light:</span><div className={styles.varValueRaw}>{escape(truncate(v.sldsLight!))}</div></div><div><span className={styles.valueLabel}>Dark:</span><div className={styles.varValueRaw}>{escape(truncate(v.sldsDark!))}</div></div></>}
                                </>
                              ) : <span className={styles.varMuted}>Not defined</span>}
                            </div>
                          </td>
                          <td className={styles.valueCell}>
                            <div className={styles.valueWrapper}>
                              {v.plusRef ? (
                                <>
                                  <div><span className={styles.valueLabel}>Reference:</span><div className={styles.varValueRef}>{escape(truncate(v.plusRef))}</div></div>
                                  <div><span className={styles.valueLabel}>Resolved:</span><div className={styles.varValueRaw}>{escape(truncate(v.plusRaw || ''))}</div></div>
                                  {plusLD && <><div><span className={styles.valueLabel}>Light:</span><div className={styles.varValueRaw}>{escape(truncate(v.plusLight!))}</div></div><div><span className={styles.valueLabel}>Dark:</span><div className={styles.varValueRaw}>{escape(truncate(v.plusDark!))}</div></div></>}
                                </>
                              ) : <span className={styles.varMuted}>Not defined</span>}
                            </div>
                          </td>
                          <td className={styles.previewCell}>
                            <div className={styles.previewContainer}>
                              {v.sldsRaw && (
                                <>
                                  <div className={styles.previewBox}><span className={styles.previewLabel}>{sldsLD ? 'LB Light' : 'Lightning Blue'}</span>{createPreview(v, v.sldsRef, false, 'light')}</div>
                                  {sldsLD && <div className={`${styles.previewBox} ${styles.darkMode}`}><span className={styles.previewLabel}>LB Dark</span>{createPreview(v, v.sldsRef, false, 'dark')}</div>}
                                </>
                              )}
                              {v.plusRaw && (
                                <>
                                  <div className={styles.previewBox}><span className={styles.previewLabel}>{plusLD ? 'Cosmos Light' : 'Cosmos'}</span>{createPreview(v, v.plusRef, true, 'light')}</div>
                                  {plusLD && <div className={`${styles.previewBox} ${styles.darkMode}`}><span className={styles.previewLabel}>Cosmos Dark</span>{createPreview(v, v.plusRef, true, 'dark')}</div>}
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
