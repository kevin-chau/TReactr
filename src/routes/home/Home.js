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

const style = { float: 'left', width: 75, height: 400, marginBottom: 100 };
const parentStyle = { overflow: 'hidden' };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hi_value: 63, mid_value: 63, lo_value: 63 };
  }
  handleHIChange = (newValue) => {
    this.setState({ hi_value: newValue });
  };
  handleMIDChange = (newValue) => {
    this.setState({ mid_value: newValue });
  };
  handleLOChange = (newValue) => {
    this.setState({ lo_value: newValue });
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <link rel="stylesheet" href="stylesheets/rc-slider.css" />
          <div className="Title">
            <h1>TReactr</h1>
            <p> TReactr is a javascript digital DJ mixing application built for
            the modern web, based on the legendary UI from Native Instruments&#39; Traktor. </p>
          </div>
          <div className="sliders" style={parentStyle}>
            <div style={style}>
              <p>Deck A</p>
              <Slider vertical max={127} />
            </div>
            <div style={style}>
              <p>Deck B</p>
              <Slider vertical max={127} />
            </div>
            <div style={style}>
              <p>Deck C</p>
              <Slider vertical max={127} />
            </div>
            <div style={style}>
              <p>Deck D</p>
              <Slider vertical max={127} />
            </div>
          </div>
          <div className="knobs">
            <div>
              <p>HI</p>
              <Knob
                value={this.state.hi_value}
                onChange={this.handleHIChange}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                disableTextInput
              />
            </div>
            <div>
              <p>MID</p>
              <Knob
                value={this.state.mid_value}
                onChange={this.handleMIDChange}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                disableTextInput
              />
            </div>
            <div>
              <p>LO</p>
              <Knob
                value={this.state.lo_value}
                onChange={this.handleLOChange}
                angleOffset={-150}
                angleArc={300}
                max={127}
                thickness={0.25}
                width={36}
                disableTextInput
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
