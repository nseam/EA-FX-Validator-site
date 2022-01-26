const isProd = process.env.NODE_ENV === 'prod'
module.exports = {
  assetPrefix: isProd ? process.env.BASE_PATH : '',
  publicRuntimeConfig: {
    basePath: isProd ? process.env.BASE_PATH : '',
    staticFolder: '/static',
  },
  distDir: process.env.BUILD_PATH,
}
