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
import $ from 'jquery';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './YoutubeMedia.css';

class YoutubeMedia extends React.Component {
  render() {
    return (
      <video width="380" height="213" controls="true" autoPlay>
        <source src={this.props.url} />
      </video>
    );
  }
  componentDidMount() {
    function defer(method) {
      if (true) { method(); } else {
        setTimeout(() => {
          defer(method);
        }, 50);
      }
    }

    const videos = document.querySelectorAll('video');

    let mp4downloadlink;

    const cors_api_url = 'https://kevins-cors-anywhere.herokuapp.com/';

    let done = 0;

    defer(() => {
      function doCORSRequest(options, printResult) {
        const x = new XMLHttpRequest();
        const src = videos[0].querySelector('source').src;
        console.log(`video url is: ${src}`);

        let id;

        if (src) {
          const isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
          console.log(`isYoutube: ${isYoutube}`);
          if (isYoutube) {
            id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
            id = (id.length > 1) ? id.splice(1) : id;
            id = id.toString();
          }
        }

        x.open('GET', `${cors_api_url}youtubeinmp4.com/redirect.php?video=${id}`);
        x.onload = x.onerror = function () {
          const content = $(x.responseText).find('.downloadButtons');
          console.log(`mp4 download link (1) is : ${$(content[0]).attr('href')}`);
          mp4downloadlink = $(content[0]).attr('href');
          done = 1;
        };
        x.send(options.data);
      }
      (function () {
        doCORSRequest({
          method: 'GET',
        });
      }());
    });

    function checkFlag() {
      if (done === 0) {
        window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
      } else {
            /* do something*/
        loadvideo();
      }
    }
    checkFlag();

    function loadvideo() {
      console.log('LOADING YOUTUBE HTML5 VIDEO');
      for (let i = 0, l = videos.length; i < l; i++) {
        const video = videos[i];
        const mp4url = 'https://kevins-cors-anywhere.herokuapp.com/https://www.youtubeinmp4.com/';
        // video.crossOrigin = "anonymous";
        video.src = mp4url + mp4downloadlink;
      }
    }
  }
}

export default withStyles(s)(YoutubeMedia);
