// components/TourCard.js
import Image from 'next/image';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{tour.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{tour.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700 dark:text-gray-200 font-medium">{tour.duration}</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">{tour.price}</span>
        </div>
      </div>
    </div>
  );
}