
var React = require('react')
var Router = require('react-router')
var Logo = require('./Logo.jsx')
var Link = Router.Link

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header className='py2'>
        <Logo />
        <Link to='/' className='mxn2 title'><h1 className='mt2'>Hi</h1></Link>
      </header>
    )
  }
})

module.exports = Header

