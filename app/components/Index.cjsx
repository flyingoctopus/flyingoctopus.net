React = require 'react'
MuteButton = require './MuteButton.cjsx'
VideoBG = require './VideoBG.cjsx'

Index = React.createClass
  getInitialState: ->
    muted: false

  onButtonChange: (newState) ->
    @setState checked: newState
    return

  onVideoChange: (newState) ->
   # @setState checked: newState
   return

  render: ->
    <main>
      <article>
        <div id="hero">
          <div id="hero-content">
            <h2 className="subheader">flyingoctopus.net</h2>
          </div>
          <MuteButton id="mute-button" initialClicked={@state.muted} callbackParent={@onButtonChange} />
          <VideoBG initialChanged={@state.muted} callbackParent={@onVideoChange} />
        </div>
      </article>
    </main>

module.exports = Index
