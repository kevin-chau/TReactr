/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'mediaelement';
import 'mediaelement/build/mediaelementplayer.min.css';
import 'mediaelement/build/mediaelement-flash-video.swf';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './YoutubePlayer.css';

class YoutubePlayer extends React.Component {
  state = {}

  success(media, node) {
      // Your action when media was successfully loaded
  }

  error(media) {
      // Your action when media had an error loading
  }

  render() {
    const
      props = this.props,
      sources = JSON.parse(props.sources),
      tracks = JSON.parse(props.tracks),
      sourceTags = [],
      tracksTags = []
      ;

    for (let i = 0, total = sources.length; i < total; i++) {
      const source = sources[i];
      sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
    }

    for (let i = 0, total = tracks.length; i < total; i++) {
      const track = tracks[i];
      tracksTags.push(`<track src="${track.src}" kind="${track.kind}" srclang="${track.lang}"${(track.label ? ` label=${track.label}` : '')}>`);
    }

    const
      mediaBody = `${sourceTags.join('\n')}
              ${tracksTags.join('\n')}`,
      mediaHtml = props.mediaType === 'video' ?
              `<video id="${props.id}" width="${props.width}" height="${props.height}"${(props.poster ? ` poster=${props.poster}` : '')}
                  ${(props.controls ? ' controls' : '')}${(props.preload ? ` preload="${props.preload}"` : '')}>
                  ${mediaBody}
              </video>` :
              `<audio id="${props.id}" width="${props.width}" controls>
                  ${mediaBody}
              </audio>`
              ;

    return (<div dangerouslySetInnerHTML={{ __html: mediaHtml }} />);
  }

  componentDidMount() {
    let loaded = false;
    if (!loaded) {
      const tag = document.createElement('script');
      tag.src = '//www.youtube.com/player_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      loaded = true;
    }
    
    const { MediaElementPlayer } = global;

    if (!MediaElementPlayer) {
      return;
    }

    const options = Object.assign({}, JSON.parse(this.props.options), {
      	// Read the Notes below for more explanation about how to set up the path for shims
      pluginPath: './static/media/',
      success: media => this.success(media),
      error: media => this.error(media),
    });

    this.setState({ player: new MediaElementPlayer(this.props.id, options) });
  }

  componentWillUnmount() {
    if (this.state.player) {
      this.state.player.destroy();
    }
  }
}

export default withStyles(s)(YoutubePlayer);
