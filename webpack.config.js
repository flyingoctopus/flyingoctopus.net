
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee'},
      { test: /\.haml$/, loaders: [ 'haml' ] },
      { test: /\.html\.hamlc$/, loader: 'haml' },
      { test: /\.css$/, loaders: [ 'css' ] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ],

}
