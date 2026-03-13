"use client"

import { Menu, Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState, useRef, useEffect } from "react"

export function Header() {
  const toggleSidebar = () => {
    document.dispatchEvent(new CustomEvent('toggle-sidebar'))
  }

  const { theme, resolvedTheme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [menuOpen])

  const themeOptions = [
    { value: "light" as const, label: "Light", icon: Sun },
    { value: "dark" as const, label: "Dark", icon: Moon },
    { value: "system" as const, label: "System", icon: Monitor },
  ]

  return (
    <header
      className="border-b px-4 sm:px-6 py-2 transition-colors"
      style={{ backgroundColor: "var(--header-bg)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1 rounded transition-colors"
            style={{ color: "var(--slds-navy)" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--surface-sunken)"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            aria-label="Toggle navigation"
          >
            <Menu size={18} />
          </button>
          <span
            className="text-[11px] font-bold tracking-[0.15em] uppercase"
            style={{ color: "var(--slds-navy)", fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lightning Design System 2
          </span>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="p-1.5 rounded-lg transition-colors"
            style={{
              color: "var(--slds-gray-text)",
              backgroundColor: menuOpen ? "var(--surface-sunken)" : "transparent",
            }}
            onMouseEnter={e => { if (!menuOpen) e.currentTarget.style.backgroundColor = "var(--surface-sunken)" }}
            onMouseLeave={e => { if (!menuOpen) e.currentTarget.style.backgroundColor = "transparent" }}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          {menuOpen && (
            <div
              className="absolute right-0 mt-1 rounded-lg shadow-lg py-1 z-50 min-w-[140px]"
              style={{
                backgroundColor: "var(--surface-raised)",
                border: "1px solid var(--border)",
              }}
            >
              {themeOptions.map(opt => {
                const Icon = opt.icon
                const isActive = theme === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => { setTheme(opt.value); setMenuOpen(false) }}
                    className="flex items-center gap-2 w-full px-3 py-1.5 text-sm transition-colors"
                    style={{
                      color: isActive ? "var(--slds-blue)" : "var(--foreground)",
                      backgroundColor: isActive ? "var(--sidebar-active-bg)" : "transparent",
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = "var(--surface-sunken)" }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = isActive ? "var(--sidebar-active-bg)" : "transparent" }}
                  >
                    <Icon size={14} />
                    {opt.label}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
