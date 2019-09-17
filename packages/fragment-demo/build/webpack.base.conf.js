'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,// 屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'
            },
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
                //   styeuse,
                //   cssextra,
                  MiniCssExtractPlugin.loader,
                  cssuse,
                  postuse
                ]
              },
              {
                test: /\.less$/,
                use: [
                //   styeuse,
                //   cssextra,
                  MiniCssExtractPlugin.loader,
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
                //   styeuse,
                //   cssextra,
                  MiniCssExtractPlugin.loader,
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
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      quality: 85,
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
        // new BundleAnalyzerPlugin()
    ]
}