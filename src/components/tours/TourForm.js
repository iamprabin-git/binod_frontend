"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { BsCloudUploadFill, BsLink45Deg } from "react-icons/bs";

function TourForm({ onClose }) {
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
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageInputMethod, setImageInputMethod] = useState("upload"); // 'upload' or 'url'
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, image: file }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (PNG, JPG, JPEG)");
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setPreviewUrl(url);
  };

  const switchImageMethod = (method) => {
    setImageInputMethod(method);
    setFormData((prev) => ({ ...prev, image: null }));
    setPreviewUrl(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic form validation
    if (!formData.image) {
      alert("Please add a tour image");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
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
        image: null,
      });
      setPreviewUrl(null);
      setImageInputMethod("upload");
    } catch (error) {
      console.error("Error creating tour:", error);
      alert("Failed to create tour package. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setPreviewUrl(null);
  };

  return (
    <section className="bg-white dark:bg-gray-900 border-2 rounded-2xl border-gray-200 dark:border-gray-700">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 m-10">
          {/* Image Upload Section */}
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tour Image
            </label>

            {/* Method Toggle */}
            <div className="flex mb-3 rounded-md overflow-hidden w-fit bg-gray-100 dark:bg-gray-800">
              <button
                type="button"
                onClick={() => switchImageMethod("upload")}
                className={`flex items-center px-4 py-2 text-sm font-medium ${
                  imageInputMethod === "upload"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <BsCloudUploadFill className="mr-2" />
                Upload
              </button>
              <button
                type="button"
                onClick={() => switchImageMethod("url")}
                className={`flex items-center px-4 py-2 text-sm font-medium ${
                  imageInputMethod === "url"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <BsLink45Deg className="mr-2 text-lg" />
                URL
              </button>
            </div>

            {previewUrl ? (
              <div className="relative group">
                <Image
                  src={previewUrl}
                  alt="Tour preview"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentNode.querySelector(".fallback-text").classList.remove("hidden");
                  }}
                />
                <div className="fallback-text absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500 dark:text-gray-400">Could not load image</span>
                </div>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove image"
                >
                 
                </button>
              </div>
            ) : (
              imageInputMethod === "upload" ? (
                <div className="flex items-center justify-center w-full">
                  <div
                    onClick={triggerFileInput}
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <BsCloudUploadFill className="w-10 h-10 mb-4 text-gray-400 dark:text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, or JPEG (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      id="image-upload"
                      name="image"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <input
                    type="url"
                    name="imageUrl"
                    value={typeof formData.image === 'string' ? formData.image : ''}
                    onChange={handleImageUrlChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="https://example.com/tour-image.jpg"
                    pattern="https?://.+\.(jpg|jpeg|png|webp|gif)"
                    title="Enter a valid image URL (http(s)://...)"
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Supported formats: JPG, PNG, GIF, WEBP
                  </p>
                </div>
              )
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
                placeholder="999"
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
              <option value="Luxury">Luxury</option>
              <option value="Family">Family</option>
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
              min={new Date().toISOString().split("T")[0]}
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

          {/* Button Group */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800 transition-colors duration-200 flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2.5 text-sm font-medium text-center text-white rounded-lg transition-colors duration-200 flex-1 ${
                isSubmitting 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Create Tour Package'
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default TourForm;