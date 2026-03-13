import { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';

function getAuthErrorFromUrl(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('auth_error') === '1';
}
import { FileBrowser } from './components/FileBrowser';
import { EditorPanel } from './components/EditorPanel';
import { Dashboard } from './components/Dashboard';
import { NewFileDialog } from './components/NewFileDialog';
import { NavigationManager } from './components/NavigationManager';
import { TokenManager } from './components/TokenManager';
import { fetchCurrentUser, logout, invalidateFilesCache, type AuthUser } from './api';
import './App.css';

type AppView = 'files' | 'navigation' | 'tokens';

export default function App() {
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNewFileDialog, setShowNewFileDialog] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [appView, setAppView] = useState<AppView>('files');
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authErrorFromUrl, setAuthErrorFromUrl] = useState(false);

  useEffect(() => {
    const hadError = getAuthErrorFromUrl();
    setAuthErrorFromUrl(hadError);
    if (hadError && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('auth_error');
      window.history.replaceState({}, '', url.pathname + url.search);
    }
    fetchCurrentUser()
      .then(u => setUser(u))
      .finally(() => setAuthLoading(false));
  }, []);

  const handleLogin = useCallback(() => {
    window.location.href = '/auth/github';
  }, []);

  const handleLogout = useCallback(async () => {
    await logout();
    setUser(null);
  }, []);

  const handleFileSelect = useCallback((path: string) => {
    setCurrentFile(path);
    setAppView('files');
  }, []);

  const handleBack = useCallback(() => {
    setCurrentFile(null);
  }, []);

  const handleFileCreated = useCallback(() => {
    setShowNewFileDialog(false);
    invalidateFilesCache();
    setRefreshKey(k => k + 1);
  }, []);

  const handleNavClick = useCallback(() => {
    setAppView('navigation');
    setCurrentFile(null);
  }, []);

  const handleFilesClick = useCallback(() => {
    setAppView('files');
  }, []);

  const handleTokensClick = useCallback(() => {
    setAppView('tokens');
    setCurrentFile(null);
  }, []);

  if (authLoading || !user) {
    return (
      <>
        <style>{`
          @keyframes ldss-spin { to { transform: rotate(360deg); } }
          .ldss-login-btn:hover { background: #1a1e22 !important; transform: translateY(-1px); }
        `}</style>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #032D60 0%, #0176D3 50%, #1B96FF 100%)',
        }}>
          <div style={{
            background: 'white', borderRadius: 16, padding: '48px 40px',
            textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            maxWidth: 420, width: '100%',
          }}>
            {authLoading ? (
              <>
                <div style={{
                  width: 32, height: 32, border: '3px solid #e8ecf1',
                  borderTopColor: '#0176D3', borderRadius: '50%',
                  animation: 'ldss-spin 0.8s linear infinite', margin: '0 auto',
                }} />
                <p style={{ color: '#706E6B', marginTop: 16, fontSize: 14 }}>Checking authentication…</p>
              </>
            ) : (
              <>
                <div style={{ marginBottom: 20 }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#032D60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <line x1="10" y1="9" x2="8" y2="9"/>
                  </svg>
                </div>
                <h1 style={{ fontSize: 22, fontWeight: 700, color: '#032D60', margin: '0 0 8px' }}>
                  Lightning Design System CMS
                </h1>
                {authErrorFromUrl && (
                  <p style={{ fontSize: 13, color: '#C23934', margin: '0 0 16px', lineHeight: 1.5, background: '#FED3D1', padding: '10px 14px', borderRadius: 8 }}>
                    Session timed out or something went wrong. Please try signing in again.
                  </p>
                )}
                <p style={{ fontSize: 14, color: '#706E6B', margin: '0 0 32px', lineHeight: 1.5 }}>
                  Sign in with your GitHub Enterprise account to manage content.
                </p>
                <button
                  className="ldss-login-btn"
                  onClick={handleLogin}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: '#24292e', color: 'white', border: 'none',
                    padding: '12px 28px', borderRadius: 8, fontSize: 15,
                    fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Sign in with GitHub
                </button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="app">
      <Header
        currentFile={currentFile}
        appView={appView}
        user={user}
        authLoading={authLoading}
        onToggleSidebar={() => setSidebarCollapsed(c => !c)}
        onNewFile={() => setShowNewFileDialog(true)}
        onBack={handleBack}
        onNavClick={handleNavClick}
        onFilesClick={handleFilesClick}
        onTokensClick={handleTokensClick}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <div className="app-body">
        {appView === 'files' && (
          <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <FileBrowser
              onFileSelect={handleFileSelect}
              currentFile={currentFile}
              refreshKey={refreshKey}
            />
          </aside>
        )}
        <main className="main-content">
          {appView === 'tokens' ? (
            <TokenManager />
          ) : appView === 'navigation' ? (
            <NavigationManager />
          ) : currentFile ? (
            <EditorPanel filePath={currentFile} user={user} />
          ) : (
            <Dashboard />
          )}
        </main>
      </div>
      {showNewFileDialog && (
        <NewFileDialog
          onClose={() => setShowNewFileDialog(false)}
          onCreated={handleFileCreated}
        />
      )}
    </div>
  );
}
