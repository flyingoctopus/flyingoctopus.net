React = require 'react'
Router = require 'react-router'
Route = Router.Route
DefaultRoute = Router.DefaultRoute
Root = require './components/Root.cjsx'
Index = require './components/Index.cjsx'
About = require './components/About.cjsx'

Routes =
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
  </Route>

module.exports = Routes
