import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import FeaturedBlogs from '@/components/sections/featured-blogs'
import { getFeaturedPosts } from '@/lib/blog'
import ClientHome from '@/components/client-home'

export default function Home() {
  // Fetch featured posts at build time (server-side)
  const featuredPosts = getFeaturedPosts().slice(0, 3)
  return (
    <ClientHome featuredPosts={featuredPosts}>
      <div className="mt-8 content-section">
        <Skills />
      </div>

      <FeaturedBlogs posts={featuredPosts} />

      <div className='pixel-border bg-secondary-background p-6 mb-6 content-section'>
        <Experience />
      </div>
    </ClientHome>
  )
}
