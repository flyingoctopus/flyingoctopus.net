React = require 'react'
MuteButton = require './MuteButton.jsx'
VideoBG = require './VideoBG.jsx'

Index = React.createClass
  getInitialState: ->
    muted: false

  onButtonChange: ->
    this.setState checked: newState

  onVideoChange: (newState) ->
   this.setState checked: newState

  render: ->
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

module.exports = Index
