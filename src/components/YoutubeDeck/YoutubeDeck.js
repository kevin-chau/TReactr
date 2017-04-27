import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import Deck from '../Deck';
import YoutubePlayer from '../YoutubePlayer';
import s from './YoutubeDeck.css';

let audioCtx;

class YoutubeDeck extends Deck {
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
    // This if statement isn't necessary since we know the source is Youtube
    if (this.props.url.includes('youtube')) {
      // Create Audio Context
      if (!audioCtx) {
        audioCtx = new (window.AudioContext)();
      }

      // Select audio element
      const videoElementList = document.querySelectorAll('video');
      let myVideo;
      if (this.props.name === 'DeckA') {
        myVideo = videoElementList[0];
      } else if (this.props.name === 'DeckB') {
        myVideo = videoElementList[1];
      }
      // set to anonymous for CORS
      myVideo.crossOrigin = 'use-credentials';
      // console.log(myVideo);
      //
      // Create a MediaElementAudioSourceNode
      const videosource = audioCtx.createMediaElementSource(myVideo);

      // Create a gain node
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 1;

      // Create a Biquad Filters
      // this.biquadFilterLow = audioCtx.createBiquadFilter();
      // this.biquadFilterLow.type = 'lowshelf';
      // this.biquadFilterLow.frequency.value = 250;
      // this.biquadFilterMid = audioCtx.createBiquadFilter();
      // this.biquadFilterMid.type = 'peaking';
      // this.biquadFilterMid.Q.value = 1.0;
      // this.biquadFilterMid.frequency.value = 1100;
      // this.biquadFilterHigh = audioCtx.createBiquadFilter();
      // this.biquadFilterHigh.type = 'highshelf';
      // this.biquadFilterHigh.frequency.value = 2000;

      // connect the nodes together
      videosource.connect(gainNode);
      // this.biquadFilterLow.connect(this.biquadFilterMid);
      // this.biquadFilterMid.connect(this.biquadFilterHigh);
      // this.biquadFilterHigh.connect(gainNode);
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
    if (this.props.url.includes('youtube')) {
      this.biquadFilterLow.gain.value = ((this.props.low * 20) / 127) - 10;
      this.biquadFilterMid.gain.value = ((this.props.mid * 20) / 127) - 10;
      this.biquadFilterHigh.gain.value = ((this.props.high * 20) / 127) - 10;
    }
  }

  biquadFilterLow;
  biquadFilterMid;
  biquadFilterHigh;

  render() {
    return (
      <div className={s.container} style={{ height: '213px', width: '380px' }}>
        <YoutubePlayer
          url={this.props.url}
        />
      </div>
    );
  }
}

export default withStyles(s)(YoutubeDeck);
