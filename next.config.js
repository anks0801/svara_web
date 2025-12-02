/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // required for static export
  },
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;