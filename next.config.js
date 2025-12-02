/** @type {import('next').NextConfig} */
const repoName = '/svara'; 
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
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
};

module.exports = nextConfig;