
var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <main>
        <article>
          <h2>Coming Soon</h2>
        </article>
        <video autoPlay="autoplay" loop id="video-background">
          <source src="http://cdn.flyingoctopus.net.s3.amazonaws.com/bin/video/flyingoctopus.net/Claire_de_Lune.mp4" type="video/mp4" />
          Your browser does not support the video tag. Womp womp.
        </video>
      </main>

    )
  }
})

module.exports = Index

