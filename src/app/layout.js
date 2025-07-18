import Header from '@/components/Header'
import './globals.css'
import './theme.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Binod silwal khatri- Adventure Tours guide',
  description: 'Experience the best tours with a local expert guide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-transition`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}