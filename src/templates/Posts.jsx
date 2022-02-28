import { formatDistanceToNow } from 'date-fns';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { PageLayout, TitleBox } from '../staticElements';

const StyledListItem = styled.li`
  p {
    font-size: 1.2rem;
  }
  .date-text {
    font-style: italic;
  }
`;

const Posts = ({ pageContext }) => {
  const { posts } = pageContext;

  return (
    <PageLayout>
      <TitleBox>
        <h1>DAO PUB LABS 🔬🧪🔬 </h1>
        <h2 className='sub-title'>Postin' and Boastin'</h2>
      </TitleBox>
      <ul>
        {posts?.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </PageLayout>
  );
};

export default Posts;

const PostListItem = ({ post }) => (
  <StyledListItem className='list-item' key={post.id}>
    <Link className='post-link' to={`/post/${post.id}`}>
      {post.title}
    </Link>
    <p>
      Description goes here once we add in the graph field. Should there be a
      metadata field where DAOs can store things like this, or should we enforce
      descriptions.{' '}
    </p>
    <span className='date-text'>
      Posted:{' '}
      {formatDistanceToNow(new Date(post.createdAt * 1000), {
        addSuffix: true,
      })}
    </span>
  </StyledListItem>
);
