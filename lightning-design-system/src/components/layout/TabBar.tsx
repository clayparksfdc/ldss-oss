"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Tab {
  name: string
  url: string
  active: boolean
}

interface TabBarProps {
  tabs: Tab[]
}

export function TabBar({ tabs }: TabBarProps) {
  const pathname = usePathname()

  return (
    <nav className="flex gap-1 border-b border-[#E5E5E5] mb-8 overflow-x-auto scrollbar-hide">
      {tabs.map(tab => {
        const isActive = tab.active || pathname === tab.url
        return (
          <Link
            key={tab.url}
            href={tab.url as any}
            className={`
              px-4 py-2.5 text-[14px] font-medium whitespace-nowrap transition-colors
              border-b-2 -mb-px
              ${isActive
                ? 'border-[#0176D3] text-[#0176D3]'
                : 'border-transparent text-[#706E6B] hover:text-[#032D60] hover:border-[#D8D8D8]'
              }
            `}
          >
            {tab.name}
          </Link>
        )
      })}
    </nav>
  )
}
