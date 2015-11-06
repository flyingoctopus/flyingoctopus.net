
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('./Header.jsx')

// var css = require("!style!css!sass!./base.css");
var css = require("!css!sass!../css/base.scss");

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
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='p2'>
          <Header {...this.props} />
          <RouteHandler {...this.props} />
          <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
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

