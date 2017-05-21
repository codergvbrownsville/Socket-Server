const {
  entry,
  output,
  resolve,
  modules,
  plugins
} = require('./webpack/index')

module.exports = {
  devtool: 'inline-sourcemap',
  entry,
  output,
  resolve,
  module: modules,
  plugins,
  watch: process.env.NODE_ENV !== 'development' ? undefined : true
}
