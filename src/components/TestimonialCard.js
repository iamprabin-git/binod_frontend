/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

      <p className="text-gray-700 dark:text-gray-300 italic mb-6">
        {/* Escape any quotes to prevent ESLint errors */}
        {testimonial.review.replace(/'/g, '\u2019').replace(/"/g, '\u201c')}
      </p>

      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {testimonial.name?.charAt(0)}
          </span>
        </div>
        <span className="font-medium text-gray-800 dark:text-white">{testimonial.name}</span>
      </div>
    </motion.div>
  );
}
