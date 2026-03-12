import { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { fetchLocalFile, saveLocalFile } from '../api';
import {
  parseNavigationMd,
  serializeNavigationMd,
  type NavTree,
  type NavCategory,
  type NavPage,
  type NavTab,
} from '../lib/parse-nav';

export function NavigationManager() {
  const [tree, setTree] = useState<NavTree | null>(null);
  const [original, setOriginal] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchLocalFile('navigation.md')
      .then(data => {
        setTree(parseNavigationMd(data.content));
        setOriginal(data.content);
      })
      .catch(() => setTree({ categories: [] }))
      .finally(() => setLoading(false));
  }, []);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const hasChanges = tree ? serializeNavigationMd(tree) !== original : false;

  const handleSave = useCallback(async () => {
    if (!tree) return;
    setSaving(true);
    try {
      const md = serializeNavigationMd(tree);
      await saveLocalFile('navigation.md', md);
      setOriginal(md);
    } catch (e) {
      console.error('Save failed:', e);
    }
    setSaving(false);
  }, [tree]);

  const toggleCollapse = (id: string) => {
    setCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const updateCategory = (catId: string, updates: Partial<NavCategory>) => {
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => c.id === catId ? { ...c, ...updates } : c),
      };
    });
  };

  const deleteCategory = (catId: string) => {
    if (!confirm('Delete this category and all its pages?')) return;
    setTree(prev => {
      if (!prev) return prev;
      return { categories: prev.categories.filter(c => c.id !== catId) };
    });
  };

  const addCategory = () => {
    const name = prompt('Category name:');
    if (!name) return;
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: [...prev.categories, { id: `nav_new_${Date.now()}`, name, pages: [] }],
      };
    });
  };

  const updatePage = (catId: string, pageId: string, updates: Partial<NavPage>) => {
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          return { ...c, pages: c.pages.map(p => p.id === pageId ? { ...p, ...updates } : p) };
        }),
      };
    });
  };

  const deletePage = (catId: string, pageId: string) => {
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          return { ...c, pages: c.pages.filter(p => p.id !== pageId) };
        }),
      };
    });
  };

  const addPage = (catId: string) => {
    const name = prompt('Page name:');
    if (!name) return;
    const url = prompt('Page URL (e.g. /component/my-page):');
    if (!url) return;
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          return {
            ...c,
            pages: [...c.pages, { id: `nav_new_${Date.now()}`, name, url, tabs: [] }],
          };
        }),
      };
    });
  };

  const deleteTab = (catId: string, pageId: string, tabId: string) => {
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          return {
            ...c,
            pages: c.pages.map(p => {
              if (p.id !== pageId) return p;
              return { ...p, tabs: p.tabs.filter(t => t.id !== tabId) };
            }),
          };
        }),
      };
    });
  };

  const addTab = (catId: string, pageId: string) => {
    const name = prompt('Tab name:');
    if (!name) return;
    const url = prompt('Tab URL:');
    if (!url) return;
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          return {
            ...c,
            pages: c.pages.map(p => {
              if (p.id !== pageId) return p;
              return { ...p, tabs: [...p.tabs, { id: `nav_new_${Date.now()}`, name, url }] };
            }),
          };
        }),
      };
    });
  };

  const handleCategoryDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !tree) return;
    const oldIdx = tree.categories.findIndex(c => c.id === active.id);
    const newIdx = tree.categories.findIndex(c => c.id === over.id);
    if (oldIdx === -1 || newIdx === -1) return;
    setTree({ categories: arrayMove(tree.categories, oldIdx, newIdx) });
  };

  const handlePageDragEnd = (catId: string) => (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !tree) return;
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          const oldIdx = c.pages.findIndex(p => p.id === active.id);
          const newIdx = c.pages.findIndex(p => p.id === over.id);
          if (oldIdx === -1 || newIdx === -1) return c;
          return { ...c, pages: arrayMove(c.pages, oldIdx, newIdx) };
        }),
      };
    });
  };

  const handleTabDragEnd = (catId: string, pageId: string) => (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !tree) return;
    setTree(prev => {
      if (!prev) return prev;
      return {
        categories: prev.categories.map(c => {
          if (c.id !== catId) return c;
          return {
            ...c,
            pages: c.pages.map(p => {
              if (p.id !== pageId) return p;
              const oldIdx = p.tabs.findIndex(t => t.id === active.id);
              const newIdx = p.tabs.findIndex(t => t.id === over.id);
              if (oldIdx === -1 || newIdx === -1) return p;
              return { ...p, tabs: arrayMove(p.tabs, oldIdx, newIdx) };
            }),
          };
        }),
      };
    });
  };

  if (loading) return <div className="loading-state">Loading navigation...</div>;
  if (!tree) return <div className="loading-state">No navigation data</div>;

  return (
    <div className="nav-manager">
      <div className="nav-manager-header">
        <h1>Navigation Manager</h1>
        <div className="nav-manager-actions">
          {hasChanges && <span className="nav-save-indicator unsaved">Unsaved changes</span>}
          <button className="btn btn-outline" onClick={addCategory}>+ Add Category</button>
          <button
            className={`btn ${hasChanges ? 'btn-primary' : 'btn-outline'}`}
            onClick={handleSave}
            disabled={saving || !hasChanges}
          >
            {saving ? 'Saving...' : 'Save Navigation'}
          </button>
        </div>
      </div>

      <div className="nav-tree">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleCategoryDragEnd}>
          <SortableContext items={tree.categories.map(c => c.id)} strategy={verticalListSortingStrategy}>
            {tree.categories.map(cat => (
              <SortableCategoryItem
                key={cat.id}
                category={cat}
                collapsed={collapsed.has(cat.id)}
                editingId={editingId}
                onToggleCollapse={() => toggleCollapse(cat.id)}
                onUpdateCategory={(updates) => updateCategory(cat.id, updates)}
                onDeleteCategory={() => deleteCategory(cat.id)}
                onUpdatePage={(pageId, updates) => updatePage(cat.id, pageId, updates)}
                onDeletePage={(pageId) => deletePage(cat.id, pageId)}
                onAddPage={() => addPage(cat.id)}
                onDeleteTab={(pageId, tabId) => deleteTab(cat.id, pageId, tabId)}
                onAddTab={(pageId) => addTab(cat.id, pageId)}
                onPageDragEnd={handlePageDragEnd(cat.id)}
                onTabDragEnd={(pageId) => handleTabDragEnd(cat.id, pageId)}
                onSetEditingId={setEditingId}
                sensors={sensors}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

interface SortableCategoryItemProps {
  category: NavCategory;
  collapsed: boolean;
  editingId: string | null;
  onToggleCollapse: () => void;
  onUpdateCategory: (updates: Partial<NavCategory>) => void;
  onDeleteCategory: () => void;
  onUpdatePage: (pageId: string, updates: Partial<NavPage>) => void;
  onDeletePage: (pageId: string) => void;
  onAddPage: () => void;
  onDeleteTab: (pageId: string, tabId: string) => void;
  onAddTab: (pageId: string) => void;
  onPageDragEnd: (event: DragEndEvent) => void;
  onTabDragEnd: (pageId: string) => (event: DragEndEvent) => void;
  onSetEditingId: (id: string | null) => void;
  sensors: ReturnType<typeof useSensors>;
}

function SortableCategoryItem({
  category, collapsed, editingId, onToggleCollapse,
  onUpdateCategory, onDeleteCategory, onUpdatePage, onDeletePage,
  onAddPage, onDeleteTab, onAddTab, onPageDragEnd, onTabDragEnd,
  onSetEditingId, sensors,
}: SortableCategoryItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: category.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="nav-category">
      <div className="nav-category-header">
        <span className="drag-handle" {...attributes} {...listeners}>&#9776;</span>
        <div className="nav-category-name">
          {editingId === category.id ? (
            <input
              autoFocus
              defaultValue={category.name}
              onBlur={e => { onUpdateCategory({ name: e.target.value }); onSetEditingId(null); }}
              onKeyDown={e => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            />
          ) : (
            <span onDoubleClick={() => onSetEditingId(category.id)}>{category.name}</span>
          )}
        </div>
        <span style={{ fontSize: 12, color: '#999', fontFamily: 'var(--font-mono)' }}>
          {category.pages.length} pages
        </span>
        <button className="nav-collapse-btn" onClick={onToggleCollapse}>
          {collapsed ? '\u25B8' : '\u25BE'}
        </button>
        <button className="nav-delete-btn" onClick={onDeleteCategory} title="Delete category">
          &times;
        </button>
      </div>

      {!collapsed && (
        <div className="nav-page-list">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onPageDragEnd}>
            <SortableContext items={category.pages.map(p => p.id)} strategy={verticalListSortingStrategy}>
              {category.pages.map(page => (
                <SortablePageItem
                  key={page.id}
                  catId={category.id}
                  page={page}
                  editingId={editingId}
                  onUpdatePage={(updates) => onUpdatePage(page.id, updates)}
                  onDeletePage={() => onDeletePage(page.id)}
                  onDeleteTab={(tabId) => onDeleteTab(page.id, tabId)}
                  onAddTab={() => onAddTab(page.id)}
                  onTabDragEnd={onTabDragEnd(page.id)}
                  onSetEditingId={onSetEditingId}
                  sensors={sensors}
                />
              ))}
            </SortableContext>
          </DndContext>
          <button className="nav-add-btn" onClick={onAddPage}>+ Add Page</button>
        </div>
      )}
    </div>
  );
}

interface SortablePageItemProps {
  catId: string;
  page: NavPage;
  editingId: string | null;
  onUpdatePage: (updates: Partial<NavPage>) => void;
  onDeletePage: () => void;
  onDeleteTab: (tabId: string) => void;
  onAddTab: () => void;
  onTabDragEnd: (event: DragEndEvent) => void;
  onSetEditingId: (id: string | null) => void;
  sensors: ReturnType<typeof useSensors>;
}

function SortablePageItem({
  page, editingId, onUpdatePage, onDeletePage,
  onDeleteTab, onAddTab, onTabDragEnd, onSetEditingId, sensors,
}: SortablePageItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: page.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };
  const [tabsOpen, setTabsOpen] = useState(false);

  return (
    <div ref={setNodeRef} style={style}>
      <div className="nav-page-item">
        <span className="drag-handle" {...attributes} {...listeners}>&#9776;</span>
        <span className="nav-page-name">
          {editingId === page.id ? (
            <input
              autoFocus
              defaultValue={page.name}
              onBlur={e => { onUpdatePage({ name: e.target.value }); onSetEditingId(null); }}
              onKeyDown={e => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            />
          ) : (
            <span onDoubleClick={() => onSetEditingId(page.id)}>{page.name}</span>
          )}
        </span>
        <span className="nav-page-url">{page.url}</span>
        {page.tabs.length > 0 && (
          <button
            className={`nav-sidebar-toggle ${page.showTabsInSidebar ? 'active' : ''}`}
            onClick={() => onUpdatePage({ showTabsInSidebar: !page.showTabsInSidebar })}
            title={page.showTabsInSidebar ? 'Tabs shown in sidebar — click to hide' : 'Tabs hidden from sidebar — click to show'}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="2" width="14" height="12" rx="1.5" />
              <line x1="5.5" y1="2" x2="5.5" y2="14" />
              {page.showTabsInSidebar && <>
                <line x1="2.5" y1="5.5" x2="4.5" y2="5.5" />
                <line x1="2.5" y1="7.5" x2="4.5" y2="7.5" />
                <line x1="2.5" y1="9.5" x2="4.5" y2="9.5" />
              </>}
            </svg>
          </button>
        )}
        {page.tabs.length > 0 && (
          <button className="nav-collapse-btn" onClick={() => setTabsOpen(o => !o)} title="Toggle tabs">
            {tabsOpen ? '\u25BE' : '\u25B8'} {page.tabs.length}
          </button>
        )}
        {page.tabs.length === 0 && (
          <button className="nav-add-btn" onClick={onAddTab} style={{ padding: '2px 8px', fontSize: 11 }}>
            + tab
          </button>
        )}
        <button className="nav-delete-btn" onClick={onDeletePage} title="Remove page">&times;</button>
      </div>

      {tabsOpen && page.tabs.length > 0 && (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onTabDragEnd}>
          <SortableContext items={page.tabs.map(t => t.id)} strategy={verticalListSortingStrategy}>
            {page.tabs.map(tab => (
              <SortableTabItem
                key={tab.id}
                tab={tab}
                editingId={editingId}
                onDelete={() => onDeleteTab(tab.id)}
                onSetEditingId={onSetEditingId}
              />
            ))}
          </SortableContext>
          <button className="nav-add-btn" onClick={onAddTab} style={{ paddingLeft: 48 }}>+ Add Tab</button>
        </DndContext>
      )}
    </div>
  );
}

interface SortableTabItemProps {
  tab: NavTab;
  editingId: string | null;
  onDelete: () => void;
  onSetEditingId: (id: string | null) => void;
}

function SortableTabItem({ tab, editingId, onDelete, onSetEditingId }: SortableTabItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: tab.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="nav-tab-item">
      <span className="drag-handle" {...attributes} {...listeners}>&#9776;</span>
      <span className="nav-tab-name">
        {editingId === tab.id ? (
          <span onDoubleClick={() => onSetEditingId(tab.id)}>{tab.name}</span>
        ) : (
          <span onDoubleClick={() => onSetEditingId(tab.id)}>{tab.name}</span>
        )}
      </span>
      <span className="nav-tab-url">{tab.url}</span>
      <button className="nav-delete-btn" onClick={onDelete} title="Remove tab">&times;</button>
    </div>
  );
}
