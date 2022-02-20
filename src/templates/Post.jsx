import React from 'react'

const Post = ({pageContext}) => {

  return (
    <div>{pageContext?.post?.title}</div>
  )
}

export default Post