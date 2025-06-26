import { getTourBySlug } from '@/lib/strapi';
import Image from 'next/image';

export default async function TourDetailPage({ params }) {
  const tour = await getTourBySlug(params.slug);
  
  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Tour not found</p>
      </div>
    );
  }

  const attributes = tour.attributes;

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden">
              {attributes.image.data ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${attributes.image.data.attributes.url}`}
                  alt={attributes.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="bg-gray-200 dark:bg-gray-700 w-full h-full" />
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {attributes.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {attributes.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tour Details</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Duration:</span> {attributes.duration}</p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Price:</span> ${attributes.price} per person</p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Book This Tour
            </button>
          </div>
        </div>
        
        {attributes.itinerary && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Itinerary</h3>
            <div className="prose dark:prose-invert max-w-none">
              {attributes.itinerary}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attributes.included && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">What&apos;s Included</h4>
              <div className="prose dark:prose-invert">
                {attributes.included}
              </div>
            </div>
          )}
          
          {attributes.notIncluded && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Not Included</h4>
              <div className="prose dark:prose-invert">
                {attributes.notIncluded}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}