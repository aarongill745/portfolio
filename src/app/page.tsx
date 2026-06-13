import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import AboutMe from '@/components/sections/about-me'
import ClientHome from '@/components/client-home'

export default function Home() {
  return (
    <ClientHome>
      <div className="mt-8 content-section pixel-border p-6 bg-secondary-background">
        <AboutMe />
      </div>

      <div className="mt-8 content-section border-dashed-long p-6 rounded-[4px]">
        <Skills />
      </div>

      <div className='mt-8 content-section border-dashed-long p-6 rounded-[4px]'>
        <Experience />
      </div>
    </ClientHome>
  )
}
