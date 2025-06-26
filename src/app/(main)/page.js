import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import ToursPreview from '@/components/ToursPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import Header from '@/components/Header'
import { Children } from 'react'
import Footer from '@/components/Footer'

export default function Home({children}) {
  return (
    <>
   <Header />
   {Children}
   <Footer />
      
    </>
  )
}