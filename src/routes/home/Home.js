/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import Slider from 'rc-slider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FxUnit from '../../components/FxUnit';
import s from './Home.css';

const sliderStyle = { float: 'left', width: 75, height: 400, marginBottom: 100 };

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <link rel="stylesheet" href="stylesheets/rc-slider.css" />

          <div className={s.volume_sliders}>
            <div id="volume_A" style={sliderStyle}>
              <p>Deck A</p>
              <Slider vertical max={127} />
            </div>
            <div id="volume_B" style={sliderStyle}>
              <p>Deck B</p>
              <Slider vertical max={127} />
            </div>
            <div id="volume_C" style={sliderStyle}>
              <p>Deck C</p>
              <Slider vertical max={127} />
            </div>
            <div id="volume_D" style={sliderStyle}>
              <p>Deck D</p>
              <Slider vertical max={127} />
            </div>
          </div>

          <div name="FX Units" style={{ overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <FxUnit id="FX1" />
            </div>
            <div style={{ float: 'right' }}>
              <FxUnit id="FX2" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
