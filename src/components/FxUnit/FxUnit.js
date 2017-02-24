import React from 'react';
import Knob from 'treactr-canvas-knob';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FxUnit.css';

class FxUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { FX_DryWet: 63, FX_Knob1: 63, FX_Knob2: 63, FX_Knob3: 63 };
    this.KNOB_THICKNESS = 0.2;
  }

  render() {
    return (
      <div className={s.FX_Knobs}>
        <div className={s.knob}>
          <Knob
            value={this.state.FX_DryWet}
            onChange={(newValue) => {
              this.setState({ FX_DryWet: newValue });
            }}
          />
          <p className={s.knob_label}>D/W</p>
        </div>
        <div className={s.knob}>
          <Knob
            value={this.state.FX_Knob1}
            onChange={(newValue) => {
              this.setState({ FX_Knob1: newValue });
            }}
          />
          <p className={s.knob_label}>K1</p>
        </div>
        <div className={s.knob}>
          <Knob
            value={this.state.FX_Knob2}
            onChange={(newValue) => {
              this.setState({ FX_Knob2: newValue });
            }}
          />
          <p className={s.knob_label}>K2</p>
        </div>
        <div className={s.knob}>
          <Knob
            value={this.state.FX_Knob3}
            onChange={(newValue) => {
              this.setState({ FX_Knob3: newValue });
            }}
          />
          <p className={s.knob_label}>K3</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FxUnit);
