import { useState } from "react";
import { Tweet } from "./Tweet";


const DEFAULT_TWEET=[
  {
    id:0,
    name:"Trésor",
    content:"Tweet de Trésor",
    like:19,
  },

  {
    id:1,
    name:"Gnimdou",
    content:"Tweet de Gnimdou",
    like:20,
  },

  {
    id:2,
    name:"Dani",
    content:"Tweet de Dani",
    like:21,
  },

  {
    id:3,
    name:"Maman",
    content:"Tweet de Maman",
    like:22,
  },
]

function App(){
  const[tweets, setTweets]=useState(DEFAULT_TWEET);

  const onDelete=(tweetId) => {
    setTweets(
      (curr) => curr.filter((tweet) => tweet.id !==tweetId)
    );
  };

  const onLike=(tweetId) => {
    setTweets(
      (curr) => {
        const copyTweet=[...curr];
        const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
        likedTweet.like += 1;

        return copyTweet;

      }

    );
  };

  const handleSubmit= (event) =>{
    event.preventDefault();

    const name= event.target.name.value;
    const content= event.target.content.value;

    const newTweet = {
      id:tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like:0,
    };

    setTweets(
      [...tweets, newTweet]
    );
  };

  return(
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New Tweet</h4>
        <input placeholder="Name" type="text" name="name" />
        <input placeholder="Content" type="content" name="content" />
        <button>Submit</button>
      </form>
      <div className="tweet-container">
        {tweets.map((tweet)=>{
          return(
            <Tweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              content={tweet.content}
              like={tweet.like}
              onDelete={(id)=>{
                  onDelete(id);
              }}
              onLike={(id) =>{
                onLike(id)
              }}
            />
          )
        }

        )

        }
      </div> 
    </div>
  )
}

export default App;