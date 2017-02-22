import React from 'react';
import Knob from 'react-canvas-knob';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FxUnit.css';

const knobStyle = { float: 'left', width: 50 };

class FxUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { FX_DryWet: 63, FX_Knob1: 63, FX_Knob2: 63, FX_Knob3: 63 };
  }
  render() {
    return (
      <div className={s.FX_Knobs}>
        <div style={knobStyle}>
          <Knob
            value={this.state.FX_DryWet}
            onChange={(newValue) => {
              this.setState({ FX_DryWet: newValue });
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
            value={this.state.FX_Knob1}
            onChange={(newValue) => {
              this.setState({ FX_Knob1: newValue });
            }}
            angleOffset={-150}
            angleArc={300}
            max={127}
            thickness={0.25}
            width={36}
            displayInput={false}
          />
          <p>K1</p>
        </div>
        <div style={knobStyle}>
          <Knob
            value={this.state.FX_Knob2}
            onChange={(newValue) => {
              this.setState({ FX_Knob2: newValue });
            }}
            angleOffset={-150}
            angleArc={300}
            max={127}
            thickness={0.25}
            width={36}
            displayInput={false}
          />
          <p>K2</p>
        </div>
        <div style={knobStyle}>
          <Knob
            value={this.state.FX_Knob3}
            onChange={(newValue) => {
              this.setState({ FX_Knob3: newValue });
            }}
            angleOffset={-150}
            angleArc={300}
            max={127}
            thickness={0.25}
            width={36}
            displayInput={false}
          />
          <p>K3</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FxUnit);
