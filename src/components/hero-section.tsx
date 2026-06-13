'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import darkSky from '@/images/backgrounds/dark/sky.png'
import lightSky from '@/images/backgrounds/light/sky.png'

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skyBg = mounted && resolvedTheme === 'dark' ? darkSky.src : lightSky.src

  return (
    <div
      className="hero-section pixel-border mb-8 bg-cover bg-center p-6 transition-all"
      style={{
        backgroundImage: `url(${skyBg})`,
      }}
      suppressHydrationWarning
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h1 className="text-main mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            AARON GILL
          </h1>
          <p className="text-base font-semibold text-blue-900 sm:text-lg dark:text-rose-950">
            SOFTWARE ENGINEER
          </p>
          <p className="text-foreground pt-2 text-xs font-medium">
            and Sesame Street enthusiast...
          </p>
        </div>
      </div>
    </div>
  )
}
