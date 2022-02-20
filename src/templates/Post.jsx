import React from 'react';

const Post = ({ pageContext }) => {
  console.log('pageContext.post.content', pageContext.post.content);
  return <div>{pageContext?.post?.title}</div>;
};

export default Post;
