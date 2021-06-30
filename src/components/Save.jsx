function Save(props) {
  const savedPost = props.posts.filter((post)=> post.saved === true)
  console.log(savedPost)

  return (
    <div>
      {savedPost.map((post)=> (
        <h1 className="name">{post.fields.name}</h1>
      ))}
    </div>

  )
}

export default Save;