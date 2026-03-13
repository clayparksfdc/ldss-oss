import { useState } from 'react';
import { createLocalFile } from '../api';

interface NewFileDialogProps {
  onClose: () => void;
  onCreated: () => void;
}

const TEMPLATE = `---
title: New Page
description: 
category: 
order: 1
status: draft
---

# New Page

Write your content here.
`;

const CATEGORIES = [
  'component',
  'foundation',
  'general',
  'develop',
  'accessibility',
  'tools',
  'patterns',
];

export function NewFileDialog({ onClose, onCreated }: NewFileDialogProps) {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [filename, setFilename] = useState('');
  const [error, setError] = useState('');
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    const name = filename.trim().toLowerCase().replace(/\s+/g, '-').replace(/\.md$/, '');
    if (!name) {
      setError('Filename is required');
      return;
    }

    const path = `${category}/${name}.md`;
    const content = TEMPLATE.replace('title: New Page', `title: ${name.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}`)
      .replace('category: ', `category: ${category}`);

    setCreating(true);
    try {
      await createLocalFile(path, content);
      onCreated();
    } catch (err: any) {
      setError(err.message || 'Failed to create file');
      setCreating(false);
    }
  };

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <h2>Create New Page</h2>

        <label>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <label>Filename</label>
        <input
          type="text"
          placeholder="e.g. my-new-page"
          value={filename}
          onChange={e => { setFilename(e.target.value); setError(''); }}
          onKeyDown={e => e.key === 'Enter' && handleCreate()}
          autoFocus
        />

        {filename && (
          <div style={{ fontSize: 12, color: 'var(--slds-gray-500)', marginBottom: 12, fontFamily: 'var(--font-mono)' }}>
            content/{category}/{filename.trim().toLowerCase().replace(/\s+/g, '-').replace(/\.md$/, '')}.md
          </div>
        )}

        {error && (
          <div style={{ color: 'var(--slds-red)', fontSize: 13, marginBottom: 8 }}>{error}</div>
        )}

        <div className="dialog-actions">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleCreate} disabled={creating}>
            {creating ? 'Creating...' : 'Create File'}
          </button>
        </div>
      </div>
    </div>
  );
}
