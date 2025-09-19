import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-switcher'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel'
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
        <body className={`${pressStart2P.variable} font-pixel`}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <ThemeSwitcher />
            <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
