import React from 'react';

const Tweet = props => {
  let replyButtonClick = () => {alert("Reply");}
  let retweetButtonClick = () => {alert("Retweet")}
  let likeButtonClick = () => {alert("Like")}
  let moreButtonClick = () => {alert("Favorite")}


  let text;
  if (props.tweet.entities.media) {
    text = props.tweet.text.replace(props.tweet.entities.media[0].display_url, "")
  } else {
    text = props.tweet.text
  }

  let twitterDate = new Date(Number(props.tweet.timestamp_ms)).toString().split(" ")
  let month = twitterDate[1]
  let day = twitterDate[2]

  let url;
  if(props.tweet.entities.media) {
    url= props.tweet.entities.media[0].media_url
  }

  let heartColor;
  if(props.tweet.favorited === true) {
    heartColor= "fa fa-heart icon-cog";
  } else {
    heartColor = "fa fa-heart";
  }

  let retweetColor;
  if(props.tweet.retweeted === true) {
    retweetColor = "fa fa-retweet icon-cog";
  } else {
    retweetColor = "fa fa-retweet";
  }


    return(
      <div className="tweet">
        <div className ="image">
          <img src={props.tweet.user.profile_image_url}/>
        </div>


        <h5 >{props.tweet.user.name}</h5>
        <h5>@{props.tweet.user.screen_name}</h5>
        <h5>{month} {day}</h5>
        <h5>{text}</h5>

        <img src={url}/>
        <i className="fa fa-reply" aria-hidden="true" onClick={replyButtonClick}></i>
        <i className={retweetColor} aria-hidden="true" onClick={retweetButtonClick}>{props.tweet.retweet_count}</i>
        <i className={heartColor} aria-hidden="true" onClick={likeButtonClick}>{props.tweet.favorite_count}</i>
        <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={moreButtonClick}></i>
        <p>{props.tweet.favorited}</p>
        <p>{props.tweet.retweeted}</p>
      </div>
    )
}

export default Tweet;
