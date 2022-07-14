/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OCTOKIT_TOKEN: process.env.OCTOKIT_TOKEN
  }
}

module.exports = nextConfig
