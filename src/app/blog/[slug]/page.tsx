import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { AestheticSwitcher } from '@/components/aesthetic-switcher'
import { MarkdownContent } from '@/components/markdown-content'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Aaron Gill`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_750px_1fr] w-full">
      {/* Left spacer */}
      <div className="hidden xl:block bg-primary" />

      {/* Center content */}
      <div className="flex flex-row justify-center px-4 lg:px-8">
        <div className="font-pixel w-full max-w-2xl lg:max-w-3xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <Link
              href="/blog"
              className="font-blog text-sm hover:text-accent transition-colors"
            >
              ← BACK TO BLOG
            </Link>
            <div className="flex gap-4">
              <AestheticSwitcher />
              <ThemeSwitcher />
            </div>
          </div>

          {/* Post Header */}
          <article className="pixel-border bg-secondary-background p-6 mb-6">
            <h1 className="font-blog text-2xl mb-4 leading-relaxed">{post.title}</h1>
            <div className="font-blog text-sm opacity-70 mb-4">
              {formatDate(post.date)} • {post.readTime}
            </div>
            {post.excerpt && (
              <p className="font-blog text-sm leading-relaxed italic border-l-4 border-accent pl-4 py-2">
                {post.excerpt}
              </p>
            )}
          </article>

          {/* Post Content */}
          <div className="pixel-border bg-secondary-background p-6 content-section">
            <MarkdownContent content={post.content} />
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-block pixel-button px-6 py-3 bg-accent hover:bg-primary transition-colors"
            >
              ← VIEW ALL POSTS
            </Link>
          </div>
        </div>
      </div>

      {/* Right spacer */}
      <div className="hidden xl:block bg-primary" />
    </div>
  )
}
