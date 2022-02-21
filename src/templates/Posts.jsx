import { formatDistanceToNow } from 'date-fns';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PageLayout = styled.main`
  color: #232129;
  padding: 4rem;
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

const TitleBox = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-size: 2.8rem;
  }
  .sub-title {
    font-size: 1.6rem;
    color: #663399;
  }
`;

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
  console.log('posts', posts);
  return (
    <PageLayout>
      <TitleBox>
        <h1>Rage Reports 🔬🧪🔬 </h1>
        <h2 className='sub-title'>R&D, Hacks, and Rage Driven Development</h2>
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
