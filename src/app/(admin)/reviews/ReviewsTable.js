import React from 'react';
import { FaStar, FaRegStar, FaTrash, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import { REVIEW_STATUS } from '@/constants/reviews';

const ReviewsTable = ({ reviews, onStatusChange, onDelete }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case REVIEW_STATUS.PUBLISHED:
        return "bg-green-100 text-green-800";
      case REVIEW_STATUS.PENDING:
        return "bg-yellow-100 text-yellow-800";
      case REVIEW_STATUS.REJECTED:
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">User & Tour</th>
            <th scope="col" className="px-6 py-3">Rating</th>
            <th scope="col" className="px-6 py-3">Review</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr 
              key={review.id} 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900 dark:text-white">{review.user.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{review.tour.title}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => 
                    i < review.rating 
                      ? <FaStar key={i} className="mr-1" /> 
                      : <FaRegStar key={i} className="mr-1" />
                  )}
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{review.rating}</span>
                </div>
              </td>
              <td className="px-6 py-4 max-w-xs">
                <div className="line-clamp-2 text-gray-700 dark:text-gray-300">{review.comment}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs ${getStatusClass(review.status)}`}>
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="text-gray-700 dark:text-gray-300">
                  {new Date(review.createdAt).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  {review.status !== REVIEW_STATUS.PUBLISHED && (
                    <button 
                      onClick={() => onStatusChange(review.id, REVIEW_STATUS.PUBLISHED)}
                      className="p-2 text-green-600 hover:text-white hover:bg-green-600 rounded-full transition-colors"
                      title="Approve"
                    >
                      <FaCheck />
                    </button>
                  )}
                  {review.status !== REVIEW_STATUS.REJECTED && (
                    <button 
                      onClick={() => onStatusChange(review.id, REVIEW_STATUS.REJECTED)}
                      className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-full transition-colors"
                      title="Reject"
                    >
                      <FaTimes />
                    </button>
                  )}
                  <button 
                    className="p-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded-full transition-colors"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => onDelete(review.id)}
                    className="p-2 text-gray-600 hover:text-white hover:bg-gray-600 rounded-full transition-colors"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsTable;