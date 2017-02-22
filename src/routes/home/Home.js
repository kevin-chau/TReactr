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
import Knob from 'react-canvas-knob';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const sliderStyle = { float: 'left', width: 75, height: 400, marginBottom: 100 };
const knobStyle = { float: 'left', width: 50 };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { FX1_DryWet: 63, FX1_Knob1: 63, FX1_Knob2: 63, FX1_Knob3: 63 };
  }
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

          <div className={s.FX1_Knobs}>
            <div style={knobStyle}>
              <Knob
                value={this.state.FX1_DryWet}
                onChange={(newValue) => {
                  this.setState({ FX1_DryWet: newValue });
                }}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                displayInput={false}
              />
              <p>D/W</p>
            </div>
            <div style={knobStyle}>
              <Knob
                value={this.state.FX1_Knob1}
                onChange={(newValue) => {
                  this.setState({ FX1_Knob1: newValue });
                }}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                displayInput={false}
              />
              <p>Knob 1</p>
            </div>
            <div style={knobStyle}>
              <Knob
                value={this.state.FX1_Knob2}
                onChange={(newValue) => {
                  this.setState({ FX1_Knob2: newValue });
                }}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                displayInput={false}
              />
              <p>Knob 2</p>
            </div>
            <div style={knobStyle}>
              <Knob
                value={this.state.FX1_Knob3}
                onChange={(newValue) => {
                  this.setState({ FX1_Knob3: newValue });
                }}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                displayInput={false}
              />
              <p>Knob 3</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
