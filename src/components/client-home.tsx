'use client'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { HeroSection } from '@/components/hero-section'
import { IntroSection } from '@/components/intro-section'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ClientHomeProps {
  children: React.ReactNode
}

export default function ClientHome({ children }: ClientHomeProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering sprites after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const leftSprites = [
    { src: '/portfolio/images/sprites/dark/sideSprites/left1.png', top: '0%', right: '20%' },
    { src: '/portfolio/images/sprites/dark/sideSprites/left2.png', top: '40%', right: '10%' },
    { src: '/portfolio/images/sprites/dark/sideSprites/left3.png', top: '80%', right: '0%' },
  ]

  const rightSprites = [
    { src: '/portfolio/images/sprites/dark/sideSprites/right1.png', top: '10%', left: '20%' },
    { src: '/portfolio/images/sprites/dark/sideSprites/right2.png', top: '50%', left: '10%' },
    { src: '/portfolio/images/sprites/dark/sideSprites/right3.png', top: '90%', left: '0%' },
  ]

  const getThemedSpritePath = (spritePath: string, currentTheme: string | undefined): string => {
    // Default to dark if theme is undefined or 'system'
    if (currentTheme === 'light') {
      return spritePath.replace('/dark/', '/light/')
    }
    return spritePath
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-[1fr_750px_1fr] w-full'>
      {/* Left container - hidden on mobile */}
      <div className='hidden xl:block bg-primary relative overflow-visible z-10'>
        {mounted && leftSprites.map((sprite) => (
          <img
            key={sprite.src}
            src={getThemedSpritePath(sprite.src, theme)}
            alt=""
            className='pixel-art absolute'
            style={{
              top: sprite.top,
              right: sprite.right,
              width: '400px',
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className='flex flex-row justify-center px-4 lg:px-8'>
        <div className="w-full max-w-2xl lg:max-w-3xl">
          <div>
            <div className='flex justify-end gap-4 pb-4'>
              <ThemeSwitcher/>
            </div>
            <div className="font-pixel">
              <HeroSection />
            </div>
          </div>

          <div className="font-pixel">
            <IntroSection />
          </div>

          {children}
        </div>
      </div>

      {/* Right container - hidden on mobile */}
      <div className='hidden xl:block bg-primary relative overflow-visible z-10'>
        {mounted && rightSprites.map((sprite) => (
          <img
            key={sprite.src + '-right'}
            src={getThemedSpritePath(sprite.src, theme)}
            alt=""
            className='pixel-art absolute'
            style={{
              top: sprite.top,
              left: sprite.left,
              width: '400px',
              transform: 'scaleX(-1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
