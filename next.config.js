const { blackA, mauve, violet } = require('@radix-ui/colors');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },

  output: "export",

  images: {
    unoptimized: true
  },
 
  };
  
  module.exports = nextConfig