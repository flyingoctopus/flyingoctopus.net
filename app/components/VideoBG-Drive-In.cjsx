React = require 'react'
ReactDriveIn = require 'react-drive-in'

@PLAYLIST = [
  'http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/Claire_de_Lune.mp4'
,
  'http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/eots2013.01.web.mp4'
]

@onPlaying = (itemNum) ->
  return

@onPause = ->
  return

VideoBGDriveIn = React.createClass
  getInitialState: ->
    muted: @props.initialChanged

  componentWillReceiveProps: (nextProps) ->
    if nextProps.dataSource != @props.dataSource
      @loadData nextProps.dataSource
    newState = not @state.muted
    @setState muted: newState
    @props.callbackParent newState

    video = document.getElementsByClassName('drive-in-media')[0].children[0]
    video.muted = if (@state.muted == 'muted') then true else false

  render: ->
    <div className='overflow-container'>
      <ReactDriveIn
        id='video-background'
        showPlaylist=['http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/eots2013.01.web.mp4','http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/Claire_de_Lune.mp4']
        onPlaying={@onPlaying}
        onPause={@onPause}
        loop
      />
    </div>
module.exports = VideoBGDriveIn
