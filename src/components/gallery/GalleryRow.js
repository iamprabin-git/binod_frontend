// src/components/admin/gallery/GalleryRow.jsx
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const GalleryRow = ({ item, onView, onDelete }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4">
        <div 
          className="w-24 h-24 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer"
          onClick={() => onView(item)}
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
      </td>
      <td className="px-6 py-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {item.category}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm">
          <div>Size: {item.size}</div>
          <div className="mt-1">Dimensions: {item.dimensions}</div>
          <div className="mt-1">Date: {item.date}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <button 
            className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            onClick={() => onView(item)}
          >
            <FaRegEye className="w-5 h-5" />
          </button>
          <button 
            className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
            onClick={() => onDelete(item.id)}
          >
            <RiDeleteBin5Fill className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default GalleryRow;