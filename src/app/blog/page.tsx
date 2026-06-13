import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/blog'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPosts = posts.filter((post) => post.featured)
  const otherPosts = posts.filter((post) => !post.featured)

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_750px_1fr] w-full">
      {/* Left spacer */}
      <div className="hidden xl:block bg-primary" />

      {/* Center content */}
      <div className="flex flex-row justify-center px-4 lg:px-8">
        <div className="font-pixel w-full max-w-3xl lg:max-w-4xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl mb-2">BLOG</h1>
              <Link
                href="/"
                className="font-blog text-sm hover:text-accent transition-colors"
              >
                ← BACK TO HOME
              </Link>
            </div>
            <div className="flex gap-4">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl mb-6 content-section">FEATURED POSTS</h2>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block pixel-border bg-secondary-background p-6 hover:bg-accent transition-colors content-section"
                  >
                    <h3 className="font-blog text-xl mb-2">{post.title}</h3>
                    <div className="font-blog text-base opacity-70 mb-3">
                      {formatDate(post.date)} • {post.readTime}
                    </div>
                    <p className="font-blog text-base leading-relaxed">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Posts Section */}
          <div>
            <h2 className="text-xl mb-6 content-section">ALL POSTS</h2>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="pixel-border bg-secondary-background p-6 text-center content-section">
                  <p className="font-blog text-sm">No blog posts yet. Check back soon!</p>
                </div>
              ) : (
                posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block pixel-border bg-secondary-background p-6 hover:bg-accent transition-colors content-section"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-blog text-xl">{post.title}</h3>
                      {post.featured && (
                        <span className="font-blog text-xs px-2 py-1 pixel-border bg-accent">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <div className="font-blog text-base opacity-70 mb-3">
                      {formatDate(post.date)} • {post.readTime}
                    </div>
                    <p className="font-blog text-base leading-relaxed">{post.excerpt}</p>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right spacer */}
      <div className="hidden xl:block bg-primary" />
    </div>
  )
}
