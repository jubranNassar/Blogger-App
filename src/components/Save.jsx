import "../CSS/Save.css";


function Save(props) {

  return (
    <div>
      <h1 className="saved-posts">Saved Posts: </h1>
      {props.saved.map((post)=> (
        <div className="post" key={post.id}>
          <h1 className="name" >{post.fields.name}</h1>
          <p>{post.fields.post}</p>
        </div>
      ))}
    </div>

  )
}

export default Save;