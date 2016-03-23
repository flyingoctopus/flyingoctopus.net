React = require 'react'

MuteButton = React.createClass
  propTypes:
    title: React.PropTypes.string

  getInitialState: ->
    muted: @props.initialMuted

  handleClick: (event) ->
    newState = !@state.muted
    @setState muted: newState
    @props.callbackParent newState

  render: ->
    mute_text = if @state.muted then 'volume_up' else 'volume_off'

    <div className="mute-button">
      <a className='text-decoration-none mdl-button mdl-js-button mdl-button mdl-js-ripple-effect mdl-button--fab mute-toggle-button' onClick={@handleClick}><i  className="material-icons md-light">{mute_text}</i></a>
    </div>

module.exports = MuteButton
