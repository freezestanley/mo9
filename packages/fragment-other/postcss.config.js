const selectorNamespace = require('postcss-selector-namespace')
const component_nameSpace = require('./config/application').target
const postcssNormalize = require('postcss-normalize')
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        selectorNamespace({ selfSelector: ':namespace', namespace: `.${component_nameSpace}`, rootSelector: '' }),
        postcssNormalize({ forceImport: true })
      ]
  }