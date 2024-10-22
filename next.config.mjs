/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '3.68.219.212',
            port: '3000',
            pathname: '/uploads/**',
          },
        ],
      },
};

export default nextConfig;
