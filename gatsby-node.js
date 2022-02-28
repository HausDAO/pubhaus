const path = require(`path`);

const { gql } = require('apollo-boost');
const ApolloClient = require('apollo-boost').default;
const fetch = require('cross-fetch');
const { getDocContent } = require('./utils');

const GRAPH_URI =
  'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-poster-rinkeby';
const MOLOCH_ADDRESS = '0x9fc4eff9db153a17e92d9213c52c6af97409ce01';
const pubQuery = gql`
  query contents($molochAddress: String!) {
    contents(
      where: { molochAddress: $molochAddress }
      first: 1000
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      createdAt
      transactionHash
      title
      molochAddress
      memberAddress
      content
      contentType
      location
      ratified
      description
    }
  }
`;

const createClient = (uri) => {
  return new ApolloClient({ uri, fetch });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const client = createClient(GRAPH_URI);
  const results = await client.query({
    query: pubQuery,
    variables: {
      molochAddress: MOLOCH_ADDRESS,
    },
  });

  const postsPage = path.resolve('./src/templates/Posts.jsx');
  const singlePostPage = path.resolve('./src/templates/Post.jsx');
  const rawDocs = results?.data?.contents;
  const posts = await Promise.all(
    rawDocs.map(async (doc) => await getDocContent(doc)),
  );
  if (posts) {
    createPage({ path: `posts`, component: postsPage, context: { posts } });
    posts.forEach((post) => {
      createPage({
        path: `post/${post.id}`,
        component: singlePostPage,
        context: {
          post,
        },
      });
    });
  }
};
