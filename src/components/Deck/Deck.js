import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Deck.css';

class Deck extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    side: React.PropTypes.string,
  };

  static defaultProps = {
    name: 'A',
    side: 'left',
  };

  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
    };
  }

  getVolume() {
    console.log(`volume is: ${this.state.volume}`);
    return this.state.volume;
  }

  setVolume(val) {
    this.state.volume = val;
  }

  render() {
    console.log(this.state.volume);
    return (
      <div className={s.container}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lp00DMy3aVw"
          playing
          width="380px"
          height="213px"
          volume={this.state.volume}
        />
      </div>
    );
  }
}

export default withStyles(s)(Deck);
