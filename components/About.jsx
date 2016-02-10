
var React = require('react')
var markdown = require("./../assets/resume.md")

var About = React.createClass({
  rawMarkup(){
    return { __html: markdown }
  },
  render: function () {
    return (
      <main>
        <article id="resume">
          <h2 class="subheader">About</h2>
          <div dangerouslySetInnerHTML={ this.rawMarkup() } />
        </article>
      </main>
    )
  }
})

module.exports = About
