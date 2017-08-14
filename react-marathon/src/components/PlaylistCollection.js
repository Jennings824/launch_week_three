import React from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let playlistFragment= this.props.playlists.map(singlePlaylist =>{
        let className;
        if(this.props.selectedPlaylistId==singlePlaylist.id) {
          className = "selected"
        }
        return (
          <Playlist
            key={singlePlaylist.id}
            id={singlePlaylist.id}
            name={singlePlaylist.name}
            songs={singlePlaylist.songs}
            className={className}
            handlePlaylistSelect={this.props.handlePlaylistSelect}
          />
        )
      })


    return (
      <div>
        <ul>
          {playlistFragment}
        </ul>
      </div>
    );
  }
}

export default PlaylistCollection;
