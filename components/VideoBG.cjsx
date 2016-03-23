React = require 'react'

VideoBG = React.createClass
  getInitialState: ->
    muted: this.props.initialChanged
  render: ->
    <div className="overflow-container">
      <video autoPlay="autoplay" loop id="video-background" muted>
        <source src="http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/Claire_de_Lune.mp4" type="video/mp4" />
          Your browser does not support the video tag. Womp womp.
      </video>
    </div>

	componentWillReceiveProps: (nextProps) ->
    # Load new data when the dataSource property changes.
    newState = !this.state.muted this.setState muted: newState
    this.props.callbackParent newState
    video = document.getElementById "video-background"
    return


module.exports = VideoBG
