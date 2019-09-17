const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
]
const cssextra = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    hmr: process.env.NODE_ENV === 'development',
    reloadAll: true,// if hmr does not work, this is a forceful method.
    publicPath: (resourcePath, context) => {
      return path.relative(path.dirname(resourcePath), context) + '/'
    }
  }
}
const cssuse = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    url: true,
    import: true
  }
}
const styeuse = {
  loader: require.resolve('style-loader')
}
const postuse = {
  loader: require.resolve('postcss-loader')
}

module.exports = {
  entry: './common.js',
  mode: 'development',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8081/public/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'common'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          // styeuse,
          cssextra,
          cssuse,
          postuse
        ]
      },
      {
        test: /\.less$/,
        use: [
          cssextra,
          cssuse,
          postuse,
          {
            loader: require.resolve('less-loader')
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          cssextra,
          cssuse,
          postuse,
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins
}

