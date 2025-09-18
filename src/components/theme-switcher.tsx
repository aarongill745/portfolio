'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="pixel-button bg-pixel-red hover:bg-pixel-green"
      >
        <Sun className="hidden size-3 sm:size-4 dark:inline" />
        <Moon className="inline size-3 sm:size-4 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
