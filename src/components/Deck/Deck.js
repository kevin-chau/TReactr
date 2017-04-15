import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Deck.css';

class Deck extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  static defaultProps = {
    name: 'Deck',
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
    if (this.props.name === 'DeckA') {
      return (
        <div className={s.container}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=h--P8HzYZ74"
            playing
            width="380px"
            height="213px"
            volume={this.props.VolumeA}
          />
        </div>
      );
    } else if (this.props.name === 'DeckB') {
      return (
        <div className={s.container}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=j6sSQq7a_Po"
            playing
            width="380px"
            height="213px"
            volume={this.props.VolumeB}
          />
        </div>
      );
    }
    return null;
  }
}

export default withStyles(s)(Deck);
