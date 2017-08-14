import React from 'react';

const MessageComponent = (props) => {
  let message = props.message
  let clickCount = 0
  let sender = "Click Monster"

  return (
    <div>
      <h1>Component Message: {message}</h1>
      <h1>Component Click Count: {clickCount}</h1>
      <h1>Component Sender: {sender}</h1>
    </div>
  )
};

export default MessageComponent;
