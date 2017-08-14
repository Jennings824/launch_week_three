import React from 'react';
import List from './List'
import Box from './Box'

const Picture = props => {
  return (
    <div className='box picture'>
      <h1>props.header</h1>
      <img alt='Clever EEs' src={props.url}/>
      <List header="This is a List"/>
    </div>
  )
}

export default Picture;
