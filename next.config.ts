

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensure it's correctly set
  experimental: {
    appDir: true, // If using App Router
  },
};

module.exports = nextConfig;
