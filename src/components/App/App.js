import React, { Component } from 'react';
import './App.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import PlayList from '../../components/Playlist/Playlist';

export class App extends Component {
    render() {

        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults />
                        <PlayList />
                    </div>
                </div>
            </div>
        )
    }
}

export default App

