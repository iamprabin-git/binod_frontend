// src/components/admin/gallery/GalleryHeader.jsx
import { MdOutlineCollections } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import BackButton from "../BackButton";

const GalleryHeader = ({ title, onToggleDarkMode, onAddImage, darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div className="flex items-center mb-4 md:mb-0">
        <MdOutlineCollections className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
      </div>
      
      <div className="flex space-x-3">
       <BackButton className="mb-10"/>
        
        <button 
          onClick={onAddImage}
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
        >
          <FaPlus className="h-4 w-4 mr-2" />
          Add New Image
        </button>
      </div>
    </div>
  );
};

export default GalleryHeader;