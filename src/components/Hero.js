"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/assets/profile.jpg";
import Link from "next/link";
import { CONTACT_ROUTE, TOUR_ROUTE } from "@/constants/routes";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-green-50 via-teal-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <div className="relative w-full h-auto max-h-[450px] shadow-xl rounded-xl overflow-hidden">
            <Image
              src={heroImage}
              alt="Prabin Dangol Portrait"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hello.............
            <br />
            I&apos;m <span className="text-amber-500">Binod Silwal Khatri</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-2"
          >
            <TypeAnimation
              sequence={[
                "Himalayan Trekking Guide",
                2000,
                "Cultural Explorer",
                2000,
                "Everest Adventure Leader",
                2000,
                "Nature Expedition Expert",
                2000,
                "Local Heritage Guide",
                2000,
                "Mountain Trail Navigator",
                2000,
                "Eco-Tourism Specialist",
                2000,
                "Spiritual Journey Mentor",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-amber-500"
            />
          </motion.div>

           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300"
          >
            Expert tour guide crafting unforgettable Himalayan adventures. Explore Nepal&apos;s peaks, culture, and hidden gems with me!
          </motion.p>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href={CONTACT_ROUTE}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition duration-300"
            >
              Book a Tour
            </Link>
            <Link
              href={TOUR_ROUTE}
              className="px-6 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-medium rounded-lg transition duration-300"
            >
               Explore Tours
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg
          className="relative block w-full h-24 text-green-50 dark:text-teal-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
