import React, { Component } from 'react';

import axios from 'axios';
import SearchBar from './SearcBar.component';
import VideoList from './VideoList.component';
import VideoDetail from './VideoDetail.component';
const KEY = 'AIzaSyAZ1oiQ1ARzaw_evYl_bBO-qGPp1BwqaOg';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  onTermSubmit = async term => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&key=${KEY}`
    );
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };
  componentDidMount() {
    this.onTermSubmit('music');
  }

  onVideoHandler = index => {
    console.log(index);
    let selectedVideo = { ...this.state.videos[index] };
    this.setState({ selectedVideo });
    console.log('from app component', selectedVideo);
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid '>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoHandler={this.onVideoHandler} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
