'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'http://localhost:5000/',
        filename: 'js/[name].[chunkhash].js'
    },
    plugins: [
        // new DllReferencePlugin({
        //     manifest: require('../dist/dll/antd.manifest.json')
        // }),
        // new BundleAnalyzerPlugin(),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: /\.js(\?.*)?$/i,
            threshold: 10240,
            minRatio: 0.8
          })
    ],
    // 代码分离相关
    optimization: {
        nodeEnv: 'production',
        minimizer: [ new UglifyJSPlugin() ],
        namedChunks: true,
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        }
    },
    externals: {
        'react': 'common.react',
        'react-dom': 'common.reactDom',
        'prop-types': 'common.propTypes',
        'classnames': 'common.classnames',
        'proppy': 'common.proppy',
        'proppy-react': 'common.proppyReact'
    }
})