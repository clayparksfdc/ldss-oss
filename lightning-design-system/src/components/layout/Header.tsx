"use client"

import { Menu } from "lucide-react"

export function Header() {
  const toggleSidebar = () => {
    document.dispatchEvent(new CustomEvent('toggle-sidebar'))
  }

  return (
    <header className="bg-white border-b border-[#E5E5E5] px-4 sm:px-6 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1 rounded hover:bg-[#F3F3F3] transition-colors"
            aria-label="Toggle navigation"
          >
            <Menu size={18} className="text-[#032D60]" />
          </button>
          <span
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#032D60]"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lightning Design System 2
          </span>
        </div>
      </div>
    </header>
  )
}
