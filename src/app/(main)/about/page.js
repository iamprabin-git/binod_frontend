'use client';
import Image from "next/image";
import profile from "@/assets/my_photo.jpg";
import { motion } from "framer-motion";
import { FaAward, FaUserFriends, FaStar, FaLanguage } from "react-icons/fa";

export default function AboutPage() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: <FaAward className="text-blue-500" />, value: "20+ Years", label: "Experience" },
    { icon: <FaUserFriends className="text-blue-500" />, value: "5000+", label: "Happy Travelers" },
    { icon: <FaStar className="text-blue-500" />, value: "100%", label: "5-Star Reviews" },
    { icon: <FaLanguage className="text-blue-500" />, value: "Fluent in", label: "4 Languages" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-26 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={profile}
                alt="Binod Silwal Khatri - Professional Tour Guide"
                height={1000}
                width={1000}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Content with Staggered Animations */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:w-2/3 md:pl-12"
          >
            <motion.h3 variants={item} className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Hi, I am <span className="text-blue-600 dark:text-blue-400">Binod Silwal Khatri</span> - Your Local Tour Expert
            </motion.h3>
            
            <motion.p variants={item} className="text-gray-600 dark:text-gray-300 mb-4">
              Born and raised in Nepal beautiful Himalayan region, I have spent over two decades sharing my passion for local history, culture, and nature with visitors from around the world. My deep connection to this land allows me to offer authentic experiences you will not find in guidebooks.
            </motion.p>
            
            <motion.p variants={item} className="text-gray-600 dark:text-gray-300 mb-6">
              With a degree in Tourism Management and certifications in Wilderness First Aid, I combine professional expertise with personal storytelling. My tours reveal hidden gems and local legends while ensuring your safety and comfort in Nepals diverse terrain.
            </motion.p>

            {/* Animated Stats Grid */}
            <motion.div variants={container} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{stat.value}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}