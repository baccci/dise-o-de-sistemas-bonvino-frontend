import './globals.css'
import { Inter } from 'next/font/google'
import { BaseLayout } from '@/layouts/BaseLayout'
import { Providers } from './providers'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bonvino',
  description: 'Vinos de calidad a tu alcance.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <BaseLayout logoHref='/'>
            {children}
          </BaseLayout>
        </Providers>
      </body>
    </html>
  )
}
