const selectorNamespace = require('postcss-selector-namespace')
const component_nameSpace = require('./config/application.json')
const postcssNormalize = require('postcss-normalize')

module.exports = {
    publicPath: `${component_nameSpace.publicPath}`,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('autoprefixer'),
                    require('postcss-import'),
                    selectorNamespace({ selfSelector: ':namespace', namespace: `.${component_nameSpace.library}`, rootSelector: '' }),
                    postcssNormalize({ forceImport: true })
                  ]
            }
        }
    },
    configureWebpack: {
      output: {
        libraryTarget: 'umd',
        library: component_nameSpace.library
      }
    }
  }

        