const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CONFIG = require('./config')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    names: 'vendor',
    minChunks: module => {
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jquery': 'jquery'
  }),
  new HtmlWebpackPlugin({
    template: './client/index.html',
    inject: 'body',
    filename: 'index.html',
    chunks: ['app', 'polyfills', 'manifest', 'vendor'],
    chunkSortMode: CONFIG.sortChunks
  })
]

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin()
]

module.exports = process.env.NODE_ENV === 'production'
  ? plugins.concat(prodPlugins)
  : plugins
