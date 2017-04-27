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
import FxUnit from '../../components/FxUnit';
import Mixer from '../../components/Mixer';
import Deck from '../../components/Deck';
import CrossFader from '../../components/CrossFader';
import SoundcloudDeck from '../../components/SoundcloudDeck';
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
    };
  }

  changeVolumeA(newVolume) {
    this.setState({
      VolumeA: newVolume,
    });
  }

  changeVolumeB(newVolume) {
    this.setState({
      VolumeB: newVolume,
    });
  }

  changeVolumeC(newVolume) {
    this.setState({
      VolumeC: newVolume,
    });
  }

  changeVolumeD(newVolume) {
    this.setState({
      VolumeD: newVolume,
    });
  }

  changeLowD(newLow) {
    this.setState({
      LowD: newLow,
    });
  }

  changeLowC(newLow) {
    this.setState({
      LowC: newLow,
    });
  }

  changeLowB(newLow) {
    this.setState({
      LowB: newLow,
    });
  }

  changeLowA(newLow) {
    this.setState({
      LowA: newLow,
    });
  }

  changeMidD(newMid) {
    this.setState({
      MidD: newMid,
    });
  }

  changeMidC(newMid) {
    this.setState({
      MidC: newMid,
    });
  }

  changeMidB(newMid) {
    this.setState({
      MidB: newMid,
    });
  }

  changeMidA(newMid) {
    this.setState({
      MidA: newMid,
    });
  }

  changeHighD(newHigh) {
    this.setState({
      HighD: newHigh,
    });
  }

  changeHighC(newHigh) {
    this.setState({
      HighC: newHigh,
    });
  }

  changeHighB(newHigh) {
    this.setState({
      HighB: newHigh,
    });
  }

  changeHighA(newHigh) {
    this.setState({
      HighA: newHigh,
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
              <YoutubeDeck
                playing
                name="DeckA"
                url="https://www.youtube.com/watch?v=vbylJ3Ai7-M"
                volume={this.state.VolumeA}
                low={this.state.LowA}
                mid={this.state.MidA}
                high={this.state.HighA}
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
                      mid={this.stateeMidB}
                      changeMid={this.changeMidB.bind(this)}
                      high={this.state.HighB}
                      changeHigh={this.changeHighB.bind(this)}
                    />
                  </div>
                </div> {/* End AB Mixer */}
              </div>
            </div> {/* End Center Column */}
            <div style={{ float: 'left' }}>
              <Deck
                playing
                name="DeckB"
                url="https://www.youtube.com/watch?v=j6sSQq7a_Po?html5=1"
                volume={this.state.VolumeB}
                low={this.state.LowB}
                mid={this.state.MidB}
                high={this.state.HighB}
              />
            </div>
          </div>


          {/* CD */}


          <div style={{ margin: '0 auto', width: '100%', overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <SoundcloudDeck
                playing
                name="DeckC"
                url="https://soundcloud.com/loudpvck/lit"
                volume={this.state.VolumeC}
                low={this.state.LowC}
                mid={this.state.MidC}
                high={this.state.HighC}
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
                    />
                  </div>
                </div> {/* End CD Mixer */}
              </div>
            </div> {/* End Center Column */}
            <div style={{ float: 'left' }}>
              <Deck
                playing
                name="DeckD"
                url="https://soundcloud.com/skrillex/torro-torro-make-a-move-skrillex-remix"
                volume={this.state.VolumeD}
                low={this.state.LowD}
                mid={this.state.MidD}
                high={this.state.HighD}
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
