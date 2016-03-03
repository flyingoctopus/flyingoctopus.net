var React = require('react')
var MuteButton = require('./MuteButton.jsx')
var VideoBG = require('./VideoBG.jsx')

var Index = React.createClass({
  getInitialState: function () {
    // too lazy to set to true due to state logic in
    // VideoBG.componentWillReceiveProps
    return { muted: false };
  },
  onButtonChange: function(newState) {
    this.setState({ checked: newState });
  },
  onVideoChange: function(newState) {
    //this.setState({ checked: newState });
  },
  render: function () {
    return (
      <main>
        <article>
          <div id="hero">
            <div id="hero-content">
              <h2 className="subheader">flyingoctopus.net</h2>
            </div>
            <MuteButton id="mute-button" initialClicked={this.state.muted} callbackParent={this.onButtonChange} />
            <VideoBG initialChanged={this.state.muted} callbackParent={this.onVideoChange} />
          </div>
        </article>
      </main>
    )
  }
})

module.exports = Index

