# webpack-env-prefix-plugin

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
