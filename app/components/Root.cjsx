React = require 'react'
Router = require 'react-router'
RouteHandler = Router.RouteHandler
path = require 'path'
Header = require './Header.cjsx'
Footer = require './Footer.cjsx'

require.context '../static/images/icons/', true, /^\.\//
basscss = require '!css!./../../node_modules/basscss/css/basscss.css' # what the actual fuck
materialcss = require '!css!./../../node_modules/material-design-lite/material.min.css' # what the actual fuck
css = require '!css!sass!./../style/base.scss'

Root = React.createClass
  propTypes:
    title: React.PropTypes.string
  render: ->
    initialProps =
      __html: safeStringify @props
    <html>
      <head>
        <title>{@props.title}</title>
        <meta name="description" property="og:description" content="flyingoctopus.net - Computational Aesthetics" />
        <meta name="image" property="og:image" content="./img/flyingoctopus.png" />
        <meta name="type" property="image:type" content="image/png" />
        <meta property="og:image:width" content="792" />
        <meta property="og:image:height" content="792" />
        <link rel="apple-touch-icon" sizes="57x57" href="./img/icons./apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./img/icons./apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./img/icons./apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./img/icons./apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./img/icons./apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./img/icons./apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./img/icons./apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./img/icons./apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./img/icons./apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="./img/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="./img/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./img/icons/favicon-16x16.png" />
        <link rel="manifest" href="./img/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="./img/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <style dangerouslySetInnerHTML={{ __html: basscss }} />
        <style dangerouslySetInnerHTML={{ __html: materialcss }} />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body className='p2'>
        <Header {...@props} />
        <RouteHandler {...@props} />
        <Footer {...@props} />
        <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
        <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' type='text/css' />

        <script
          id='initial-props'
          type='application/json'
          dangerouslySetInnerHTML={initialProps} />
        <script></script>
        <script src='/bundle.js' />
      </body>
    </html>

safeStringify = (obj) ->
  JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace /<!--/g, '<\\!--'

module.exports = Root
