// src/app/admin/gallery/page.jsx
"use client";
import { useState } from 'react';

import galleryData from "@/constants/galleryData";
import GalleryStats from '@/components/gallery/GalleryState';
import GalleryTable from '@/components/gallery/GalleryTable';
import GalleryModal from '@/components/gallery/GalleryModal';
import GalleryHeader from '@/components/gallery/GalleryHeader';

const GalleryAdminPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImage, setNewImage] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    image: ""
  });
  
  // For demo, we'll use the galleryData as state
  const [gallery, setGallery] = useState(galleryData);
  
  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      setGallery(gallery.filter(item => item.id !== id));
    }
  };

  const handleCreate = () => {
    if (!newImage.title || !newImage.image) {
      alert("Title and image URL are required");
      return;
    }

    const newItem = {
      id: gallery.length + 1,
      title: newImage.title,
      description: newImage.description,
      category: newImage.category || "Uncategorized",
      tags: newImage.tags ? newImage.tags.split(',').map(tag => tag.trim()) : [],
      size: "0 MB",
      dimensions: "N/A",
      date: new Date().toISOString().split('T')[0],
      image: newImage.image
    };

    setGallery([...gallery, newItem]);
    setNewImage({
      title: "",
      description: "",
      category: "",
      tags: "",
      image: ""
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <GalleryHeader 
            title="Gallery Admin Panel"
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onAddImage={() => {
              setNewImage({
                title: "",
                description: "",
                category: "",
                tags: "",
                image: ""
              });
              setIsModalOpen(true);
            }}
            darkMode={darkMode}
          />
          
          <GalleryStats galleryData={gallery} />
          
          <GalleryTable 
            galleryData={gallery}
            onView={openImageModal}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <GalleryModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedImage={selectedImage}
        newImage={newImage}
        setNewImage={setNewImage}
        onDelete={handleDelete}
        onCreate={handleCreate}
      />
    </div>
  );
};

export default GalleryAdminPage;