/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '/djfop5zyp/**', // ✅ corrected syntax
      },
    ],
  },
};

export default nextConfig;
