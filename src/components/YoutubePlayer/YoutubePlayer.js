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
import s from './YoutubePlayer.css';

class YoutubePlayer extends React.Component {
  render() {
    return(
      <video controls="true">
        <source src="https://www.youtube.com/watch?v=WbJNkH-pDd8" type="video/mp4" />
      </video>
    )
  }
  componentDidMount() {
    function defer(method) {
      if (true)
          method();
      else
          setTimeout(function() {
              defer(method)
          }, 50);
    }

    var videos = document.querySelectorAll("video");

    console.log("GOT TO HERE BITCH!");

    var mp4downloadlink;

    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

    var done = 0;

    defer(function() {
        function doCORSRequest(options, printResult) {
            var x = new XMLHttpRequest();
            x.open('GET', cors_api_url + 'youtubeinmp4.com/redirect.php?video=a4lZp14I3zE');
            x.onload = x.onerror = function() {
                var content = $(x.responseText).find('.downloadButtons');
                console.log("mp4 download link (1) is : " + $(content[0]).attr('href'));
                mp4downloadlink = $(content[0]).attr('href');
                done = 1;
            };
            x.send(options.data);
        }
        (function() {
            doCORSRequest({
                method: 'GET',
            });
        })();
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
        console.log("LOADING YOUTUBE HTML5 VIDEO");
        for (var i = 0, l = videos.length; i < l; i++) {
            var video = videos[i];
            var src = video.src || (function() {
                var sources = video.querySelectorAll("source");
                for (var j = 0, sl = sources.length; j < sl; j++) {
                    var source = sources[j];
                    var type = source.type;
                    var isMp4 = type.indexOf("mp4") != -1;
                    if (isMp4) return source.src;
                }
                return null;
            })();
            if (src) {
                var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
                console.log("isYoutube: " + isYoutube);
                if (isYoutube) {
                    var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
                    id = (id.length > 1) ? id.splice(1) : id;
                    id = id.toString();
                    var mp4url = "http://www.youtubeinmp4.com/";
                    // video.src = 'http://www.youtubeinmp4.com/redirect.php?video=a4lZp14I3zE&v=KhQUJVK81cQ5ml3QHkTfrM5fXhrTdFiB&hd=1';
                    console.log("mp4 download link is (2): " + mp4downloadlink);
                    // video.src = mp4url + 'redirect.php?video=a4lZp14I3zE&v=D1bJjGIDthvLt2UDt4OlEMfdlcGEjhQj';
                    video.src = mp4url + mp4downloadlink;
                    console.log(video.src);
                }
            }
        }
    }
  }
}

export default withStyles(s)(YoutubePlayer);
