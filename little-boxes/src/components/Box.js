import React from 'react';
import Wrapper from './Wrapper'

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  let list
  if (props.list) {
    list = <ul>{props.list}</ul>
  }

  let img
  if (props.img) {
    img = <img alt="Clever EEs" src={props.url}/>
  }


  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      <Wrapper/>
    </div>
  )
}

export default Box;
