React = require 'react'

VideoBG = React.createClass
  getInitialState: ->
    muted: @props.initialChanged

  componentWillReceiveProps: (nextProps) ->
    if nextProps.dataSource != @props.dataSource
      @loadData nextProps.dataSource
    newState = not @state.muted
    @setState muted: newState
    @props.callbackParent newState

    video = document.getElementById 'video-background'
    video.muted = @state.muted

  render: ->
    <div className="overflow-container">
      <video autoPlay="autoplay" loop id="video-background" muted>
        <source src="http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/Claire_de_Lune.mp4" type="video/mp4" />
          Your browser does not support the video tag. Womp womp.
      </video>
    </div>

module.exports = VideoBG
