'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="pixel-border bg-main text-main-foreground font-pixel mx-auto flex w-max items-center gap-4 p-3 px-5 text-xs sm:text-sm">
        <span className="uppercase">THEME:</span>
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
