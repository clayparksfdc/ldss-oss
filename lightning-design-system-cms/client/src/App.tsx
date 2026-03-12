import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { FileBrowser } from './components/FileBrowser';
import { EditorPanel } from './components/EditorPanel';
import { Dashboard } from './components/Dashboard';
import { NewFileDialog } from './components/NewFileDialog';
import { NavigationManager } from './components/NavigationManager';
import { TokenManager } from './components/TokenManager';
import './App.css';

type AppView = 'files' | 'navigation' | 'tokens';

export default function App() {
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNewFileDialog, setShowNewFileDialog] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [appView, setAppView] = useState<AppView>('files');

  const handleFileSelect = useCallback((path: string) => {
    setCurrentFile(path);
    setAppView('files');
  }, []);

  const handleBack = useCallback(() => {
    setCurrentFile(null);
  }, []);

  const handleFileCreated = useCallback(() => {
    setShowNewFileDialog(false);
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

  return (
    <div className="app">
      <Header
        currentFile={currentFile}
        appView={appView}
        onToggleSidebar={() => setSidebarCollapsed(c => !c)}
        onNewFile={() => setShowNewFileDialog(true)}
        onBack={handleBack}
        onNavClick={handleNavClick}
        onFilesClick={handleFilesClick}
        onTokensClick={handleTokensClick}
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
            <EditorPanel filePath={currentFile} />
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
