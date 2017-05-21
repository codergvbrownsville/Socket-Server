const path = require('path')
const process = require('process')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  loaders: [{
    test: /\.tsx$/,
    exclude: /node_modules/,
    loaders: ['awesome-typescript-loader']
  }, {
    test: /\.ts$/,
    loaders: ['awesome-typescript-loader']
  }, {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader'
  }, {
    test: /\.html$/,
    loader: 'html-loader'
  }, {
    test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot|PNG)$/,
    loader: 'file-loader?name=[path]/[name].[ext]'
  }, {
    test: /\.png$/,
    loader: require.resolve('file-loader')
  }, {
    test: /\.css$/,
    exclude: [/node_modules/, path.resolve(process.cwd(), 'client')],
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'postcss-loader']
    })
  }, {
    test: /\.css$/,
    loader: 'raw-loader'
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }]
}
