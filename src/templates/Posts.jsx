import { Link } from 'gatsby';
import React from 'react';

const Posts = ({ pageContext }) => {
  const { posts } = pageContext;
 
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.key}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
