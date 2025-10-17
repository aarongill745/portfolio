'use client'

import { useAesthetic } from './aesthetic-provider'

export function AestheticSwitcher() {
  const { aesthetic, toggleAesthetic } = useAesthetic()

  return (
    <button
      onClick={toggleAesthetic}
      className="pixel-button text-xs sm:text-sm"
      aria-label="Toggle aesthetic mode"
    >
      {aesthetic === 'pixel' ? 'MAKE IT BRUTAL' : 'MAKE IT 2D'}
    </button>
  )
}
