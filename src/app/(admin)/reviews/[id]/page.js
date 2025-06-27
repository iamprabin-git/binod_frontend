"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaArrowLeft, FaTrash, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import { REVIEW_STATUS } from '@/constants/reviews';
import { useRouter } from 'next/navigation';

const ReviewDetailPage = ({ params }) => {
  const router = useRouter();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock data - in a real app this would come from an API
  const mockReview = {
    id: '1',
    user: {
      name: 'Alex Johnson',
      avatar: '/avatars/avatar1.jpg',
      location: 'New York, USA',
      email: 'alex.johnson@example.com',
      joined: '2022-03-15'
    },
    tour: {
      id: 'tour-101',
      title: 'Bali Adventure Tour',
      date: '2023-05-15',
      duration: '7 days',
      price: '$1,299'
    },
    rating: 5,
    comment: 'Absolutely amazing experience! Our guide was knowledgeable and made the trip unforgettable. The scenery was breathtaking and the activities were perfectly planned. The accommodations were comfortable and the food was delicious. I would highly recommend this tour to anyone looking for an adventure in Bali. The highlight was definitely the sunrise hike up Mount Batur - a truly magical experience!',
    status: REVIEW_STATUS.PUBLISHED,
    createdAt: '2023-05-20',
    updatedAt: '2023-05-22'
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReview(mockReview);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleStatusChange = (newStatus) => {
    setReview(prev => ({ ...prev, status: newStatus }));
    // In a real app, you would make an API call to update the status
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this review?')) {
      router.push('/admin/reviews');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Loading review details...</p>
        </div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center">
          <div className="text-5xl text-gray-400 mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Review not found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            The review you are looking for does not exist or has been removed.
          </p>
          <button 
            onClick={() => router.push('/admin/reviews')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Back to Reviews
          </button>
        </div>
      </div>
    );
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-xl" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 text-xl" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.back()}
        className="flex items-center mb-6 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <FaArrowLeft className="mr-2" /> Back to Reviews
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Review Details</h1>
          <div className="flex space-x-2">
            <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors">
              <FaEdit />
            </button>
            <button 
              onClick={handleDelete}
              className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{review.tour.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {renderStars()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Tour Date</h3>
                    <p className="text-gray-900 dark:text-white">{new Date(review.tour.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Duration</h3>
                    <p className="text-gray-900 dark:text-white">{review.tour.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Price</h3>
                    <p className="text-gray-900 dark:text-white">{review.tour.price}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</h3>
                    <div className="inline-block">
                      <select
                        value={review.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          review.status === REVIEW_STATUS.PUBLISHED 
                            ? 'bg-green-100 text-green-800' 
                            : review.status === REVIEW_STATUS.PENDING 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        <option value={REVIEW_STATUS.PUBLISHED}>Published</option>
                        <option value={REVIEW_STATUS.PENDING}>Pending</option>
                        <option value={REVIEW_STATUS.REJECTED}>Rejected</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Review Content</h3>
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-5">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{review.comment}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Reviewer Information</h2>
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">{review.user.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{review.user.location}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <p className="text-gray-900 dark:text-white">{review.user.email}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Member Since</h4>
                    <p className="text-gray-900 dark:text-white">{new Date(review.user.joined).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Reviews Submitted</h4>
                    <p className="text-gray-900 dark:text-white">8 reviews</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Review Metadata</h2>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Review ID</h4>
                    <p className="text-gray-900 dark:text-white">{review.id}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Submitted On</h4>
                    <p className="text-gray-900 dark:text-white">
                      {new Date(review.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</h4>
                    <p className="text-gray-900 dark:text-white">
                      {new Date(review.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailPage;