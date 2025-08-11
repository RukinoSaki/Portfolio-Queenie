import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '设计师作品集',
  description: '极简主义视觉设计师作品集',
  keywords: ['设计师', '作品集', '视觉设计', '极简主义'],
  authors: [{ name: '视觉设计师' }],
  openGraph: {
    title: '设计师作品集',
    description: '极简主义视觉设计师作品集',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-white text-primary-800 antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
