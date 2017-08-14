import React from 'react';

const Place = props => {
  let handlePlaceClick = () => {
    props.handlePlaceClick(props.id);
  }
  return(
    <li className={props.className} onClick={handlePlaceClick}>{props.name}</li>
  )
}

export default Place;
