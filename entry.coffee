React = require 'react'
ReactDOM = require 'react-dom'
ReactDOMServer = require 'react-dom/server'
Router = require 'react-router'
Routes = require './Routes.cjsx'

if typeof document != 'undefined'
  initialProps = JSON.parse document.getElementById('initial-props').innerHTML
  Router.run Routes, Router.HistoryLocation, (Handler) ->
    ReactDOM.render(React.createElement(Handler, initialProps, document))
    return

module.exports = (locals, callback) ->
  Router.run Routes, locals.path, (Handler) ->
    html = ReactDOM.renderToString React.createElement(Handler, locals)
    callback null, '<!DOCTYPE html>' + html
    return
  return
