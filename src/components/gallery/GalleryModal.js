// src/components/admin/gallery/GalleryModal.jsx
import { useState, useRef, useEffect } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const GalleryModal = ({ 
  isOpen, 
  onClose, 
  selectedImage, 
  newImage, 
  setNewImage, 
  onDelete, 
  onCreate 
}) => {
  const [uploadOption, setUploadOption] = useState('url'); // 'url' or 'file'
  const [filePreview, setFilePreview] = useState(null);
  const fileInputRef = useRef(null);
  
  // Reset upload state when modal opens for new image
  useEffect(() => {
    if (isOpen && !selectedImage) {
      setUploadOption('url');
      setFilePreview(null);
    }
  }, [isOpen, selectedImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match('image.*')) {
      alert('Please select an image file (jpg, png, gif, etc.)');
      return;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size exceeds 2MB limit');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setFilePreview(e.target.result);
      // Set the file object in state for later upload
      setNewImage(prev => ({
        ...prev,
        imageFile: file,
        image: URL.createObjectURL(file) // temporary URL for preview
      }));
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {selectedImage ? "Image Details" : "Add New Image"}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {selectedImage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-full h-auto max-h-96 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedImage.description}</p>
                
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-medium text-gray-900 dark:text-gray-200 w-32">Category:</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedImage.category}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-900 dark:text-gray-200 w-32">Tags:</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedImage.tags.join(', ')}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-900 dark:text-gray-200 w-32">Dimensions:</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedImage.dimensions}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-900 dark:text-gray-200 w-32">File Size:</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedImage.size}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-900 dark:text-gray-200 w-32">Upload Date:</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedImage.date}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => onDelete(selectedImage.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                  >
                    <MdDelete className="mr-2" />
                    Delete Image
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Image Source Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Image Source
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      checked={uploadOption === 'url'}
                      onChange={() => setUploadOption('url')}
                    />
                    <span className="ml-2">Image URL</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      checked={uploadOption === 'file'}
                      onChange={() => setUploadOption('file')}
                    />
                    <span className="ml-2">Upload File</span>
                  </label>
                </div>
              </div>

              {/* URL Input */}
              {uploadOption === 'url' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={newImage.image}
                    onChange={(e) => setNewImage(prev => ({
                      ...prev, 
                      image: e.target.value,
                      imageFile: null  // Clear file when switching to URL
                    }))}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              )}

              {/* File Upload */}
              {uploadOption === 'file' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <div 
                    onClick={triggerFileInput}
                    className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    <IoCloudUploadOutline className="text-4xl text-gray-400 mb-2" />
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      Click to upload or drag and drop<br />
                      <span className="text-sm">(Max 2MB, JPG/PNG/GIF)</span>
                    </p>
                  </div>
                  
                  {/* File Preview */}
                  {filePreview && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preview
                      </label>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 max-w-xs">
                        <img 
                          src={filePreview} 
                          alt="Preview" 
                          className="max-h-40 object-contain mx-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={newImage.title}
                    onChange={(e) => setNewImage(prev => ({...prev, title: e.target.value}))}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Image title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newImage.category}
                    onChange={(e) => setNewImage(prev => ({...prev, category: e.target.value}))}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select category</option>
                    <option value="Nature">Nature</option>
                    <option value="Urban">Urban</option>
                    <option value="People">People</option>
                    <option value="Abstract">Abstract</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={newImage.description}
                  onChange={(e) => setNewImage(prev => ({...prev, description: e.target.value}))}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows="3"
                  placeholder="Image description"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={newImage.tags}
                  onChange={(e) => setNewImage(prev => ({...prev, tags: e.target.value}))}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="mountains, sunset, landscape"
                />
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    onCreate();
                    onClose();
                  }}
                  disabled={!newImage.image}
                  className={`px-4 py-2 text-white rounded-lg transition-colors flex items-center ${
                    !newImage.image 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  <IoCloudUploadOutline className="mr-2" />
                  Add Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;