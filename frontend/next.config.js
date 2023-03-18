/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', process.env.BASE_API_URL],
  },
}

module.exports = nextConfig
