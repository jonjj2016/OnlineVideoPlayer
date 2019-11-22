import React from 'react';
const VideoDetail = ({ video }) => {
  if (!video) return null;
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe title='vudeo Title' src={videoSource} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'> {video.snippet.title}</h4>
        <p className='content'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
