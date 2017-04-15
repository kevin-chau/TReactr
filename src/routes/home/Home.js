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
import s from './Home.css';

/* eslint-disable react/jsx-no-bind */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VolumeA: 63,
      VolumeB: 0.0,
      VolumeC: 0.0,
      VolumeD: 0.0,
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
              <Deck
                name="DeckA"
                playing
                url="https://www.youtube.com/watch?v=h--P8HzYZ74"
                volume={this.state.VolumeA}
                VolumeA={this.state.VolumeA}
                changeVolumeA={this.changeVolumeA.bind(this)}
              />
            </div>
            <div name="centercolumn">
              <div style={{ float: 'left' }}>
                <div name="AB" style={{ height: '367px' }}>
                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerA"
                      volume={this.state.VolumeA}
                      VolumeA={this.state.VolumeA}
                      changeVolumeA={this.changeVolumeA.bind(this)}
                    />
                  </div>

                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerB"
                      side="right"
                      otherside="left"
                      volume={this.state.VolumeB}
                      VolumeB={this.state.VolumeB}
                      changeVolumeB={this.changeVolumeB.bind(this)}
                    />
                  </div>
                </div> {/* End AB Mixer */}
              </div>
            </div> {/* End Center Column */}
            <div style={{ float: 'left' }}>
              <Deck
                name="DeckB"
                playing
                url="https://www.youtube.com/watch?v=j6sSQq7a_Po"
                volume={this.state.VolumeB}
                VolumeB={this.state.VolumeB}
                changeVolumeB={this.changeVolumeB.bind(this)}
              />
            </div>
          </div>


          {/* CD */}


          <div style={{ margin: '0 auto', width: '100%', overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <Deck
                name="DeckC"
                url="https://www.youtube.com/watch?v=WUG2guLUtuo"
                volume={this.state.VolumeC}
                VolumeC={this.state.VolumeC}
                changeVolumeC={this.changeVolumeC.bind(this)}
              />
            </div>
            <div name="centercolumn">
              <div style={{ float: 'left' }}>
                <div name="CD" style={{ height: '367px' }}>
                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerC"
                      volume={this.state.VolumeC}
                      VolumeC={this.state.VolumeC}
                      changeVolumeC={this.changeVolumeC.bind(this)}
                    />
                  </div>

                  <div style={{ display: 'inline-block' }}>
                    <Mixer
                      name="MixerD"
                      side="right"
                      otherside="left"
                      volume={this.state.VolumeD}
                      VolumeD={this.state.VolumeD}
                      changeVolumeD={this.changeVolumeD.bind(this)}
                    />
                  </div>
                </div> {/* End CD Mixer */}
              </div>
            </div> {/* End Center Column */}
            <div style={{ float: 'left' }}>
              <Deck
                name="DeckD"
                url="https://soundcloud.com/in-love-with-a-ghost/we-ve-never-met-but-can-we-have-a-coffee-or-something"
                volume={this.state.VolumeD}
                VolumeD={this.state.VolumeD}
                changeVolumeD={this.changeVolumeD.bind(this)}
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
