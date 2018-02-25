'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OAUTH_URL: '"http://127.0.0.1:8000/oauth"',
  API_URL: '"http://127.0.0.1:8000/api"'
})
