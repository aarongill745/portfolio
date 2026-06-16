'use client'

import Links from '@/components/links'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import darkClouds from '@/images/backgrounds/dark/clouds.png'
import lightClouds from '@/images/backgrounds/light/clouds.png'

export function IntroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cloudsBg =
    mounted && resolvedTheme === 'dark' ? darkClouds.src : lightClouds.src

  return (
    <div
      className="intro-section pixel-border mb-6 bg-cover bg-center p-6 transition-all"
      style={{
        backgroundImage: `url(${cloudsBg})`,
      }}
      suppressHydrationWarning
    >
      <div
        className="space-y-4 text-sm leading-relaxed font-bold text-white sm:text-base"
        style={{
          textShadow: `
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            0 -2px 0 #000,
            0 2px 0 #000,
            -2px 0 0 #000,
            2px 0 0 #000
          `,
        }}
      >
        <p>
          HEY! I&apos;M AARON GILL, A SOFTWARE ENGINEER BASED IN SYDNEY,
          AUSTRALIA
        </p>
        <p>WELCOME TO MY SITE</p>
      </div>
      <Links />
    </div>
  )
}
