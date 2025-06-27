// src/components/admin/gallery/GalleryTable.jsx
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import GalleryRow from "./GalleryRow";

const GalleryTable = ({ galleryData, onView, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearchSharp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search images..."
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <div className="relative">
              <select className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>All Categories</option>
                <option>Nature</option>
                <option>Urban</option>
                <option>People</option>
                <option>Abstract</option>
              </select>
            </div>
            
            <button className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600">
              <FaFilter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Title & Description</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Tags</th>
              <th scope="col" className="px-6 py-3">Details</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryData.map((item) => (
              <GalleryRow 
                key={item.id} 
                item={item} 
                onView={onView} 
                onDelete={onDelete} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GalleryTable;