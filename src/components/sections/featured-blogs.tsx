import Link from 'next/link'
import { type BlogPost } from '@/lib/blog'

interface FeaturedBlogsProps {
  posts: BlogPost[]
}

export default function FeaturedBlogs({ posts }: FeaturedBlogsProps) {
  if (posts.length === 0) {
    return null // Don't show the section if there are no featured posts
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="pixel-border bg-secondary-background p-6 mb-6 content-section">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl">BLOG</h2>
        <Link
          href="/blog"
          className="text-sm hover:text-accent transition-colors"
        >
          VIEW ALL →
        </Link>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block pixel-border bg-primary p-4 hover:bg-accent transition-colors"
          >
            <h3 className="text-base mb-2">{post.title}</h3>
            <div className="font-blog text-xs opacity-70 mb-2">
              {formatDate(post.date)} • {post.readTime}
            </div>
            <p className="font-blog text-xs leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
