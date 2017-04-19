import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './Deck.css';

let audioCtx;
let biquadFilter;

class Deck extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    playing: PropTypes.bool,
    volume: PropTypes.number,
    name: PropTypes.string,
    low: PropTypes.number,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
    name: '',
    low: 63,
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

      // Create a Biquad Filter
      biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = 'lowshelf';
      biquadFilter.frequency.value = 500;

      // connect the nodes together
      source.connect(biquadFilter);
      biquadFilter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.volume === nextProps.volume && this.props.low === nextProps.low) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    biquadFilter.gain.value = ((this.props.low * 16) / 127) - 8;
  }

  render() {
    // console.log(`${this.props.name} volume: ${this.props.volume}`);
    // console.log(`${this.props.name} low: ${this.props.low}`);
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
