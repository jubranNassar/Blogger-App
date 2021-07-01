import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import "../CommentForm.css";

const CommentForm = (props) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      text,
      name,
      posts: [props.post.id],
    };
    await axios.post(`${baseURL}/comments`, { fields: newComment }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  };

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <input
        className="inputs"
        id="author"
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputs"
        id="content"
        type="text"
        placeholder="Write comment here..."
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="submit-button" type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
