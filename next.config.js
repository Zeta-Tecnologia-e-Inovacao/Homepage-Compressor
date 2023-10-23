/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  appDir: true,

  output: 'export',
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts',
  // },
};

module.exports = nextConfig
const removeImports = require('next-remove-imports')(); 
 module.exports = removeImports({});

