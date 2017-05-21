const path = require('path')
const process = require('process')

const name = process.env.NODE_ENV === 'production'
  ? '[name].[chunkhash].js'
  : '[name].[hash].js'

module.exports = {
  path: path.join(process.cwd(), 'dist'),
  publicPath: '/',
  filename: name
}
