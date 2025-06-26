import { TESTIMONIALS } from '@/constants/testimonials'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export default function TestimonialsPreview() {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Traveler Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}