// src/components/admin/gallery/GalleryStats.jsx
import StatsCard from "../ui/StatsCard";

const GalleryStats = ({ galleryData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <StatsCard 
        title="Total Images"
        value={galleryData.length}
        bgColor="bg-blue-100 dark:bg-blue-900"
        textColor="text-blue-800 dark:text-blue-300"
      />
      <StatsCard 
        title="Nature"
        value={galleryData.filter(item => item.category === "Nature").length}
        bgColor="bg-green-100 dark:bg-green-900"
        textColor="text-green-800 dark:text-green-300"
      />
      <StatsCard 
        title="Urban"
        value={galleryData.filter(item => item.category === "Urban").length}
        bgColor="bg-purple-100 dark:bg-purple-900"
        textColor="text-purple-800 dark:text-purple-300"
      />
      <StatsCard 
        title="Storage Used"
        value="4.2 GB"
        bgColor="bg-yellow-100 dark:bg-yellow-900"
        textColor="text-yellow-800 dark:text-yellow-300"
      />
    </div>
  );
};

export default GalleryStats;