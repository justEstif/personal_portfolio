/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withMDX(nextConfig);
