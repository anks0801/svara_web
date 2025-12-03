/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_ENV === 'prod';
const isDev = process.env.NEXT_PUBLIC_ENV === 'dev';
const isDevServer = process.env.NODE_ENV === 'development';

// Set basePath based on environment:
// - Local dev server: no basePath
// - Production (main branch): /svara_web
// - Dev branch: /svara_web/dev
const repoName = isDevServer ? '' : (isProd ? '/svara_web' : (isDev ? '/svara_web/dev' : '/svara_web'));

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
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
};

module.exports = nextConfig;