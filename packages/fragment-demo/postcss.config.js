var selectorNamespace = require('postcss-selector-namespace')
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        // require('postcss-namespace')
        selectorNamespace({ selfSelector: ':--component', namespace: '.my-component' })
      ]
  }