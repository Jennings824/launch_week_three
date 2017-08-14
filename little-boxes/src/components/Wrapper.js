import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers';

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>

      <p>{props.paragraph}</p>
      <Numbers/>
      <Picture/>
    </div>
  )
}

export default Wrapper;
