const isProd = process.env.NODE_ENV === 'prod'
module.exports = {
  assetPrefix: isProd ? '/EA-FX-Validator-site' : '',
  distDir: 'build',
}
