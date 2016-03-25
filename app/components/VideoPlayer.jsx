var React = require('react')

var VideoPlayer = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
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
  preloadNext: function () {
		count = 1;
		videoPlayer = document.getElementById("ss");
		video=document.getElementById("myVideo");

		function run() {
			video_count++;
			if (video_count == 4) video_count = 1;
			videoPlayer.setAttribute("src","video/video" + video_count + ".mp4");
			video.play();
		 }
  },
  nextVideo: function () {
    return nextVideo;
  },
  addToQueue: function () {
  },
  render: function () {
    return (
      <video autoPlay="autoplay" loop id="video-background" muted ended={this.loop}>
        <source src={this.nextVideo} type="video/mp4" />
        Your browser does not support the video tag. Womp womp.
      </video>
    )
  }
})

module.exports = VideoPlayer
