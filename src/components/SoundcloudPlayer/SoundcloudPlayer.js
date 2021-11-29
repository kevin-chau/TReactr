import React from 'react';
import ReactPlayer from 'react-player';
// import Wavesurfer from 'react-wavesurfer';
// import WaveSurfer from 'wavesurfer.js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import Player from '../Player';
import s from './SoundcloudPlayer.css';

let audioCtx;

function scale(OldValue, OldMin, OldMax, NewMin, NewMax) {
  const NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;
  return NewValue;
}

class SoundcloudPlayer extends Player {
  static propTypes = {
    url: PropTypes.string,
    playing: PropTypes.bool,
    volume: PropTypes.number,
    name: PropTypes.string,
    low: PropTypes.number,
    mid: PropTypes.number,
    high: PropTypes.number,
    lowpass: PropTypes.number,
    highpass: PropTypes.number,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
    name: '',
    low: 63,
    mid: 63,
    high: 63,
    lowpass: 63,
    highpass: 63,
  };

  componentDidMount() {
    // Create Audio Context
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Select audio element
    const audioElementList = document.querySelectorAll('audio');
    let myAudio;
    if (this.props.name === 'PlayerA') {
      myAudio = audioElementList[0];
    } else if (this.props.name === 'PlayerB') {
      myAudio = audioElementList[1];
    } else if (this.props.name === 'PlayerC') {
      myAudio = audioElementList[2];
    } else if (this.props.name === 'PlayerD') {
      myAudio = audioElementList[3];
    }
    // set to anonymous for CORS
    myAudio.crossOrigin = 'anonymous';

    // Create a MediaElementAudioSourceNode
    const source = audioCtx.createMediaElementSource(myAudio);

    // Create a gain node
    this.gainNode = audioCtx.createGain();
    this.gainNode.gain.value = 1;

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
    this.biquadFilterLowpass = audioCtx.createBiquadFilter();
    this.biquadFilterLowpass.type = 'lowpass';
    this.biquadFilterLowpass.Q.value = 0.71;
    this.biquadFilterLowpass.frequency.value = 22000;
    this.biquadFilterHighpass = audioCtx.createBiquadFilter();
    this.biquadFilterHighpass.type = 'highpass';
    this.biquadFilterHighpass.Q.value = 0.71;
    this.biquadFilterHighpass.frequency.value = 0;


    // connect the nodes together
    source.connect(this.biquadFilterLow);
    this.biquadFilterLow.connect(this.biquadFilterMid);
    this.biquadFilterMid.connect(this.biquadFilterHigh);
    this.biquadFilterHigh.connect(this.biquadFilterLowpass);
    this.biquadFilterLowpass.connect(this.biquadFilterHighpass);
    this.biquadFilterHighpass.connect(this.gainNode);
    this.gainNode.connect(audioCtx.destination);

    // Wavesurfer
    // const wavesurfer = WaveSurfer.create({
    //   container: '#waveform',
    // });
    //
    // wavesurfer.load('https://api.soundcloud.com/tracks/216100519/stream?client_id=064ede04fcc297ca28418c8164e47a15');

    // SC.initialize({
    //   client_id: process.env.SOUNDCLOUD_CLIENT_ID
    // });
    //
    // var track_url = 'http://soundcloud.com/forss/flickermood';
    // SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    //   console.log('oEmbed response: ', oEmbed);
    // });
  }

  shouldComponentUpdate(nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.biquadFilterLow.gain.value = ((this.props.low * 20) / 127) - 10;
    this.biquadFilterMid.gain.value = ((this.props.mid * 20) / 127) - 10;
    this.biquadFilterHigh.gain.value = ((this.props.high * 20) / 127) - 10;
    this.biquadFilterHighpass.frequency.value = this.props.highpass <= 63 ? 0 :
                                  scale(this.props.highpass, 63, 127, 0, 22000);
    this.biquadFilterLowpass.frequency.value = this.props.lowpass >= 63 ? 22000
                                  : scale(this.props.lowpass, 0, 63, 0, 22000);
  }

  biquadFilterLow;
  biquadFilterMid;
  biquadFilterHigh;
  biquadFilterLowpass;
  biquadFilterHighpass;
  gainNode;

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
        <div id="waveform" />
      </div>
    );
  }
}

export default withStyles(s)(SoundcloudPlayer);
