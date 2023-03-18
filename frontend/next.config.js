/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  hostnames: {
    development: 'localhost',
    production: 'example.com',
  },
  images: {
    domains: ['localhost', process.env.BASE_API_URL],
  },
}

module.exports = nextConfig
