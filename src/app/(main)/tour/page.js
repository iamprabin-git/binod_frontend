// src/app/(main)/tour/page.js
import TourCard from '@/components/TourCard';


const TOURS = [
  {
    id: 1,
    title: "Historical City Walk",
    description: "Explore ancient landmarks and hidden gems of the old town",
    duration: "3 hours",
    price: "$45",
    image: "/city-walk.jpg"
  },
  {
    id: 2,
    title: "Mountain Adventure",
    description: "Hike through breathtaking landscapes with local flora and fauna",
    duration: "Full day",
    price: "$85",
    image: "/mountain.jpg"
  },
  {
    id: 3,
    title: "Food & Culture Tour",
    description: "Taste local delicacies while learning about culinary traditions",
    duration: "4 hours",
    price: "$65",
    image: "/food-tour.jpg"
  },
  {
    id: 4,
    title: "Sunset Boat Tour",
    description: "Experience the coastline at the most magical time of day",
    duration: "2 hours",
    price: "$55",
    image: "/boat-tour.jpg"
  },
  {
    id: 5,
    title: "Wine Country Excursion",
    description: "Visit local vineyards and sample regional wines",
    duration: "6 hours",
    price: "$95",
    image: "/wine-tour.jpg"
  },
  {
    id: 6,
    title: "Custom Private Tour",
    description: "Tailored experience based on your interests",
    duration: "Flexible",
    price: "From $120",
    image: "/private-tour.jpg"
  }
];

export default function ToursPage() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Tour Packages</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated adventures
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}