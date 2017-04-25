import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import Deck from '../Deck';
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
      this.biquadFilterLow = audioCtx.createBiquadFilter();
      this.biquadFilterLow.type = 'lowshelf';
      this.biquadFilterLow.frequency.value = 250;
      this.biquadFilterMid = audioCtx.createBiquadFilter();
      this.biquadFilterMid.type = 'peaking';
      this.biquadFilterMid.Q.value = 1.0;
      this.biquadFilterMid.frequency.value = 1100;
      this.biquadFilterHigh = audioCtx.createBiquadFilter();
      this.biquadFilterHigh.type = 'highshelf';
      this.biquadFilterHigh.frequency.value = 2000;

      // connect the nodes together
      source.connect(this.biquadFilterLow);
      this.biquadFilterLow.connect(this.biquadFilterMid);
      this.biquadFilterMid.connect(this.biquadFilterHigh);
      this.biquadFilterHigh.connect(gainNode);
      gainNode.connect(audioCtx.destination);
    }

    if (this.props.url.includes('youtube')) {
      // Create Audio Context
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      // Select audio element
      let iframes = document.getElementsByTagName('iframe');
      console.log(iframes);

      let videos = document.getElementsByTagName('video');
      console.log(videos);

      var getAudio = function (req, res) {
        var requestUrl = this.props.url;
        try {
          youtubeStream(requestUrl).pipe(res)
        } catch (exception) {
          res.status(500).send(exception)
        }
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    if (this.props.url.includes('soundcloud')) {
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
