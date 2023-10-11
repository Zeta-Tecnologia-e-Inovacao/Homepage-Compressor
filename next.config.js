const { mauve, violet, red, blackA } = require('@radix-ui/colors');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },

  export: "output",

  images: {
    unoptimized: true
  },
};
module.exports = nextConfig

