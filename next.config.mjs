/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (process.env.GITHUB_REPOSITORY) {
  repo = '/' + process.env.GITHUB_REPOSITORY.split('/')[1];
}

const nextConfig = {
  output: process.env.NEXT_OUTPUT_STANDALONE ? 'standalone' : 'export',
  basePath: isGithubActions ? repo : undefined,
  assetPrefix: isGithubActions ? repo : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
