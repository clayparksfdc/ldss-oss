import { useState, useEffect, useCallback } from 'react';
import { fetchLocalFiles, type FileEntry } from '../api';

interface FileBrowserProps {
  onFileSelect: (path: string) => void;
  currentFile: string | null;
  refreshKey: number;
}

export function FileBrowser({ onFileSelect, currentFile, refreshKey }: FileBrowserProps) {
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    setLoading(true);
    fetchLocalFiles()
      .then(f => {
        setFiles(f);
        if (f.length > 0) {
          setExpanded(new Set(f.map(e => e.path)));
        }
      })
      .catch(() => setFiles([]))
      .finally(() => setLoading(false));
  }, [refreshKey]);

  const toggleDir = useCallback((path: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }, []);

  const filterFiles = useCallback((entries: FileEntry[], query: string): FileEntry[] => {
    if (!query) return entries;
    return entries.reduce<FileEntry[]>((acc, entry) => {
      if (entry.type === 'directory') {
        const filtered = filterFiles(entry.children || [], query);
        if (filtered.length > 0) {
          acc.push({ ...entry, children: filtered });
        }
      } else if (entry.name.toLowerCase().includes(query.toLowerCase())) {
        acc.push(entry);
      }
      return acc;
    }, []);
  }, []);

  const renderEntry = (entry: FileEntry, depth: number = 0) => {
    const isDir = entry.type === 'directory';
    const isOpen = expanded.has(entry.path);
    const isActive = currentFile === entry.path;

    if (isDir) {
      return (
        <div key={entry.path}>
          <div
            className={`tree-item directory`}
            style={{ paddingLeft: 12 + depth * 16 }}
            onClick={() => toggleDir(entry.path)}
          >
            <span className="tree-icon">
              {isOpen ? '▾' : '▸'}
            </span>
            <span className="tree-icon">
              {isOpen ? '📂' : '📁'}
            </span>
            <span className="tree-label">{entry.name}</span>
          </div>
          {isOpen && entry.children?.map(child => renderEntry(child, depth + 1))}
        </div>
      );
    }

    return (
      <div
        key={entry.path}
        className={`tree-item ${isActive ? 'active' : ''}`}
        style={{ paddingLeft: 12 + depth * 16 }}
        onClick={() => onFileSelect(entry.path)}
      >
        <span className="tree-icon" />
        <span className="tree-icon">
          {entry.name.endsWith('.md') || entry.name.endsWith('.mdx') ? '📝' : '📄'}
        </span>
        <span className="tree-label">{entry.name}</span>
      </div>
    );
  };

  const filtered = filterFiles(files, search);

  return (
    <>
      <div className="sidebar-header">
        <span className="sidebar-title">Content Files</span>
      </div>
      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Search files..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="file-tree">
        {loading ? (
          <div className="loading-state">Loading...</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 16, color: '#999', fontSize: 13, textAlign: 'center' }}>
            {search ? 'No matching files' : 'No content files found'}
          </div>
        ) : (
          filtered.map(entry => renderEntry(entry))
        )}
      </div>
    </>
  );
}
