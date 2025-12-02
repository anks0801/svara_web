/** @type {import('next').NextConfig} */
const repoName = '/svara_web'; 
const nextConfig = {
  output: 'export', // for static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // required for static export
  },
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
  basePath: repoName,
  assetPrefix: `${repoName}/`,
};

module.exports = nextConfig;