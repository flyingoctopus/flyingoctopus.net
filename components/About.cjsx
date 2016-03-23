React = require 'react'
markdown = require './../assets/resume.md'
About = React.createClass
  rawMarkup: ->
    __html:
      markdown
  render: ->
    <main>
      <article id="resume">
        <h2 className="subheader">About</h2>
        <div dangerouslySetInnerHTML={ @rawMarkup() } />
      </article>
    </main>

module.exports = About
