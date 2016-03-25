StaticSiteGeneratorPlugin = require 'static-site-generator-webpack-plugin'
ExtractTextPlugin = require 'extract-text-webpack-plugin'
path = require 'path'
data = require './data'

module.exports =
  entry:
    main: path.resolve __dirname, 'entry.coffee'

  output:
    path: path.resolve __dirname, 'build'
    filename: 'bundle.js'
    libraryTarget: 'umd'

  devtool: 'source-map'

  module:
    loaders: [
      test: /\.cjsx$/
      loaders: ['coffee', 'cjsx']
    ,
      test: /\.coffee$/
      loader: 'coffee'
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

    resolveLoader:
      moduleDirectories: ['node_modules']

	resolve:
    # you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.cjsx', '.coffee']

  alias:
    'basscss-base': '../node_modules/basscss-base'
    'basscss-utilities': '../node_modules/basscss-utilities'
    'basscss-positions': '../node_modules/basscss-positions'

  context: __dirname

  node:
    __filename: true

  plugins: [
    new StaticSiteGeneratorPlugin('build/bundle.js', data.routes, data)
  ]
