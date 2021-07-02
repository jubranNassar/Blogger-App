import { Link } from "react-router-dom";
import "../CSS/Navbar.css"
function Navbar() {
  return (
    <div class="header">
        <h1 className="title">Blogger</h1>
        <nav>
          <Link id="home" to="/">Home</Link>
          <Link id="new" to="/new">New Post</Link>
          <Link id="saved" to="/saved">Saved Posts</Link>
        </nav>  
    </div>
  )
}

export default Navbar