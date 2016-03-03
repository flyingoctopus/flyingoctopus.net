var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var MuteButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getInitialState: function () {
    return {muted: this.props.initialMuted};
  },
  handleClick: function(event) {
    var newState = !this.state.muted;
    this.setState({muted: newState});
    this.props.callbackParent(newState);
  },
  render: function () {
    var mute_text = this.state.muted ? 'volume off' : 'volume up';

    return (
      <div id="mute-button">
        <button id="mute-toggle-button" className="text-decoration-none mdl-button mdl-js-button mdl-button mdl-js-ripple-effect mdl-button--fab" onClick={this.handleClick}>
          <i className='matarial-icons md-light'>{mute_text}</i>
        </button>
      </div>
    )
  }
})

module.exports = MuteButton
