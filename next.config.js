const withLess = require("next-with-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  lessLoaderOptions: {},
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = withLess(nextConfig);
