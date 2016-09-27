const webpack = require('webpack')
const path = require('path')


const entry = {}
entry[process.env.MODULE_NAME] = './src/' + process.env.MODULE_NAME + '.vue'

let plugins = undefined
if(process.env.PRODUCTION)
  plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]

module.exports = {
  entry,

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  externals: {
    'vue': 'Vue'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-object-assign']
  },

  plugins,
}