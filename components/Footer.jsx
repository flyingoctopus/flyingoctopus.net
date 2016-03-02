
var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var white = '#000'

var Footer = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <footer className='pb2'>
        <ul className='list-reset'>
          <li className="inline-block mr1">
            <a href='http://www.vvh.io' className='text-decoration-none mdl-button mdl-js-button mdl-button mdl-js-ripple-effect mdl-button--fab'><i className="material-icons md-light">info outline</i></a>
          </li>
        </ul>
      </footer>
    )
  }
})

module.exports = Footer
