import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import TourPreview from '@/components/TourPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
    <Header />
      <Hero />
      <AboutPreview />
      <TourPreview />
      <TestimonialsPreview />
      <Footer />
    </main>
  )
}