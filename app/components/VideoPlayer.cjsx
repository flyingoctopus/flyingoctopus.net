React = require 'react'

VideoPlayer = React.createClass
  propTypes:
    title: React.PropTypes.string

  getInitialState:
    muted: @props.initialChanged

  componentWillReceiveProps: (nextProps) ->
    # Load new data when the dataSource property changes.
    if nextProps.dataSource != @props.dataSource
      @loadData nextProps.dataSource

    newState =  not @state.muted
    @setState muted: newState
    @props.callbackParent newState

    video = document.getElementById "video-background"
    video.muted = @state.muted

  preloadNext: ->
    count = 1
    videoPlayer = document.getElementById "ss"
    video = document.getElementById "myVideo"

    run = ->
      video_count++
      video_count = 1 if video_count == 4
      videoPlayer.setAttribute "src","video/video" + video_count + ".mp4"
      video.play()

    return

  nextVideo: ->
    nextVideo

  addToQueue: ->
    return

  render: ->
    <video autoPlay="autoplay" loop id="video-background" muted ended={@loop}>
      <source src={@nextVideo} type="video/mp4" />
      Your browser does not support the video tag. Womp womp.
    </video>

module.exports = VideoPlayer
