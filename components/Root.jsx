var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('./Header.jsx')
var Footer = require('./Footer.jsx')
var basscss = require('!css!./../node_modules/basscss/css/basscss.css')
var materialcss = require('!css!./../node_modules/material-design-lite/material.min.css')
var css = require('!css!sass!./../css/base.scss')

var Root = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    var initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: basscss }} />
          <style dangerouslySetInnerHTML={{ __html: materialcss }} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='p2'>
          <Header {...this.props} />
          <RouteHandler {...this.props} />
          <Footer {...this.props} />
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
    )
  }
})

function safeStringify (obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root

