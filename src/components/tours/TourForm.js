"use client";
import React, { useState } from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import BackButton from "../BackButton";

function TourForm() {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    price: "",
    category: "",
    duration: "",
    startDate: "",
    maxGroupSize: "",
    difficulty: "",
    description: "",
    image: null
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission with image upload
    console.log("Tour created:", formData);
    alert("Tour package created successfully!");
    
    // Reset form
    setFormData({
      title: "",
      destination: "",
      price: "",
      category: "",
      duration: "",
      startDate: "",
      maxGroupSize: "",
      difficulty: "",
      description: "",
      image: null
    });
    setPreviewUrl(null);
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setPreviewUrl(null);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create Tour Package
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Image Upload */}
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tour Image
              </label>
              
              {previewUrl ? (
                <div className="relative group">
                  <img 
                    src={previewUrl} 
                    alt="Tour preview" 
                    className="w-full h-64 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <label 
                    htmlFor="image-upload" 
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <BsCloudUploadFill className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                      
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, or JPEG (MAX. 5MB)
                      </p>
                    </div>
                    <input 
                      id="image-upload" 
                      name="image" 
                      type="file" 
                      className="hidden" 
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                </div>
              )}
            </div>
            
            {/* Title */}
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tour Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex: Bali Adventure Tour"
                required
              />
            </div>
            
            {/* Destination */}
            <div className="w-full">
              <label
                htmlFor="destination"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                value={formData.destination}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Country/City"
                required
              />
            </div>
            
            {/* Price */}
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price (per person)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">Rs. </span>
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="  999"
                  min="0"
                  required
                />
              </div>
            </div>
            
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tour Type
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="">Select type</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Beach">Beach</option>
                <option value="Wildlife">Wildlife</option>
                <option value="Hiking">Hiking</option>
                <option value="Cruise">Cruise</option>
                <option value="City Tour">City Tour</option>
              </select>
            </div>
            
            {/* Duration */}
            <div>
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Duration (days)
              </label>
              <input
                type="number"
                name="duration"
                id="duration"
                value={formData.duration}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex: 7"
                min="1"
                required
              />
            </div>
            
            {/* Start Date */}
            <div>
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            
            {/* Max Group Size */}
            <div>
              <label
                htmlFor="maxGroupSize"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max Group Size
              </label>
              <input
                type="number"
                name="maxGroupSize"
                id="maxGroupSize"
                value={formData.maxGroupSize}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex: 15"
                min="1"
                required
              />
            </div>
            
            {/* Difficulty */}
            <div>
              <label
                htmlFor="difficulty"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Difficulty Level
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="">Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Challenging">Challenging</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            
            {/* Description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tour Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Describe the tour itinerary, highlights, inclusions, etc."
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-800 text-white hover:opacity-65 rounded-lg transition-colors duration-200"
          >
            Create Tour Package
          </button>
        </form>
      </div>
    </section>
  );
}

export default TourForm;