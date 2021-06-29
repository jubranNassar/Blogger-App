import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header>
        <img src="http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" alt="headerImage" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">New Post</Link>
          {/* <Link to="/saved">Saved Posts</Link> */}
        </nav>
      </header>
    </div>
  )
}

export default Navbar