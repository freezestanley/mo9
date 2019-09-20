'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: false,
        historyApiFallback: true,
        compress: true,
        inline: true,
        hot: true,
        host: '127.0.0.1',
        port: 8703
    },
    plugins: [
        // 热更新相关
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],
    optimization: {
        nodeEnv: 'development',
      }
})