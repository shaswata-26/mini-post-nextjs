import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A sample blog using Next.js with file colocation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-50'}>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
