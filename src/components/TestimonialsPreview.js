/* eslint-disable react/no-unescaped-entities */
'use client';

import { TESTIMONIALS } from '@/constants/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import { TESTIMONIALS_ROUTE } from '@/constants/routes';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialsPreview() {
  return (
    <motion.section
      id="testimonials"
      className="py-16 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={sectionVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Traveler Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {`Don't just take my word for it - hear what my clients have to say.`}
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={sectionVariants}>
          <Link
            href={TESTIMONIALS_ROUTE}
            className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
          >
            Read More Reviews
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
