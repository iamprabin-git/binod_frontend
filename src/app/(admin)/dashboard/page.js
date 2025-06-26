// app/dashboard/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaBars, FaSearch, FaBell, FaUser, FaChartBar, FaCalendarAlt, 
  FaMapMarkerAlt, FaMoneyBillWave, FaUsers, FaStar, FaCog, FaMoon, FaSun 
} from 'react-icons/fa';
import { FcGallery } from "react-icons/fc";
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, 
  LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import Link from 'next/link';
import { ADMIN_ROUTE, HOME_ROUTE, TOURS_DASHBOARD_ROUTE } from '@/constants/routes';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference for dark mode
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, mounted]);

  if (!mounted) return null;

  // Stats data
  const stats = [
    { title: "Total Bookings", value: "128", icon: <FaCalendarAlt className="text-blue-500" />, change: "+12%", color: "bg-blue-100 dark:bg-blue-900/50" },
    { title: "Revenue", value: "$8,420", icon: <FaMoneyBillWave className="text-green-500" />, change: "+18%", color: "bg-green-100 dark:bg-green-900/50" },
    { title: "Active Tours", value: "24", icon: <FaMapMarkerAlt className="text-purple-500" />, change: "+3", color: "bg-purple-100 dark:bg-purple-900/50" },
    { title: "New Customers", value: "42", icon: <FaUsers className="text-orange-500" />, change: "+8%", color: "bg-orange-100 dark:bg-orange-900/50" }
  ];

  // Recent bookings
  const bookings = [
    { id: 1, customer: "John Smith", tour: "Mountain Adventure", date: "15 Jun 2023", status: "Confirmed", amount: "$240" },
    { id: 2, customer: "Emma Johnson", tour: "City Highlights", date: "16 Jun 2023", status: "Pending", amount: "$180" },
    { id: 3, customer: "Michael Brown", tour: "Wine Tasting Tour", date: "17 Jun 2023", status: "Confirmed", amount: "$320" },
    { id: 4, customer: "Sarah Davis", tour: "Beach Getaway", date: "18 Jun 2023", status: "Cancelled", amount: "$210" },
    { id: 5, customer: "David Wilson", tour: "Historical Walk", date: "19 Jun 2023", status: "Confirmed", amount: "$150" }
  ];

  // Chart data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [4200, 5800, 5100, 6200, 7900, 8420],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const bookingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings',
        data: [42, 58, 51, 62, 79, 84],
        backgroundColor: 'rgba(139, 92, 246, 0.7)',
      }
    ]
  };

  const tourData = {
    labels: ['Mountain', 'City', 'Wine', 'Beach', 'History'],
    datasets: [
      {
        label: 'Popular Tours',
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(239, 68, 68, 0.7)'
        ],
      }
    ]
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 120 
      }
    }
  };

  const sidebarVariants = {
    open: { width: 256, opacity: 1 },
    closed: { width: 80, opacity: 1 }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <motion.div 
        className="bg-gradient-to-b from-blue-800 to-indigo-900 text-white z-10"
        variants={sidebarVariants}
        initial={sidebarOpen ? "open" : "closed"}
        animate={sidebarOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-4 flex items-center justify-between h-16">
          {sidebarOpen ? (
            <motion.h1 
              className="text-xl font-bold flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              
              Admin Panel
            </motion.h1>
          ) : (
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>
          )}
          <motion.button 
            onClick={toggleSidebar}
            className="text-blue-300 hover:text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars />
          </motion.button>
        </div>
        
        <nav className="mt-6">
          <ul>
            <li className="mb-1">
              <Link 
                href={ADMIN_ROUTE} 
                className={`flex items-center p-3 ${activeTab === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <FaChartBar className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Dashboard</span>}
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href={TOURS_DASHBOARD_ROUTE} 
                className={`flex items-center p-3 ${activeTab === 'tours' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('tours')}
              >
                <FaMapMarkerAlt className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Tours</span>}
              </Link>
            </li>
            <li className="mb-1">
              <a 
                href="#" 
                className={`flex items-center p-3 ${activeTab === 'bookings' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('bookings')}
              >
                <FaCalendarAlt className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Bookings</span>}
              </a>
            </li>
            <li className="mb-1">
              <a 
                href="#" 
                className={`flex items-center p-3 ${activeTab === 'galleries' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('galleries')}
              >
                <FcGallery className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Galleries</span>}
              </a>
            </li>
            <li className="mb-1">
              <a 
                href="#" 
                className={`flex items-center p-3 ${activeTab === 'customers' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('customers')}
              >
                <FaUsers className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Customers</span>}
              </a>
            </li>
            <li className="mb-1">
              <a 
                href="#" 
                className={`flex items-center p-3 ${activeTab === 'reviews' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('reviews')}
              >
                <FaStar className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Reviews</span>}
              </a>
            </li>
            <li className="mt-8 mb-1">
              <a 
                href="#" 
                className={`flex items-center p-3 ${activeTab === 'settings' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                onClick={() => setActiveTab('settings')}
              >
                <FaCog className="mr-3 text-blue-300" />
                {sidebarOpen && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bookings, tours, customers..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href={HOME_ROUTE} className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Visit Website</Link>
              <motion.button 
                className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBell />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 text-gray-600 dark:text-yellow-300 hover:text-gray-900 dark:hover:text-yellow-200"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={18} />}
              </motion.button>
              
              
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <div className="mb-6">
            <motion.h1 
              className="text-2xl font-bold text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Dashboard Overview
            </motion.h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's your tour business performance summary</p>
          </div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 transition-transform hover:scale-[1.02]"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold dark:text-white">{stat.value}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm dark:text-gray-300">
                  <span className="text-green-500 font-medium">{stat.change}</span> from last month
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 lg:col-span-2"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Revenue Overview</h2>
              <Line 
                data={revenueData} 
                options={{ 
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: darkMode ? '#E5E7EB' : '#374151'
                      }
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                      },
                      ticks: {
                        color: darkMode ? '#9CA3AF' : '#6B7280'
                      }
                    },
                    x: {
                      grid: {
                        color: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                      },
                      ticks: {
                        color: darkMode ? '#9CA3AF' : '#6B7280'
                      }
                    }
                  }
                }} 
              />
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-5"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Popular Tours</h2>
              <Pie 
                data={tourData} 
                options={{ 
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: darkMode ? '#E5E7EB' : '#374151'
                      }
                    },
                  },
                }} 
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-5"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Bookings</h2>
              <Bar 
                data={bookingsData} 
                options={{ 
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: darkMode ? '#E5E7EB' : '#374151'
                      }
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                      },
                      ticks: {
                        color: darkMode ? '#9CA3AF' : '#6B7280'
                      }
                    },
                    x: {
                      grid: {
                        color: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                      },
                      ticks: {
                        color: darkMode ? '#9CA3AF' : '#6B7280'
                      }
                    }
                  }
                }} 
              />
            </motion.div>

            {/* Recent Bookings */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-5"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Bookings</h2>
                <a href="#" className="text-blue-500 text-sm hover:underline">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-gray-500 dark:text-gray-400 text-sm">
                      <th className="pb-2 font-medium">Customer</th>
                      <th className="pb-2 font-medium">Tour</th>
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium">Status</th>
                      <th className="pb-2 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map(booking => (
                      <motion.tr 
                        key={booking.id} 
                        className="border-t border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: booking.id * 0.05 }}
                      >
                        <td className="py-3 dark:text-gray-200">{booking.customer}</td>
                        <td className="py-3 dark:text-gray-300">{booking.tour}</td>
                        <td className="py-3 text-gray-500 dark:text-gray-400">{booking.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 
                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' : 
                            'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3 font-medium text-right dark:text-white">{booking.amount}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;