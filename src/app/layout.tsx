import type { Metadata } from 'next'
import { Press_Start_2P, Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-blog',
  weight: ['400', '500', '600', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-content',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Aaron Gill',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={`${pressStart2P.variable} ${inter.variable} ${poppins.variable} font-pixel`}>
          <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
            <div className="text-foreground mx-auto max-w-full px-5 pt-14 pb-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
