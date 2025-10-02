import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { HeroSection } from '@/components/hero-section'
import { IntroSection } from '@/components/intro-section'

export default function Home() {
  const leftSprites = [
    { src: '/portfolio/images/sprites/dark/flying/Characters-Character01-Fly_00.png', top: '0%', right: '10%' },
    { src: '/portfolio/images/sprites/dark/flying/Characters-Character03-Fly_11.png', top: '40%', right: '-10%' },
    { src: '/portfolio/images/sprites/dark/flying/Characters-Character10-Fly_06.png', top: '80%', right: '5%' },
  ]

  const rightSprites = [
    { src: '/portfolio/images/sprites/dark/flying/Characters-Character13-Fly_04.png', top: '10%', left: '0%' },
    { src: '/portfolio/images/sprites/dark/flying/flyingRacoon1.png', top: '50%', left: '-20%' },
    { src: '/portfolio/images/sprites/dark/walking/Characters-Character12-Walk_00.png', top: '90%', left: '-30%' },
  ]

  return (
    <div className='grid grid-cols-[1fr_750px_1fr] w-full'>
      {/* Left container */}
      <div className='bg-primary relative overflow-visible z-10'>
        {leftSprites.map((sprite) => (
          <img
            key={sprite.src}
            src={sprite.src}
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
        <div className="font-pixel w-full max-w-2xl lg:max-w-3xl">
          <div>
            <div className='flex justify-end pb-4'>
              <ThemeSwitcher/>
            </div>
            <HeroSection />
          </div>

          <IntroSection />

          <div className="mt-8">
            <Skills />
          </div>
          <div className='pixel-border bg-secondary-background p-6 mb-6'>
            <Experience />
          </div>
        </div>
      </div>

      {/* Right container */}
      <div className='bg-primary relative overflow-visible z-10'>
        {rightSprites.map((sprite) => (
          <img
            key={sprite.src + '-right'}
            src={sprite.src}
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
