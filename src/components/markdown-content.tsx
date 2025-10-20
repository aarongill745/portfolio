'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/tokyo-night-dark.css'

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ children }) => (
          <h1 className="font-blog text-2xl font-bold mb-4 mt-8 first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-blog text-xl font-bold mb-3 mt-6">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-blog text-lg font-bold mb-2 mt-4">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="font-blog mb-4 leading-relaxed text-base">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="font-blog list-disc list-inside mb-4 space-y-2 text-base">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="font-blog list-decimal list-inside mb-4 space-y-2 text-base">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="font-blog leading-relaxed">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="font-blog border-l-4 border-accent pl-4 py-2 mb-4 italic opacity-90">
            {children}
          </blockquote>
        ),
        code: ({ className, children, ...props }) => {
          const isInline = !className
          if (isInline) {
            return (
              <code
                className="bg-primary px-2 py-1 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            )
          }
          return (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        pre: ({ children }) => (
          <pre className="pixel-border bg-primary p-4 mb-4 overflow-x-auto text-base">
            {children}
          </pre>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        hr: () => <hr className="border-t-2 border-border my-6" />,
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt || ''}
            className="pixel-art max-w-full h-auto my-4 pixel-border"
          />
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="w-full pixel-border border-collapse">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="font-blog pixel-border bg-primary p-2 text-left font-bold text-base">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="font-blog pixel-border p-2 text-base">{children}</td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
