const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const env = require('react-scripts/config/env')()

class EnvPrefixPlugin extends webpack.DefinePlugin {
  constructor() {
    const { 'process.env': { NODE_ENV, ...definitions } } = env.stringified;
    super({ 'process.env': definitions })
  }
}

module.exports = EnvPrefixPlugin
