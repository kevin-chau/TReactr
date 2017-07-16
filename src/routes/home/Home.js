/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import WebMidi from 'webmidi';
import FxUnit from '../../components/FxUnit';
import Mixer from '../../components/Mixer';
import Deck from '../../components/Deck';
import CrossFader from '../../components/CrossFader';
import SoundcloudPlayer from '../../components/SoundcloudPlayer';
import YoutubeDeck from '../../components/YoutubeDeck';
import s from './Home.css';

/* eslint-disable react/jsx-no-bind */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VolumeA: 0.0,
      VolumeB: 0.0,
      VolumeC: 0.0,
      VolumeD: 0.0,
      LowD: 63,
      LowC: 63,
      LowB: 63,
      LowA: 63,
      MidD: 63,
      MidC: 63,
      MidB: 63,
      MidA: 63,
      HighD: 63,
      HighC: 63,
      HighB: 63,
      HighA: 63,
      LowpassA: 63,
      LowpassB: 63,
      LowpassC: 63,
      LowpassD: 63,
      HighpassA: 63,
      HighpassB: 63,
      HighpassC: 63,
      HighpassD: 63,
    };
  }

  changeVolumeA = (newVolume) => { this.setState({ VolumeA: newVolume }); };
  changeVolumeB = (newVolume) => { this.setState({ VolumeB: newVolume }); };
  changeVolumeC = (newVolume) => { this.setState({ VolumeC: newVolume }); };
  changeVolumeD = (newVolume) => { this.setState({ VolumeD: newVolume }); };

  changeLowA = (newLow) => { this.setState({ LowA: newLow }); };
  changeLowB = (newLow) => { this.setState({ LowB: newLow }); };
  changeLowC = (newLow) => { this.setState({ LowC: newLow }); };
  changeLowD = (newLow) => { this.setState({ LowD: newLow }); };

  changeMidA = (newMid) => { this.setState({ MidA: newMid }); };
  changeMidB = (newMid) => { this.setState({ MidB: newMid }); };
  changeMidC = (newMid) => { this.setState({ MidC: newMid }); };
  changeMidD = (newMid) => { this.setState({ MidD: newMid }); };

  changeHighA = (newHigh) => { this.setState({ HighA: newHigh }); };
  changeHighB = (newHigh) => { this.setState({ HighB: newHigh }); };
  changeHighC = (newHigh) => { this.setState({ HighC: newHigh }); };
  changeHighD = (newHigh) => { this.setState({ HighD: newHigh }); };

  changeLowpassA = (newLowpass) => { this.setState({ LowpassA: newLowpass }); };
  changeLowpassB = (newLowpass) => { this.setState({ LowpassB: newLowpass }); };
  changeLowpassC = (newLowpass) => { this.setState({ LowpassC: newLowpass }); };
  changeLowpassD = (newLowpass) => { this.setState({ LowpassD: newLowpass }); };

  changeHighpassA = (newHighpass) => { this.setState({ HighpassA: newHighpass }); };
  changeHighpassB = (newHighpass) => { this.setState({ HighpassB: newHighpass }); };
  changeHighpassC = (newHighpass) => { this.setState({ HighpassC: newHighpass }); };
  changeHighpassD = (newHighpass) => { this.setState({ HighpassD: newHighpass }); };

  componentDidMount() {
    const home = this;
    WebMidi.enable(function (err) {
      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        console.log("WebMidi enabled!");
        console.log(WebMidi.inputs);
        console.log(WebMidi.outputs);

        var input = WebMidi.getInputByName('MPKmini2');

        input.addListener('pitchbend', 'all', function(e) {
          console.log('Pitch value: ' + e.value);
        });

        // Listen to control change message on all channels
        input.addListener('controlchange', 'all',
          (e) => {
            if (e.controller.number === 1){
              home.changeHighC(e.value);
            }
            if (e.controller.number === 2){
              console.log("CC2", e);
            }
            if (e.controller.number === 3){
              console.log("CC3", e);
            }
            if (e.controller.number === 4){
              console.log("CC4", e);
            }
            if (e.controller.number === 5){
              console.log("CC5", e);
            }
            if (e.controller.number === 6){
              console.log("CC6", e);
            }
            if (e.controller.number === 7){
              console.log("CC7", e);
            }
            if (e.controller.number === 8){
              console.log("CC8", e);
            }
          }
        );
      }
    });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <div className={s.FX_container} style={{ overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <FxUnit id="FX1" />
            </div>

            <div className={s.FX_Filler} style={{ float: 'left' }} />

            <div style={{ float: 'right' }}>
              <FxUnit id="FX2" />
            </div>

            <div className={s.FX_Filler} style={{ float: 'right' }} />
          </div>


          {/* AB */}


          <div style={{ margin: '0 auto', width: '100%', overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <SoundcloudPlayer
                playing
                name="DeckA"
                url="https://soundcloud.com/loudpvck/pace"
                volume={this.state.VolumeA}
                low={this.state.LowA}
                mid={this.state.MidA}
                high={this.state.HighA}
                lowpass={this.state.LowpassA}
                highpass={this.state.HighpassA}
              />
            </div>
            <div name="centercolumn">
              <div style={{ float: 'left' }}>
                <div name="AB" style={{ height: '367px' }}>
                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerA"
                      volume={this.state.VolumeA}
                      changeVolume={this.changeVolumeA.bind(this)}
                      mid={this.state.MidA}
                      changeMid={this.changeMidA.bind(this)}
                      low={this.state.LowA}
                      changeLow={this.changeLowA.bind(this)}
                      high={this.state.HighA}
                      changeHigh={this.changeHighA.bind(this)}
                      lowpass={this.state.LowpassA}
                      changeLowpass={this.changeLowpassA.bind(this)}
                      highpass={this.state.HighpassA}
                      changeHighpass={this.changeHighpassA.bind(this)}
                    />
                  </div>

                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerB"
                      side="right"
                      otherside="left"
                      volume={this.state.VolumeB}
                      changeVolume={this.changeVolumeB.bind(this)}
                      low={this.state.LowB}
                      changeLow={this.changeLowB.bind(this)}
                      mid={this.state.MidB}
                      changeMid={this.changeMidB.bind(this)}
                      high={this.state.HighB}
                      changeHigh={this.changeHighB.bind(this)}
                      lowpass={this.state.LowpassB}
                      changeLowpass={this.changeLowpassB.bind(this)}
                      highpass={this.state.HighpassB}
                      changeHighpass={this.changeHighpassB.bind(this)}
                    />
                  </div>
                </div> {/* End AB Mixer */}
              </div>
            </div> {/* End Center Column */}
            <div style={{ float: 'left' }}>
              <SoundcloudPlayer
                playing
                name="DeckB"
                url="https://soundcloud.com/bitbirdofficial/droeloe-x-san-holo-lines-of-the-broken"
                volume={this.state.VolumeB}
                low={this.state.LowB}
                mid={this.state.MidB}
                high={this.state.HighB}
                lowpass={this.state.LowpassB}
                highpass={this.state.HighpassB}
              />
            </div>
          </div>


          {/* CD */}


          <div style={{ margin: '0 auto', width: '100%', overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <SoundcloudPlayer
                playing
                name="DeckC"
                url="https://soundcloud.com/bitbirdofficial/thefuture"
                volume={this.state.VolumeC}
                low={this.state.LowC}
                mid={this.state.MidC}
                high={this.state.HighC}
                lowpass={this.state.LowpassC}
                highpass={this.state.HighpassC}
              />
            </div>
            <div name="centercolumn">
              <div style={{ float: 'left' }}>
                <div name="CD" style={{ height: '367px' }}>
                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerC"
                      volume={this.state.VolumeC}
                      changeVolume={this.changeVolumeC.bind(this)}
                      low={this.state.LowC}
                      changeLow={this.changeLowC.bind(this)}
                      mid={this.state.MidC}
                      changeMid={this.changeMidC.bind(this)}
                      high={this.state.HighC}
                      changeHigh={this.changeHighC.bind(this)}
                      lowpass={this.state.LowpassC}
                      changeLowpass={this.changeLowpassC.bind(this)}
                      highpass={this.state.HighpassC}
                      changeHighpass={this.changeHighpassC.bind(this)}
                    />
                  </div>

                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerD"
                      side="right"
                      otherside="left"
                      volume={this.state.VolumeD}
                      changeVolume={this.changeVolumeD.bind(this)}
                      low={this.state.LowD}
                      changeLow={this.changeLowD.bind(this)}
                      mid={this.state.MidD}
                      changeMid={this.changeMidD.bind(this)}
                      high={this.state.HighD}
                      changeHigh={this.changeHighD.bind(this)}
                      lowpass={this.state.LowpassD}
                      changeLowpass={this.changeLowpassD.bind(this)}
                      highpass={this.state.HighpassD}
                      changeHighpass={this.changeHighpassD.bind(this)}
                    />
                  </div>
                </div> {/* End CD Mixer */}
              </div>
            </div> {/* End Center Column */}
            <div style={{ float: 'left' }}>
              <SoundcloudPlayer
                playing
                name="DeckD"
                url="https://soundcloud.com/skrillex/torro-torro-make-a-move-skrillex-remix"
                volume={this.state.VolumeD}
                low={this.state.LowD}
                mid={this.state.MidD}
                high={this.state.HighD}
                lowpass={this.state.LowpassD}
                highpass={this.state.HighpassD}
              />
            </div>
          </div>

          <div style={{ display: 'inline-block' }}>
            <CrossFader />
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
