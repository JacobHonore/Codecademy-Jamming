import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist  from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        id: 0,
        name: '',
        artist: '',
        album: ''
      }],
      playlistName: 'New Playlist',
      playlistTracks: [{
        id: 0,
        name: '',
        artist: '',
        album: '',
        uri: ''
      }]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
       return;
    }
    this.setState({
      playlistTracks: this.state.playlistTracks.push(track)
    });
  }
  removeTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
       let withoutTrack = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
       this.setState({
         playlistTracks: withoutTrack
       });
    }
    return;
  }
  updatePlayListName(name) {
    this.setState({
      playlistName: name
    });
  }
  savePlaylist() {
    let trackURIs = [];
    this.state.playlistTracks.forEach(function(track) {
      trackURIs.push(track.uri);
    });
  }
  search(term) {
    console.log(term);
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlayListName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
