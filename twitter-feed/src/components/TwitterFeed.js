import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let newData = props.data.map(tweet => {

    let picURL;

    return(
      <Tweet
        key= {tweet.id_str}
        tweet={tweet}
      />
    )
  })

  return (
    <div>
      {newData}
    </div>
  )
}

export default TwitterFeed;
