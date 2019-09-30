const selectorNamespace = require('postcss-selector-namespace')
const component_nameSpace = require('./config/application.json')
const postcssNormalize = require('postcss-normalize')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // publicPath: `${component_nameSpace.publicPath}`,
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
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
              // more options:
              // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
          })
      ]
    }
  }

        