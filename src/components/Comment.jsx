import "../CSS/Comment.css";
const Comment = (props) => {
  const comment = props.comment.fields;
  if (!comment) {
    return <div>Loading...</div>
  } else {
    return (
      <li key={comment} >{comment.name} -<br/> {comment.text}</li>
    );
  }
};

export default Comment;