import Comment from "./Comment";
import CommentForm from "./CommentForm"; 
import "../CSS/App.css";
import Like from "./Like";
function Post(props) {
  const { post, setSaved } = props;

  const time = new Date(post.fields.Created).toLocaleString()    
      const handleClick = (e) => {
        setSaved((saved) => {
          if (saved.includes(post.id)) {
            return saved.filter((savedPost) => savedPost.id !== post.id);
          } else {
            return [...saved, post];
          }
        });
      };
      return (
        <div className="post">
          <div id="name-and-time">
        <h4 id="time">{time.toLocaleString().split(",")[1]}</h4>
        <h1 className="name">{post.fields.name}</h1>
          </div>
      <p className="post-text">{post.fields.post}</p>
      <CommentForm post={props.post} setToggleFetch={props.setToggleFetch} />
      <ul id="comments">
        {post.fields.comments?.map((comment) => (
          <Comment key={comment} comment={comment} />
        ))}
      </ul>
      <button className="save" name={post.id} onClick={handleClick}>
        Save Post
      </button>
      <Like />
    </div>
  );
}

export default Post;
