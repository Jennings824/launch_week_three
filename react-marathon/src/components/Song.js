import React from 'react';

const Song = (props) => {
  let handleClick = () => {
    props.handleSongSelect(props.id)
  }

  return (
    <div>
      <li className={props.className} onClick={handleClick}>{props.name} - {props.artist}</li>
    </div>
  );
}

export default Song;
