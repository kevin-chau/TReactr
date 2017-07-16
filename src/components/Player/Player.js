import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './Player.css';

let audioCtx;

class Player extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    playing: PropTypes.bool,
    volume: PropTypes.number,
    name: PropTypes.string,
    low: PropTypes.number,
    mid: PropTypes.number,
    high: PropTypes.number,
  };

  static defaultProps = {
    url: '',
    playing: false,
    volume: 0,
    name: '',
    low: 63,
    mid: 63,
    high: 63,
  };
}

export default withStyles(s)(Player);
