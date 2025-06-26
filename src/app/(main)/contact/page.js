'use client';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import SocialMedia from '@/components/SocialMedia';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://your-strapi-url.com/api/contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      value: "+977-9851040321",
      link: "https://wa.me/9851040321?text=Hello%20I'm%20interested%20in%20your%20tours",
      description: "Fastest way to get in touch",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+977-9851040321",
      link: "tel:+977-9851040321",
      description: "Available 9AM-6PM daily",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "binodsilwal@gmail.com",
      link: "mailto:binodsilwal@gmail.com",
      description: "Response within 24 hours",
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Thamel, Kathmandu, Nepal",
      description: "Available for local meetups",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch for tour bookings or inquiries
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section (Left) - Animated */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg"
                  >
                    Error sending message. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>

              <ContactForm 
                isSubmitting={isSubmitting} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                formData={formData} 
              />
            </div>
          </motion.div>

          {/* Contact Info Section (Right) - Staggered Animations */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start group"
                  >
                    <div className={`flex-shrink-0 ${method.color} p-3 rounded-full mr-4 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">{method.title}</h4>
                      {method.link ? (
                        <Link
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {method.value}
                        </Link>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{method.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Connect With Me</h4>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SocialMedia variant="rounded" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}