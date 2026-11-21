/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/kezbanPortfolio' : '',
  },
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
  },
};

module.exports = nextConfig;
