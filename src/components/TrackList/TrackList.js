import React, { Component } from 'react'
import './TrackList.js';
import Track from '../../components/Track/Track';

export class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
            </div>
        )
    }
}

export default TrackList
