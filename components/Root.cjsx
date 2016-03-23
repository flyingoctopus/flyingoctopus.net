React = require 'react'
Router = require 'react-router'
RouteHandler = Router.RouteHandler
Header = require './Header.cjsx'
Footer = require './Footer.cjsx'
basscss = require '!css!./../node_modules/basscss/css/basscss.css' # what the actual fuck
materialcss = require '!css!./../node_modules/material-design-lite/material.min.css' # what the actual fuck
css = require '!css!sass!./../css/base.scss'

Root = React.createClass
  propTypes:
    title: React.PropTypes.string
  render: ->
    initialProps =
      __html: safeStringify @props
    <html>
      <head>
        <title>{@props.title}</title>
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
        <script src='/bundle.js' />
      </body>
    </html>

safeStringify = (obj) ->
  JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace /<!--/g, '<\\!--'

module.exports = Root
