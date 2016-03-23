var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.cjsx')
var Index = require('./components/Index.cjsx')
var About = require('./components/About.cjsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
  </Route>
)

module.exports = Routes

