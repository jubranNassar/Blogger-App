import Comment from "./Comment";
import CommentForm from "./CommentForm"; 
import "../CSS/App.css";
import Like from "./Like";
function Post(props) {
  const { post, setSaved } = props;

  // const time = new Date(post.fields.Created).toISOString().substring(11, 16)
  // const newTime = time.splice(2,2)
  // console.log(newTime)
  
      // const getFormattedTime = (time)=> {
      //   const hours24 = parseInt(time.substring(0,2));
      //   const hours = ((hours24 + 11) % 12) + 1;
      //   const amPm = hours24 > 11 ? 'pm' : 'am';
      //   const minutes = time.substring(3);
        
      //   return hours + ':' + minutes + amPm;
      // };

      // getFormattedTime(time);
    
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
      <h1 className="name">{post.fields.name}</h1>
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
