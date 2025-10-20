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
      <div className="mt-8 content-section border-dashed-long p-6 rounded-[4px]">
        <Skills />
      </div>

      <div className="mt-8">
        <FeaturedBlogs posts={featuredPosts} />
      </div>

      <div className='mt-8 content-section border-dashed-long p-6 rounded-[4px]'>
        <Experience />
      </div>
    </ClientHome>
  )
}
