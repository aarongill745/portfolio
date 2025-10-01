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
      className="pixel-border p-6 mb-8 bg-cover bg-center transition-all"
      style={{
        backgroundImage: mounted ? `url(${skyBg})` : `url(${lightSky.src})`,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl text-main mb-2">AARON GILL</h1>
          <p className="text-sm sm:text-base text-blue-900 dark:text-rose-900">SOFTWARE ENGINEER</p>
          <p className='text-xs pt-2'>and Sesame Street enthusiast...</p>
        </div>
      </div>
    </div>
  )
}
