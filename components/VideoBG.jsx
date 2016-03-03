var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var VideoBG = React.createClass({
  getInitialState: function () {
    console.log('vincent [init with = ' + this.props.initialChanaged);
    return {muted: this.props.initialChanged};
  },
	componentWillReceiveProps: function(nextProps) {
    // Load new data when the dataSource property changes.
    if (nextProps.dataSource != this.props.dataSource) {
      this.loadData(nextProps.dataSource);
    }
    var newState = !this.state.muted;
    this.setState({muted: newState});
    this.props.callbackParent(newState);
    console.log("vincent updated = " + this.state.muted);
    var video = document.getElementById("video-background");
    video.muted = this.state.muted;
  },
  render: function () {
    var mute_text = this.state.muted ? 'volume off' : 'volume up';

    return (
      <video autoPlay="autoplay" loop id="video-background" muted>
        <source src="http://cdn.flyingoctopus.net/bin/video/flyingoctopus.net/Claire_de_Lune.mp4" type="video/mp4" />
        Your browser does not support the video tag. Womp womp.
      </video>
    )
  }
})

module.exports = VideoBG
