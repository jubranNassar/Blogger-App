import "../CSS/Comment.css";
const Comment = (props) => {
  const comment = props.comment.fields;
  if (!comment) {
    return <div>Loading...</div>
  } else {
    return (
      <li>{comment.name} -<br/> {comment.text}</li>
    );
  }
};

export default Comment;