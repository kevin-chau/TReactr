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
    name: PropTypes.string,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
    name: '',
  };

  componentDidMount() {
    if (this.props.name === 'DeckD') {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const myAudio = document.querySelector('audio');

      // set to anonymous for CORS
      myAudio.crossOrigin = 'anonymous';

      // Create a MediaElementAudioSourceNode
      // Feed the HTMLMediaElement into it
      const source = audioCtx.createMediaElementSource(myAudio);

      // Create a gain node
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 1;

      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      source.connect(gainNode);
      gainNode.connect(audioCtx.destination);
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
