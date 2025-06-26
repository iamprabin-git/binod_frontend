'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTripadvisor, FaPinterest } from 'react-icons/fa';

const SocialMedia = ({ variant = 'default', className = '' }) => {
  // Social media links data
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1AQSyxLDeL/',
      icon: <FaFacebook className="text-xl" />,
      color: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourprofile',
      icon: <FaInstagram className="text-xl" />,
      color: 'text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourhandle',
      icon: <FaTwitter className="text-xl" />,
      color: 'text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/yourchannel',
      icon: <FaYoutube className="text-xl" />,
      color: 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
    },
    {
      name: 'TripAdvisor',
      url: 'https://tripadvisor.com/yourprofile',
      icon: <FaTripadvisor className="text-xl" />,
      color: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
    },
    {
      name: 'Pinterest',
      url: 'https://pinterest.com/yourprofile',
      icon: <FaPinterest className="text-xl" />,
      color: 'text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300'
    }
  ];

  // Variant styles
  const variants = {
    default: 'flex space-x-4',
    minimal: 'flex flex-col space-y-3',
    footer: 'grid grid-cols-3 gap-4',
    rounded: 'flex space-x-2'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name} page`}
          className={`${social.color} transition-colors duration-300 ${
            variant === 'rounded' ? 'p-3 bg-gray-100 dark:bg-gray-800 rounded-full' : ''
          }`}
        >
          {social.icon}
          {variant === 'minimal' && (
            <span className="ml-2 text-gray-700 dark:text-gray-300">{social.name}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;