'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiFilter, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallery = () => {
  // Sample gallery data (replace with your actual images)
  const galleryData = [
    {
      id: 1,
      category: 'nature',
      src: '/gallery/nature-1.jpg',
      alt: 'Mountain landscape at sunrise',
    },
    {
      id: 2,
      category: 'culture',
      src: '/gallery/culture-1.jpg',
      alt: 'Traditional local festival',
    },
    {
      id: 3,
      category: 'adventure',
      src: '/gallery/adventure-1.jpg',
      alt: 'Group hiking in mountains',
    },
    // Add more images...
  ];

  const categories = ['all', ...new Set(galleryData.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category === activeCategory);

  const handlePrev = () => {
    setSelectedImage(prev => {
      const currentIndex = filteredImages.findIndex(img => img.id === prev.id);
      return currentIndex <= 0 
        ? filteredImages[filteredImages.length - 1]
        : filteredImages[currentIndex - 1];
    });
  };

  const handleNext = () => {
    setSelectedImage(prev => {
      const currentIndex = filteredImages.findIndex(img => img.id === prev.id);
      return currentIndex >= filteredImages.length - 1
        ? filteredImages[0]
        : filteredImages[currentIndex + 1];
    });
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Tour Gallery</h2>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg"
          >
            <FiFilter /> Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 dark:text-white">Filter by category</h3>
              <button onClick={() => setShowFilters(false)}>
                <FiX className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <FiX />
            </button>
            
            <div className="relative max-w-4xl w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full max-h-[80vh] object-contain"
              />
              
              <div className="text-white text-center mt-2">
                {selectedImage.alt}
              </div>
              
              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;