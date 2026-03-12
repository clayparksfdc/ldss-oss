interface HeaderProps {
  currentFile: string | null;
  appView: 'files' | 'navigation' | 'tokens';
  onToggleSidebar: () => void;
  onNewFile: () => void;
  onBack: () => void;
  onNavClick: () => void;
  onFilesClick: () => void;
  onTokensClick: () => void;
}

export function Header({
  currentFile, appView, onToggleSidebar, onNewFile, onBack, onNavClick, onFilesClick, onTokensClick,
}: HeaderProps) {
  return (
    <header className="header">
      <button className="btn btn-icon" onClick={onToggleSidebar} title="Toggle sidebar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      <span className="header-logo">LDSS CMS</span>

      {currentFile && appView === 'files' && (
        <>
          <div className="header-separator" />
          <button className="btn btn-icon" onClick={onBack} title="Back to dashboard">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="header-file-path">{currentFile}</span>
        </>
      )}

      <div className="header-actions">
        <button
          className={`btn ${appView === 'files' ? 'btn-ghost' : 'btn-icon'}`}
          onClick={onFilesClick}
          style={appView === 'files' ? { background: 'rgba(255,255,255,0.15)' } : {}}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Files
        </button>
        <button
          className={`btn ${appView === 'navigation' ? 'btn-ghost' : 'btn-icon'}`}
          onClick={onNavClick}
          style={appView === 'navigation' ? { background: 'rgba(255,255,255,0.15)' } : {}}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
            <polyline points="9 6 9 2" /><polyline points="15 12 15 8" /><polyline points="9 18 9 14" />
          </svg>
          Navigation
        </button>
        <button
          className={`btn ${appView === 'tokens' ? 'btn-ghost' : 'btn-icon'}`}
          onClick={onTokensClick}
          style={appView === 'tokens' ? { background: 'rgba(255,255,255,0.15)' } : {}}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          Tokens
        </button>
        <div className="header-separator" />
        <button className="btn btn-ghost" onClick={onNewFile}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          New File
        </button>
      </div>
    </header>
  );
}
