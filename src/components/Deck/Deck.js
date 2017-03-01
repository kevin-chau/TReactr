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
    this.state = {};
  }

  render() {
    return (
      // Actual Song
      // <ReactPlayer url="https://www.youtube.com/watch?v=WUG2guLUtuo" playing />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=lp00DMy3aVw"
        playing
        width="320"
        height="180"
      />
      // Dummy
      // <div style={{ backgroundColor: 'blue', width:'320', height:'180'  }}/>
    );
  }
}

export default withStyles(s)(Deck);
