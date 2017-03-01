import React from 'react';
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
      <div />
    );
  }
}

export default withStyles(s)(Deck);
