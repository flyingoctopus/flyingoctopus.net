var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var MuteButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getInitialState: function () {
    return {muted: true};
  },
  handleClick: function(event) {
    this.setState({muted: !this.state.muted});
  },

  render: function () {
    var mute_text = this.state.muted ? 'mute' : 'unmute';
    return (
      <button id="toggle-mute" onClick='{this.handleClick}'>
        <i className='matarial-icons md-light'>{mute_text}</i>
      </button>
    )
  }
})

module.exports = MuteButton
