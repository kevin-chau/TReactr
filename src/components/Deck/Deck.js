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
    mid: PropTypes.number,
    high: PropTypes.number,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
    name: '',
    low: 63,
    mid: 63,
    high: 63,
  };

  componentDidMount() {
    if (this.props.url.includes('soundcloud')) {
      // Create Audio Context
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      // Select audio element
      const audioElementList = document.querySelectorAll('audio');
      let myAudio;
      if (this.props.name === 'DeckC') {
        myAudio = audioElementList[0];
      } else if (this.props.name === 'DeckD') {
        myAudio = audioElementList[1];
      }
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
      biquadFilterLow.frequency.value = 250;
      biquadFilterMid = audioCtx.createBiquadFilter();
      biquadFilterMid.type = 'peaking';
      biquadFilterMid.Q.value = 1.0;
      biquadFilterMid.frequency.value = 1100;
      biquadFilterHigh = audioCtx.createBiquadFilter();
      biquadFilterHigh.type = 'highshelf';
      biquadFilterHigh.frequency.value = 2000;

      // connect the nodes together
      source.connect(biquadFilterLow);
      biquadFilterLow.connect(biquadFilterMid);
      biquadFilterMid.connect(biquadFilterHigh);
      biquadFilterHigh.connect(gainNode);
      gainNode.connect(audioCtx.destination);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    biquadFilterLow.gain.value = ((this.props.low * 20) / 127) - 10;
    biquadFilterMid.gain.value = ((this.props.mid * 20) / 127) - 10;
    biquadFilterHigh.gain.value = ((this.props.high * 20) / 127) - 10;
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
