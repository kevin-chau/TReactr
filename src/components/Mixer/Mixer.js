import React from 'react';
import { BiDirectionalKnob } from 'treactr-canvas-knob';
import { Kill } from 'treactr-toggle';
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
        </div>
        <div className={s.knob_label}>
          <div style={{ float: 'right' }}>
            <Kill
              defaultChecked={this.state.high_kill}
              onChange={(newValue) => {
                this.setState({ high_kill: newValue.target.checked });
              }}
            />
          </div>
          <p>HI</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.mid}
            onChange={(newValue) => {
              this.setState({ mid: newValue });
            }}
          />
        </div>
        <div className={s.knob_label}>
          <div style={{ float: 'right' }}>
            <Kill
              defaultChecked={this.state.mid_kill}
              onChange={(newValue) => {
                this.setState({ mid_kill: newValue.target.checked });
              }}
            />
          </div>
          <p>MID</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.low}
            onChange={(newValue) => {
              this.setState({ low: newValue });
            }}
          />
        </div>
        <div className={s.knob_label}>
          <div style={{ float: 'right' }}>
            <Kill
              defaultChecked={this.state.low_kill}
              onChange={(newValue) => {
                this.setState({ low_kill: newValue.target.checked });
              }}
            />
          </div>
          <p>LO</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.filter}
            onChange={(newValue) => {
              this.setState({ filter: newValue });
            }}
          />
        </div>
        <div className={s.knob_label}>
          <div style={{ float: 'right' }}>
            <Kill
              defaultChecked={this.state.filter_kill}
              onChange={(newValue) => {
                this.setState({ filter_kill: newValue.target.checked });
              }}
            />
          </div>
          <p>FILTER</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.gain}
            onChange={(newValue) => {
              this.setState({ gain: newValue });
            }}
          />
        </div>
        <div className={s.knob_label}>
          <div style={{ float: 'right' }}>
            <Kill
              defaultChecked={this.state.gain_kill}
              onChange={(newValue) => {
                this.setState({ gain_kill: newValue.target.checked });
              }}
            />
          </div>
          <p>GAIN</p>
        </div>
        <div className={s.knob}>
          <BiDirectionalKnob
            value={this.state.pan}
            onChange={(newValue) => {
              this.setState({ pan: newValue });
            }}
          />
        </div>
        <p>PAN</p>
      </div>
    );
  }
}

export default withStyles(s)(Mixer);
