const isProd = process.env.NODE_ENV === 'prod'
module.exports = {
  assetPrefix: isProd ? process.env.BASE_PATH : '',
  basePath: isProd ? process.env.BASE_PATH : '',
  distDir: process.env.BUILD_PATH,
}
