'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import lightSky from '@/images/backgrounds/light/sky.png'
import darkSky from '@/images/backgrounds/dark/sky.png'

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skyBg = resolvedTheme === 'dark' ? darkSky.src : lightSky.src

  return (
    <div
      className="hero-section pixel-border p-6 mb-8 bg-cover bg-center transition-all"
      style={{
        backgroundImage: mounted ? `url(${skyBg})` : `url(${lightSky.src})`,
      }}
      suppressHydrationWarning
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-4xl text-main mb-4 font-bold tracking-tight">
            AARON GILL
          </h1>
          <p className="text-base sm:text-lg text-blue-900 dark:text-rose-900 font-semibold">
            SOFTWARE ENGINEER
          </p>
          <p className="text-xs pt-2 font-medium text-foreground">
            and Sesame Street enthusiast...
          </p>
        </div>
      </div>
    </div>
  )
}
