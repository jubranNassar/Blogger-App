import "../Comment.css";
const Comment = (props) => {
  const comment = props.comment.fields;
  console.log(comment)
  if (!comment) {
    return <div>Loading...</div>
  } else {
    return (
      <li>{comment.name} -<br/> {comment.text}</li>
    );
  }
};

export default Comment;