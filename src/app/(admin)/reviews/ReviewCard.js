import React from 'react';
import { FaStar, FaRegStar, FaTrash, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import { REVIEW_STATUS } from '@/constants/reviews';

const ReviewCard = ({ review, onStatusChange, onDelete }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };

  const getStatusBadge = () => {
    switch (review.status) {
      case REVIEW_STATUS.PUBLISHED:
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Published</span>;
      case REVIEW_STATUS.PENDING:
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>;
      case REVIEW_STATUS.REJECTED:
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">{review.user.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.user.location}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge()}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900 dark:text-white">{review.tour.title}</h4>
            {renderStars()}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Tour Date: {new Date(review.tour.date).toLocaleDateString()}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-2">
            {review.status !== REVIEW_STATUS.PUBLISHED && (
              <button 
                onClick={() => onStatusChange(review.id, REVIEW_STATUS.PUBLISHED)}
                className="flex items-center px-3 py-1.5 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors"
              >
                <FaCheck className="mr-1" /> Approve
              </button>
            )}
            {review.status !== REVIEW_STATUS.REJECTED && (
              <button 
                onClick={() => onStatusChange(review.id, REVIEW_STATUS.REJECTED)}
                className="flex items-center px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg transition-colors"
              >
                <FaTimes className="mr-1" /> Reject
              </button>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <FaEdit />
            </button>
            <button 
              onClick={() => onDelete(review.id)}
              className="p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;