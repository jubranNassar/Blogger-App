import { useState } from "react";

function Like() {
  const [like, setLike] = useState(false);
    const likeButton = (e) => {
      e.preventDefault();
      setLike(!like)
    }
  return (
  <div className= "like">
    <button id="like-button" value={like} onClick={likeButton} >{(like) ? "liked": "like" }</button>
  </div>
  )
}

export default Like;