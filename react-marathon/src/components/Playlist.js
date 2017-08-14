import React from 'react';

const Playlist = (props) => {
  let handleClick = () => {
    props.handlePlaylistSelect(props.id)
    console.log(props.id)
  }
  return (
    <div className="Playlist">
    <li onClick={handleClick} className={props.className}>{props.name}</li>
    </div>
  );
};

export default Playlist;
