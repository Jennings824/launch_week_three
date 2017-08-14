import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handleSongSelect(id) {
    this.setState({selectedSongId: id})
  }

  handlePlaylistSelect(id) {
    this.setState({selectedPlaylistId: id})
    let newPlaylist = this.props.data.playlists.filter(playlist => playlist.id===id)
    let playNewSong = newPlaylist[0].songs[0]
    this.setState({selectedSongId: playNewSong})
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {return selectedPlaylistSongIds.includes(obj.id);}

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App">
        <div className="large-6 column">
          <h1>Playlist</h1>
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId={this.state.selectedPlaylistId}
            handlePlaylistSelect={this.handlePlaylistSelect}
          />
        </div>
        <div className="large-6 column">
          <h1>Song List</h1>
          <SongCollection
            selectedPlaylistSongs={selectedPlaylistSongs}
            selectedSongId={this.state.selectedSongId}
            handleSongSelect={this.handleSongSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
