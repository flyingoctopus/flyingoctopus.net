
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var data = require('./data')

module.exports = {
  entry: path.resolve(__dirname, './js/entry.coffee'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
        query: {
          cacheDirectory: true
        }
			},
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee'},
      { test: /\.haml$/, loaders: [ 'haml' ] },
      { test: /\.html\.hamlc$/, loader: 'haml' },
      { test: /\.css$/, loaders: [ 'css' ] },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.md$/, loader: "html!markdown" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" }
    ]
  },
	resolve: {
		// you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.cjsx', '.coffee']
	},
  context: __dirname,
  node: {
    __filename: true
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })

  ],

}
