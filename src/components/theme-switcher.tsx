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
        className="pixel-button flex items-center gap-2 text-xs sm:text-sm"
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
      className="pixel-button flex items-center gap-2 text-xs sm:text-sm"
      aria-label={
        theme === 'light'
          ? 'Make the site a little dimmer'
          : 'Make the site a little brighter'
      }
    >
      {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === 'light' ? 'A LITTLE DIMMER' : 'A LITTLE BRIGHTER'}</span>
    </button>
  )
}
