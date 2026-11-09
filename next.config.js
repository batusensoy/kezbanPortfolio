/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: '/kezbanPortfolio',
        assetPrefix: '/kezbanPortfolio/',
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

module.exports = nextConfig;
