import axios from  "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Form from "./components/Form"; 
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(()=> {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
    }
    fetchPosts();
  }, [toggleFetch])

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <main>
          {posts.map((post)=> (
            <div className="post">
              {/* <h4>{post.createdTime = new Date().toTimeString.substring()}</h4> */}
              <h1>{post.fields.name}</h1>
              <h2>{post.fields.post}</h2>
              <button>Save</button>
            </div>
          ))}
        </main>
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
