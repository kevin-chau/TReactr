import React from 'react';
import { BiDirectionalKnob } from 'treactr-canvas-knob';
import { Kill, FxToggle1, FxToggle2, ToggleMonitorCue } from 'treactr-toggle';
import Slider from 'treactr-slider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './Mixer.css';

class Mixer extends React.Component {
  static propTypes = {
    side: PropTypes.string,
    otherside: PropTypes.string,
    volume: PropTypes.number,
    high: PropTypes.number,
    mid: PropTypes.number,
    low: PropTypes.number,
    changeVolume: PropTypes.func,
    changeLow: PropTypes.func,
    changeMid: PropTypes.func,
    changeHigh: PropTypes.func,
    changeLowpass: PropTypes.func,
    changeHighpass: PropTypes.func,
  };

  static defaultProps = {
    side: 'left',
    otherside: 'right',
    volume: 0,
    high: null,
    mid: null,
    low: null,
    changeVolume: null,
    changeLow: null,
    changeMid: null,
    changeHigh: null,
    changeLowpass: null,
    changeHighpass: null,
  };

  render() {
    return (
      <div className={s.Mixer_container} >
        {/* EQ/Volume Box */}
        <div className={s.Mixer_Box} style={{ float: this.props.otherside }}>
          <div className={s.knob}>
            <BiDirectionalKnob
              value={this.props.high}
              onChange={(newValue) => {
                this.props.changeHigh(newValue);
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.props.high_kill}
                onChange={(newValue) => {
                }}
              />
            </div>
            <p>HI</p>
          </div>
          <div className={s.knob}>
            <BiDirectionalKnob
              value={this.props.mid}
              onChange={(newValue) => {
                this.props.changeMid(newValue);
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.props.mid_kill}
                onChange={(newValue) => {
                }}
              />
            </div>
            <p>MID</p>
          </div>
          <div className={s.knob}>
            <BiDirectionalKnob
              value={this.props.low}
              onChange={(newValue) => {
                this.props.changeLow(newValue);
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.props.low_kill}
                onChange={(newValue) => {
                }}
              />
            </div>
            <p>LO</p>
          </div>
          <div className={s.slider}>
            <Slider
              vertical
              value={this.props.volume}
              onChange={(newValue) => {
                this.props.changeVolume(newValue);
              }}
              max={127}
            />
          </div>
        </div>

        {/* Gain/Filter Box */}
        <div className={s.Mixer_Box} style={{ float: this.props.side, marginBottom: '2px' }}>
          <div className={s.knob}>
            <BiDirectionalKnob
              value={this.props.gain}
              onChange={(newValue) => {
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.props.gain_kill}
                onChange={(newValue) => {
                }}
              />
            </div>
            <p>GAIN</p>
          </div>
          <div className={s.knob}>
            <BiDirectionalKnob
              value={this.props.filter}
              onChange={(newValue) => {
                this.props.changeLowpass(newValue);
                this.props.changeHighpass(newValue);
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.props.filter_kill}
                onChange={(newValue) => {
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
                defaultChecked={this.props.fx1_on}
                onChange={(newValue) => {
                }}
              />
            </div>
            <div style={{ margin: '2px', marginBottom: '0px', float: 'left' }}>
              <FxToggle2
                defaultChecked={this.props.fx2_on}
                onChange={(newValue) => {
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
              value={this.props.key}
              onChange={(newValue) => {
              }}
            />
          </div>
          <div className={s.knob_label}>
            <div style={{ float: 'right' }}>
              <Kill
                defaultChecked={this.props.key_kill}
                onChange={(newValue) => {
                }}
              />
            </div>
            <p>KEY</p>
          </div>
          <div style={{ margin: '17px 5px 20px 5px' }}>
            <ToggleMonitorCue
              defaultChecked={this.props.cue_on}
              onChange={(newValue) => {
              }}
            />
          </div>
          <div className={s.knob} style={{ marginLeft: '13px' }}>
            <BiDirectionalKnob
              value={this.props.pan}
              onChange={(newValue) => {
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
