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
    <nav className="flex gap-1 border-b mb-8 overflow-x-auto scrollbar-hide" style={{ borderColor: "var(--border)" }}>
      {tabs.map(tab => {
        const isActive = tab.active || pathname === tab.url
        return (
          <Link
            key={tab.url}
            href={tab.url as any}
            className="px-4 py-2.5 text-[14px] font-medium whitespace-nowrap transition-colors border-b-2 -mb-px"
            style={{
              borderColor: isActive ? "var(--slds-blue)" : "transparent",
              color: isActive ? "var(--slds-blue)" : "var(--slds-gray-text)",
            }}
          >
            {tab.name}
          </Link>
        )
      })}
    </nav>
  )
}
