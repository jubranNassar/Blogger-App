
const Comment = (props) => {
  const comment = props.comment.fields;
  console.log(props.comment.fields)
  if (!comment) {
    return <div>Loading...</div>
  } else {
    return (
      <li>{comment.text} - {comment.name}</li>
    );
  }
};

export default Comment;