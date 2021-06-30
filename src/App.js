import axios from  "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Form from "./components/Form"; 
import Save from "./components/Save";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [saved, setSaved]= useState(false);

  useEffect(()=> {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
    }
    fetchPosts();
  }, [toggleFetch])
  

  const handleClick = (e) => {
    e.preventDefault();
    setSaved(!saved)
  }

  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <main>
          {posts.map((post)=> (
            <div className="post">
              {/* <h4>{post.createdTime = new Date().toTimeString.substring()}</h4> */}
              <h1 className="name">{post.fields.name}</h1>
              <p>{post.fields.post}</p>
              <button value={saved} onClick={handleClick} className="save" >Save</button>
              <button className="comment">Comment</button>
            </div>
          ))}
        </main>
      </Route>

      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} value={saved}/>
      </Route>

      <Route path ="/saved">
      <Save posts={posts} />
      </Route>
    </div>
  );
}

export default App;
