"use client";
import React, { useState, useEffect } from 'react';

import { REVIEWS_DATA } from '@/constants/reviews';
import { FaThLarge, FaList, FaRegStar } from 'react-icons/fa';
import ReviewFilters from './ReviewFilters';
import ReviewStats from './ReviewStats';
import ReviewCard from './ReviewCard';
import ReviewsTable from './ReviewsTable';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'

  // Load reviews data
  useEffect(() => {
    // In a real app, this would be an API call
    setReviews(REVIEWS_DATA);
    setFilteredReviews(REVIEWS_DATA);
  }, []);

  // Filter and sort reviews
  useEffect(() => {
    let result = [...reviews];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(review => 
        review.user.name.toLowerCase().includes(term) ||
        review.tour.title.toLowerCase().includes(term) ||
        review.comment.toLowerCase().includes(term)
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(review => review.status === statusFilter);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'highest':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    
    setFilteredReviews(result);
  }, [reviews, searchTerm, statusFilter, sortOption]);

  const handleStatusChange = (id, newStatus) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === id ? { ...review, status: newStatus } : review
      )
    );
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this review?')) {
      setReviews(prev => prev.filter(review => review.id !== id));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customer Reviews</h1>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setViewMode('cards')}
            className={`p-2 rounded-lg ${viewMode === 'cards' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
            title="Card View"
          >
            <FaThLarge />
          </button>
          <button 
            onClick={() => setViewMode('table')}
            className={`p-2 rounded-lg ${viewMode === 'table' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
            title="Table View"
          >
            <FaList />
          </button>
        </div>
      </div>

      <ReviewFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <ReviewStats reviews={reviews} />

      {filteredReviews.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center">
          <div className="text-gray-400 dark:text-gray-500 text-5xl mb-4">
            <FaRegStar />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No reviews found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(review => (
            <ReviewCard 
              key={review.id} 
              review={review} 
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <ReviewsTable 
          reviews={filteredReviews} 
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      )}

      {filteredReviews.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors">
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;