// https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     // to edit target browsers: use "browserslist" field in package.json
//     "autoprefixer": {}
//   }
// }

const selectorNamespace = require('postcss-selector-namespace')
const component_nameSpace = require('./config/application').target
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        selectorNamespace({ selfSelector: `.${component_nameSpace}`, namespace: `.${component_nameSpace}` })
      ]
  }