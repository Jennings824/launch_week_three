import React from 'react';
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    let playlistSpecificSongs = this.props.selectedPlaylistSongs.map(listSong => {
      let className;
      if (this.props.selectedSongId==listSong.id) {
        className = "selected"
      } else {
        className = ""
      }
        return(
          <Song
           key={listSong.id}
           id={listSong.id}
           name={listSong.name}
           artist={listSong.artist}
           album={listSong.album}
           className={className}
           handleSongSelect={this.props.handleSongSelect}
          />
        )
    })

    return (
      <div>
        <ul>
          {playlistSpecificSongs}
        </ul>
      </div>
    );
  }
}

export default SongCollection;
