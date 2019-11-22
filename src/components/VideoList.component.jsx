import React from 'react';
import VideoItem from './VideoItem.component';
const VideoList = ({ videos, onVideoHandler }) => {
  const renderdList = videos.map((video, index) => (
    <VideoItem key={video.id.videoId} onVideoHandler={() => onVideoHandler(index)} video={video} />
  ));

  return <div className='ui relaxed divided list'> {renderdList}</div>;
};

export default VideoList;
