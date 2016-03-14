var React = require('react')
var Router = require('react-router')
var Logo = require('./Logo.jsx')

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header className='py2'>
        <Logo />
      </header>
    )
  }
})

module.exports = Header

