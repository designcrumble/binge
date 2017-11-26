import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class Video extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=r9-DM9uBtVI' className="fullscreen-video" width="100%" playing />
  }
}

export default Video;