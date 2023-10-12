const { mauve, violet, red, blackA } = require('@radix-ui/colors');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },

  // exclude: [
  //   'api',
  // ],
  distDir: 'out',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
};
module.exports = nextConfig

