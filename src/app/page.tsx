import Links from '@/components/links'
import AboutMe from '@/components/sections/AboutMe'

export default function Home() {
  return (
    <div className="font-pixel">
      <div className="pixel-border bg-secondary-background p-6 mb-8">
        <h1 className="text-xl sm:text-2xl text-main mb-2">AARON GILL</h1>
        <p className="text-sm sm:text-base text-accent">SOFTWARE ENGINEER</p>
      </div>

      <div className="pixel-border bg-secondary-background p-6 mb-6">
        <div className="text-xs sm:text-sm leading-relaxed space-y-4">
          <p>HEY! I&apos;M AARON GILL, A SOFTWARE ENGINEER BASED IN SYDNEY, AUSTRALIA.</p>
          <p>THIS IS MY LITTLE PORTFOLIO SITE.</p>
        </div>
        <Links />
      </div>

      <div className="mt-8">
        <AboutMe/>
      </div>
    </div>
  )
}
