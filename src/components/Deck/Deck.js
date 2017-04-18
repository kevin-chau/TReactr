import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './Deck.css';

class Deck extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    playing: PropTypes.bool,
    volume: PropTypes.number,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
  };

  componentDidMount() {
    if (this.props.name === "DeckD"){
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const myAudio = document.querySelector('audio');
      console.log(myAudio);

      // Create a MediaElementAudioSourceNode
      // Feed the HTMLMediaElement into it
      var source = audioCtx.createMediaElementSource(myAudio);

      // Create a gain node
      const gainNode = audioCtx.createGain();
      //
      // // Create variables to store mouse pointer Y coordinate
      // // and HEIGHT of screen
      // var CurY;
      // var HEIGHT = window.innerHeight;
      //
      // // Get new mouse pointer coordinates when mouse is moved
      // // then set new gain value
      //
      // document.onmousemove = updatePage;
      //
      // function updatePage(e) {
      //   CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      //
      //   gainNode.gain.value = CurY/HEIGHT;
      // }
      //
      //
      // // connect the AudioBufferSourceNode to the gainNode
      // // and the gainNode to the destination, so we can play the
      // // music and adjust the volume using the mouse cursor
      // source.connect(gainNode);
      // gainNode.connect(audioCtx.destination);
    }
  }

  setVolume = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  render() {
    return (
      <div className={s.container}>
        <ReactPlayer
          url={this.props.url}
          playing={this.props.playing}
          width="380px"
          height="213px"
          soundcloudConfig={{
            showArtwork: true,
            clientId: process.env.SOUNDCLOUD_CLIENT_ID,
          }}
          volume={this.props.volume / 127}
        />
      </div>
    );
  }
}

export default withStyles(s)(Deck);
