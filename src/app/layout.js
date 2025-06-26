import './globals.css'
import './theme.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adventure Guides - Professional Tour Guide',
  description: 'Experience the best tours with a local expert guide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        {children}
      </body>
    </html>
  )
}