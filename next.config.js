/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_ENV === 'prod';
const isDevServer = process.env.NODE_ENV === 'development';
const repoName = isDevServer ? '' : (isProd ? '/svara' : '/svara-dev');
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