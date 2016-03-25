var React = require('react')
var ReactDOM = require('react-dom')
var ReactDOMServer = require('react-dom/server')
var Router = require('react-router')
var Routes = require('./Routes.cjsx')

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    ReactDOM.render(React.createElement(Handler, initialProps), document)
  })
}

module.exports = function render (locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    console.log('help ' + locals)
    var html = ReactDOMServer.renderToString(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}
