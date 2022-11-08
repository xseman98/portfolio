'use client'

import Footer from '../src/components/Footer'
import HeadTitle from '../src/components/HeadTitle'
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <HeadTitle 
        title='Kristián Seman | Portfolio'
        description='Landing page of Kristian Seman portfolio website.' 
      />
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
