import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { HeroSection } from '@/components/hero-section'
import { IntroSection } from '@/components/intro-section'

export default function Home() {
  return (
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
  )
}
