import React from 'react';
import { BiDirectionalKnob } from 'treactr-canvas-knob';
import { Kill, FxToggle1, FxToggle2, ToggleMonitorCue } from 'treactr-toggle';
import Slider from 'treactr-slider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Mixer.css';

class Mixer extends React.Component {
  static propTypes = {
    side: React.PropTypes.string,
    otherside: React.PropTypes.string,
  };

  static defaultProps = {
    side: 'left',
    otherside: 'right',
  };

  constructor(props) {
    super(props);
    this.state = {
      // Knobs
      high: 63,
      mid: 63,
      low: 63,
      filter: 63,
      gain: 63,
      key: 63,
      pan: 63,

      // Buttons
      high_kill: false,
      low_kill: false,
      mid_kill: false,
      filter_kill: false,
      gain_kill: false,
      key_kill: false,
      fx1_on: false,
      fx2_on: false,
      cue_on: false,

      // Volume
      volume: 63,
    };
  }

  render() {
    return (
      <div className={s.Mixer_container} >
        {/* EQ/Volume Box */}
        <div className={s.Mixer_Box} style={{ float: this.props.otherside }}>
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
          <div className={s.slider}>
            <Slider
              vertical
              value={this.state.volume}
              onChange={(newValue) => {
                this.setState({ volume: newValue });
                if (this.props.name=="MixerA"){
                  this.props.changeVolumeA(newValue / 127);
                } else if (this.props.name=="MixerB"){
                  this.props.changeVolumeB(newValue / 127);
                }
              }}
              max={127}
            />
          </div>
        </div>

        {/* Gain/Filter Box */}
        <div className={s.Mixer_Box} style={{ float: this.props.side, marginBottom: '2px' }}>
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
        </div>

        {/* FX Toggle Select Box */}
        <div className={s.Mixer_Box} style={{ float: this.props.side, width: '57px', margin: '2px 0' }}>
          <div style={{ marginTop: '5px', marginBottom: '2px' }}>
            <div style={{ margin: '2px 1px 0px 4px', float: 'left' }}>
              <FxToggle1
                defaultChecked={this.state.fx1_on}
                onChange={(newValue) => {
                  this.setState({ fx1_on: newValue.target.checked });
                }}
              />
            </div>
            <div style={{ margin: '2px', marginBottom: '0px', float: 'left' }}>
              <FxToggle2
                defaultChecked={this.state.fx2_on}
                onChange={(newValue) => {
                  this.setState({ fx2_on: newValue.target.checked });
                }}
              />
            </div>
            <p style={{ fontSize: '.6em' }}>FX</p>
          </div>
        </div>

        {/* Key/ Pan Box */}
        <div className={s.Mixer_Box} style={{ float: this.props.side, marginTop: '2px' }}>
          <div className={s.knob}>
            <BiDirectionalKnob
              value={this.state.key}
              onChange={(newValue) => {
                this.setState({ key: newValue });
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.state.key_kill}
                onChange={(newValue) => {
                  this.setState({ key_kill: newValue.target.checked });
                }}
              />
            </div>
            <p>KEY</p>
          </div>
          <div style={{ margin: '17px 5px 20px 5px' }}>
            <ToggleMonitorCue
              defaultChecked={this.state.cue_on}
              onChange={(newValue) => {
                this.setState({ cue_on: newValue.target.checked });
              }}
            />
          </div>
          <div className={s.knob} style={{ marginLeft: '13px' }}>
            <BiDirectionalKnob
              value={this.state.pan}
              onChange={(newValue) => {
                this.setState({ pan: newValue });
              }}
              width={29}
              height={29}
            />
          </div>
          <p style={{ marginBottom: '2px' }}>PAN</p>
        </div>

      </div>
    );
  }
}

export default withStyles(s)(Mixer);
