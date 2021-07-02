import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import "../CSS/Form.css"

function Form(props) {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const history = useHistory();

  const {saved} = props 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      post,
      saved, 
    };
    await axios.post(`${baseURL}/posts`, { fields: newPost }, config);

    setTimeout(() => {
      history.push("/")
    }, 800);
    props.setToggleFetch((toggleFetch)=> !toggleFetch);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>New Post: </h1>
      <label htmlFor="name">Name:</label>
      <input id="name" className="input" value={name} onChange={(e)=> setName(e.target.value)} type="text" required />
      <label htmlFor="post" >Text:</label>
      <textarea id="post" className="input" value={post} onChange={(e)=> setPost(e.target.value)} placeholder="Write Here..." required />
      <input className="hidden" value={saved} type="checkbox" />
      <button id="submit"type="submit">Send it!</button>
    </form>
  );
}

export default Form;
