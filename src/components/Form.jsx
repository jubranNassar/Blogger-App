import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const history = useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      post,
    };
    await axios.post(baseURL, { fields: newPost }, config);

    setTimeout(() => {
      history.push("/")
    }, 800);
    props.setToggleFetch((toggleFetch)=> !toggleFetch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" required />
      <textarea value={post} onChange={(e)=> setPost(e.target.value)} placeholder="Write Here" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
