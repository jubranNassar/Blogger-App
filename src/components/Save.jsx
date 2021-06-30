function Save(props) {




  return (
    <div>
      {props.saved.map((post)=> (
        <div key={post.id}>
          <h2>{post.fields.name}</h2>
          <p>{post.fields.post}</p>
        </div>
      ))}
    </div>

  )
}

export default Save;