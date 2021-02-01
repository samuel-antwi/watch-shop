import { gql } from 'graphql-request';

export const ALL_WATCHES = gql`
  query queryAllWatches($slug: String!, $pageSize: Int!) {
    __typename
    productsConnection(first: $pageSize, where: { category: { slug: $slug } }) {
      edges {
        cursor
        node {
          id
          name
          price
          images {
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
    }
  }
`;
