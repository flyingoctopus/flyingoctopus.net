
var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <main>
        <article>
          <div id="hero">
            <div id="logo"></div>
						<div id="hero-content">
							<h2 class="subheader">Coming Soon</h2>
						</div>
            <video autoPlay="autoplay" loop id="video-background">
              <source src="http://cdn.flyingoctopus.net.s3.amazonaws.com/bin/video/flyingoctopus.net/Claire_de_Lune.mp4" type="video/mp4" />
              Your browser does not support the video tag. Womp womp.
            </video>
          </div>
        </article>
      </main>

    )
  }
})

module.exports = Index

