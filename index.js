const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const env = require('react-scripts/config/env')()

class EnvPrefixPlugin extends webpack.DefinePlugin {
  constructor() {
    super(env.stringified)
  }
}

module.exports = EnvPrefixPlugin
