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
    var mute_text = this.state.muted ? 'volume_up' : 'volume_off';

    return (
      <div className="mute-button">
        <a className='text-decoration-none mdl-button mdl-js-button mdl-button mdl-js-ripple-effect mdl-button--fab mute-toggle-button' onClick={this.handleClick}><i className="material-icons md-light">{mute_text}</i></a>
      </div>
    )
  }
})

module.exports = MuteButton
