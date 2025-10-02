'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Links from '@/components/links'

import lightClouds from '@/images/backgrounds/light/clouds.png'
import darkClouds from '@/images/backgrounds/dark/clouds.png'

export function IntroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cloudsBg = resolvedTheme === 'dark' ? darkClouds.src : lightClouds.src

  return (
    <div
      className="pixel-border p-6 mb-6 bg-cover bg-center transition-all"
      style={{
        backgroundImage: mounted ? `url(${cloudsBg})` : `url(${lightClouds.src})`,
      }}
    >
      <div
        className="text-xs sm:text-sm leading-relaxed space-y-4 text-white"
        style={{
          textShadow: `
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000,
            0 -1px 0 #000,
            0 1px 0 #000,
            -1px 0 0 #000,
            1px 0 0 #000
          `
        }}
      >
        <p>HEY! I&apos;M AARON GILL, A SOFTWARE ENGINEER BASED IN SYDNEY, AUSTRALIA.</p>
        <p>THIS IS MY PORTFOLIO SITE.</p>
      </div>
      <Links />
    </div>
  )
}
