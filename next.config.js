/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'prod'
const nextConfig = {
  /* config options here */
  assetPrefix: isProd ? process.env.BASE_PATH : '',
  basePath: isProd ? process.env.BASE_PATH : '',
  distDir: process.env.BUILD_PATH,
  publicRuntimeConfig: {
    // Will be available on both server and client.
    staticFolder: '/static',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side.
  },
}

module.exports = nextConfig
