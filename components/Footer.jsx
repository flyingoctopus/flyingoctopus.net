
var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Footer = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <footer className='pb2'>
        <div className='mxb2 nav '>
          <Link to='/' className='button button-transparent'>Index</Link>
          <Link to='/about' className='button button-transparent'>About</Link>
        </div>
      </footer>
    )
  }
})

module.exports = Footer

