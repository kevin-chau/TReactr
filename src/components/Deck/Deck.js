import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Deck.css';
import { auth } from '../../config';

require('dotenv').load();

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
    console.log(auth.soundcloud);
    console.log(process.env.SOUNDCLOUD_CLIENT_ID);
    if (this.props.name === 'DeckA') {
      return (
        <div className={s.container}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=h--P8HzYZ74"
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
            width="380px"
            height="213px"
            volume={this.props.VolumeB}
          />
        </div>
      );
    } else if (this.props.name === 'DeckC') {
      return (
        <div className={s.container}>
          <ReactPlayer
            url="https://soundcloud.com/rlgrime/halloween-v"
            playing
            soundcloudConfig={{
              showArtwork: true,
              clientId: auth.soundcloud.id,
            }}
            width="380px"
            height="213px"
            volume={this.props.VolumeC}
          />
        </div>
      );
    } else if (this.props.name === 'DeckD') {
      return (
        <div className={s.container}>
          <ReactPlayer
            url="https://soundcloud.com/in-love-with-a-ghost/we-ve-never-met-but-can-we-have-a-coffee-or-something"
            soundcloudConfig={{
              showArtwork: true,
            }}
            width="380px"
            height="213px"
            volume={this.props.VolumeD}
          />
        </div>
      );
    }
    return null;
  }
}

export default withStyles(s)(Deck);
