import axios from  "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Form from "./components/Form"; 
import Save from "./components/Save";
import Post from "./components/Post";
import './CSS/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [saved, setSaved]= useState([]);
  const [comments, setComments] = useState([]);

  useEffect(()=> {
    const fetchPosts = async () => {
      const resp = await axios.get(`${baseURL}/posts`, config);
      setPosts(resp.data.records);
      const commentsResp = await axios.get(`${baseURL}/comments`, config);
      // take the comments out of commentsResp and save them as comments
      setComments(commentsResp.data.records);

      const comments = commentsResp.data.records;
      
      const linkedPosts = resp.data.records.map((post) => {
        return {
          ...post,
          fields: {
            ...post.fields,
            comments: post.fields.comments
              ? comments.filter((comment) => post.fields.comments.includes(comment.id))
              : []
          }
        }
      })
      setPosts(linkedPosts);
    }
    fetchPosts();
  }, [toggleFetch])
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <main>
          <h1 id="welcome" >WELCOME TO BLOGGER!</h1>
          {posts.map((post)=> (
            <Post key={post.id} post={post} setSaved={setSaved} comments={comments} setToggleFetch={setToggleFetch}/>
          ))}
        </main>
      </Route>

      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} value={saved}/>
      </Route>

      <Route path ="/saved">
      <Save saved={saved} posts={posts}/>
      </Route>
    </div>
  );
}

export default App;
