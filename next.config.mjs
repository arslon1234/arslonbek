/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'], // Specify ImageKit domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/tyzwuzsdv/uploads/**', // Match your ImageKit path structure
      },
    ],
  },
};

export default nextConfig;
