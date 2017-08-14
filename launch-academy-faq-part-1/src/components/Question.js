import React from 'react';

const Question = (props) => {
 let handleClick  = () => {
   props.clickButton(props.id)
 }

  return (
    <div className="Question">
      <h3> {props.question}</h3>
      <i onClick={handleClick} className={props.button} aria-hidden="true"></i>
      <p>{props.answer}</p>
    </div>
  )
}

export default Question;
