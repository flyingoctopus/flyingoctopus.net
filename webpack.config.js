// webpack.config.js

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var data = require('./data.js')

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee'},
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.md$/, loader: "html!markdown" },
      { test: /\.(jpg|jpeg|gif|png|ico|svg|woff|ttf|xml|json)$/, loader: "file-loader?name=img/[path][name].[ext]&context=./app/static/images" }
    ]
  },
	resolve: {
		// you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.cjsx', '.coffee']
	},
  alias: {
    "basscss-base": "../node_modules/basscss-base",
    "basscss-utilities": "../node_modules/basscss-utilities",
    "basscss-positions": "../node_modules/basscss-positions"
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
