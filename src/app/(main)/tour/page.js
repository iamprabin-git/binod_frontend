// src/app/(main)/tour/page.js
import TourCard from '@/components/TourCard';
import { getAllTours } from '@/lib/strapi';


export default async function ToursPage() {
  const response = await getAllTours();
  const tours = response.data;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Tour Packages</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated adventures
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        
        {tours?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No tours available. Please check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}