# webpack-env-prefix-plugin
[![CI](https://github.com/anttiviljami/webpack-env-prefix-plugin/workflows/CI/badge.svg)](https://github.com/anttiviljami/webpack-env-prefix-plugin/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/webpack-env-prefix-plugin.svg)](https://www.npmjs.com/package/webpack-env-prefix-plugin)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/anttiviljami/webpack-env-prefix-plugin/blob/master/LICENSE)
[![Buy me a coffee](https://img.shields.io/badge/donate-buy%20me%20a%20coffee-orange)](https://buymeacoff.ee/anttiviljami)

Packages the `REACT_APP_*` env handling from `create-react-app` as a standalone webpack plugin.

## Usage

```
npm install --save-dev webpack-env-prefix-plugin
```

```javascript
// webpack.config.js
const EnvPrefixPlugin = require('webpack-env-prefix-plugin')

module.exports = {
  plugins: [
    new EnvPrefixPlugin()
  ]
}
```

```javascript
const config = {
  NODE_ENV: process.env.NODE_ENV,
  MY_CONFIG: process.env.REACT_APP_MY_CONFIG,
}
```
