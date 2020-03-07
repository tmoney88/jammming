import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [
                            {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
                            {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
                            {name: 'name3', artist: 'artist3', album: 'album3', id: 3},
                            {name: 'name4', artist: 'artist4', album: 'album4', id: 4}
                        ],
            playlistName: 'tmoney playlist',
            playlistTracks: [
                            {name: 'name1', artist: 'artist1', album: 'album1', id: 5},
                            {name: 'name2', artist: 'artist2', album: 'album2', id: 6},
                            {name: 'name3', artist: 'artist3', album: 'album3', id: 7},
                            {name: 'name4', artist: 'artist4', album: 'album4', id: 8}
                        ]
            };
            this.addTrack = this.addTrack.bind(this);
            this.removeTrack = this.removeTrack.bind(this);
            this.updatePlaylistName = this.updatePlaylistName.bind(this);

    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        tracks.push(track);
        this.setState({playlistTracks: tracks})
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

        this.setState({playlistTracks: tracks});
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name})
    }

    render() {

        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <PlayList playlistName={this.state.playlistName} 
                        playlistTracks={this.state.playlistTracks} 
                        onRemove={this.removeTrack}
                        onNameChange={this.updatePlaylistName} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App

