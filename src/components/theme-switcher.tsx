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
      <button
        className="pixel-button text-xs sm:text-sm flex items-center gap-2"
        disabled
      >
        <Sun size={16} />
        <span>LOADING...</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="pixel-button text-xs sm:text-sm flex items-center gap-2"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</span>
    </button>
  )
}
