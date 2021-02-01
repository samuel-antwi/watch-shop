import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_MUTATION_TOKEN}`,
  },
});

export default graphcms;
