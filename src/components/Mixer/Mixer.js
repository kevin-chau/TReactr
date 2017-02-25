import React from 'react';
import { BiDirectionalKnob } from 'treactr-canvas-knob';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Mixer.css';

class Mixer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Knobs
      high: 63,
      mid: 63,
      low: 63,
      filter: 63,
      gain: 63,
      pan: 63,

      // Buttons
      high_kill: false,
      low_kill: false,
      mid_kill: false,
      filter_kill: false,
      gain_kill: false,
    };
  }

  render() {
    return (
      <div className={s.Mixer_Box}>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.high}
            onChange={(newValue) => {
              this.setState({ high: newValue });
            }}
          />
          <p className={s.knob_label}>HI</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.mid}
            onChange={(newValue) => {
              this.setState({ mid: newValue });
            }}
          />
          <p className={s.knob_label}>MID</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.low}
            onChange={(newValue) => {
              this.setState({ low: newValue });
            }}
          />
          <p className={s.knob_label}>LO</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Mixer);
