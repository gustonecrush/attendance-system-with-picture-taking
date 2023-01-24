/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BASE_URL_BACKEND: process.env.NEXT_BASE_URL_BACKEND,
  },
};

module.exports = nextConfig;
