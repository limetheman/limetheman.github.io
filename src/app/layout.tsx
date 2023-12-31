import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  title: 'Liem-Dev',
  description: 'Learn about Me',

  icons: {
    icon: "/cutelemon.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
            <Analytics />
        </Providers>
      </body>
    </html>
  )
}
