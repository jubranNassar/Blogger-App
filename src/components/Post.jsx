import { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Post(props) {
  const {post, setSaved} = props

  const handleClick = (e) => {
    setSaved((saved)=>{
      // if this posts id is in the saved array then return the saved array without this posts id 
      if (saved.includes(post.id) ) {
        return saved.filter((savedPost)=> savedPost.id !== post.id)
      } else {
        // otherwise return all previous saved posts and this post 
        return [...saved, post]
      }
    })
  }

  return (

    <div>
      <div className="post">
      {/* <h4>{post.createdTime = new Date().toTimeString.substring()}</h4> */}
      <h1 className="name">{post.fields.name}</h1>
      <p>{post.fields.post}</p>
      <button name={post.id} onClick={handleClick} className="save">Save</button>
      </div>
      <CommentForm post={props.post} setToggleFetch={props.setToggleFetch} />
      <ul>
        {post.fields.comments.map((comment)=> (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
}

export default Post;
