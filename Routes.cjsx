React = require 'react'
Router = require 'react-router'
Route = Router.Route
DefaultRoute = Router.DefaultRoute
Root = require './app/components/Root.cjsx'
Index = require './app/components/Index.cjsx'
About = require './app/components/About.cjsx'

Routes =
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
  </Route>

module.exports = Routes
