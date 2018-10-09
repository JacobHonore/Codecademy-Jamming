import React, { Component } from 'react';
import './Track.css';
//import { TrackList } from '../TrackList/TrackList';

class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>
    }
    else {
      return <a className="Track-action">+</a>
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>TrackName</h3>
          <p>TrackArtist | TrackAlbum</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
