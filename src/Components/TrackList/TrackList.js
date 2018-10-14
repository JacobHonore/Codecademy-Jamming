import React, { Component } from 'react';
import './TrackList.css';
import Track  from '../Track/Track';

class TrackList extends Component {
  render() {
    let props = this.props;
    return (
      <div className="TrackList">
          {
            props.tracks.map(function(track) {
              return (<Track key={track.id} track={track} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval} />);
            })
          }
      </div>
    );
  }
}

export default TrackList;
