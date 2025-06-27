'use client';
import { useEffect, useState } from 'react';
import TourCard from '@/components/TourCard';
import Link from 'next/link';
import { FaSpinner } from 'react-icons/fa';
import { TOUR_ROUTE } from '@/constants/routes';

export default function ToursPreview() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tours');
        const data = await response.json();
        setTours(data.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <section id="tours" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Tours</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my most popular tours, carefully designed to showcase the best of our region
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <FaSpinner className="text-4xl text-blue-600 dark:text-blue-400 animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href={TOUR_ROUTE}
                className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
              >
                View All Tours
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}