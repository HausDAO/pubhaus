import styled from 'styled-components';

export const PageLayout = styled.main`
  color: #232129;
  padding: 4rem;
  font-family: '-apple-system, Roboto, sans-serif, serif';
  max-width: 48rem;
  .post-link {
    color: #727bd1;
    font-weight: bold;
    font-size: 20px;
  }
  .list-item {
    font-weight: 300px;
    max-width: 560px;
    margin-bottom: 30px;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-size: 2.8rem;
  }
  .sub-title {
    font-size: 1.6rem;
    color: #663399;
  }
`;
