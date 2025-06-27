import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { REVIEW_STATUS_OPTIONS, SORT_OPTIONS } from '@/constants/reviews';

const ReviewFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  sortOption, 
  setSortOption 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 p-2.5 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Search reviews..."
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-300">
              <FaFilter className="inline mr-1" /> Status:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {REVIEW_STATUS_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-300">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilters;