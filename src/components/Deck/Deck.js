import React from 'react';
import ReactPlayer from 'react-player';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Deck.css';
import { auth } from '../../config';

class Deck extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  static defaultProps = {
    name: 'Deck',
  };

  constructor(props) {
    super(props);
  }

  setVolume = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  render() {
    return (
      <div className={s.container}>
        <ReactPlayer
          url={this.props.url}
          playing={this.props.playing}
          width="380px"
          height="213px"
          soundcloudConfig={{
            showArtwork: true,
            clientId: auth.soundcloud.id,
          }}
          volume={this.props.volume}
        />
      </div>
    );
  }
}

export default withStyles(s)(Deck);
