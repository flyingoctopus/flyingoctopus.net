React = require('react')
Router = require('react-router')
Routes = require('.././Routes.jsx')

if typeof document != 'undefined'
  initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  Router.run Routes, Router.HistoryLocation, (Handler) ->
    React.render React.createElement(Handler, initialProps), document
    return

module.exports = (locals, callback) ->
  Router.run Routes, locals.path, (Handler) ->
    html = React.renderToString(React.createElement(Handler, locals))
    callback null, '<!DOCTYPE html>' + html
    return
  return
