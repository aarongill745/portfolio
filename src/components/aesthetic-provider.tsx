'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Aesthetic = 'pixel' | 'brutal'

type AestheticContextType = {
  aesthetic: Aesthetic
  setAesthetic: (aesthetic: Aesthetic) => void
  toggleAesthetic: () => void
}

const AestheticContext = createContext<AestheticContextType | undefined>(undefined)

export function AestheticProvider({ children }: { children: React.ReactNode }) {
  const [aesthetic, setAestheticState] = useState<Aesthetic>('pixel')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load from localStorage on mount
    const stored = localStorage.getItem('aesthetic') as Aesthetic | null
    if (stored === 'pixel' || stored === 'brutal') {
      setAestheticState(stored)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Apply to document
    document.documentElement.setAttribute('data-aesthetic', aesthetic)
    // Persist to localStorage
    localStorage.setItem('aesthetic', aesthetic)
  }, [aesthetic, mounted])

  const setAesthetic = (newAesthetic: Aesthetic) => {
    setAestheticState(newAesthetic)
  }

  const toggleAesthetic = () => {
    setAestheticState(prev => prev === 'pixel' ? 'brutal' : 'pixel')
  }

  return (
    <AestheticContext.Provider value={{ aesthetic, setAesthetic, toggleAesthetic }}>
      {children}
    </AestheticContext.Provider>
  )
}

export function useAesthetic() {
  const context = useContext(AestheticContext)
  if (context === undefined) {
    throw new Error('useAesthetic must be used within AestheticProvider')
  }
  return context
}
