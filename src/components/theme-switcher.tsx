'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Wait for hydration to complete before rendering theme-dependent content
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Render a placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div>
        <button
          className="group relative pixel-border bg-main text-main-foreground p-3"
          disabled
        >
          <div className="relative w-5 h-5">
            <Sun className="absolute inset-0" />
          </div>
          <span className="sr-only">Loading theme...</span>
        </button>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="group relative pixel-border bg-main hover:bg-pixel-blue text-main-foreground p-3 transition-all duration-200 hover:scale-105 active:scale-95"
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="relative w-5 h-5">
          <Sun className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`} />
          <Moon className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
          }`} />
        </div>

        {/* Animated tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="pixel-border bg-secondary-background text-foreground px-3 py-1 text-xs font-pixel whitespace-nowrap">
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </div>
        </div>

        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}
