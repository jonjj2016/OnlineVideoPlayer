import React, { Component } from 'react';
class SearchBar extends Component {
  state = {
    term: ''
  };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className='ui segment search-bar'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor=''>VideoSearch</label>
            <input
              placeholder='Search for Videos'
              onChange={this.onInputChange}
              value={this.state.term}
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
//AIzaSyAZ1oiQ1ARzaw_evYl_bBO-qGPp1BwqaOg
