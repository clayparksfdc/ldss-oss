import type { AuthUser } from '../api';

interface HeaderProps {
  currentFile: string | null;
  appView: 'files' | 'navigation' | 'tokens';
  user: AuthUser | null;
  authLoading: boolean;
  onToggleSidebar: () => void;
  onNewFile: () => void;
  onBack: () => void;
  onNavClick: () => void;
  onFilesClick: () => void;
  onTokensClick: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

export function Header({
  currentFile, appView, user, authLoading,
  onToggleSidebar, onNewFile, onBack, onNavClick, onFilesClick, onTokensClick,
  onLogin, onLogout,
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

        <div className="header-separator" />

        {authLoading ? (
          <span className="header-auth-loading">...</span>
        ) : user ? (
          <div className="header-user">
            {user.avatar_url && (
              <img src={user.avatar_url} alt="" className="header-avatar" />
            )}
            <span className="header-username">{user.github_login}</span>
            <button className="btn btn-ghost btn-sm" onClick={onLogout}>
              Sign out
            </button>
          </div>
        ) : (
          <button className="btn btn-github" onClick={onLogin}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Sign in with GitHub
          </button>
        )}
      </div>
    </header>
  );
}
