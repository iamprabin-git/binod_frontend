'use client';
import { ABOUT_ROUTE, TOUR_ROUTE } from '@/constants/routes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCompass, FaUserFriends, FaStar, FaLanguage } from 'react-icons/fa';

export default function AboutPreview() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: <FaCompass className="text-blue-500" />, value: "20+", label: "Years Experience" },
    { icon: <FaUserFriends className="text-blue-500" />, value: "5000+", label: "Happy Travelers" },
    { icon: <FaStar className="text-blue-500" />, value: "100%", label: "5-Star Reviews" },
    { icon: <FaLanguage className="text-blue-500" />, value: "4", label: "Languages Spoken" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h2 
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            >
              About <span className="text-blue-600 dark:text-blue-400">Your Guide</span>
            </motion.h2>
            
            <motion.p 
              variants={item}
              className="text-gray-600 dark:text-gray-300 mb-6 text-lg"
            >
              With over two decades of experience, I bring deep local knowledge and authentic passion to every tour. My goal is to create unforgettable experiences that go beyond typical tourist attractions.
            </motion.p>
            
            <motion.div variants={item}>
              <Link
                href={ABOUT_ROUTE}
                className="inline-flex items-center border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-all group"
              >
                <span>Learn More About Me</span>
                <motion.span 
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="mt-8 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-100 dark:border-blue-800/50"
            >
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">My Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                `Travel isn&apos;t just about seeing places, it&apos;s about experiencing cultures and creating connections that last a lifetime .`
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 md:pl-12"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-blue-500 text-xl mr-3">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-xl text-white"
            >
              <h3 className="text-xl font-bold mb-2">Ready for Adventure?</h3>
              <p className="mb-4 opacity-90">Join me on an unforgettable journey through Nepal&apos;s most breathtaking landscapes.</p>
              <Link 
                href={TOUR_ROUTE}
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-5 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Tours
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}