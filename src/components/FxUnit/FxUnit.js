import React from 'react';
import { Knob } from 'treactr-canvas-knob';
import Toggle from 'treactr-toggle';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FxUnit.css';

class FxUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DryWet: 63,
      Knob1: 63,
      Knob2: 63,
      Knob3: 63,
      onOff: false,
      Toggle1: false,
      Toggle2: false,
      Toggle3: false,
    };
  }

  render() {
    return (
      <div className={s.FX_Unit_Box}>

        <div className={s.knob}>
          <Knob
            value={this.state.DryWet}
            onChange={(newValue) => {
              this.setState({ DryWet: newValue });
            }}
          />
          <p className={s.knob_label}>D/W</p>
          <Toggle
            onChange={() => {
              this.setState({ onOff: !this.state.onOff });
            }}
          />
        </div>

        <div className={s.knob}>
          <Knob
            value={this.state.Knob1}
            onChange={(newValue) => {
              this.setState({ Knob1: newValue });
            }}
          />
          <p className={s.knob_label}>K1</p>
          <Toggle
            onChange={() => {
              this.setState({ Toggle1: !this.state.Toggle1 });
            }}
          />
        </div>

        <div className={s.knob}>
          <Knob
            value={this.state.Knob2}
            onChange={(newValue) => {
              this.setState({ Knob2: newValue });
            }}
          />
          <p className={s.knob_label}>K2</p>
          <Toggle
            onChange={() => {
              this.setState({ Toggle2: !this.state.Toggle2 });
            }}
          />
        </div>

        <div className={s.knob}>
          <Knob
            value={this.state.Knob3}
            onChange={(newValue) => {
              this.setState({ Knob3: newValue });
            }}
          />
          <p className={s.knob_label}>K3</p>
          <Toggle
            onChange={() => {
              this.setState({ Toggle3: !this.state.Toggle3 });
            }}
          />
        </div>

      </div>
    );
  }
}

export default withStyles(s)(FxUnit);
