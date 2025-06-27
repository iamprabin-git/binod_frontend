import React from 'react';
import { FaStar, FaRegStar, FaComments, FaCheck } from 'react-icons/fa';
import { REVIEW_STATUS } from '@/constants/reviews';

const ReviewStats = ({ reviews }) => {
  // Calculate statistics
  const totalReviews = reviews.length;
  const publishedReviews = reviews.filter(r => r.status === REVIEW_STATUS.PUBLISHED).length;
  const pendingReviews = reviews.filter(r => r.status === REVIEW_STATUS.PENDING).length;
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : 0;
  
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[review.rating - 1]++;
    }
  });
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md p-5 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{totalReviews}</h3>
            <p className="text-blue-100">Total Reviews</p>
          </div>
          <div className="text-3xl">
            <FaComments />
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-md p-5 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{publishedReviews}</h3>
            <p className="text-green-100">Published</p>
          </div>
          <div className="text-3xl">
            <FaCheck />
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl shadow-md p-5 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{pendingReviews}</h3>
            <p className="text-yellow-100">Pending</p>
          </div>
          <div className="text-3xl">
            <FaRegStar />
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-md p-5 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{averageRating}</h3>
            <p className="text-purple-100">Avg. Rating</p>
          </div>
          <div className="text-3xl">
            <FaStar />
          </div>
        </div>
      </div>
      
      <div className="md:col-span-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mt-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Rating Distribution</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center">
              <div className="w-12 text-gray-900 dark:text-white font-medium">
                {stars} <FaStar className="inline text-yellow-400 ml-1" />
              </div>
              <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-3">
                <div 
                  className="h-full bg-yellow-400" 
                  style={{ width: `${(ratingCounts[stars-1] / totalReviews) * 100 || 0}%` }}
                ></div>
              </div>
              <div className="w-12 text-right text-gray-700 dark:text-gray-300">
                {ratingCounts[stars-1]} 
                <span className="text-xs"> ({totalReviews ? Math.round((ratingCounts[stars-1] / totalReviews) * 100) : 0}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;