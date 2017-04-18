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
      // set up the different audio nodes we will use for the app
      // var analyser = audioCtx.createAnalyser();
      // var distortion = audioCtx.createWaveShaper();
      // var convolver = audioCtx.createConvolver();
      const biquadFilter = audioCtx.createBiquadFilter();

      // connect the nodes together
      source.connect(biquadFilter);
      // analyser.connect(distortion);
      // distortion.connect(biquadFilter);
      biquadFilter.connect(gainNode);
      // convolver.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      // Manipulate the Biquad filter
      biquadFilter.type = 'lowpass';
      biquadFilter.frequency.value = 2 * 21000 / 127;
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
