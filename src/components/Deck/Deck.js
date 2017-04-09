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
      volume: 0.5,
    };
  }

  setVolume = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  render() {
    return (
      <div className={s.container}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=aUWYDaVp92I"
          playing
          width="380px"
          height="213px"
          volume={this.props.VolumeA}
        />
      </div>
    );
  }
}

export default withStyles(s)(Deck);
