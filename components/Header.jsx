var React = require('react')
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

