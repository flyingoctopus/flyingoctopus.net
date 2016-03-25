React = require 'react'
Logo = require './Logo.cjsx'

Header = React.createClass
  propTypes:
    title: React.PropTypes.string

  render: ->
    <header className='py2'>
      <Logo />
    </header>

module.exports = Header

