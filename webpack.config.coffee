StaticSiteGeneratorPlugin = require 'static-site-generator-webpack-plugin'
ExtractTextPlugin = require 'extract-text-webpack-plugin'
path = require 'path'
data = require './data'

module.exports =
  entry: path.resolve __dirname, './script/entry.coffee'

  output:
    path: path.resolve __dirname, 'build'
    filename: 'bundle.js'
    libraryTarget: 'umd'

  devtool: 'source-map'

  module:
    loaders: [
      test: /\.jsx?$/
      exclude: /(node_modules|bower_components)/
      loader: 'babel'
      query:
        cacheDirectory: true
    ,
      test: /\.cjsx$/
      loaders: ['coffee', 'cjsx']
    ,
      test: /\.coffee$/
      loader: 'coffee'
    ,
      test: /\.haml$/
      loaders: [ 'haml' ]
    ,
      test: /\.html\.hamlc$/
      loader: 'haml'
    ,
      test: /\.css$/
      loaders: [ 'css' ]
    ,
      test: /\.scss$/
      loader: "style!css!sass"
    ,
      test: /\.md$/
      loader: "html!markdown"
    ,
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/
      loader: "file"
    ]

	resolve:
    # you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.cjsx', '.coffee']
  alias:
    "basscss-base": "../node_modules/basscss-base"
    "basscss-utilities": "../node_modules/basscss-utilities"
    "basscss-positions": "../node_modules/basscss-positions"
  context: __dirname
  node:
    __filename: true

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })

  ]
