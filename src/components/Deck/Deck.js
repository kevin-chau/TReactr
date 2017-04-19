import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './Deck.css';

let audioCtx;
let biquadFilterLow;
let biquadFilterMid;
let biquadFilterHigh;

class Deck extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    playing: PropTypes.bool,
    volume: PropTypes.number,
    name: PropTypes.string,
    low: PropTypes.number,
    high: PropTypes.number,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
    name: '',
    low: 63,
    high: 63,
  };

  componentDidMount() {
    if (this.props.name === 'DeckD') {
      // Create Audio Context
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      // Select audio element
      const myAudio = document.querySelector('audio');

      // set to anonymous for CORS
      myAudio.crossOrigin = 'anonymous';

      // Create a MediaElementAudioSourceNode
      const source = audioCtx.createMediaElementSource(myAudio);

      // Create a gain node
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 1;

      // Create a Biquad Filters
      biquadFilterLow = audioCtx.createBiquadFilter();
      biquadFilterLow.type = 'lowshelf';
      biquadFilterLow.frequency.value = 500;
      biquadFilterHigh = audioCtx.createBiquadFilter();
      biquadFilterHigh.type = 'highshelf';
      biquadFilterHigh.frequency.value = 2000;

      // connect the nodes together
      source.connect(biquadFilterLow);
      biquadFilterLow.connect(biquadFilterHigh);
      biquadFilterHigh.connect(gainNode);
      gainNode.connect(audioCtx.destination);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.volume === nextProps.volume && this.props.low === nextProps.low && this.props.high === nextProps.high) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    biquadFilterLow.gain.value = ((this.props.low * 16) / 127) - 8;
    biquadFilterHigh.gain.value = ((this.props.high * 16) / 127) - 8;
  }

  render() {
    // console.log(`${this.props.name} volume: ${this.props.volume}`);
    // console.log(`${this.props.name} low: ${this.props.low}`);
    // console.log(`${this.props.name} high: ${this.props.high}`);
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
