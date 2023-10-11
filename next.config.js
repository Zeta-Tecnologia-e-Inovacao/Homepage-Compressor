const { mauve, violet, red, blackA } = require('@radix-ui/colors');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  output: 'standalone',
  output: 'export',
  images: {
    unoptimized: true
  },
};
module.exports = nextConfig

