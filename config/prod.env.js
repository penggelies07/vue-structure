var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  APP_HOST: '""',
  API_HOST: '""',
  OSS_HOST: '""'
})
