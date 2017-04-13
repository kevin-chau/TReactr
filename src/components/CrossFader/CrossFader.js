import React from 'react';
// import { BiDirectionalKnob } from 'treactr-canvas-knob';
// import { Kill, FxToggle1, FxToggle2, ToggleMonitorCue } from 'treactr-toggle';
import Slider from 'treactr-slider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CrossFader.css';

class CrossFader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Position
      position: 63,
    };
  }

  render() {
    return (
      <div className={s.CrossFader_container} >
        {/* EQ/Volume Box */}
        <div className={s.CrossFader_Box} >
          <div className={s.slider}>
            <Slider
              vertical
              value={this.state.position}
              max={127}
              onChange={(newValue) => {
                this.setState({ position: newValue });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CrossFader);
