import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "../CSS/App.css";
function Post(props) {
  const { post, setSaved } = props;

  const handleClick = (e) => {
    setSaved((saved) => {
      // if this posts id is in the saved array then return the saved array without this posts id
      if (saved.includes(post.id)) {
        return saved.filter((savedPost) => savedPost.id !== post.id);
      } else {
        // otherwise return all previous saved posts and this post
        return [...saved, post];
      }
    });
  };
  return (
    <div className="post">
      {/* <h4>{post.createdTime = new Date().toTimeString.substring()}</h4> */}
      <h1 className="name">{post.fields.name}</h1>
      <p className="post-text">{post.fields.post}</p>
      <CommentForm post={props.post} setToggleFetch={props.setToggleFetch} />
      <ul id="comments">
        {post.fields.comments?.map((comment) => (
          <Comment key={post.id}comment={comment} />
        ))}
      </ul>
      <button className="save" name={post.id} onClick={handleClick}>
        Save Post
      </button>
    </div>
  );
}

export default Post;
