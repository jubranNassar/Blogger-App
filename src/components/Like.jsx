import { useState } from "react";

function Like() {
  const [like, setLike] = useState(false);
  const [counter, setCounter] = useState(0);
  
    const likeButton = (e) => {
      e.preventDefault();
      if(like === true) {
        setCounter(counter - 1);
      } else if(like === false){
        setCounter(counter + 1);
      }
      setLike(!like)
    }


  return (
    <div>
      <div className= "like">
      <button id="like-button" value={like} onClick={likeButton} >{(like) ? "liked": "like" }</button>
      <p>{counter}</p>
      </div>
    </div>
  )
}

export default Like;