'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function TourCard({ tour }) {
  // Safely access properties with optional chaining
  const title = tour?.title || tour?.attributes?.title || "Untitled Tour";
  const description = tour?.description || tour?.attributes?.description || "";
  const duration = tour?.duration || tour?.attributes?.duration || "N/A";
  const price = tour?.price || tour?.attributes?.price || 0;
  const slug = tour?.slug || tour?.attributes?.slug || "";
  const image = tour?.image || tour?.attributes?.image;
  
  // Get image URL
  let imageUrl;
  if (typeof image === 'string') {
    imageUrl = `/images/${image}`;
  } else if (image?.data?.attributes?.url) {
    imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.data.attributes.url}`;
  } else {
    imageUrl = null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <div className="relative h-48">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-gray-200 dark:bg-gray-700 w-full h-full" />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            {duration}
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            ${price}
          </span>
        </div>
        <Link
          href={`/tours/${slug}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}