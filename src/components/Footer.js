import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  TESTIMONIALS_ROUTE,
  TOUR_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTripadvisor,
  FaLine,
  FaHome,
  FaWhatsapp,
} from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900  dark:bg-gray-900 dark:text-white py-12 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Binod Silwal khatri</h3>
            <p className="text-gray-900 dark:text-white">
              Professional tour guiding services offering unique experiences and
              unforgettable memories.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={HOME_ROUTE}
                  className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={ABOUT_ROUTE}
                  className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={TOUR_ROUTE}
                  className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href={TESTIMONIALS_ROUTE}
                  className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href={CONTACT_ROUTE}
                  className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-yellow-500 transition-colors">
              <li className="flex items-center gap-3">
                <FaHome className="h-5 w-5" /> Thamel, Kathmandu
              </li>
              <li className="flex items-center gap-3">
                <MdPhoneInTalk className="h-5 w-5" /> +977- 9851040321
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="h-5 w-5" />
                binodsilwal@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FaLine className="h-5 w-5" /> binod
              </li>
              <li className="flex items-center gap-3">
                <AiFillWechat className="h-5 w-5" /> binod40321
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <SocialMedia />
            <div className="flex py-3 gap-3 items-start border-2 rounded-2xl border-blue-800 mt-5 bg-green-600">
              <div className="flex-shrink-0 bg-green-400 dark:bg-green-900 p-1 rounded-full m-2">
                <FaWhatsapp className="text-white dark:text-white text-2xl h-10 w-10" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white dark:text-white mb-1">
                  WhatsApp
                </h4>
                <Link
                  href="https://wa.me/9851040321?text=Hello%20I'm%20interested%20in%20your%20tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-100 dark:text-white hover:underline"
                >
                  +977-9851040321
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 gap-4 flex flex-col md:flex-row justify-between items-center text-center text-gray-800 dark:text-gray-100">
          <Link href="https://khatribinodsilwal.com.np">
            &copy; {new Date().getFullYear()} Binod Silwal Khatri. All rights
            reserved.
          </Link>
          <Link href="https://dangolprabin.com.np">
            Designed and Developed by Prabin Dangol
          </Link>
        </div>
      </div>
    </footer>
  );
}
