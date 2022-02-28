import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { PageLayout, TitleBox } from '../staticElements';

const Post = ({ pageContext }) => {
  return (
    <PageLayout>
      <TitleBox>
        <h1>{pageContext?.post?.title}</h1>
        <hr />
        <MDEditor.Markdown source={pageContext?.post?.content} />
      </TitleBox>
    </PageLayout>
  );
};

export default Post;
