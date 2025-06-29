import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import TourPreview from '@/components/TourPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <TourPreview />
      <TestimonialsPreview />
    </main>
  )
}