import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PageLayout = styled.main`
  color: #232129;
  padding: 6rem;
  font-family: '-apple-system, Roboto, sans-serif, serif';
  .post-link {
    color: #727bd1;
    font-weight: bold;
    font-size: 20px;
    /* vertical-align: 5%; */
  }
  .list-item {
    font-weight: 300px;
    max-width: 560px;
    margin-bottom: 30px;
  }
`;

const Posts = ({ pageContext }) => {
  const { posts } = pageContext;
  return (
    <PageLayout>
      <ul>
        {posts?.map((post) => (
          <li className='list-item' key={post.id}>
            <Link className='post-link' to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default Posts;

const PostsListing = () => {};

const PostListItem = () => {};
