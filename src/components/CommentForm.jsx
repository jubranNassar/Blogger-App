
import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

const CommentForm = (props) => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      name,
      posts: [props.post.id],
    }
    await axios.post(`${baseURL}/comments`, { fields: newComment }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Content: </label>
      <input
        id="content"
        type="text"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <label htmlFor="author">Author: </label>
      <input
        id="author"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;