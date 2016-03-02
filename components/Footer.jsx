
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
        <ul className='list-reset'>
          <li className="inline-block mr1">
            <Link to='/' className='button button-transparent text-decoration-none'>Index</Link>
          </li>
          <li className="inline-block mr1">
            <Link to='/about' className='button button-transparent text-decoration-none'>About</Link>
          </li>
        </ul>
      </footer>
    )
  }
})

module.exports = Footer

