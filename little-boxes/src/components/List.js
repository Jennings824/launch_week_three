import React from 'react';

const List = props => {
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default List;
