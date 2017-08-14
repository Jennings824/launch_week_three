import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm("Are you sure you don't want to see Tay Sway?");
  };
  let claim = (event) =>{
    console.log("Form Submitted");
    event.preventDefault();
  };

  return(
    <div>
      <div id="cancel" onClick={handleExit}>X</div>
      <h1>You have won tickets to see {props.artist}!!</h1>
        <p>Please enter your email so we can send you the tickets</p>
        <form>
          <input id='email' type='text' placeholder='Your email here'/>
          <input id='submit' type='submit' value='CLAIM YOUR PRIZE' onClick={claim}/>
        </form>
    </div>
  );
};

export default Popup;
