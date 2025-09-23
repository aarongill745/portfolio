import Links from '@/components/links'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Home() {
  return (
    <div className='flex flex-row justify-center px-4 lg:px-8'>
      <div className="font-pixel w-full max-w-2xl lg:max-w-3xl">
        <div>
          <div className='flex justify-end pb-4'>
            <ThemeSwitcher/>
          </div>
          <div className="pixel-border bg-secondary-background p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl text-main mb-2">AARON GILL</h1>
                <p className="text-sm sm:text-base text-accent">SOFTWARE ENGINEER</p>
                <p className='text-xs pt-2'>and Sesame Street enthusiast...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pixel-border bg-secondary-background p-6 mb-6">
          <div className="text-xs sm:text-sm leading-relaxed space-y-4">
            <p>HEY! I&apos;M AARON GILL, A SOFTWARE ENGINEER BASED IN SYDNEY, AUSTRALIA.</p>
            <p>THIS IS MY PORTFOLIO SITE.</p>
          </div>
          <Links />
        </div>

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
